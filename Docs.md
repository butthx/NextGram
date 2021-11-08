<center><b>NextGram</b></center></br>
</br><i>This docs is auto generate</i></br>

_Create At Mon, 08 Nov 2021 07:33:09 GMT_   _Maybe some docs and function is broken._  
## user_login
_*ONLY FOR USERS*

Use this method to receive the authorization token to log in as user.

Note: You don't have your token yet, so the domain is just {base_url}/userLogin

Returns an `AuthorizationState` with the user token on success._   
```javascript
 ctx.telegram.user_login(phone_number)
```   
- phone_number (_String_)   
_Your phone number to log in._  
## auth_code
_*ONLY FOR USERS*

Use this method in the authorization process to check your authentication code. Returns an `AuthorizationState` on success._   
```javascript
 ctx.telegram.auth_code(code)
```   
- code (_Integer_)   
_The verification code received via SMS, Telegram message, phone call, or flash call._  
## auth_password
_*ONLY FOR USERS*

Use this method in the authorization process to check your 2-factor-authorization password for correctness. Returns an `AuthorizationState` on success.

*Never* send your password over a plain http connection. Make sure https is enabled or use this API locally._   
```javascript
 ctx.telegram.auth_password(password)
```   
- password (_String_)   
_The password to check._  
## register_user
_*ONLY FOR USERS*

Use this method to register a new user account. Only works after sending the authcode if the user is not yet registered. Returns an `AuthorizationState` on success.

User registration is disabled by default. You can enable it with the `--allow-users-registration` command line option or the env variable `TELEGRAM_ALLOW_USERS_REGISTRATION` set to `1` when using docker.s_   
```javascript
 ctx.telegram.register_user(first_name,more)
```   
- first_name (_String_)   
_The first name of the user; 1-64 characters._  
- more (_Object_)   
JSON Object of (last_name)   
## optimize_memory
_Calling `optimizeMemory` will remove old data from the in-memory cache and give the freed memory back to the os. Returns *True* on success._   
## get_message_info
_Get information about a message. Returns a `Message` on success._   
```javascript
 ctx.telegram.get_message_info(chat_id,message_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Message identifier in the chat specified in *from\_chat\_id*_  
## get_chat_members
_Use this method to get a list of members in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat members. Administrator privileges may be required for some filters.

Telegram only returns up to 10,000 members per group using this method. If you want to get more members, you can try to fetch additional users with different `query` parameters_   
```javascript
 ctx.telegram.get_chat_members(chat_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- more (_Object_)   
JSON Object of (filter,query,offset,limit)   
## delete_messages
_Delete all the messages with message_id in range between start and end.
The start parameter MUST be less than the end parameter
Both start and end must be positive non zero numbers
The method will always return true as a result, even if the messages cannot be deleted
This method does not work on private chat or normal groups It is not suggested to delete more than 200 messages per call.

*NOTE*
The maximum number of messages to be deleted in a single batch is determined by the max-batch-operations parameter and is 10000 by default._   
```javascript
 ctx.telegram.delete_messages(chat_id,start,end)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- start (_Integer_)   
_First message id to delete_  
- end (_Integer_)   
_Last message id to delete_  
## ping
_Send an MTProto ping message to the telegram servers. Useful to detect the delay of the bot api server. Returns the time in seconds as double-precision floating-point number._   
## get_chats
_*ONLY FOR USERS*

Returns an ordered list of chats. For optimal performance the number of returned chats is chosen by the library._   
## get_common_chats
_*ONLY FOR USERS*

Returns list of chats you have in commen with the other user. Currently returns an Error because of a tdlight bug. For optimal performance the number of returned chats is chosen by the library._   
```javascript
 ctx.telegram.get_common_chats(user_id,more)
```   
- user_id (_Integer_)   
_Unique identifier of the target user_  
- more (_Object_)   
JSON Object of (offset_chat_id)   
## get_inactive_chats
_*ONLY FOR USERS*

Returns a list of recently inactive supergroups and channels. Can be used when user reaches limit on the number of joined supergroups and channels and receives CHANNELS_TOO_MUCH error._   
## get_nearby_chats
_*ONLY FOR USERS*

Returns a list of chats nearby the specified location. Telegram may send old results if you change your location too quick._   
```javascript
 ctx.telegram.get_nearby_chats(latitude,longitude,more)
```   
- latitude (_Number_)   
_Latitude of the location_  
- longitude (_Number_)   
_Longitude of the location_  
- more (_Object_)   
JSON Object of (horizontal_accuracy)   
## search_public_chats
_*ONLY FOR USERS*

Searches public chats by looking for specified query in their username and title. Currently only private chats, supergroups and channels can be public. Returns a meaningful number of results. Returns nothing if the length of the searched username prefix is less than 5. Excludes private chats with contacts and chats from the chat list from the results._   
```javascript
 ctx.telegram.search_public_chats(query)
```   
- query (_String_)   
_Query to search for._  
## set_poll_answer
_*ONLY FOR USERS*

Changes the user answer to a poll. A poll in quiz mode can be answered only once. Send an empty array of `option_ids` to retract your vote._   
```javascript
 ctx.telegram.set_poll_answer(chat_id,message_id,option_ids)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Identifier of the message containing the poll._  
- option_ids (_Array_)   
_0-based identifiers of answer options, chosen by the user. User can choose more than 1 answer option only is the poll allows multiple answers._  
## join_chat
_*ONLY FOR USERS*

Adds current user as a new member to a chat. Private and secret chats can't be joined using this method. Join either by chat_id or by invite_link

Returns `True` on success._   
## add_chat_member
_*ONLY FOR USERS*

Adds a new member to a chat. Members can't be added to private or secret chats.  Returns `true` on success._   
```javascript
 ctx.telegram.add_chat_member(chat_id,user_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
## report_chat
_*ONLY FOR USERS*

Reports a chat to the Telegram moderators. A chat can be reported only from the chat action bar, or if this is a private chats with a bot, a private chat with a user sharing their location, a supergroup, or a channel, since other chats can't be checked by moderators._   
```javascript
 ctx.telegram.report_chat(chat_id,reason,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- reason (_String_)   
_The reason for reporting the chat. Can be one of `child_abuse`, `copyright`, `pornography`, `spam`, `unrelated_location`, `violence` or any custom string to send a custom reason_  
- more (_Object_)   
JSON Object of (message_ids)   
## create_chat
_*ONLY FOR USERS*

Creates a new group, supergroup or channel. Returns the newly created chat._   
```javascript
 ctx.telegram.create_chat(title,type,more)
```   
- title (_String_)   
_Title of the new chat; 1-128 characters._  
- type (_String_)   
_Type of the new chat, must be any of `group`, `supergroup` or `channel`_  
- more (_Object_)   
JSON Object of (user_ids,description)   
## search_messages
_*ONLY FOR USERS*

Searches for messages in all chats except secret chats. Returns the results in reverse chronological order (i.e., in order of decreasing (date, chat_id, message_id)). For optimal performance the number of returned messages is chosen by the library._   
```javascript
 ctx.telegram.search_messages(query,more)
```   
- query (_String_)   
_Query to search for._  
- more (_Object_)   
JSON Object of (offset_date,offset_chat_id,offset_message_id,filter)   
## search_chat_messages
_*ONLY FOR USERS*

Searches for messages with given words in the chat. Returns the results in reverse chronological order, i.e. in order of decreasing message_id. For optimal performance the number of returned messages is chosen by the library._   
```javascript
 ctx.telegram.search_chat_messages(chat_id,query,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- query (_String_)   
_Query to search for._  
- more (_Object_)   
JSON Object of (from_user_id,from_message_id,filter)   
## get_callback_query_answer
_*ONLY FOR USERS*

Sends a callback query to a bot and returns an answer. Returns an error with code 502 if the bot fails to answer the query before the query timeout expires._   
```javascript
 ctx.telegram.get_callback_query_answer(chat_id,message_id,callback_data)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Message identifier in the chat specified in *from\_chat\_id*_  
- callback_data (_String_)   
_Data that was attached to the callback button._  
## delete_chat_history
_*ONLY FOR USERS*

Deletes all messages in the chat. _   
```javascript
 ctx.telegram.delete_chat_history(chat_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (_Object_)   
JSON Object of (for_everyone,remove_from_chat_list)   
## get_scheduled_messages
_*ONLY FOR USERS*

Returns all scheduled messages in a chat. The messages are returned in a reverse chronological order. Returns an array of `Message` on success._   
```javascript
 ctx.telegram.get_scheduled_messages(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## edit_message_scheduling
_*ONLY FOR USERS*

Edits the time when a scheduled message will be sent. Scheduling state of all messages in the same album or forwarded together with the message will be also changed. Returns `true` on success._   
```javascript
 ctx.telegram.edit_message_scheduling(chat_id,message_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Message identifier in the chat specified in *from\_chat\_id*. Message IDs for scheduled messages are negative._  
- more (_Object_)   
JSON Object of (send_at)   
## get_proxies
_Returns all configured proxies. Requires no parameters._   
## add_proxy
_Adds a proxy._   
```javascript
 ctx.telegram.add_proxy(server,port,type,more)
```   
- server (_String_)   
_Server hostname or IP address to reach the proxy server._  
- port (_Integer_)   
_TCP port where the server is listening for incomming connections._  
- type (_String_)   
_Type of proxy to be added. Must be either `mtproto`, `socks5` or `http`. MTProto proxies must provide a `secret` and Socks5/Http proxies can a `username` and `password`._  
- more (_Object_)   
JSON Object of (username,password,secret,http_only)   
## delete_proxy
_Deletes a proxy._   
```javascript
 ctx.telegram.delete_proxy(proxy_id)
```   
- proxy_id (_Integer_)   
_The id that uniquely identifies that proxy server._  
## enable_proxy
_Enables the specified proxy. Takes immediate effect._   
```javascript
 ctx.telegram.enable_proxy(proxy_id)
```   
- proxy_id (_Integer_)   
_The id that uniquely identifies that proxy server._  
## disable_proxy
_Disables the specified proxy. Takes immediate effect._   
```javascript
 ctx.telegram.disable_proxy(proxy_id)
```   
- proxy_id (_Integer_)   
_The id that uniquely identifies that proxy server._  
## get_updates
_Use this method to receive incoming updates using long polling ([wiki](https://en.wikipedia.org/wiki/Push_technology#Long_polling)). An Array of [Update](https://core.telegram.org/bots/api/#update) objects is returned._   
## set_webhook
_Use this method to specify a url and receive incoming updates via an outgoing webhook. Whenever there is an update for the bot, we will send an HTTPS POST request to the specified url, containing a JSON-serialized [Update](https://core.telegram.org/bots/api/#update). In case of an unsuccessful request, we will give up after a reasonable amount of attempts. Returns *True* on success.

If you'd like to make sure that the Webhook request comes from Telegram, we recommend using a secret path in the URL, e.g. `https://www.example.com/<token>`. Since nobody else knows your bot's token, you can be pretty sure it's us._   
```javascript
 ctx.telegram.set_webhook(url,more)
```   
- url (_String_)   
_HTTPS url to send updates to. Use an empty string to remove webhook integration_  
- more (_Object_)   
JSON Object of (certificate,ip_address,max_connections,allowed_updates,drop_pending_updates)   
## delete_webhook
_Use this method to remove webhook integration if you decide to switch back to [getUpdates](https://core.telegram.org/bots/api/#getupdates). Returns *True* on success._   
## get_webhook_info
_Use this method to get current webhook status. Requires no parameters. On success, returns a [WebhookInfo](https://core.telegram.org/bots/api/#webhookinfo) object. If the bot is using [getUpdates](https://core.telegram.org/bots/api/#getupdates), will return an object with the *url* field empty._   
## get_me
_A simple method for testing your bot's auth token. Requires no parameters. Returns basic information about the bot in form of a [User](https://core.telegram.org/bots/api/#user) object._   
## log_out
_Use this method to log out from the cloud Bot API server before launching the bot locally. You **must** log out the bot before running it locally, otherwise there is no guarantee that the bot will receive updates. After a successful call, you can immediately log in on a local server, but will not be able to log in back to the cloud Bot API server for 10 minutes. Returns *True* on success. Requires no parameters._   
## close
_Use this method to close the bot instance before moving it from one local server to another. You need to delete the webhook before calling this method to ensure that the bot isn't launched again after server restart. The method will return error 429 in the first 10 minutes after the bot is launched. Returns *True* on success. Requires no parameters._   
## send_message
_Use this method to send text messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_message(chat_id,text,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- text (_String_)   
_Text of the message to be sent, 1-4096 characters after entities parsing_  
- more (_Object_)   
JSON Object of (parse_mode,entities,disable_web_page_preview,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## forward_message
_Use this method to forward messages of any kind. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.forward_message(chat_id,from_chat_id,message_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- from_chat_id (_Integer|String_)   
_Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)_  
- message_id (_Integer_)   
_Message identifier in the chat specified in *from\_chat\_id*_  
- more (_Object_)   
JSON Object of (disable_notification,send_at)   
## copy_message
_Use this method to copy messages of any kind. The method is analogous to the method [forwardMessages](https://core.telegram.org/bots/api/#forwardmessages), but the copied message doesn't have a link to the original message. Returns the [MessageId](https://core.telegram.org/bots/api/#messageid) of the sent message on success._   
```javascript
 ctx.telegram.copy_message(chat_id,from_chat_id,message_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- from_chat_id (_Integer|String_)   
_Unique identifier for the chat where the original message was sent (or channel username in the format `@channelusername`)_  
- message_id (_Integer_)   
_Message identifier in the chat specified in *from\_chat\_id*_  
- more (_Object_)   
JSON Object of (caption,parse_mode,caption_entities,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_photo
_Use this method to send photos. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_photo(chat_id,photo,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- photo (_Object|String_)   
_Photo to send. Pass a file\_id as String to send a photo that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a photo from the Internet, or upload a new photo using multipart/form-data. The photo must be at most 10 MB in size. The photo's width and height must not exceed 10000 in total. Width and height ratio must be at most 20. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (caption,parse_mode,caption_entities,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_audio
_Use this method to send audio files, if you want Telegram clients to display them in the music player. Your audio must be in the .MP3 or .M4A format. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send audio files of up to 50 MB in size, this limit may be changed in the future.

For sending voice messages, use the [sendVoice](https://core.telegram.org/bots/api/#sendvoice) method instead._   
```javascript
 ctx.telegram.send_audio(chat_id,audio,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- audio (_Object|String_)   
_Audio file to send. Pass a file\_id as String to send an audio file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an audio file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (caption,parse_mode,caption_entities,duration,performer,title,thumb,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_document
_Use this method to send general files. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send files of any type of up to 50 MB in size, this limit may be changed in the future._   
```javascript
 ctx.telegram.send_document(chat_id,document,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- document (_Object|String_)   
_File to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (thumb,caption,parse_mode,caption_entities,disable_content_type_detection,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_video
_Use this method to send video files, Telegram clients support mp4 videos (other formats may be sent as [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send video files of up to 50 MB in size, this limit may be changed in the future._   
```javascript
 ctx.telegram.send_video(chat_id,video,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- video (_Object|String_)   
_Video to send. Pass a file\_id as String to send a video that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a video from the Internet, or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (duration,width,height,thumb,caption,parse_mode,caption_entities,supports_streaming,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_animation
_Use this method to send animation files (GIF or H.264/MPEG-4 AVC video without sound). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send animation files of up to 50 MB in size, this limit may be changed in the future._   
```javascript
 ctx.telegram.send_animation(chat_id,animation,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- animation (_Object|String_)   
_Animation to send. Pass a file\_id as String to send an animation that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get an animation from the Internet, or upload a new animation using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (duration,width,height,thumb,caption,parse_mode,caption_entities,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_voice
_Use this method to send audio files, if you want Telegram clients to display the file as a playable voice message. For this to work, your audio must be in an .OGG file encoded with OPUS (other formats may be sent as [Audio](https://core.telegram.org/bots/api/#audio) or [Document](https://core.telegram.org/bots/api/#document)). On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned. Bots can currently send voice messages of up to 50 MB in size, this limit may be changed in the future._   
```javascript
 ctx.telegram.send_voice(chat_id,voice,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- voice (_Object|String_)   
_Audio file to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (caption,parse_mode,caption_entities,duration,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_video_note
_As of [v.4.0](https://telegram.org/blog/video-messages-and-telescope), Telegram clients support rounded square mp4 videos of up to 1 minute long. Use this method to send video messages. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_video_note(chat_id,video_note,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- video_note (_Object|String_)   
_Video note to send. Pass a file\_id as String to send a video note that exists on the Telegram servers (recommended) or upload a new video using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files). Sending video notes by a URL is currently unsupported_  
- more (_Object_)   
JSON Object of (duration,length,thumb,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_media_group
_Use this method to send a group of photos, videos, documents or audios as an album. Documents and audio files can be only grouped in an album with messages of the same type. On success, an array of [Messages](https://core.telegram.org/bots/api/#message) that were sent is returned._   
```javascript
 ctx.telegram.send_media_group(chat_id,media,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- media (_Array_)   
_A JSON-serialized array describing messages to be sent, must include 2-10 items_  
- more (_Object_)   
JSON Object of (disable_notification,reply_to_message_id,allow_sending_without_reply,send_at)   
## send_location
_Use this method to send point on the map. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_location(chat_id,latitude,longitude,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- latitude (_Number_)   
_Latitude of the location_  
- longitude (_Number_)   
_Longitude of the location_  
- more (_Object_)   
JSON Object of (horizontal_accuracy,live_period,heading,proximity_alert_radius,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## edit_message_live_location
_Use this method to edit live location messages. A location can be edited until its *live\_period* expires or editing is explicitly disabled by a call to [stopMessageLiveLocation](https://core.telegram.org/bots/api/#stopmessagelivelocation). On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
```javascript
 ctx.telegram.edit_message_live_location(latitude,longitude,more)
```   
- latitude (_Number_)   
_Latitude of new location_  
- longitude (_Number_)   
_Longitude of new location_  
- more (_Object_)   
JSON Object of (chat_id,message_id,inline_message_id,horizontal_accuracy,heading,proximity_alert_radius,reply_markup)   
## stop_message_live_location
_Use this method to stop updating a live location message before *live\_period* expires. On success, if the message was sent by the bot, the sent [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
## send_venue
_Use this method to send information about a venue. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_venue(chat_id,latitude,longitude,title,address,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- latitude (_Number_)   
_Latitude of the venue_  
- longitude (_Number_)   
_Longitude of the venue_  
- title (_String_)   
_Name of the venue_  
- address (_String_)   
_Address of the venue_  
- more (_Object_)   
JSON Object of (foursquare_id,foursquare_type,google_place_id,google_place_type,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_contact
_Use this method to send phone contacts. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_contact(chat_id,phone_number,first_name,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- phone_number (_String_)   
_Contact's phone number_  
- first_name (_String_)   
_Contact's first name_  
- more (_Object_)   
JSON Object of (last_name,vcard,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_poll
_Use this method to send a native poll. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_poll(chat_id,question,options,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- question (_String_)   
_Poll question, 1-300 characters_  
- options (_Array_)   
_A JSON-serialized list of answer options, 2-10 strings 1-100 characters each_  
- more (_Object_)   
JSON Object of (is_anonymous,type,allows_multiple_answers,correct_option_id,explanation,explanation_parse_mode,explanation_entities,open_period,close_date,is_closed,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_dice
_Use this method to send an animated emoji that will display a random value. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_dice(chat_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (_Object_)   
JSON Object of (emoji,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## send_chat_action
_Use this method when you need to tell the user that something is happening on the bot's side. The status is set for 5 seconds or less (when a message arrives from your bot, Telegram clients clear its typing status). Returns *True* on success.

Example: The [ImageBot](https://t.me/imagebot) needs some time to process a request and upload the image. Instead of sending a text message along the lines of “Retrieving image, please wait…”, the bot may use [sendChatAction](https://core.telegram.org/bots/api/#sendchataction) with *action* = *upload\_photo*. The user will see a “sending photo” status for the bot.

We only recommend using this method when a response from the bot will take a **noticeable** amount of time to arrive._   
```javascript
 ctx.telegram.send_chat_action(chat_id,action)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- action (_String_)   
_Type of action to broadcast. Choose one, depending on what the user is about to receive: *typing* for [text messages](https://core.telegram.org/bots/api/#sendmessage), *upload\_photo* for [photos](https://core.telegram.org/bots/api/#sendphoto), *record\_video* or *upload\_video* for [videos](https://core.telegram.org/bots/api/#sendvideo), *record\_voice* or *upload\_voice* for [voice notes](https://core.telegram.org/bots/api/#sendvoice), *upload\_document* for [general files](https://core.telegram.org/bots/api/#senddocument), *find\_location* for [location data](https://core.telegram.org/bots/api/#sendlocation), *record\_video\_note* or *upload\_video\_note* for [video notes](https://core.telegram.org/bots/api/#sendvideonote)._  
## get_user_profile_photos
_Use this method to get a list of profile pictures for a user. Returns a [UserProfilePhotos](https://core.telegram.org/bots/api/#userprofilephotos) object._   
```javascript
 ctx.telegram.get_user_profile_photos(user_id,more)
```   
- user_id (_Integer_)   
_Unique identifier of the target user_  
- more (_Object_)   
JSON Object of (offset,limit)   
## get_file
_Use this method to get basic info about a file and prepare it for downloading. For the moment, bots can download files of up to 20MB in size. On success, a [File](https://core.telegram.org/bots/api/#file) object is returned. The file can then be downloaded via the link `https://api.telegram.org/file/bot<token>/<file_path>`, where `<file_path>` is taken from the response. It is guaranteed that the link will be valid for at least 1 hour. When the link expires, a new one can be requested by calling [getFile](https://core.telegram.org/bots/api/#getfile) again._   
```javascript
 ctx.telegram.get_file(file_id)
```   
- file_id (_String_)   
_File identifier to get info about_  
## kick_chat_member
_Use this method to kick a user from a group, a supergroup or a channel. In the case of supergroups and channels, the user will not be able to return to the group on their own using invite links, etc., unless [unbanned](https://core.telegram.org/bots/api/#unbanchatmember) first. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.kick_chat_member(chat_id,user_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target group or username of the target supergroup or channel (in the format `@channelusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
- more (_Object_)   
JSON Object of (until_date)   
## unban_chat_member
_Use this method to unban a previously kicked user in a supergroup or channel. The user will **not** return to the group or channel automatically, but will be able to join via link, etc. The bot must be an administrator for this to work. By default, this method guarantees that after the call the user is not a member of the chat, but will be able to join it. So if the user is a member of the chat they will also be **removed** from the chat. If you don't want this, use the parameter *only\_if\_banned*. Returns *True* on success._   
```javascript
 ctx.telegram.unban_chat_member(chat_id,user_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target group or username of the target supergroup or channel (in the format `@username`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
- more (_Object_)   
JSON Object of (only_if_banned)   
## restrict_chat_member
_Use this method to restrict a user in a supergroup. The bot must be an administrator in the supergroup for this to work and must have the appropriate admin rights. Pass *True* for all permissions to lift restrictions from a user. Returns *True* on success._   
```javascript
 ctx.telegram.restrict_chat_member(chat_id,user_id,permissions,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
- permissions (__)   
_ _  
- more (_Object_)   
JSON Object of (until_date)   
## promote_chat_member
_Use this method to promote or demote a user in a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Pass *False* for all boolean parameters to demote a user. Returns *True* on success._   
```javascript
 ctx.telegram.promote_chat_member(chat_id,user_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
- more (_Object_)   
JSON Object of (is_anonymous,can_change_info,can_post_messages,can_edit_messages,can_delete_messages,can_invite_users,can_restrict_members,can_pin_messages,can_promote_members)   
## set_chat_administrator_custom_title
_Use this method to set a custom title for an administrator in a supergroup promoted by the bot. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_administrator_custom_title(chat_id,user_id,custom_title)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
- custom_title (_String_)   
_New custom title for the administrator; 0-16 characters, emoji are not allowed_  
## set_chat_permissions
_Use this method to set default chat permissions for all members. The bot must be an administrator in the group or a supergroup for this to work and must have the *can\_restrict\_members* admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_permissions(chat_id,permissions)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- permissions (__)   
_ _  
## export_chat_invite_link
_Use this method to generate a new invite link for a chat; any previously generated link is revoked. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns the new invite link as *String* on success._   
```javascript
 ctx.telegram.export_chat_invite_link(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## set_chat_photo
_Use this method to set a new profile photo for the chat. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_photo(chat_id,photo)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- photo (__)   
_ _  
## delete_chat_photo
_Use this method to delete a chat photo. Photos can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.delete_chat_photo(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## set_chat_title
_Use this method to change the title of a chat. Titles can't be changed for private chats. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_title(chat_id,title)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- title (_String_)   
_New chat title, 1-255 characters_  
## set_chat_description
_Use this method to change the description of a group, a supergroup or a channel. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_description(chat_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (_Object_)   
JSON Object of (description)   
## pin_chat_message
_Use this method to add a message to the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success._   
```javascript
 ctx.telegram.pin_chat_message(chat_id,message_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Identifier of a message to pin_  
- more (_Object_)   
JSON Object of (disable_notification)   
## unpin_chat_message
_Use this method to remove a message from the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success._   
```javascript
 ctx.telegram.unpin_chat_message(chat_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- more (_Object_)   
JSON Object of (message_id)   
## unpin_all_chat_messages
_Use this method to clear the list of pinned messages in a chat. If the chat is not a private chat, the bot must be an administrator in the chat for this to work and must have the 'can\_pin\_messages' admin right in a supergroup or 'can\_edit\_messages' admin right in a channel. Returns *True* on success._   
```javascript
 ctx.telegram.unpin_all_chat_messages(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
## leave_chat
_Use this method for your bot to leave a group, supergroup or channel. Returns *True* on success._   
```javascript
 ctx.telegram.leave_chat(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get_chat
_Use this method to get up to date information about the chat (current name of the user for one-on-one conversations, current username of a user, group or channel, etc.). Returns a [Chat](https://core.telegram.org/bots/api/#chat) object on success._   
```javascript
 ctx.telegram.get_chat(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get_chat_administrators
_Use this method to get a list of administrators in a chat. On success, returns an Array of [ChatMember](https://core.telegram.org/bots/api/#chatmember) objects that contains information about all chat administrators except other bots. If the chat is a group or a supergroup and no administrators were appointed, only the creator will be returned._   
```javascript
 ctx.telegram.get_chat_administrators(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get_chat_members_count
_Use this method to get the number of members in a chat. Returns *Int* on success._   
```javascript
 ctx.telegram.get_chat_members_count(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
## get_chat_member
_Use this method to get information about a member of a chat. Returns a [ChatMember](https://core.telegram.org/bots/api/#chatmember) object on success._   
```javascript
 ctx.telegram.get_chat_member(chat_id,user_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup or channel (in the format `@channelusername`)_  
- user_id (_Integer_)   
_Unique identifier of the target user_  
## set_chat_sticker_set
_Use this method to set a new group sticker set for a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success._   
```javascript
 ctx.telegram.set_chat_sticker_set(chat_id,sticker_set_name)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
- sticker_set_name (_String_)   
_Name of the sticker set to be set as the group sticker set_  
## delete_chat_sticker_set
_Use this method to delete a group sticker set from a supergroup. The bot must be an administrator in the chat for this to work and must have the appropriate admin rights. Use the field *can\_set\_sticker\_set* optionally returned in [getChat](https://core.telegram.org/bots/api/#getchat) requests to check if the bot can use this method. Returns *True* on success._   
```javascript
 ctx.telegram.delete_chat_sticker_set(chat_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target supergroup (in the format `@supergroupusername`)_  
## answer_callback_query
_Use this method to send answers to callback queries sent from [inline keyboards](/bots#inline-keyboards-and-on-the-fly-updating). The answer will be displayed to the user as a notification at the top of the chat screen or as an alert. On success, *True* is returned.

Alternatively, the user can be redirected to the specified Game URL. For this option to work, you must first create a game for your bot via [@Botfather](https://t.me/botfather) and accept the terms. Otherwise, you may use links like `t.me/your_bot?start=XXXX` that open your bot with a parameter._   
```javascript
 ctx.telegram.answer_callback_query(callback_query_id,more)
```   
- callback_query_id (_String_)   
_Unique identifier for the query to be answered_  
- more (_Object_)   
JSON Object of (text,show_alert,url,cache_time)   
## set_my_commands
_Use this method to change the list of the bot's commands. Returns *True* on success._   
```javascript
 ctx.telegram.set_my_commands(commands)
```   
- commands (_Array_)   
_A JSON-serialized list of bot commands to be set as the list of the bot's commands. At most 100 commands can be specified._  
## get_my_commands
_Use this method to get the current list of the bot's commands. Requires no parameters. Returns Array of [BotCommand](https://core.telegram.org/bots/api/#botcommand) on success._   
## edit_message_text
_Use this method to edit text and [game](https://core.telegram.org/bots/api/#games) messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
```javascript
 ctx.telegram.edit_message_text(text,more)
```   
- text (_String_)   
_New text of the message, 1-4096 characters after entities parsing_  
- more (_Object_)   
JSON Object of (chat_id,message_id,inline_message_id,parse_mode,entities,disable_web_page_preview,reply_markup)   
## edit_message_caption
_Use this method to edit captions of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
## edit_message_media
_Use this method to edit animation, audio, document, photo, or video messages. If a message is part of a message album, then it can be edited only to an audio for audio albums, only to a document for document albums and to a photo or a video otherwise. When an inline message is edited, a new file can't be uploaded. Use a previously uploaded file via its file\_id or specify a URL. On success, if the edited message was sent by the bot, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
```javascript
 ctx.telegram.edit_message_media(media,more)
```   
- media (__)   
_ _  
- more (_Object_)   
JSON Object of (chat_id,message_id,inline_message_id,reply_markup)   
## edit_message_reply_markup
_Use this method to edit only the reply markup of messages. On success, if the edited message is not an inline message, the edited [Message](https://core.telegram.org/bots/api/#message) is returned, otherwise *True* is returned._   
## stop_poll
_Use this method to stop a poll which was sent by the bot. On success, the stopped [Poll](https://core.telegram.org/bots/api/#poll) with the final results is returned._   
```javascript
 ctx.telegram.stop_poll(chat_id,message_id,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Identifier of the original message with the poll_  
- more (_Object_)   
JSON Object of (reply_markup)   
## delete_message
_Use this method to delete a message, including service messages, with the following limitations:  
\- A message can only be deleted if it was sent less than 48 hours ago.  
\- A dice message in a private chat can only be deleted if it was sent more than 24 hours ago.  
\- Bots can delete outgoing messages in private chats, groups, and supergroups.  
\- Bots can delete incoming messages in private chats.  
\- Bots granted *can\_post\_messages* permissions can delete outgoing messages in channels.  
\- If the bot is an administrator of a group, it can delete any message there.  
\- If the bot has *can\_delete\_messages* permission in a supergroup or a channel, it can delete any message there.  
Returns *True* on success._   
```javascript
 ctx.telegram.delete_message(chat_id,message_id)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- message_id (_Integer_)   
_Identifier of the message to delete_  
## send_sticker
_Use this method to send static .WEBP or [animated](https://telegram.org/blog/animated-stickers) .TGS stickers. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_sticker(chat_id,sticker,more)
```   
- chat_id (_Integer|String_)   
_Unique identifier for the target chat or username of the target channel (in the format `@channelusername`)_  
- sticker (_Object|String_)   
_Sticker to send. Pass a file\_id as String to send a file that exists on the Telegram servers (recommended), pass an HTTP URL as a String for Telegram to get a .WEBP file from the Internet, or upload a new one using multipart/form-data. [More info on Sending Files »](https://core.telegram.org/bots/api/#sending-files)_  
- more (_Object_)   
JSON Object of (disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup,send_at)   
## get_sticker_set
_Use this method to get a sticker set. On success, a [StickerSet](https://core.telegram.org/bots/api/#stickerset) object is returned._   
```javascript
 ctx.telegram.get_sticker_set(name)
```   
- name (_String_)   
_Name of the sticker set_  
## upload_sticker_file
_Use this method to upload a .PNG file with a sticker for later use in *createNewStickerSet* and *addStickerToSet* methods (can be used multiple times). Returns the uploaded [File](https://core.telegram.org/bots/api/#file) on success._   
```javascript
 ctx.telegram.upload_sticker_file(user_id,png_sticker)
```   
- user_id (_Integer_)   
_User identifier of sticker file owner_  
- png_sticker (__)   
_ _  
## create_new_sticker_set
_Use this method to create a new sticker set owned by a user. The bot will be able to edit the sticker set thus created. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Returns *True* on success._   
```javascript
 ctx.telegram.create_new_sticker_set(user_id,name,title,emojis,more)
```   
- user_id (_Integer_)   
_User identifier of created sticker set owner_  
- name (_String_)   
_Short name of sticker set, to be used in `t.me/addstickers/` URLs (e.g., *animals*). Can contain only english letters, digits and underscores. Must begin with a letter, can't contain consecutive underscores and must end in *“\_by\_<bot username>”*. *<bot\_username>* is case insensitive. 1-64 characters._  
- title (_String_)   
_Sticker set title, 1-64 characters_  
- emojis (_String_)   
_One or more emoji corresponding to the sticker_  
- more (_Object_)   
JSON Object of (png_sticker,tgs_sticker,contains_masks,mask_position)   
## add_sticker_to_set
_Use this method to add a new sticker to a set created by the bot. You **must** use exactly one of the fields *png\_sticker* or *tgs\_sticker*. Animated stickers can be added to animated sticker sets and only to them. Animated sticker sets can have up to 50 stickers. Static sticker sets can have up to 120 stickers. Returns *True* on success._   
```javascript
 ctx.telegram.add_sticker_to_set(user_id,name,emojis,more)
```   
- user_id (_Integer_)   
_User identifier of sticker set owner_  
- name (_String_)   
_Sticker set name_  
- emojis (_String_)   
_One or more emoji corresponding to the sticker_  
- more (_Object_)   
JSON Object of (png_sticker,tgs_sticker,mask_position)   
## set_sticker_position_in_set
_Use this method to move a sticker in a set created by the bot to a specific position. Returns *True* on success._   
```javascript
 ctx.telegram.set_sticker_position_in_set(sticker,position)
```   
- sticker (_String_)   
_File identifier of the sticker_  
- position (_Integer_)   
_New sticker position in the set, zero-based_  
## delete_sticker_from_set
_Use this method to delete a sticker from a set created by the bot. Returns *True* on success._   
```javascript
 ctx.telegram.delete_sticker_from_set(sticker)
```   
- sticker (_String_)   
_File identifier of the sticker_  
## set_sticker_set_thumb
_Use this method to set the thumbnail of a sticker set. Animated thumbnails can be set for animated sticker sets only. Returns *True* on success._   
```javascript
 ctx.telegram.set_sticker_set_thumb(name,user_id,more)
```   
- name (_String_)   
_Sticker set name_  
- user_id (_Integer_)   
_User identifier of the sticker set owner_  
- more (_Object_)   
JSON Object of (thumb)   
## answer_inline_query
_Use this method to send answers to an inline query. On success, *True* is returned.  
No more than **50** results per query are allowed._   
```javascript
 ctx.telegram.answer_inline_query(inline_query_id,results,more)
```   
- inline_query_id (_String_)   
_Unique identifier for the answered query_  
- results (_Array_)   
_A JSON-serialized array of results for the inline query_  
- more (_Object_)   
JSON Object of (cache_time,is_personal,next_offset,switch_pm_text,switch_pm_parameter)   
## send_invoice
_Use this method to send invoices. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_invoice(chat_id,title,description,payload,provider_token,start_parameter,currency,prices,more)
```   
- chat_id (_Integer_)   
_Unique identifier for the target private chat_  
- title (_String_)   
_Product name, 1-32 characters_  
- description (_String_)   
_Product description, 1-255 characters_  
- payload (_String_)   
_Bot-defined invoice payload, 1-128 bytes. This will not be displayed to the user, use for your internal processes._  
- provider_token (_String_)   
_Payments provider token, obtained via [Botfather](https://t.me/botfather)_  
- start_parameter (_String_)   
_Unique deep-linking parameter that can be used to generate this invoice when used as a start parameter_  
- currency (_String_)   
_Three-letter ISO 4217 currency code, see [more on currencies](/bots/payments#supported-currencies)_  
- prices (_Array_)   
_Price breakdown, a JSON-serialized list of components (e.g. product price, tax, discount, delivery cost, delivery tax, bonus, etc.)_  
- more (_Object_)   
JSON Object of (provider_data,photo_url,photo_size,photo_width,photo_height,need_name,need_phone_number,need_email,need_shipping_address,send_phone_number_to_provider,send_email_to_provider,is_flexible,disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup)   
## answer_shipping_query
_If you sent an invoice requesting a shipping address and the parameter *is\_flexible* was specified, the Bot API will send an [Update](https://core.telegram.org/bots/api/#update) with a *shipping\_query* field to the bot. Use this method to reply to shipping queries. On success, True is returned._   
```javascript
 ctx.telegram.answer_shipping_query(shipping_query_id,ok,more)
```   
- shipping_query_id (_String_)   
_Unique identifier for the query to be answered_  
- ok (_Boolean_)   
_Specify True if delivery to the specified address is possible and False if there are any problems (for example, if delivery to the specified address is not possible)_  
- more (_Object_)   
JSON Object of (shipping_options,error_message)   
## answer_pre_checkout_query
_Once the user has confirmed their payment and shipping details, the Bot API sends the final confirmation in the form of an [Update](https://core.telegram.org/bots/api/#update) with the field *pre\_checkout\_query*. Use this method to respond to such pre-checkout queries. On success, True is returned. **Note:** The Bot API must receive an answer within 10 seconds after the pre-checkout query was sent._   
```javascript
 ctx.telegram.answer_pre_checkout_query(pre_checkout_query_id,ok,more)
```   
- pre_checkout_query_id (_String_)   
_Unique identifier for the query to be answered_  
- ok (_Boolean_)   
_Specify *True* if everything is alright (goods are available, etc.) and the bot is ready to proceed with the order. Use *False* if there are any problems._  
- more (_Object_)   
JSON Object of (error_message)   
## set_passport_data_errors
_Informs a user that some of the Telegram Passport elements they provided contains errors. The user will not be able to re-submit their Passport to you until the errors are fixed (the contents of the field for which you returned the error must change). Returns *True* on success.

Use this if the data submitted by the user doesn't satisfy the standards your service requires for any reason. For example, if a birthday date seems invalid, a submitted document is blurry, a scan shows evidence of tampering, etc. Supply some details in the error message to make sure the user knows how to correct the issues._   
```javascript
 ctx.telegram.set_passport_data_errors(user_id,errors)
```   
- user_id (_Integer_)   
_User identifier_  
- errors (_Array_)   
_A JSON-serialized array describing the errors_  
## send_game
_Use this method to send a game. On success, the sent [Message](https://core.telegram.org/bots/api/#message) is returned._   
```javascript
 ctx.telegram.send_game(chat_id,game_short_name,more)
```   
- chat_id (_Integer_)   
_Unique identifier for the target chat_  
- game_short_name (_String_)   
_Short name of the game, serves as the unique identifier for the game. Set up your games via [Botfather](https://t.me/botfather)._  
- more (_Object_)   
JSON Object of (disable_notification,reply_to_message_id,allow_sending_without_reply,reply_markup)   
## set_game_score
_Use this method to set the score of the specified user in a game. On success, if the message was sent by the bot, returns the edited [Message](https://core.telegram.org/bots/api/#message), otherwise returns *True*. Returns an error, if the new score is not greater than the user's current score in the chat and *force* is *False*._   
```javascript
 ctx.telegram.set_game_score(user_id,score,more)
```   
- user_id (_Integer_)   
_User identifier_  
- score (_Integer_)   
_New score, must be non-negative_  
- more (_Object_)   
JSON Object of (force,disable_edit_message,chat_id,message_id,inline_message_id)   
## get_game_high_scores
_Use this method to get data for high score tables. Will return the score of the specified user and several of their neighbors in a game. On success, returns an *Array* of [GameHighScore](https://core.telegram.org/bots/api/#gamehighscore) objects.

This method will currently return scores for the target user, plus two of their closest neighbors on each side. Will also return the top three users if the user and his neighbors are not among them. Please note that this behavior is subject to change._   
```javascript
 ctx.telegram.get_game_high_scores(user_id,more)
```   
- user_id (_Integer_)   
_Target user id_  
- more (_Object_)   
JSON Object of (chat_id,message_id,inline_message_id)   
## get_memory_stats
_Get the memory your bot is needing._   