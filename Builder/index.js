// don't sale this source.
// this source is part from NextGram <https://github.com/butthx/NextGram>
// Copyright butthx <https://github.com/butthx>
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
'use-strict';
const axios = require('axios');
const fs = require('fs');
(async () => {
  let url = 'https://telegram.rest/docs/telegram.rest.yaml';
  console.log(new Date().toLocaleTimeString(), '-', 'Fetching Schema');
  let res = await axios.get(url, {
    responseType: 'arraybuffer',
  });
  let buffer = res.data;
  console.log(new Date().toLocaleTimeString(), '-', 'Converting Schema');
  const camelToSnakeCase = (str) => str.replace(/[A-Z]/g, (letter) => `_${letter.toLowerCase()}`);
  let json = JSON.parse(buffer.toString('utf8'));
  let functionList = json.paths;
  let ctx = `// don't sale this source. \n// this source is part from NextGram <https://github.com/butthx/NextGram> \n// Copyright butthx <https://github.com/butthx> \n// NextGram is open source software. You can redistribute it and/or modify.\n// It under the terms of the MIT License as published.\n"use-strict";\n\n// This file is auto generate\n// Create At ${new Date().toUTCString()}\n\nclass Context {\n  constructor(update,api){\n    for(let [key,value] of Object.entries(update)){\n      switch(key){\n        case "message": \n        case "editedChannelPost": \n        case "editedMessage": \n        case "channelPost" : \n          MakePrivate(this,key,Message(value,api));\n         break;\n        case "callbackQuery": \n          MakePrivate(this,key,Message(value.message,api)); \n          break;\n        default : \n          MakePrivate(this,key,value);\n      }\n    } \n    MakePrivate(this,"telegram",api);\n  }\n  get msg(){\n    return (\n        this.message ??\n          this.editedMessage ??\n          this.callbackQuery?.message ??\n          this.channelPost ??\n          this.editedChannelPost\n    );\n  } \n  get from(){\n    return (\n        this.callbackQuery ??\n            this.inlineQuery ??\n            this.shippingQuery ??\n            this.preCheckoutQuery ??\n            this.chosenInlineResult ??\n            this.msg ??\n            this.myChatMember ??\n            this.chatMember\n    )?.from;\n  }\n  get chat() {\n      return (this.msg ?? this.myChatMember ?? this.chatMember)?.chat;\n  }\n  toJSON(...options){\n    let obj = {};\n    for(let [key,value] of Object.entries(this)){\n      if(key !== "telegram"){\n        obj[key] = value;\n      };\n    };\n    return JSON.stringify(obj,...options);\n  }\nasync reply(text,more){\nreturn this.send_message(text,more)}\nasync reply_with_html(text,more){\nreturn this.send_message(text,{parse_mode:"html",...more})}\nasync reply_with_markdown(text,more){\nreturn this.send_message(text,{parse_mode:"markdown",...more})}`;
  let text = `// don't sale this source. \n// this source is part from NextGram <https://github.com/butthx/NextGram> \n// Copyright butthx <https://github.com/butthx> \n// NextGram is open source software. You can redistribute it and/or modify. \n// It under the terms of the MIT License as published.\n\n// This file is auto generate\n// Create At ${new Date().toUTCString()}\n`;
  text += `\nclass Api {\n`;
  text += `constructor(token,loginAs){\n    MakePrivate(this,"token",encrypt(token));\n    MakePrivate(this,"loginAs",loginAs.toLowerCase());\n    if(this.loginAs == "bot"){\n      MakePrivate(this,"baseUrl","https://telegram.rest/bot");\n    } \n    if(this.loginAs ==  "user"){\n      MakePrivate(this,"baseUrl","https://telegram.rest/user");\n    }\n  }`;
  text +=
    '\n/**\n   * Sending request to telegram.rest\n   * @param {String} method - Method name which available on telegram.rest\n   * @param {Object} body - Body parameters for sending request to telegram.rest\n  */\n  async call_api(method,body={}){\n    let fetch = await UrlFetchApp.fetch(`${this.baseUrl}${decrypt(this.token)}/${method}`,{\n      method : "POST",\n      payload : body\n    });\n    let json = JSON.parse(fetch); \n    if(json.ok){\n      return new Context(json.result,this);\n    }\n  } ';
  let docs = `<center><b>NextGram</b></center></br>\n</br><i>This docs is auto generate</i></br>\n\n<i>Create At ${new Date().toUTCString()}</i>   `;
  docs += `<i>Maybe some docs and fun is broken.</i>  `;
  for (let props of Object.keys(functionList)) {
    let functionName = camelToSnakeCase(props.replace('/', ''));
    console.log(new Date().toLocaleTimeString(), '-', 'Create Docs and Function - ', functionName);
    docs += `\n## ${functionName}`;
    let desc = functionList[props]['post']['description'];
    docs += `\n<i>${desc}</i>   `;
    let requestBody = functionList[props]['post']['requestBody'];
    if (requestBody) {
      let content = requestBody['content'];
      if (content) {
        let k = Object.keys(content);
        if (k && k.length > 0) {
          let s = content[k[0]];
          if (s) {
            let schema = s['schema'];
            if (schema) {
              let required = schema['required'];
              let properties = schema['properties'];
              if (required && properties) {
                let m = Object.keys(properties);
                let more = m.length > required.length ? ',more' : '';
                let k = [];
                let cm = `\n/**\n*${desc.replace(/\n/gm, '\n*').replace(/\*\n/gm, '')}`;
                docs += `\n\`\`\`javascript\n ctx.telegram.${functionName}(${required.join(
                  ','
                )}${more})\n\`\`\`   `;
                required.forEach((el) => {
                  if (el == 'chat_id') {
                    k.push(`"${el}" : String(${el})`);
                  } else {
                    k.push(`"${el}" : ${el}`);
                  }
                  let type = properties[el]['type'] || properties[el]['anyOf'];
                  if (typeof type == 'string') {
                    type = type.replace(type[0], type[0].toUpperCase());
                    docs += `\n- ${el} (_${type}_)   `;
                    docs += `\n_${properties[el]['description'] || ' '}_  `;
                  } else {
                    let h = [];
                    if (Array.isArray(type)) {
                      type.forEach((q) => {
                        if (q.type) {
                          h.push(q.type.replace(q.type[0], q.type[0].toUpperCase()));
                        } else {
                          h.push('Object');
                        }
                      });
                    }
                    type = h.join('|');
                    docs += `\n- ${el} (_${type}_)   `;
                    docs += `\n_${properties[el]['description'] || ' '}_  `;
                  }
                  cm += `\n*@param {${type}} ${el} - ${properties[el]['description'] || ' '}`;
                });
                if (m.length > required.length) {
                  k.push('...more');
                  cm += `\n* @param {Object} more - ${functionName} more params`;
                  docs += `\n- more (_Object_)   `;
                  let gh = [];
                  m.forEach((el) => {
                    if (!required.includes(el)) {
                      gh.push(el);
                    }
                  });
                  docs += `\nJSON Object of (${gh.join(',')})   `;
                }
                cm += '\n*/';
                let bb = `if(typeof text !== "string"){      if(typeof text == "object"){        if(text instanceof Context){          text = text.toJSON(null,2)        }else if(text instanceof Bot){          text = {}        }else if(text instanceof Api){          text = {}        }else{          text = JSON.stringify(text,null,2)        }      }else{        text = String(text)      }    }`;
                let pp = ['send_message', 'edit_message_text'];
                if (required[0] == 'chat_id') {
                  let y = [...required];
                  y.splice(0, 1);
                  ctx += `\nasync ${functionName}(${y.join(
                    ','
                  )}${more}){\nif(this.chat){\nreturn this.telegram.${functionName}(this.chat.id,${y.join(
                    ','
                  )}${more})}\nreturn this.${functionName}}`
                    .replace('(,more', '(more')
                    .replace(',,more', 'more');
                } else {
                  ctx += `\nasync ${functionName}(${required.join(
                    ','
                  )}${more}){return this.telegram.${functionName}(${required.join(',')}${more})}`;
                }
                text += `\n${cm}\nasync ${functionName}(${required.join(',')}${more}){\n${
                  pp.includes(functionName) ? `${bb}\n` : ''
                }    return this.call_api("${props.replace('/', '')}",{\n${k.join(',\n')}\n});\n}`;
              } else {
                if (properties) {
                  let cm = `\n/**\n*${desc.replace(/\n/gm, '\n*').replace(/\*\n/gm, '')}`;
                  docs += `\n\`\`\`javascript\n ctx.telegram.${functionName}(more)\n\`\`\`   `;
                  cm += `\n* @param {Object} more - ${functionName} more params`;
                  docs += `\n- more (_Object_)   `;
                  cm += '\n*/';
                  ctx += `\nasync ${functionName}(more){\nreturn this.telegram.${functionName}(more)}`;
                  text += `\n${cm}\nasync ${functionName}(more){\n    return this.call_api("${props.replace(
                    '/',
                    ''
                  )}",more);\n}`;
                }
              }
            }
          }
        }
      }
    } else {
      let cm = `\n/**\n*${desc.replace(/\n/gm, '\n*').replace(/\*\n/gm, '')}`;
      docs += `\n\`\`\`javascript\n ctx.telegram.${functionName}()\n\`\`\`   `;
      cm += '\n*/';
      ctx += `\nasync ${functionName}(){\nreturn this.telegram.${functionName}()}`;
      text += `\n${cm}\nasync ${functionName}(){\n    return this.call_api("${props.replace(
        '/',
        ''
      )}");\n}`;
    }
  }
  text += `\n}`;
  ctx += `\n}`;
  console.log(new Date().toLocaleTimeString(), '-', 'Creating file');
  fs.writeFileSync('./Core/Api.js', text);
  fs.writeFileSync('./Docs.md', docs);
  fs.writeFileSync('./Core/Context.js', ctx);
  //console.log(text)
  console.log(new Date().toLocaleTimeString(), '-', 'Finish');
})();
