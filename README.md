# NextGram
NextGram is telegram userbot/bot library for google apps script.    
Library Id : `1nw1kzidJBX1DkYPFucpuEhX7nXIFcwWbq_TZ-3L4EOYrXiCSNxpl3FyN`
# Features 
- Encrypted token 
- Can use for userbot 
- Using telegram.rest 
- Support Composer middleware 
- Like MTProto 
- and anymore.
# Example use
```js 
const {Bot,Composer} = NextGram // import all modules. 
const bot = new Bot("your token here") // bot version 
// const bot = new Bot("your token here","user") // userbot version 

function doPost(e){ // don't run this function !!
  return bot.doPost(e) // handle the webhook update
}

function set_webhook(){
  return bot.set_webhook("url deploy here") // run this function after deploying.
}
bot.cmd("start",(ctx)=>{ //send /start message
  return ctx.telegram.send_message(ctx.messsage.chat.id,ctx)
})

```
_move to NextGram now!_
