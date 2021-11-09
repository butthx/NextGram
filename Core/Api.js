// don't sale this source.
// this source is part from NextGram <https://github.com/butthx/NextGram>
// Copyright butthx <https://github.com/butthx>
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.

// This file is auto generate
// Create At Tue, 09 Nov 2021 09:12:16 GMT

class Api {
  constructor(token, loginAs) {
    MakePrivate(this, 'token', encrypt(token));
    MakePrivate(this, 'loginAs', loginAs.toLowerCase());
    if (this.loginAs == 'bot') {
      MakePrivate(this, 'baseUrl', 'https://telegram.rest/bot');
    }
    if (this.loginAs == 'user') {
      MakePrivate(this, 'baseUrl', 'https://telegram.rest/user');
    }
  }
  /**
   * Sending request to telegram.rest
   * @param {String} method - Method name which available on telegram.rest
   * @param {Object} body - Body parameters for sending request to telegram.rest
   */
  async call_api(method, body = {}) {
    let fetch = await UrlFetchApp.fetch(`${this.baseUrl}${decrypt(this.token)}/${method}`, {
      method: 'POST',
      payload: body,
    });
    let json = JSON.parse(fetch);
    if (json.ok) {
      return new Context(json.result, this);
    }
  }

  /**
   **ONLY FOR USERS*Use this method to receive the authorization token to log in as user.
   *Note: You don't have your token yet, so the domain is just {base_url}/userLogin
   *Returns an `AuthorizationState` with the user token on success.
   *@param {String} phone_number - Your phone number to log in.
   */
  async user_login(phone_number) {
    return this.call_api('userLogin', {
      phone_number: phone_number,
    });
  }

  /**
   **ONLY FOR USERS*Use this method in the authorization process to check your authentication code. Returns an `AuthorizationState` on success.
   *@param {Integer} code - The verification code received via SMS, Telegram message, phone call, or flash call.
   */
  async auth_code(code) {
    return this.call_api('authCode', {
      code: code,
    });
  }

  /**
   **ONLY FOR USERS*Use this method in the authorization process to check your 2-factor-authorization password for correctness. Returns an `AuthorizationState` on success.
   **Never* send your password over a plain http connection. Make sure https is enabled or use this API locally.
   *@param {String} password - The password to check.
   */
  async auth_password(password) {
    return this.call_api('authPassword', {
      password: password,
    });
  }

  /**
   **ONLY FOR USERS*Use this method to register a new user account. Only works after sending the authcode if the user is not yet registered. Returns an `AuthorizationState` on success.
   *User registration is disabled by default. You can enable it with the `--allow-users-registration` command line option or the env variable `TELEGRAM_ALLOW_USERS_REGISTRATION` set to `1` when using docker.s
   *@param {String} first_name - The first name of the user; 1-64 characters.
   * @param {Object} more - register_user more params
   */
  async register_user(first_name, more) {
    return this.call_api('registerUser', {
      first_name: first_name,
      ...more,
    });
  }

  /**
   *Calling `optimizeMemory` will remove old data from the in-memory cache and give the freed memory back to the os. Returns *True* on success.
   */
  async optimize_memory() {
    return this.call_api('optimizeMemory');
  }

  /**
   *Get information about a message. Returns a `Message` on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Message identifier in the chat specified in *from\_chat\_id*
   */
  async get_message_info(chat_id, message_id) {
    return this.call_api('getMessageInfo', {
      chat_id: String(chat_id),
      message_id: message_id,
    });
  }

  /**
   *Use this method to get a list of members in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat members. Administrator privileges may be required for some filters.
   *Telegram only returns up to 10,000 members per group using this method. If you want to get more members, you can try to fetch additional users with different `query` parameters
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   * @param {Object} more - get_chat_members more params
   */
  async get_chat_members(chat_id, more) {
    return this.call_api('getChatMembers', {
      chat_id: String(chat_id),
      ...more,
    });
  }

  /**
   *Delete all the messages with message_id in range between start and end.
   *The start parameter MUST be less than the end parameter
   *Both start and end must be positive non zero numbers
   *The method will always return true as a result, even if the messages cannot be deleted
   *This method does not work on private chat or normal groups It is not suggested to delete more than 200 messages per call.
   **NOTE*The maximum number of messages to be deleted in a single batch is determined by the max-batch-operations parameter and is 10000 by default.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} start - First message id to delete
   *@param {Integer} end - Last message id to delete
   */
  async delete_messages(chat_id, start, end) {
    return this.call_api('deleteMessages', {
      chat_id: String(chat_id),
      start: start,
      end: end,
    });
  }

  /**
   *Send an MTProto ping message to the telegram servers. Useful to detect the delay of the bot api server. Returns the time in seconds as double-precision floating-point number.
   */
  async ping() {
    return this.call_api('ping');
  }

  /**
   **ONLY FOR USERS*Returns an ordered list of chats. For optimal performance the number of returned chats is chosen by the library.
   * @param {Object} more - get_chats more params
   */
  async get_chats(more) {
    return this.call_api('getChats', more);
  }

  /**
   **ONLY FOR USERS*Returns list of chats you have in commen with the other user. Currently returns an Error because of a tdlight bug. For optimal performance the number of returned chats is chosen by the library.
   *@param {Integer} user_id - Unique identifier of the target user
   * @param {Object} more - get_common_chats more params
   */
  async get_common_chats(user_id, more) {
    return this.call_api('getCommonChats', {
      user_id: user_id,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH error.
   */
  async get_inactive_chats() {
    return this.call_api('getInactiveChats');
  }

  /**
   **ONLY FOR USERS*Returns a list of chats nearby the specified location. Telegram may send old results if you change your location too quick.
   *@param {Number} latitude - Latitude of the location
   *@param {Number} longitude - Longitude of the location
   * @param {Object} more - get_nearby_chats more params
   */
  async get_nearby_chats(latitude, longitude, more) {
    return this.call_api('getNearbyChats', {
      latitude: latitude,
      longitude: longitude,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Searches public chats by looking for specified query in their username and title. Currently only private chats, supergroups and channels can be public. Returns a meaningful number of results. Returns nothing if the length of the searched username prefix is less than 5. Excludes private chats with contacts and chats from the chat list from the results.
   *@param {String} query - Query to search for.
   */
  async search_public_chats(query) {
    return this.call_api('searchPublicChats', {
      query: query,
    });
  }

  /**
   **ONLY FOR USERS*Changes the user answer to a poll. A poll in quiz mode can be answered only once. Send an empty array of `option_ids` to retract your vote.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Identifier of the message containing the poll.
   *@param {Array} option_ids - 0-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll allows multiple answers.
   */
  async set_poll_answer(chat_id, message_id, option_ids) {
    return this.call_api('setPollAnswer', {
      chat_id: String(chat_id),
      message_id: message_id,
      option_ids: option_ids,
    });
  }

  /**
   **ONLY FOR USERS*Adds current user as a new member to a chat. Private and secret chats can't be joined using this method. Join either by chat_id or by invite_link
   *Returns `True` on success.
   * @param {Object} more - join_chat more params
   */
  async join_chat(more) {
    return this.call_api('joinChat', more);
  }

  /**
   **ONLY FOR USERS*Adds a new member to a chat. Members can't be added to private or secret chats.  Returns `true` on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   */
  async add_chat_member(chat_id, user_id) {
    return this.call_api('addChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
    });
  }

  /**
   **ONLY FOR USERS*Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if this is a private chats with a bot, a private chat with a user sharing their location, a supergroup, or a channel, since other chats can't be checked by moderators.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   *@param {String} reason - The reason for reporting the chat. Can be one of `child_abuse`, `copyright`, `pornography`, `spam`, `unrelated_location`, `violence` or any custom string to send a custom reason
   * @param {Object} more - report_chat more params
   */
  async report_chat(chat_id, reason, more) {
    return this.call_api('reportChat', {
      chat_id: String(chat_id),
      reason: reason,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Creates a new group, supergroup or channel. Returns the newly created chat.
   *@param {String} title - Title of the new chat; 1-128 characters.
   *@param {String} type - Type of the new chat, must be any of `group`, `supergroup` or `channel`
   * @param {Object} more - create_chat more params
   */
  async create_chat(title, type, more) {
    return this.call_api('createChat', {
      title: title,
      type: type,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For optimal performance the number of returned messages is chosen by the library.
   *@param {String} query - Query to search for.
   * @param {Object} more - search_messages more params
   */
  async search_messages(query, more) {
    return this.call_api('searchMessages', {
      query: query,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. For optimal performance the number of returned messages is chosen by the library.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   *@param {String} query - Query to search for.
   * @param {Object} more - search_chat_messages more params
   */
  async search_chat_messages(chat_id, query, more) {
    return this.call_api('searchChatMessages', {
      chat_id: String(chat_id),
      query: query,
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Message identifier in the chat specified in *from\_chat\_id*
   *@param {String} callback_data - Data that was attached to the callback button.
   */
  async get_callback_query_answer(chat_id, message_id, callback_data) {
    return this.call_api('getCallbackQueryAnswer', {
      chat_id: String(chat_id),
      message_id: message_id,
      callback_data: callback_data,
    });
  }

  /**
   **ONLY FOR USERS*Deletes all messages in the chat.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   * @param {Object} more - delete_chat_history more params
   */
  async delete_chat_history(chat_id, more) {
    return this.call_api('deleteChatHistory', {
      chat_id: String(chat_id),
      ...more,
    });
  }

  /**
   **ONLY FOR USERS*Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order. Returns an array of `Message` on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  async get_scheduled_messages(chat_id) {
    return this.call_api('getScheduledMessages', {
      chat_id: String(chat_id),
    });
  }

  /**
   **ONLY FOR USERS*Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed. Returns `true` on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Message identifier in the chat specified in *from\_chat\_id*. Message IDs for scheduled messages are negative.
   * @param {Object} more - edit_message_scheduling more params
   */
  async edit_message_scheduling(chat_id, message_id, more) {
    return this.call_api('editMessageScheduling', {
      chat_id: String(chat_id),
      message_id: message_id,
      ...more,
    });
  }

  /**
   *Returns all configured proxies. Requires no parameters.
   */
  async get_proxies() {
    return this.call_api('getProxies');
  }

  /**
   *Adds a proxy.
   *@param {String} server - Server hostname or IP address to reach the proxy server.
   *@param {Integer} port - TCP port where the server is listening for incomming connections.
   *@param {String} type - Type of proxy to be added. Must be either `mtproto`, `socks5` or `http`. MTProto proxies must provide a `secret` and Socks5/Http proxies can a `username` and `password`.
   * @param {Object} more - add_proxy more params
   */
  async add_proxy(server, port, type, more) {
    return this.call_api('addProxy', {
      server: server,
      port: port,
      type: type,
      ...more,
    });
  }

  /**
   *Deletes a proxy.
   *@param {Integer} proxy_id - The id that uniquely identifies that proxy server.
   */
  async delete_proxy(proxy_id) {
    return this.call_api('deleteProxy', {
      proxy_id: proxy_id,
    });
  }

  /**
   *Enables the specified proxy. Takes immediate effect.
   *@param {Integer} proxy_id - The id that uniquely identifies that proxy server.
   */
  async enable_proxy(proxy_id) {
    return this.call_api('enableProxy', {
      proxy_id: proxy_id,
    });
  }

  /**
   *Disables the specified proxy. Takes immediate effect.
   *@param {Integer} proxy_id - The id that uniquely identifies that proxy server.
   */
  async disable_proxy(proxy_id) {
    return this.call_api('disableProxy', {
      proxy_id: proxy_id,
    });
  }

  /**
   *Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned.
   * @param {Object} more - get_updates more params
   */
  async get_updates(more) {
    return this.call_api('getUpdates', more);
  }

  /**
   *Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api/#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.
   *If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us.
   *@param {String} url - HTTPS url to send updates to. Use an empty string to remove webhook integration
   * @param {Object} more - set_webhook more params
   */
  async set_webhook(url, more) {
    return this.call_api('setWebhook', {
      url: url,
      ...more,
    });
  }

  /**
   *Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success.
   * @param {Object} more - delete_webhook more params
   */
  async delete_webhook(more) {
    return this.call_api('deleteWebhook', more);
  }

  /**
   *Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty.
   */
  async get_webhook_info() {
    return this.call_api('getWebhookInfo');
  }

  /**
   *A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object.
   */
  async get_me() {
    return this.call_api('getMe');
  }

  /**
   *Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.
   */
  async log_out() {
    return this.call_api('logOut');
  }

  /**
   *Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.
   */
  async close() {
    return this.call_api('close');
  }

  /**
   *Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {String} text - Text of the message to be sent, 1-4096 characters after entities parsing
   * @param {Object} more - send_message more params
   */
  async send_message(chat_id, text, more) {
    if (typeof text !== 'string') {
      if (typeof text == 'object') {
        if (text instanceof Context) {
          text = text.toJSON(null, 2);
        } else if (text instanceof Bot) {
          text = {};
        } else if (text instanceof Api) {
          text = {};
        } else {
          text = JSON.stringify(text, null, 2);
        }
      } else {
        text = String(text);
      }
    }
    return this.call_api('sendMessage', {
      chat_id: String(chat_id),
      text: text,
      ...more,
    });
  }

  /**
   *Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer|String} from_chat_id - Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
   *@param {Integer} message_id - Message identifier in the chat specified in *from\_chat\_id*
   * @param {Object} more - forward_message more params
   */
  async forward_message(chat_id, from_chat_id, message_id, more) {
    return this.call_api('forwardMessage', {
      chat_id: String(chat_id),
      from_chat_id: from_chat_id,
      message_id: message_id,
      ...more,
    });
  }

  /**
   *Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/#messageid) of the sent message on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer|String} from_chat_id - Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)
   *@param {Integer} message_id - Message identifier in the chat specified in *from\_chat\_id*
   * @param {Object} more - copy_message more params
   */
  async copy_message(chat_id, from_chat_id, message_id, more) {
    return this.call_api('copyMessage', {
      chat_id: String(chat_id),
      from_chat_id: from_chat_id,
      message_id: message_id,
      ...more,
    });
  }

  /**
   *Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} photo - Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_photo more params
   */
  async send_photo(chat_id, photo, more) {
    return this.call_api('sendPhoto', {
      chat_id: String(chat_id),
      photo: photo,
      ...more,
    });
  }

  /**
   *Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.
   *For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/#sendvoice) method instead.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} audio - Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_audio more params
   */
  async send_audio(chat_id, audio, more) {
    return this.call_api('sendAudio', {
      chat_id: String(chat_id),
      audio: audio,
      ...more,
    });
  }

  /**
   *Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} document - File to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_document more params
   */
  async send_document(chat_id, document, more) {
    return this.call_api('sendDocument', {
      chat_id: String(chat_id),
      document: document,
      ...more,
    });
  }

  /**
   *Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} video - Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_video more params
   */
  async send_video(chat_id, video, more) {
    return this.call_api('sendVideo', {
      chat_id: String(chat_id),
      video: video,
      ...more,
    });
  }

  /**
   *Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} animation - Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_animation more params
   */
  async send_animation(chat_id, animation, more) {
    return this.call_api('sendAnimation', {
      chat_id: String(chat_id),
      animation: animation,
      ...more,
    });
  }

  /**
   *Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/#audio) or [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} voice - Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_voice more params
   */
  async send_voice(chat_id, voice, more) {
    return this.call_api('sendVoice', {
      chat_id: String(chat_id),
      voice: voice,
      ...more,
    });
  }

  /**
   *As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} video_note - Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Sending video notes by a URL is currently unsupported
   * @param {Object} more - send_video_note more params
   */
  async send_video_note(chat_id, video_note, more) {
    return this.call_api('sendVideoNote', {
      chat_id: String(chat_id),
      video_note: video_note,
      ...more,
    });
  }

  /**
   *Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Array} media - A JSON-serialized array describing messages to be sent, must include 2-10 items
   * @param {Object} more - send_media_group more params
   */
  async send_media_group(chat_id, media, more) {
    return this.call_api('sendMediaGroup', {
      chat_id: String(chat_id),
      media: media,
      ...more,
    });
  }

  /**
   *Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Number} latitude - Latitude of the location
   *@param {Number} longitude - Longitude of the location
   * @param {Object} more - send_location more params
   */
  async send_location(chat_id, latitude, longitude, more) {
    return this.call_api('sendLocation', {
      chat_id: String(chat_id),
      latitude: latitude,
      longitude: longitude,
      ...more,
    });
  }

  /**
   *Use this method to edit live location messages. A location can be edited until its *live\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *@param {Number} latitude - Latitude of new location
   *@param {Number} longitude - Longitude of new location
   * @param {Object} more - edit_message_live_location more params
   */
  async edit_message_live_location(latitude, longitude, more) {
    return this.call_api('editMessageLiveLocation', {
      latitude: latitude,
      longitude: longitude,
      ...more,
    });
  }

  /**
   *Use this method to stop updating a live location message before *live\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   * @param {Object} more - stop_message_live_location more params
   */
  async stop_message_live_location(more) {
    return this.call_api('stopMessageLiveLocation', more);
  }

  /**
   *Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Number} latitude - Latitude of the venue
   *@param {Number} longitude - Longitude of the venue
   *@param {String} title - Name of the venue
   *@param {String} address - Address of the venue
   * @param {Object} more - send_venue more params
   */
  async send_venue(chat_id, latitude, longitude, title, address, more) {
    return this.call_api('sendVenue', {
      chat_id: String(chat_id),
      latitude: latitude,
      longitude: longitude,
      title: title,
      address: address,
      ...more,
    });
  }

  /**
   *Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {String} phone_number - Contact's phone number
   *@param {String} first_name - Contact's first name
   * @param {Object} more - send_contact more params
   */
  async send_contact(chat_id, phone_number, first_name, more) {
    return this.call_api('sendContact', {
      chat_id: String(chat_id),
      phone_number: phone_number,
      first_name: first_name,
      ...more,
    });
  }

  /**
   *Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {String} question - Poll question, 1-300 characters
   *@param {Array} options - A JSON-serialized list of answer options, 2-10 strings 1-100 characters each
   * @param {Object} more - send_poll more params
   */
  async send_poll(chat_id, question, options, more) {
    return this.call_api('sendPoll', {
      chat_id: String(chat_id),
      question: question,
      options: options,
      ...more,
    });
  }

  /**
   *Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   * @param {Object} more - send_dice more params
   */
  async send_dice(chat_id, more) {
    return this.call_api('sendDice', {
      chat_id: String(chat_id),
      ...more,
    });
  }

  /**
   *Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.
   *Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/#sendchataction) with *action* = *upload\_photo*. The user will see a “sending photo” status for the bot.
   *We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {String} action - Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\_video* or *upload\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\_voice* or *upload\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\_video\_note* or *upload\_video\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote).
   */
  async send_chat_action(chat_id, action) {
    return this.call_api('sendChatAction', {
      chat_id: String(chat_id),
      action: action,
    });
  }

  /**
   *Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object.
   *@param {Integer} user_id - Unique identifier of the target user
   * @param {Object} more - get_user_profile_photos more params
   */
  async get_user_profile_photos(user_id, more) {
    return this.call_api('getUserProfilePhotos', {
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again.
   *@param {String} file_id - File identifier to get info about
   */
  async get_file(file_id) {
    return this.call_api('getFile', {
      file_id: file_id,
    });
  }

  /**
   *Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   * @param {Object} more - kick_chat_member more params
   */
  async kick_chat_member(chat_id, user_id, more) {
    return this.call_api('kickChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\_if\_banned*. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)
   *@param {Integer} user_id - Unique identifier of the target user
   * @param {Object} more - unban_chat_member more params
   */
  async unban_chat_member(chat_id, user_id, more) {
    return this.call_api('unbanChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   *@param {} permissions -
   * @param {Object} more - restrict_chat_member more params
   */
  async restrict_chat_member(chat_id, user_id, permissions, more) {
    return this.call_api('restrictChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
      permissions: permissions,
      ...more,
    });
  }

  /**
   *Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   * @param {Object} more - promote_chat_member more params
   */
  async promote_chat_member(chat_id, user_id, more) {
    return this.call_api('promoteChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   *@param {String} custom_title - New custom title for the administrator; 0-16 characters, emoji are not allowed
   */
  async set_chat_administrator_custom_title(chat_id, user_id, custom_title) {
    return this.call_api('setChatAdministratorCustomTitle', {
      chat_id: String(chat_id),
      user_id: user_id,
      custom_title: custom_title,
    });
  }

  /**
   *Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   *@param {} permissions -
   */
  async set_chat_permissions(chat_id, permissions) {
    return this.call_api('setChatPermissions', {
      chat_id: String(chat_id),
      permissions: permissions,
    });
  }

  /**
   *Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  async export_chat_invite_link(chat_id) {
    return this.call_api('exportChatInviteLink', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {} photo -
   */
  async set_chat_photo(chat_id, photo) {
    return this.call_api('setChatPhoto', {
      chat_id: String(chat_id),
      photo: photo,
    });
  }

  /**
   *Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  async delete_chat_photo(chat_id) {
    return this.call_api('deleteChatPhoto', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {String} title - New chat title, 1-255 characters
   */
  async set_chat_title(chat_id, title) {
    return this.call_api('setChatTitle', {
      chat_id: String(chat_id),
      title: title,
    });
  }

  /**
   *Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   * @param {Object} more - set_chat_description more params
   */
  async set_chat_description(chat_id, more) {
    return this.call_api('setChatDescription', {
      chat_id: String(chat_id),
      ...more,
    });
  }

  /**
   *Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Identifier of a message to pin
   * @param {Object} more - pin_chat_message more params
   */
  async pin_chat_message(chat_id, message_id, more) {
    return this.call_api('pinChatMessage', {
      chat_id: String(chat_id),
      message_id: message_id,
      ...more,
    });
  }

  /**
   *Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   * @param {Object} more - unpin_chat_message more params
   */
  async unpin_chat_message(chat_id, more) {
    return this.call_api('unpinChatMessage', {
      chat_id: String(chat_id),
      ...more,
    });
  }

  /**
   *Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   */
  async unpin_all_chat_messages(chat_id) {
    return this.call_api('unpinAllChatMessages', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   */
  async leave_chat(chat_id) {
    return this.call_api('leaveChat', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   */
  async get_chat(chat_id) {
    return this.call_api('getChat', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   */
  async get_chat_administrators(chat_id) {
    return this.call_api('getChatAdministrators', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to get the number of members in a chat. Returns *Int* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   */
  async get_chat_members_count(chat_id) {
    return this.call_api('getChatMembersCount', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)
   *@param {Integer} user_id - Unique identifier of the target user
   */
  async get_chat_member(chat_id, user_id) {
    return this.call_api('getChatMember', {
      chat_id: String(chat_id),
      user_id: user_id,
    });
  }

  /**
   *Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   *@param {String} sticker_set_name - Name of the sticker set to be set as the group sticker set
   */
  async set_chat_sticker_set(chat_id, sticker_set_name) {
    return this.call_api('setChatStickerSet', {
      chat_id: String(chat_id),
      sticker_set_name: sticker_set_name,
    });
  }

  /**
   *Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)
   */
  async delete_chat_sticker_set(chat_id) {
    return this.call_api('deleteChatStickerSet', {
      chat_id: String(chat_id),
    });
  }

  /**
   *Use this method to send answers to callback queries sent from [inline keyboards](/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.
   *Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter.
   *@param {String} callback_query_id - Unique identifier for the query to be answered
   * @param {Object} more - answer_callback_query more params
   */
  async answer_callback_query(callback_query_id, more) {
    return this.call_api('answerCallbackQuery', {
      callback_query_id: callback_query_id,
      ...more,
    });
  }

  /**
   *Use this method to change the list of the bot's commands. Returns *True* on success.
   *@param {Array} commands - A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.
   */
  async set_my_commands(commands) {
    return this.call_api('setMyCommands', {
      commands: commands,
    });
  }

  /**
   *Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success.
   */
  async get_my_commands() {
    return this.call_api('getMyCommands');
  }

  /**
   *Use this method to edit text and [game](https://core.telegram.org/bots/api/#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *@param {String} text - New text of the message, 1-4096 characters after entities parsing
   * @param {Object} more - edit_message_text more params
   */
  async edit_message_text(text, more) {
    if (typeof text !== 'string') {
      if (typeof text == 'object') {
        if (text instanceof Context) {
          text = text.toJSON(null, 2);
        } else if (text instanceof Bot) {
          text = {};
        } else if (text instanceof Api) {
          text = {};
        } else {
          text = JSON.stringify(text, null, 2);
        }
      } else {
        text = String(text);
      }
    }
    return this.call_api('editMessageText', {
      text: text,
      ...more,
    });
  }

  /**
   *Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   * @param {Object} more - edit_message_caption more params
   */
  async edit_message_caption(more) {
    return this.call_api('editMessageCaption', more);
  }

  /**
   *Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   *@param {} media -
   * @param {Object} more - edit_message_media more params
   */
  async edit_message_media(media, more) {
    return this.call_api('editMessageMedia', {
      media: media,
      ...more,
    });
  }

  /**
   *Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned.
   * @param {Object} more - edit_message_reply_markup more params
   */
  async edit_message_reply_markup(more) {
    return this.call_api('editMessageReplyMarkup', more);
  }

  /**
   *Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Identifier of the original message with the poll
   * @param {Object} more - stop_poll more params
   */
  async stop_poll(chat_id, message_id, more) {
    return this.call_api('stopPoll', {
      chat_id: String(chat_id),
      message_id: message_id,
      ...more,
    });
  }

  /**
   *Use this method to delete a message, including service messages, with the following limitations:
   *\- A message can only be deleted if it was sent less than 48 hours ago.
   *\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.
   *\- Bots can delete outgoing messages in private chats, groups, and supergroups.
   *\- Bots can delete incoming messages in private chats.
   *\- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels.
   *\- If the bot is an administrator of a group, it can delete any message there.
   *\- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there.
   *Returns *True* on success.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Integer} message_id - Identifier of the message to delete
   */
  async delete_message(chat_id, message_id) {
    return this.call_api('deleteMessage', {
      chat_id: String(chat_id),
      message_id: message_id,
    });
  }

  /**
   *Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer|String} chat_id - Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)
   *@param {Object|String} sticker - Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)
   * @param {Object} more - send_sticker more params
   */
  async send_sticker(chat_id, sticker, more) {
    return this.call_api('sendSticker', {
      chat_id: String(chat_id),
      sticker: sticker,
      ...more,
    });
  }

  /**
   *Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned.
   *@param {String} name - Name of the sticker set
   */
  async get_sticker_set(name) {
    return this.call_api('getStickerSet', {
      name: name,
    });
  }

  /**
   *Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success.
   *@param {Integer} user_id - User identifier of sticker file owner
   *@param {} png_sticker -
   */
  async upload_sticker_file(user_id, png_sticker) {
    return this.call_api('uploadStickerFile', {
      user_id: user_id,
      png_sticker: png_sticker,
    });
  }

  /**
   *Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success.
   *@param {Integer} user_id - User identifier of created sticker set owner
   *@param {String} name - Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\_by\_<bot username>”*. *<bot\_username>* is case insensitive. 1-64 characters.
   *@param {String} title - Sticker set title, 1-64 characters
   *@param {String} emojis - One or more emoji corresponding to the sticker
   * @param {Object} more - create_new_sticker_set more params
   */
  async create_new_sticker_set(user_id, name, title, emojis, more) {
    return this.call_api('createNewStickerSet', {
      user_id: user_id,
      name: name,
      title: title,
      emojis: emojis,
      ...more,
    });
  }

  /**
   *Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.
   *@param {Integer} user_id - User identifier of sticker set owner
   *@param {String} name - Sticker set name
   *@param {String} emojis - One or more emoji corresponding to the sticker
   * @param {Object} more - add_sticker_to_set more params
   */
  async add_sticker_to_set(user_id, name, emojis, more) {
    return this.call_api('addStickerToSet', {
      user_id: user_id,
      name: name,
      emojis: emojis,
      ...more,
    });
  }

  /**
   *Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.
   *@param {String} sticker - File identifier of the sticker
   *@param {Integer} position - New sticker position in the set, zero-based
   */
  async set_sticker_position_in_set(sticker, position) {
    return this.call_api('setStickerPositionInSet', {
      sticker: sticker,
      position: position,
    });
  }

  /**
   *Use this method to delete a sticker from a set created by the bot. Returns *True* on success.
   *@param {String} sticker - File identifier of the sticker
   */
  async delete_sticker_from_set(sticker) {
    return this.call_api('deleteStickerFromSet', {
      sticker: sticker,
    });
  }

  /**
   *Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.
   *@param {String} name - Sticker set name
   *@param {Integer} user_id - User identifier of the sticker set owner
   * @param {Object} more - set_sticker_set_thumb more params
   */
  async set_sticker_set_thumb(name, user_id, more) {
    return this.call_api('setStickerSetThumb', {
      name: name,
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Use this method to send answers to an inline query. On success, *True* is returned.
   *No more than **50** results per query are allowed.
   *@param {String} inline_query_id - Unique identifier for the answered query
   *@param {Array} results - A JSON-serialized array of results for the inline query
   * @param {Object} more - answer_inline_query more params
   */
  async answer_inline_query(inline_query_id, results, more) {
    return this.call_api('answerInlineQuery', {
      inline_query_id: inline_query_id,
      results: results,
      ...more,
    });
  }

  /**
   *Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer} chat_id - Unique identifier for the target private chat
   *@param {String} title - Product name, 1-32 characters
   *@param {String} description - Product description, 1-255 characters
   *@param {String} payload - Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes.
   *@param {String} provider_token - Payments provider token, obtained via [Botfather](https://t.me/botfather)
   *@param {String} start_parameter - Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter
   *@param {String} currency - Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies)
   *@param {Array} prices - Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)
   * @param {Object} more - send_invoice more params
   */
  async send_invoice(
    chat_id,
    title,
    description,
    payload,
    provider_token,
    start_parameter,
    currency,
    prices,
    more
  ) {
    return this.call_api('sendInvoice', {
      chat_id: String(chat_id),
      title: title,
      description: description,
      payload: payload,
      provider_token: provider_token,
      start_parameter: start_parameter,
      currency: currency,
      prices: prices,
      ...more,
    });
  }

  /**
   *If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.
   *@param {String} shipping_query_id - Unique identifier for the query to be answered
   *@param {Boolean} ok - Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)
   * @param {Object} more - answer_shipping_query more params
   */
  async answer_shipping_query(shipping_query_id, ok, more) {
    return this.call_api('answerShippingQuery', {
      shipping_query_id: shipping_query_id,
      ok: ok,
      ...more,
    });
  }

  /**
   *Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent.
   *@param {String} pre_checkout_query_id - Unique identifier for the query to be answered
   *@param {Boolean} ok - Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems.
   * @param {Object} more - answer_pre_checkout_query more params
   */
  async answer_pre_checkout_query(pre_checkout_query_id, ok, more) {
    return this.call_api('answerPreCheckoutQuery', {
      pre_checkout_query_id: pre_checkout_query_id,
      ok: ok,
      ...more,
    });
  }

  /**
   *Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.
   *Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.
   *@param {Integer} user_id - User identifier
   *@param {Array} errors - A JSON-serialized array describing the errors
   */
  async set_passport_data_errors(user_id, errors) {
    return this.call_api('setPassportDataErrors', {
      user_id: user_id,
      errors: errors,
    });
  }

  /**
   *Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned.
   *@param {Integer} chat_id - Unique identifier for the target chat
   *@param {String} game_short_name - Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).
   * @param {Object} more - send_game more params
   */
  async send_game(chat_id, game_short_name, more) {
    return this.call_api('sendGame', {
      chat_id: String(chat_id),
      game_short_name: game_short_name,
      ...more,
    });
  }

  /**
   *Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*.
   *@param {Integer} user_id - User identifier
   *@param {Integer} score - New score, must be non-negative
   * @param {Object} more - set_game_score more params
   */
  async set_game_score(user_id, score, more) {
    return this.call_api('setGameScore', {
      user_id: user_id,
      score: score,
      ...more,
    });
  }

  /**
   *Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects.
   *This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.
   *@param {Integer} user_id - Target user id
   * @param {Object} more - get_game_high_scores more params
   */
  async get_game_high_scores(user_id, more) {
    return this.call_api('getGameHighScores', {
      user_id: user_id,
      ...more,
    });
  }

  /**
   *Get the memory your bot is needing.
   */
  async get_memory_stats() {
    return this.call_api('getMemoryStats');
  }
}
