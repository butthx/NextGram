// don't sale this source. 
// this source is part from NextGram <https://github.com/butthx/NextGram> 
// Copyright butthx <https://github.com/butthx> 
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
"use-strict";
function flatten(mw) {
  return typeof mw === "function"
      ? mw
      : (ctx, next) => mw.middleware()(ctx, next);
}
function concat(first, andThen) {
  return async (ctx, next) => {
      let nextCalled = false;
      await first(ctx, async () => {
          if (nextCalled)
              throw new Error("`next` already called before!");
          else
              nextCalled = true;
          await andThen(ctx, next);
      });
  };
}
function pass(_ctx, next) {
  return next();
}
const leaf = () => Promise.resolve();
function MakePrivate(obj,key,value){
  Object.defineProperty(obj,key,{
    value : value,
    enumerable: true,
    configurable: true,
    writable: false
  }); 
  return obj;
}
function triggerFn(trigger) {
  return toArray(trigger).map((t) => typeof t === "string"
      ? (txt) => (txt === t ? t : null)
      : (txt) => t.exec(txt));
}
function match(ctx, content, triggers) {
  for (const t of triggers) {
      const res = t(content);
      if (res) {
          ctx.match = res;
          return true;
      }
  }
  return false;
}
function toArray(e) {
  return Array.isArray(e) ? e : [e];
}
function objToArray(obj,dot="") {
  const result = []; 
  for (const prop in obj) {
    const value = obj[prop]; 
    if (typeof value === 'object') { 
      if(prop == "entities" || prop == "caption_entities" || prop == "photo"){
        for(let d of value){ 
          if(prop == "photo"){ 
            result.push(...objToArray(d,`${dot}${prop}:`.trim()));
          }else{
            result.push(`${dot}${prop}:${d.type}`);
          }
        }
      }else{
        result.push((dot+prop).trim());
        result.push(...objToArray(value,`${dot}${prop}:`.trim()));
      }
    } else {
      result.push((dot+prop).trim());
    }
  }
  return result;
}
async function run(middleware, ctx) {
    await middleware(ctx, leaf);
}
var Composer = class {
  constructor(...middleware){
    MakePrivate(this,"handler",(middleware.length === 0 ? pass: middleware.map(flatten).reduce(concat)));
    this.prefix = ".!/"
  } 
  middleware(){
    return this.handler;
  } 
  use(...middleware){
    const composer = new Composer(...middleware);
    let handler = this.handler;
    delete this.handler;
    MakePrivate(this,"handler",concat(handler,flatten(composer)));
    return composer;
  }
  on(filter,...middleware){
    return this.filter((ctx)=>{
      if(typeof ctx == "string" && typeof filter == "string"){ 
        if(ctx === filter) return true;
      }else if(typeof ctx === "object"){
        let filters = toArray(filter);  
        let u = JSON.parse(ctx.toJSON())
        let g = objToArray(u); 
        let h = []; 
        g.forEach((el)=>{
          if(!h.includes(el)) h.push(el);
        });
        for(let f of filters){ 
          return h.includes(f);
        }
      }
      return false;
    },...middleware);
  }
  filter(predicate, ...middleware) {
    const composer = new Composer(...middleware);
    this.branch(predicate, composer, pass);
    return composer;
  }
  drop(predicate, ...middleware) {
    return this.filter(async (ctx) => !(await predicate(ctx)), ...middleware);
  } 
  fork(...middleware) {
    const composer = new Composer(...middleware);
    const fork = flatten(composer);
    this.use((ctx, next) => Promise.all([next(), run(fork, ctx)]));
    return composer;
  } 
  lazy(middlewareFactory) {
    return this.use(async (ctx, next) => {
      const middleware = await middlewareFactory(ctx);
      const arr = toArray(middleware);
      await flatten(new Composer(...arr))(ctx, next);
    });
  } 
  route(router, routeHandlers, fallback = pass) {
    return this.lazy(async (ctx) => {
      var _a;
      const route = await router(ctx);
      return route === undefined ? [] : (_a = routeHandlers[route]) !== null && _a !== void 0 ? _a : fallback;
    });
  } 
  branch(predicate, trueMiddleware, falseMiddleware) {
    return this.lazy(async (ctx) => (await predicate(ctx)) ? trueMiddleware : falseMiddleware);
  }
  command(trigger,...middleware){
    let t = toArray(trigger); 
    return this.on(["message:text","message:caption"],(ctx)=>{
      t.forEach((cmd)=>{
        const {text,caption} = ctx.message;
        if(typeof cmd == "string"){
          let r = new RegExp(`^[${this.prefix}](${cmd})`,"");
          if(r.test((text||caption))){
            middleware.forEach((Fn)=>Fn(ctx));
          }
        } 
        if(cmd instanceof RegExp){
          if(cmd.test((text||caption))){
            middleware.forEach((Fn)=>Fn(ctx));
          }
        }
      });
    });
  }
  cmd(trigger,...middleware){
    return this.command(trigger,...middleware);
  } 
  hears(trigger,...middleware){
    let tgr = triggerFn(trigger);
    return this.on(["message:text","message:caption"],(ctx)=>{
      const {text,caption} = ctx.message;
      const txt = (text||caption);
      if(match(ctx,txt,tgr)){
        middleware.forEach(fn => fn(ctx));
      }
    });
  }
  hear(trigger,...middleware){
    return this.hears(trigger,...middleware);
  } 
};
