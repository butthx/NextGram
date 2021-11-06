// don't sale this source. 
// this source is part from NextGram <https://github.com/butthx/NextGram> 
// Copyright butthx <https://github.com/butthx> 
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
"use-strict";
function encrypt(token) {
  let publicKey = "dummy key"; 
  let cache = CacheService.getScriptCache()
  let key = randomString(15)
  let privateChiper =  new Crypto.Cipher(key,"AES"); 
  let chiper = new Crypto.Cipher(publicKey,"AES")
  cache.put("privateKey",Utilities.base64Encode(chiper.encrypt(key)))
  let encrypted = privateChiper.encrypt(token);
  return Utilities.base64Encode(encrypted);
}
function decrypt(base64){
  let publicKey = "dummy key"; 
  let cache = CacheService.getScriptCache();
  let privateBase64 = cache.get("privateKey");
  let privateDecode = Utilities.newBlob(Utilities.base64Decode(privateBase64)).getDataAsString();
  let privateChiper = Crypto.Cipher(publicKey,"AES");
  let key = privateChiper.decrypt(privateDecode); 
  let chiper = Crypto.Cipher(key,"AES")
  let decrypted = chiper.decrypt(Utilities.newBlob(Utilities.base64Decode(base64)).getDataAsString())
  return decrypted
}
function randomString(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-*:;/()#_=';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}
