<center><b>NextGram</b></center></br>
</br><i>This docs is auto generate</i></br>

<i>Create At Fri, 07 Jan 2022 07:42:50 GMT</i>   <i>Maybe some docs and funcion is broken.</i>  
## user\_login
<i>*ONLY FOR USERS*

Use this method to receive the authorization token to log in as user.

Note: You don't have your token yet, so the domain is just \{base\_url\}/userLogin

Returns an `AuthorizationState` with the user token on success.</i>   
```javascript
 ctx.telegram.user_login(phone_number)
```   
- phone\_number (<i>String</i>)   
<i>Your phone number to log in.</i>  
## auth\_code
<i>*ONLY FOR USERS*

Use this method in the authorization process to check your authentication code. Returns an `AuthorizationState` on success.</i>   
```javascript
 ctx.telegram.auth_code(code)
```   
- code (<i>Integer</i>)   
<i>The verification code received via SMS, Telegram message, phone call, or flash call.</i>  
## auth\_password
<i>*ONLY FOR USERS*

Use this method in the authorization process to check your 2\-factor\-authorization password for correctness. Returns an `AuthorizationState` on success.

*Never* send your password over a plain http connection. Make sure https is enabled or use this API locally.</i>   
```javascript
 ctx.telegram.auth_password(password)
```   
- password (<i>String</i>)   
<i>The password to check.</i>  
## register\_user
<i>*ONLY FOR USERS*

Use this method to register a new user account. Only works after sending the authcode if the user is not yet registered. Returns an `AuthorizationState` on success.

User registration is disabled by default. You can enable it with the `\-\-allow\-users\-registration` command line option or the env variable `TELEGRAM\_ALLOW\_USERS\_REGISTRATION` set to `1` when using docker.s</i>   
```javascript
 ctx.telegram.register_user(first_name,more)
```   
- first\_name (<i>String</i>)   
<i>The first name of the user; 1\-64 characters.</i>  
- more (<i>Object</i>)   
JSON Object of (last\_name)   
## optimize\_memory
<i>Calling `optimizeMemory` will remove old data from the in\-memory cache and give the freed memory back to the os. Returns *True* on success.</i>   
```javascript
 ctx.telegram.optimize_memory()
```   
## get\_message\_info
<i>Get information about a message. Returns a `Message` on success.</i>   
```javascript
 ctx.telegram.get_message_info(chat_id,message_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Message identifier in the chat specified in *from\\_chat\\_id*</i>  
## get\_chat\_members
<i>Use this method to get a list of members in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/\#chatmember) objects that contains information about all chat members. Administrator privileges may be required for some filters.

Telegram only returns up to 10,000 members per group using this method. If you want to get more members, you can try to fetch additional users with different `query` parameters</i>   
```javascript
 ctx.telegram.get_chat_members(chat_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- more (<i>Object</i>)   
JSON Object of (filter,query,offset,limit)   
## delete\_messages
<i>Delete all the messages with message\_id in range between start and end.
The start parameter MUST be less than the end parameter
Both start and end must be positive non zero numbers
The method will always return true as a result, even if the messages cannot be deleted
This method does not work on private chat or normal groups It is not suggested to delete more than 200 messages per call.

*NOTE*
The maximum number of messages to be deleted in a single batch is determined by the max\-batch\-operations parameter and is 10000 by default.</i>   
```javascript
 ctx.telegram.delete_messages(chat_id,start,end)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- start (<i>Integer</i>)   
<i>First message id to delete</i>  
- end (<i>Integer</i>)   
<i>Last message id to delete</i>  
## ping
<i>Send an MTProto ping message to the telegram servers. Useful to detect the delay of the bot api server. Returns the time in seconds as double\-precision floating\-point number.</i>   
```javascript
 ctx.telegram.ping()
```   
## get\_chats
<i>*ONLY FOR USERS*

Returns an ordered list of chats. For optimal performance the number of returned chats is chosen by the library.</i>   
```javascript
 ctx.telegram.get_chats(more)
```   
- more (<i>Object</i>)   
## get\_common\_chats
<i>*ONLY FOR USERS*

Returns list of chats you have in commen with the other user. Currently returns an Error because of a tdlight bug. For optimal performance the number of returned chats is chosen by the library.</i>   
```javascript
 ctx.telegram.get_common_chats(user_id,more)
```   
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- more (<i>Object</i>)   
JSON Object of (offset\_chat\_id)   
## get\_inactive\_chats
<i>*ONLY FOR USERS*

Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives CHANNELS\_TOO\_MUCH error.</i>   
```javascript
 ctx.telegram.get_inactive_chats()
```   
## get\_nearby\_chats
<i>*ONLY FOR USERS*

Returns a list of chats nearby the specified location. Telegram may send old results if you change your location too quick.</i>   
```javascript
 ctx.telegram.get_nearby_chats(latitude,longitude,more)
```   
- latitude (<i>Number</i>)   
<i>Latitude of the location</i>  
- longitude (<i>Number</i>)   
<i>Longitude of the location</i>  
- more (<i>Object</i>)   
JSON Object of (horizontal\_accuracy)   
## search\_public\_chats
<i>*ONLY FOR USERS*

Searches public chats by looking for specified query in their username and title. Currently only private chats, supergroups and channels can be public. Returns a meaningful number of results. Returns nothing if the length of the searched username prefix is less than 5. Excludes private chats with contacts and chats from the chat list from the results.</i>   
```javascript
 ctx.telegram.search_public_chats(query)
```   
- query (<i>String</i>)   
<i>Query to search for.</i>  
## set\_poll\_answer
<i>*ONLY FOR USERS*

Changes the user answer to a poll. A poll in quiz mode can be answered only once. Send an empty array of `option\_ids` to retract your vote.</i>   
```javascript
 ctx.telegram.set_poll_answer(chat_id,message_id,option_ids)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Identifier of the message containing the poll.</i>  
- option\_ids (<i>Array</i>)   
<i>0\-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll allows multiple answers.</i>  
## join\_chat
<i>*ONLY FOR USERS*

Adds current user as a new member to a chat. Private and secret chats can't be joined using this method. Join either by chat\_id or by invite\_link

Returns `True` on success.</i>   
```javascript
 ctx.telegram.join_chat(more)
```   
- more (<i>Object</i>)   
## add\_chat\_member
<i>*ONLY FOR USERS*

Adds a new member to a chat. Members can't be added to private or secret chats.  Returns `true` on success.</i>   
```javascript
 ctx.telegram.add_chat_member(chat_id,user_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
## report\_chat
<i>*ONLY FOR USERS*

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if this is a private chats with a bot, a private chat with a user sharing their location, a supergroup, or a channel, since other chats can't be checked by moderators.</i>   
```javascript
 ctx.telegram.report_chat(chat_id,reason,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- reason (<i>String</i>)   
<i>The reason for reporting the chat. Can be one of `child\_abuse`, `copyright`, `pornography`, `spam`, `unrelated\_location`, `violence` or any custom string to send a custom reason</i>  
- more (<i>Object</i>)   
JSON Object of (message\_ids)   
## create\_chat
<i>*ONLY FOR USERS*

Creates a new group, supergroup or channel. Returns the newly created chat.</i>   
```javascript
 ctx.telegram.create_chat(title,type,more)
```   
- title (<i>String</i>)   
<i>Title of the new chat; 1\-128 characters.</i>  
- type (<i>String</i>)   
<i>Type of the new chat, must be any of `group`, `supergroup` or `channel`</i>  
- more (<i>Object</i>)   
JSON Object of (user\_ids,description)   
## search\_messages
<i>*ONLY FOR USERS*

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat\_id, message\_id)). For optimal performance the number of returned messages is chosen by the library.</i>   
```javascript
 ctx.telegram.search_messages(query,more)
```   
- query (<i>String</i>)   
<i>Query to search for.</i>  
- more (<i>Object</i>)   
JSON Object of (offset\_date,offset\_chat\_id,offset\_message\_id,filter)   
## search\_chat\_messages
<i>*ONLY FOR USERS*

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message\_id. For optimal performance the number of returned messages is chosen by the library.</i>   
```javascript
 ctx.telegram.search_chat_messages(chat_id,query,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- query (<i>String</i>)   
<i>Query to search for.</i>  
- more (<i>Object</i>)   
JSON Object of (from\_user\_id,from\_message\_id,filter)   
## get\_callback\_query\_answer
<i>*ONLY FOR USERS*

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires.</i>   
```javascript
 ctx.telegram.get_callback_query_answer(chat_id,message_id,callback_data)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Message identifier in the chat specified in *from\\_chat\\_id*</i>  
- callback\_data (<i>String</i>)   
<i>Data that was attached to the callback button.</i>  
## delete\_chat\_history
<i>*ONLY FOR USERS*

Deletes all messages in the chat. </i>   
```javascript
 ctx.telegram.delete_chat_history(chat_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (<i>Object</i>)   
JSON Object of (for\_everyone,remove\_from\_chat\_list)   
## get\_scheduled\_messages
<i>*ONLY FOR USERS*

Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order. Returns an array of `Message` on success.</i>   
```javascript
 ctx.telegram.get_scheduled_messages(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## edit\_message\_scheduling
<i>*ONLY FOR USERS*

Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed. Returns `true` on success.</i>   
```javascript
 ctx.telegram.edit_message_scheduling(chat_id,message_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Message identifier in the chat specified in *from\\_chat\\_id*. Message IDs for scheduled messages are negative.</i>  
- more (<i>Object</i>)   
JSON Object of (send\_at)   
## get\_proxies
<i>Returns all configured proxies. Requires no parameters.</i>   
```javascript
 ctx.telegram.get_proxies()
```   
## add\_proxy
<i>Adds a proxy.</i>   
```javascript
 ctx.telegram.add_proxy(server,port,type,more)
```   
- server (<i>String</i>)   
<i>Server hostname or IP address to reach the proxy server.</i>  
- port (<i>Integer</i>)   
<i>TCP port where the server is listening for incomming connections.</i>  
- type (<i>String</i>)   
<i>Type of proxy to be added. Must be either `mtproto`, `socks5` or `http`. MTProto proxies must provide a `secret` and Socks5/Http proxies can a `username` and `password`.</i>  
- more (<i>Object</i>)   
JSON Object of (username,password,secret,http\_only)   
## delete\_proxy
<i>Deletes a proxy.</i>   
```javascript
 ctx.telegram.delete_proxy(proxy_id)
```   
- proxy\_id (<i>Integer</i>)   
<i>The id that uniquely identifies that proxy server.</i>  
## enable\_proxy
<i>Enables the specified proxy. Takes immediate effect.</i>   
```javascript
 ctx.telegram.enable_proxy(proxy_id)
```   
- proxy\_id (<i>Integer</i>)   
<i>The id that uniquely identifies that proxy server.</i>  
## disable\_proxy
<i>Disables the specified proxy. Takes immediate effect.</i>   
```javascript
 ctx.telegram.disable_proxy(proxy_id)
```   
- proxy\_id (<i>Integer</i>)   
<i>The id that uniquely identifies that proxy server.</i>  
## get\_updates
<i>Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push\_technology\#Long\_polling)). An Array of [Update](https://core.telegram.org/bots/api/\#update) objects is returned.</i>   
```javascript
 ctx.telegram.get_updates(more)
```   
- more (<i>Object</i>)   
## set\_webhook
<i>Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON\-serialized [Update](https://core.telegram.org/bots/api/\#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.

If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us.</i>   
```javascript
 ctx.telegram.set_webhook(url,more)
```   
- url (<i>String</i>)   
<i>HTTPS url to send updates to. Use an empty string to remove webhook integration</i>  
- more (<i>Object</i>)   
JSON Object of (certificate,ip\_address,max\_connections,allowed\_updates,drop\_pending\_updates)   
## delete\_webhook
<i>Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/\#getupdates). Returns *True* on success.</i>   
```javascript
 ctx.telegram.delete_webhook(more)
```   
- more (<i>Object</i>)   
## get\_webhook\_info
<i>Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/\#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/\#getupdates), will return an object with the *url* field empty.</i>   
```javascript
 ctx.telegram.get_webhook_info()
```   
## get\_me
<i>A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/\#user) object.</i>   
```javascript
 ctx.telegram.get_me()
```   
## log\_out
<i>Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters.</i>   
```javascript
 ctx.telegram.log_out()
```   
## close
<i>Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters.</i>   
```javascript
 ctx.telegram.close()
```   
## send\_message
<i>Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_message(chat_id,text,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- text (<i>String</i>)   
<i>Text of the message to be sent, 1\-4096 characters after entities parsing</i>  
- more (<i>Object</i>)   
JSON Object of (parse\_mode,entities,disable\_web\_page\_preview,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## forward\_message
<i>Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.forward_message(chat_id,from_chat_id,message_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- from\_chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Message identifier in the chat specified in *from\\_chat\\_id*</i>  
- more (<i>Object</i>)   
JSON Object of (disable\_notification,send\_at)   
## copy\_message
<i>Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/\#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/\#messageid) of the sent message on success.</i>   
```javascript
 ctx.telegram.copy_message(chat_id,from_chat_id,message_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- from\_chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Message identifier in the chat specified in *from\\_chat\\_id*</i>  
- more (<i>Object</i>)   
JSON Object of (caption,parse\_mode,caption\_entities,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_photo
<i>Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_photo(chat_id,photo,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- photo (<i>Object\|String</i>)   
_Photo to send. Pass a file\\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form\-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (caption,parse\_mode,caption\_entities,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_audio
<i>Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/\#sendvoice) method instead.</i>   
```javascript
 ctx.telegram.send_audio(chat_id,audio,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- audio (<i>Object\|String</i>)   
_Audio file to send. Pass a file\\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (caption,parse\_mode,caption\_entities,duration,performer,title,thumb,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_document
<i>Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future.</i>   
```javascript
 ctx.telegram.send_document(chat_id,document,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- document (<i>Object\|String</i>)   
_File to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (thumb,caption,parse\_mode,caption\_entities,disable\_content\_type\_detection,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_video
<i>Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/\#document)). On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future.</i>   
```javascript
 ctx.telegram.send_video(chat_id,video,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- video (<i>Object\|String</i>)   
_Video to send. Pass a file\\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (duration,width,height,thumb,caption,parse\_mode,caption\_entities,supports\_streaming,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_animation
<i>Use this method to send animation files (GIF or H.264/MPEG\-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future.</i>   
```javascript
 ctx.telegram.send_animation(chat_id,animation,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- animation (<i>Object\|String</i>)   
_Animation to send. Pass a file\\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (duration,width,height,thumb,caption,parse\_mode,caption\_entities,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_voice
<i>Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/\#audio) or [Document](https://core.telegram.org/bots/api/\#document)). On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future.</i>   
```javascript
 ctx.telegram.send_voice(chat_id,voice,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- voice (<i>Object\|String</i>)   
_Audio file to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (caption,parse\_mode,caption\_entities,duration,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_video\_note
<i>As of [v.4.0](https://telegram.org/blog/video\-messages\-and\-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_video_note(chat_id,video_note,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- video\_note (<i>Object\|String</i>)   
_Video note to send. Pass a file\\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files). Sending video notes by a URL is currently unsupported_  
- more (<i>Object</i>)   
JSON Object of (duration,length,thumb,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_media\_group
<i>Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/\#message) that were sent is returned.</i>   
```javascript
 ctx.telegram.send_media_group(chat_id,media,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- media (<i>Array</i>)   
<i>A JSON\-serialized array describing messages to be sent, must include 2\-10 items</i>  
- more (<i>Object</i>)   
JSON Object of (disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,send\_at)   
## send\_location
<i>Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_location(chat_id,latitude,longitude,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- latitude (<i>Number</i>)   
<i>Latitude of the location</i>  
- longitude (<i>Number</i>)   
<i>Longitude of the location</i>  
- more (<i>Object</i>)   
JSON Object of (horizontal\_accuracy,live\_period,heading,proximity\_alert\_radius,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## edit\_message\_live\_location
<i>Use this method to edit live location messages. A location can be edited until its *live\\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/\#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.edit_message_live_location(latitude,longitude,more)
```   
- latitude (<i>Number</i>)   
<i>Latitude of new location</i>  
- longitude (<i>Number</i>)   
<i>Longitude of new location</i>  
- more (<i>Object</i>)   
JSON Object of (chat\_id,message\_id,inline\_message\_id,horizontal\_accuracy,heading,proximity\_alert\_radius,reply\_markup)   
## stop\_message\_live\_location
<i>Use this method to stop updating a live location message before *live\\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.stop_message_live_location(more)
```   
- more (<i>Object</i>)   
## send\_venue
<i>Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_venue(chat_id,latitude,longitude,title,address,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- latitude (<i>Number</i>)   
<i>Latitude of the venue</i>  
- longitude (<i>Number</i>)   
<i>Longitude of the venue</i>  
- title (<i>String</i>)   
<i>Name of the venue</i>  
- address (<i>String</i>)   
<i>Address of the venue</i>  
- more (<i>Object</i>)   
JSON Object of (foursquare\_id,foursquare\_type,google\_place\_id,google\_place\_type,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_contact
<i>Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_contact(chat_id,phone_number,first_name,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- phone\_number (<i>String</i>)   
<i>Contact's phone number</i>  
- first\_name (<i>String</i>)   
<i>Contact's first name</i>  
- more (<i>Object</i>)   
JSON Object of (last\_name,vcard,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_poll
<i>Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_poll(chat_id,question,options,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- question (<i>String</i>)   
<i>Poll question, 1\-300 characters</i>  
- options (<i>Array</i>)   
<i>A JSON\-serialized list of answer options, 2\-10 strings 1\-100 characters each</i>  
- more (<i>Object</i>)   
JSON Object of (is\_anonymous,type,allows\_multiple\_answers,correct\_option\_id,explanation,explanation\_parse\_mode,explanation\_entities,open\_period,close\_date,is\_closed,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_dice
<i>Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_dice(chat_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (<i>Object</i>)   
JSON Object of (emoji,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## send\_chat\_action
<i>Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.

Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/\#sendchataction) with *action* \= *upload\\_photo*. The user will see a “sending photo” status for the bot.

We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive.</i>   
```javascript
 ctx.telegram.send_chat_action(chat_id,action)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- action (<i>String</i>)   
<i>Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/\#sendmessage), *upload\\_photo* for [photos](https://core.telegram.org/bots/api/\#sendphoto), *record\\_video* or *upload\\_video* for [videos](https://core.telegram.org/bots/api/\#sendvideo), *record\\_voice* or *upload\\_voice* for [voice notes](https://core.telegram.org/bots/api/\#sendvoice), *upload\\_document* for [general files](https://core.telegram.org/bots/api/\#senddocument), *find\\_location* for [location data](https://core.telegram.org/bots/api/\#sendlocation), *record\\_video\\_note* or *upload\\_video\\_note* for [video notes](https://core.telegram.org/bots/api/\#sendvideonote).</i>  
## get\_user\_profile\_photos
<i>Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/\#userprofilephotos) object.</i>   
```javascript
 ctx.telegram.get_user_profile_photos(user_id,more)
```   
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- more (<i>Object</i>)   
JSON Object of (offset,limit)   
## get\_file
<i>Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/\#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file\_path>`, where `<file\_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/\#getfile) again.</i>   
```javascript
 ctx.telegram.get_file(file_id)
```   
- file\_id (<i>String</i>)   
<i>File identifier to get info about</i>  
## kick\_chat\_member
<i>Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/\#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.kick_chat_member(chat_id,user_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- more (<i>Object</i>)   
JSON Object of (until\_date)   
## unban\_chat\_member
<i>Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\\_if\\_banned*. Returns *True* on success.</i>   
```javascript
 ctx.telegram.unban_chat_member(chat_id,user_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- more (<i>Object</i>)   
JSON Object of (only\_if\_banned)   
## restrict\_chat\_member
<i>Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success.</i>   
```javascript
 ctx.telegram.restrict_chat_member(chat_id,user_id,permissions,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- permissions (<i></i>)   
_ _  
- more (<i>Object</i>)   
JSON Object of (until\_date)   
## promote\_chat\_member
<i>Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success.</i>   
```javascript
 ctx.telegram.promote_chat_member(chat_id,user_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- more (<i>Object</i>)   
JSON Object of (is\_anonymous,can\_change\_info,can\_post\_messages,can\_edit\_messages,can\_delete\_messages,can\_invite\_users,can\_restrict\_members,can\_pin\_messages,can\_promote\_members)   
## set\_chat\_administrator\_custom\_title
<i>Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_administrator_custom_title(chat_id,user_id,custom_title)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
- custom\_title (<i>String</i>)   
<i>New custom title for the administrator; 0\-16 characters, emoji are not allowed</i>  
## set\_chat\_permissions
<i>Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\\_restrict\\_members* admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_permissions(chat_id,permissions)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- permissions (<i></i>)   
_ _  
## export\_chat\_invite\_link
<i>Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success.</i>   
```javascript
 ctx.telegram.export_chat_invite_link(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## set\_chat\_photo
<i>Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_photo(chat_id,photo)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- photo (<i></i>)   
_ _  
## delete\_chat\_photo
<i>Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.delete_chat_photo(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## set\_chat\_title
<i>Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_title(chat_id,title)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- title (<i>String</i>)   
<i>New chat title, 1\-255 characters</i>  
## set\_chat\_description
<i>Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_description(chat_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (<i>Object</i>)   
JSON Object of (description)   
## pin\_chat\_message
<i>Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.</i>   
```javascript
 ctx.telegram.pin_chat_message(chat_id,message_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Identifier of a message to pin</i>  
- more (<i>Object</i>)   
JSON Object of (disable\_notification)   
## unpin\_chat\_message
<i>Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.</i>   
```javascript
 ctx.telegram.unpin_chat_message(chat_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (<i>Object</i>)   
JSON Object of (message\_id)   
## unpin\_all\_chat\_messages
<i>Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\\_pin\\_messages' admin right in a supergroup or 'can\\_edit\\_messages' admin right in a channel. Returns *True* on success.</i>   
```javascript
 ctx.telegram.unpin_all_chat_messages(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## leave\_chat
<i>Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success.</i>   
```javascript
 ctx.telegram.leave_chat(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get\_chat
<i>Use this method to get up to date information about the chat (current name of the user for one\-on\-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/\#chat) object on success.</i>   
```javascript
 ctx.telegram.get_chat(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get\_chat\_administrators
<i>Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/\#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned.</i>   
```javascript
 ctx.telegram.get_chat_administrators(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get\_chat\_members\_count
<i>Use this method to get the number of members in a chat. Returns *Int* on success.</i>   
```javascript
 ctx.telegram.get_chat_members_count(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get\_chat\_member
<i>Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/\#chatmember) object on success.</i>   
```javascript
 ctx.telegram.get_chat_member(chat_id,user_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- user\_id (<i>Integer</i>)   
<i>Unique identifier of the target user</i>  
## set\_chat\_sticker\_set
<i>Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\\_set\\_sticker\\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/\#getchat) requests to check if the bot can use this method. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_chat_sticker_set(chat_id,sticker_set_name)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- sticker\_set\_name (<i>String</i>)   
<i>Name of the sticker set to be set as the group sticker set</i>  
## delete\_chat\_sticker\_set
<i>Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\\_set\\_sticker\\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/\#getchat) requests to check if the bot can use this method. Returns *True* on success.</i>   
```javascript
 ctx.telegram.delete_chat_sticker_set(chat_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
## answer\_callback\_query
<i>Use this method to send answers to callback queries sent from [inline keyboards](/bots\#inline\-keyboards\-and\-on\-the\-fly\-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your\_bot?start\=XXXX` that open your bot with a parameter.</i>   
```javascript
 ctx.telegram.answer_callback_query(callback_query_id,more)
```   
- callback\_query\_id (<i>String</i>)   
<i>Unique identifier for the query to be answered</i>  
- more (<i>Object</i>)   
JSON Object of (text,show\_alert,url,cache\_time)   
## set\_my\_commands
<i>Use this method to change the list of the bot's commands. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_my_commands(commands)
```   
- commands (<i>Array</i>)   
<i>A JSON\-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified.</i>  
## get\_my\_commands
<i>Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/\#botcommand) on success.</i>   
```javascript
 ctx.telegram.get_my_commands()
```   
## edit\_message\_text
<i>Use this method to edit text and [game](https://core.telegram.org/bots/api/\#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.edit_message_text(text,more)
```   
- text (<i>String</i>)   
<i>New text of the message, 1\-4096 characters after entities parsing</i>  
- more (<i>Object</i>)   
JSON Object of (chat\_id,message\_id,inline\_message\_id,parse\_mode,entities,disable\_web\_page\_preview,reply\_markup)   
## edit\_message\_caption
<i>Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.edit_message_caption(more)
```   
- more (<i>Object</i>)   
## edit\_message\_media
<i>Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.edit_message_media(media,more)
```   
- media (<i></i>)   
_ _  
- more (<i>Object</i>)   
JSON Object of (chat\_id,message\_id,inline\_message\_id,reply\_markup)   
## edit\_message\_reply\_markup
<i>Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/\#message) is returned, otherwise *True* is returned.</i>   
```javascript
 ctx.telegram.edit_message_reply_markup(more)
```   
- more (<i>Object</i>)   
## stop\_poll
<i>Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/\#poll) with the final results is returned.</i>   
```javascript
 ctx.telegram.stop_poll(chat_id,message_id,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Identifier of the original message with the poll</i>  
- more (<i>Object</i>)   
JSON Object of (reply\_markup)   
## delete\_message
<i>Use this method to delete a message, including service messages, with the following limitations:  
\\- A message can only be deleted if it was sent less than 48 hours ago.  
\\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  
\\- Bots can delete outgoing messages in private chats, groups, and supergroups.  
\\- Bots can delete incoming messages in private chats.  
\\- Bots granted *can\\_post\\_messages* permissions can delete outgoing messages in channels.  
\\- If the bot is an administrator of a group, it can delete any message there.  
\\- If the bot has *can\\_delete\\_messages* permission in a supergroup or a channel, it can delete any message there.  
Returns *True* on success.</i>   
```javascript
 ctx.telegram.delete_message(chat_id,message_id)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message\_id (<i>Integer</i>)   
<i>Identifier of the message to delete</i>  
## send\_sticker
<i>Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated\-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_sticker(chat_id,sticker,more)
```   
- chat\_id (<i>Integer\|String</i>)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- sticker (<i>Object\|String</i>)   
_Sticker to send. Pass a file\\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form\-data. [More info on Sending Files »](https://core.telegram.org/bots/api/\#sending\-files)_  
- more (<i>Object</i>)   
JSON Object of (disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup,send\_at)   
## get\_sticker\_set
<i>Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/\#stickerset) object is returned.</i>   
```javascript
 ctx.telegram.get_sticker_set(name)
```   
- name (<i>String</i>)   
<i>Name of the sticker set</i>  
## upload\_sticker\_file
<i>Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/\#file) on success.</i>   
```javascript
 ctx.telegram.upload_sticker_file(user_id,png_sticker)
```   
- user\_id (<i>Integer</i>)   
<i>User identifier of sticker file owner</i>  
- png\_sticker (<i></i>)   
_ _  
## create\_new\_sticker\_set
<i>Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\\_sticker* or *tgs\\_sticker*. Returns *True* on success.</i>   
```javascript
 ctx.telegram.create_new_sticker_set(user_id,name,title,emojis,more)
```   
- user\_id (<i>Integer</i>)   
<i>User identifier of created sticker set owner</i>  
- name (<i>String</i>)   
<i>Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\\_by\\_<bot username>”*. *<bot\\_username>* is case insensitive. 1\-64 characters.</i>  
- title (<i>String</i>)   
<i>Sticker set title, 1\-64 characters</i>  
- emojis (<i>String</i>)   
<i>One or more emoji corresponding to the sticker</i>  
- more (<i>Object</i>)   
JSON Object of (png\_sticker,tgs\_sticker,contains\_masks,mask\_position)   
## add\_sticker\_to\_set
<i>Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\\_sticker* or *tgs\\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success.</i>   
```javascript
 ctx.telegram.add_sticker_to_set(user_id,name,emojis,more)
```   
- user\_id (<i>Integer</i>)   
<i>User identifier of sticker set owner</i>  
- name (<i>String</i>)   
<i>Sticker set name</i>  
- emojis (<i>String</i>)   
<i>One or more emoji corresponding to the sticker</i>  
- more (<i>Object</i>)   
JSON Object of (png\_sticker,tgs\_sticker,mask\_position)   
## set\_sticker\_position\_in\_set
<i>Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_sticker_position_in_set(sticker,position)
```   
- sticker (<i>String</i>)   
<i>File identifier of the sticker</i>  
- position (<i>Integer</i>)   
<i>New sticker position in the set, zero\-based</i>  
## delete\_sticker\_from\_set
<i>Use this method to delete a sticker from a set created by the bot. Returns *True* on success.</i>   
```javascript
 ctx.telegram.delete_sticker_from_set(sticker)
```   
- sticker (<i>String</i>)   
<i>File identifier of the sticker</i>  
## set\_sticker\_set\_thumb
<i>Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success.</i>   
```javascript
 ctx.telegram.set_sticker_set_thumb(name,user_id,more)
```   
- name (<i>String</i>)   
<i>Sticker set name</i>  
- user\_id (<i>Integer</i>)   
<i>User identifier of the sticker set owner</i>  
- more (<i>Object</i>)   
JSON Object of (thumb)   
## answer\_inline\_query
<i>Use this method to send answers to an inline query. On success, *True* is returned.  
No more than **50** results per query are allowed.</i>   
```javascript
 ctx.telegram.answer_inline_query(inline_query_id,results,more)
```   
- inline\_query\_id (<i>String</i>)   
<i>Unique identifier for the answered query</i>  
- results (<i>Array</i>)   
<i>A JSON\-serialized array of results for the inline query</i>  
- more (<i>Object</i>)   
JSON Object of (cache\_time,is\_personal,next\_offset,switch\_pm\_text,switch\_pm\_parameter)   
## send\_invoice
<i>Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_invoice(chat_id,title,description,payload,provider_token,start_parameter,currency,prices,more)
```   
- chat\_id (<i>Integer</i>)   
<i>Unique identifier for the target private chat</i>  
- title (<i>String</i>)   
<i>Product name, 1\-32 characters</i>  
- description (<i>String</i>)   
<i>Product description, 1\-255 characters</i>  
- payload (<i>String</i>)   
<i>Bot\-defined invoice payload, 1\-128 bytes. This will not be displayed to the user, use for your internal processes.</i>  
- provider\_token (<i>String</i>)   
<i>Payments provider token, obtained via [Botfather](https://t.me/botfather)</i>  
- start\_parameter (<i>String</i>)   
<i>Unique deep\-linking parameter that can be used to generate this invoice when used as a start parameter</i>  
- currency (<i>String</i>)   
<i>Three\-letter ISO 4217 currency code, see [more on currencies](/bots/payments\#supported\-currencies)</i>  
- prices (<i>Array</i>)   
<i>Price breakdown, a JSON\-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)</i>  
- more (<i>Object</i>)   
JSON Object of (provider\_data,photo\_url,photo\_size,photo\_width,photo\_height,need\_name,need\_phone\_number,need\_email,need\_shipping\_address,send\_phone\_number\_to\_provider,send\_email\_to\_provider,is\_flexible,disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup)   
## answer\_shipping\_query
<i>If you sent an invoice requesting a shipping address and the parameter *is\\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/\#update) with a *shipping\\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned.</i>   
```javascript
 ctx.telegram.answer_shipping_query(shipping_query_id,ok,more)
```   
- shipping\_query\_id (<i>String</i>)   
<i>Unique identifier for the query to be answered</i>  
- ok (<i>Boolean</i>)   
<i>Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)</i>  
- more (<i>Object</i>)   
JSON Object of (shipping\_options,error\_message)   
## answer\_pre\_checkout\_query
<i>Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/\#update) with the field *pre\\_checkout\\_query*. Use this method to respond to such pre\-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre\-checkout query was sent.</i>   
```javascript
 ctx.telegram.answer_pre_checkout_query(pre_checkout_query_id,ok,more)
```   
- pre\_checkout\_query\_id (<i>String</i>)   
<i>Unique identifier for the query to be answered</i>  
- ok (<i>Boolean</i>)   
<i>Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems.</i>  
- more (<i>Object</i>)   
JSON Object of (error\_message)   
## set\_passport\_data\_errors
<i>Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re\-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues.</i>   
```javascript
 ctx.telegram.set_passport_data_errors(user_id,errors)
```   
- user\_id (<i>Integer</i>)   
<i>User identifier</i>  
- errors (<i>Array</i>)   
<i>A JSON\-serialized array describing the errors</i>  
## send\_game
<i>Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/\#message) is returned.</i>   
```javascript
 ctx.telegram.send_game(chat_id,game_short_name,more)
```   
- chat\_id (<i>Integer</i>)   
<i>Unique identifier for the target chat</i>  
- game\_short\_name (<i>String</i>)   
<i>Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather).</i>  
- more (<i>Object</i>)   
JSON Object of (disable\_notification,reply\_to\_message\_id,allow\_sending\_without\_reply,reply\_markup)   
## set\_game\_score
<i>Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/\#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*.</i>   
```javascript
 ctx.telegram.set_game_score(user_id,score,more)
```   
- user\_id (<i>Integer</i>)   
<i>User identifier</i>  
- score (<i>Integer</i>)   
<i>New score, must be non\-negative</i>  
- more (<i>Object</i>)   
JSON Object of (force,disable\_edit\_message,chat\_id,message\_id,inline\_message\_id)   
## get\_game\_high\_scores
<i>Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/\#gamehighscore) objects.

This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change.</i>   
```javascript
 ctx.telegram.get_game_high_scores(user_id,more)
```   
- user\_id (<i>Integer</i>)   
<i>Target user id</i>  
- more (<i>Object</i>)   
JSON Object of (chat\_id,message\_id,inline\_message\_id)   
## get\_memory\_stats
<i>Get the memory your bot is needing.</i>   
```javascript
 ctx.telegram.get_memory_stats()
```   