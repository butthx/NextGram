// don't sale this source.
// this source is part from NextGram <https://github.com/butthx/NextGram>
// Copyright butthx <https://github.com/butthx>
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.

function Message(msg, api) {
  let res = {};
  for (let [key, value] of Object.entries(msg)) {
    MakePrivate(res, key, value);
  }
  let Prototype = {
    reply: (text, more) => {
      return api.send_message(res.chat.id, text, {
        reply_to_message_id: res.message_id,
        ...more,
      });
    },
    reply_with_html: (text, more) => {
      return api.send_message(res.chat.id, text, {
        reply_to_message_id: res.message_id,
        parse_mode: 'HTML',
        ...more,
      });
    },
    reply_with_markdown: (text, more) => {
      return api.send_message(res.chat.id, text, {
        reply_to_message_id: res.message_id,
        parse_mode: 'markdown',
        ...more,
      });
    },
  };
  Object.setPrototypeOf(res, Prototype);
  if (res.reply_to_message) {
    res.reply_to_message = Message(res.reply_to_message, api);
  }
  return res;
}
