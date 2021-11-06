// don't sale this source. 
// this source is part from NextGram <https://github.com/butthx/NextGram> 
// Copyright butthx <https://github.com/butthx> 
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
"use-strict";
class Context {
  constructor(update,api){
    for(let [key,value] of Object.entries(update)){
      MakePrivate(this,key,value)
    } 
    MakePrivate(this,"telegram",api)
  }
  toJSON(...options){
    let obj = {};
    for(let [key,value] of Object.entries(this)){
      if(key !== "telegram"){
        obj[key] = value;
      };
    };
    return JSON.stringify(obj,...options);
  }
}
