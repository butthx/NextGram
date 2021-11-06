// don't sale this source. 
// this source is part from NextGram <https://github.com/butthx/NextGram> 
// Copyright butthx <https://github.com/butthx> 
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
"use-strict";
class Api {
  constructor(token,loginAs){
    MakePrivate(this,"token",encrypt(token));
    MakePrivate(this,"loginAs",loginAs.toLowerCase());
    if(this.loginAs == "bot"){
      MakePrivate(this,"baseUrl","https://telegram.rest/bot")
    } 
    if(this.loginAs ==  "user"){
      MakePrivate(this,"baseUrl","https://telegram.rest/user")
    }
  }
  async call_api(method,body={}){
    let fetch = await UrlFetchApp.fetch(`${this.baseUrl}${decrypt(this.token)}/${method}`,{
      method : "POST",
      payload : body
    });
    let json = JSON.parse(fetch); 
    if(json.ok){
      return new Context(json.result,this)
    }
  }
  async get_updates(parameters){
    return this.call_api("getUpdates",parameters)
  }
  async get_me(){
    return this.call_api("getMe")
  } 
  async logout(){
    return this.call_api("logOut")
  } 
  async close(){
    return this.call_api("close")
  } 
  async send_message(chat_id,text,more){
    if(typeof text !== "string"){
      if(typeof text == "object"){
        if(text instanceof Context){
          text = text.toJSON(null,2)
        }else if(text instanceof Bot){
          text = {}
        }else if(text instanceof Api){
          text = {}
        }else{
          text = JSON.stringify(text,null,2)
        }
      }else{
        text = String(text)
      }
    }
    return this.call_api("sendMessage",{
      chat_id : String(chat_id),
      text : text,
      ...more
    })
  } 
  async set_webhook(url,more){
    return this.call_api("setWebhook",{
      url : url,
      ...more
    })
  } 
  async delete_webhook(more){
    return this.call_api("deleteWebhook",more)
  } 
  async get_webhook_info(){
    return this.call_api("getWebhookInfo")
  }
}
