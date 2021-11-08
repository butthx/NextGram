// don't sale this source. 
// this source is part from NextGram <https://github.com/butthx/NextGram> 
// Copyright butthx <https://github.com/butthx> 
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
"use-strict"; 
const axios = require("axios"); 
const fs = require("fs"); 
(async ()=>{
  let url = "https://telegram.rest/docs/telegram.rest.yaml"; 
  console.log(new Date().toLocaleTimeString(),"-","Fetching Schema");
  let res = await axios.get(url,{
    responseType: 'arraybuffer',
  }); 
  let buffer = res.data;
  console.log(new Date().toLocaleTimeString(),"-","Converting Schema");
  const camelToSnakeCase = str => str.replace(/[A-Z]/g, letter => `_${letter.toLowerCase()}`);
  let json = JSON.parse(buffer.toString("utf8"));
  let functionList = json.paths; 
  let text = `// don't sale this source. \n// this source is part from NextGram <https://github.com/butthx/NextGram> \n// Copyright butthx <https://github.com/butthx> \n// NextGram is open source software. You can redistribute it and/or modify. \n// It under the terms of the MIT License as published.\n\n// This file is auto generate\n`; 
  text += `\nclass Api {\n`
  text += `constructor(token,loginAs){\n    MakePrivate(this,"token",encrypt(token));\n    MakePrivate(this,"loginAs",loginAs.toLowerCase());\n    if(this.loginAs == "bot"){\n      MakePrivate(this,"baseUrl","https://telegram.rest/bot");\n    } \n    if(this.loginAs ==  "user"){\n      MakePrivate(this,"baseUrl","https://telegram.rest/user");\n    }\n  }`;
  text += '\n/**\n   * Sending request to telegram.rest\n   * @param {String} method - Method name which available on telegram.rest\n   * @param {Object} body - Body parameters for sending request to telegram.rest\n  */\n  async call_api(method,body={}){\n    let fetch = await UrlFetchApp.fetch(\`${this.baseUrl}${decrypt(this.token)}/${method}\`,{\n      method : "POST",\n      payload : body\n    });\n    let json = JSON.parse(fetch); \n    if(json.ok){\n      return new Context(json.result,this);\n    }\n  } ';
  let docs = `<center><b>NextGram</b></center></br>\n---\n</br>_This docs is auto generate_</br>\n\n_Create At ${new Date().toUTCString()}_   `;
  for(let props of Object.keys(functionList)){
    let functionName = camelToSnakeCase(props.replace("/","")); 
    console.log(new Date().toLocaleTimeString(),"-","Create Docs and Function - ",functionName); 
    docs += `\n## ${functionName}`;
    let desc = functionList[props]["post"]["description"]; 
    docs += `\n_${desc}_   `
    let requestBody = functionList[props]["post"]["requestBody"]
    if(requestBody){
      let content = requestBody["content"]; 
      if(content){
        let k = Object.keys(content);
        if(k && k.length > 0){
          let s = content[k[0]]; 
          if(s){
            let schema = s["schema"]; 
            if(schema){
              let required = schema["required"] 
              let properties = schema["properties"] 
              if(required && properties){
                let m = Object.keys(properties)
                let more = m.length > required.length ? ",more" : ""
                let k = [] 
                let cm = `\n/**\n*${desc.replace(/\n/gm,"\n*")}` 
                docs += `\n\`\`\`javascript\n ctx.telegram.${functionName}(${required.join(",")}${more})\n\`\`\`   `
                required.forEach((el)=>{
                  k.push(`"${el}" : ${el}`); 
                  let type = properties[el]["type"] || properties[el]["anyOf"] 
                  if(typeof type == "string"){
                    type = type.replace(type[0],type[0].toUpperCase()); 
                    docs += `\n- ${el} (_${type}_)   `
                    docs += `\n_${properties[el]["description"] || " "}_  `;
                  }else{
                    let h = [];
                    if(Array.isArray(type)){
                      type.forEach((q)=>{ 
                        if(q.type){
                          h.push(q.type.replace(q.type[0],q.type[0].toUpperCase()));
                        }else{
                          h.push("Object");
                        }
                      });
                    }
                    type = h.join("|"); 
                    docs += `\n- ${el} (_${type}_)   `
                    docs += `\n_${properties[el]["description"] || " "}_  `;
                  }
                  cm += `\n*@param {${type}} ${el} - ${properties[el]["description"] || " "}`;
                });
                if(m.length > required.length){
                   k.push("...more");
                   cm += `\n* @param {Object} more - ${functionName} more params`;
                   docs += `\n- more (_Object_)   `;
                   let gh = []; 
                   m.forEach((el)=>{
                     if(!required.includes(el)){
                       gh.push(el);
                     }
                   });
                   docs += `\nJSON Object of (${gh.join(",")})   `;
                }
                cm += "\n*/"
                text += `\n${cm}\nasync ${functionName}(${required.join(",")}${more}){\n    return this.call_api("${props.replace("/","")}",{\n${k.join(",\n")}\n});\n}`;
              }
            }
          }
        }
      }
    }
  }
  text += `\n}`
  console.log(new Date().toLocaleTimeString(),"-","Creating file"); 
  fs.writeFileSync("./Core/Api.js",text);
  fs.writeFileSync("./Docs.md",docs);
  console.log(new Date().toLocaleTimeString(),"-","Finish");
})();