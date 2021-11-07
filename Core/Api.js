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
      MakePrivate(this,"baseUrl","https://telegram.rest/bot");
    } 
    if(this.loginAs ==  "user"){
      MakePrivate(this,"baseUrl","https://telegram.rest/user");
    }
  } 
  /**
   * Sending request to telegram.rest
   * @param {String} method - Method name which available on telegram.rest
   * @param {Object} body - Body parameters for sending request to telegram.rest
  */
  async call_api(method,body={}){
    let fetch = await UrlFetchApp.fetch(`${this.baseUrl}${decrypt(this.token)}/${method}`,{
      method : "POST",
      payload : body
    });
    let json = JSON.parse(fetch); 
    if(json.ok){
      return new Context(json.result,this);
    }
  } 
  /** 
   * Get the updates 
   * @param {Object} parameters - getUpdates parameters. it must be a JSON object.
  */
  async get_updates(parameters){
    return this.call_api("getUpdates",parameters);
  } 
  /**
   * Getting information about your self. 
  */
  async get_me(){
    return this.call_api("getMe");
  } 
  /**
   * Logout from api server.
  */
  async logout(){
    return this.call_api("logOut");
  } 
  /**
   * Close the bot instance befory moving to another server.
  */
  async close(){
    return this.call_api("close");
  } 
  /**
   * Sending message text 
   * @param {Number|String} chat_id - target to sending message. 
   * @param {String} text - message text 
   * @param {Object} more - More parameters for sending message. It must be a JSON object. 
  */
  async send_message(chat_id,text,more){
    if(typeof text !== "string"){
      if(typeof text == "object"){
        if(text instanceof Context){
          text = text.toJSON(null,2);
        }else if(text instanceof Bot){
          text = {};
        }else if(text instanceof Api){
          text = {};
        }else{
          text = JSON.stringify(text,null,2);
        }
      }else{
        text = String(text);
      }
    }
    return this.call_api("sendMessage",{
      chat_id : String(chat_id),
      text : text,
      ...more
    })
  } 
  /**
   * Setting a webhook 
   * @param {String} url - The url to setting webhook 
   * @param {Object} more - More parameters to setting webhook. It must be a JSON object.
  */
  async set_webhook(url,more){
    return this.call_api("setWebhook",{
      url : url,
      ...more
    });
  } 
  /**
   * Delete the webhook 
   * @param {Object} more - Delete webhook parameter. It must be a JSON object.
  */
  async delete_webhook(more){
    return this.call_api("deleteWebhook",more);
  } 
  /**
   * Getting the webhook info
  */
  async get_webhook_info(){
    return this.call_api("getWebhookInfo");
  }
  
}
