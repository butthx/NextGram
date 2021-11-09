// don't sale this source.
// this source is part from NextGram <https://github.com/butthx/NextGram>
// Copyright butthx <https://github.com/butthx>
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
'use-strict';

// This file is auto generate
// Create At Tue, 09 Nov 2021 08:57:32 GMT

class Context {
  constructor(update, api) {
    for (let [key, value] of Object.entries(update)) {
      switch (key) {
        case 'message':
        case 'editedChannelPost':
        case 'editedMessage':
        case 'channelPost':
          MakePrivate(this, key, Message(value, api));
          break;
        case 'callbackQuery':
          MakePrivate(this, key, Message(value.message, api));
          break;
        default:
          MakePrivate(this, key, value);
      }
    }
    MakePrivate(this, 'telegram', api);
  }
  get msg() {
    return (
      this.message ??
      this.editedMessage ??
      this.callbackQuery?.message ??
      this.channelPost ??
      this.editedChannelPost
    );
  }
  get from() {
    return (
      this.callbackQuery ??
      this.inlineQuery ??
      this.shippingQuery ??
      this.preCheckoutQuery ??
      this.chosenInlineResult ??
      this.msg ??
      this.myChatMember ??
      this.chatMember
    )?.from;
  }
  get chat() {
    return (this.msg ?? this.myChatMember ?? this.chatMember)?.chat;
  }
  toJSON(...options) {
    let obj = {};
    for (let [key, value] of Object.entries(this)) {
      if (key !== 'telegram') {
        obj[key] = value;
      }
    }
    return JSON.stringify(obj, ...options);
  }
  async reply(text, more) {
    return this.send_message(text, more);
  }
  async reply_with_html(text, more) {
    return this.send_message(text, { parse_mode: 'html', ...more });
  }
  async reply_with_markdown(text, more) {
    return this.send_message(text, { parse_mode: 'markdown', ...more });
  }
  async user_login(phone_number) {
    return this.telegram.user_login(phone_number);
  }
  async auth_code(code) {
    return this.telegram.auth_code(code);
  }
  async auth_password(password) {
    return this.telegram.auth_password(password);
  }
  async register_user(first_name, more) {
    return this.telegram.register_user(first_name, more);
  }
  async optimize_memory() {
    return this.telegram.optimize_memory();
  }
  async get_message_info(message_id) {
    if (this.chat) {
      return this.telegram.get_message_info(this.chat.id, message_id);
    }
    return this.get_message_info;
  }
  async get_chat_members(more) {
    if (this.chat) {
      return this.telegram.get_chat_members(this.chat.idmore);
    }
    return this.get_chat_members;
  }
  async delete_messages(start, end) {
    if (this.chat) {
      return this.telegram.delete_messages(this.chat.id, start, end);
    }
    return this.delete_messages;
  }
  async ping() {
    return this.telegram.ping();
  }
  async get_chats(more) {
    return this.telegram.get_chats(more);
  }
  async get_common_chats(user_id, more) {
    return this.telegram.get_common_chats(user_id, more);
  }
  async get_inactive_chats() {
    return this.telegram.get_inactive_chats();
  }
  async get_nearby_chats(latitude, longitude, more) {
    return this.telegram.get_nearby_chats(latitude, longitude, more);
  }
  async search_public_chats(query) {
    return this.telegram.search_public_chats(query);
  }
  async set_poll_answer(message_id, option_ids) {
    if (this.chat) {
      return this.telegram.set_poll_answer(this.chat.id, message_id, option_ids);
    }
    return this.set_poll_answer;
  }
  async join_chat(more) {
    return this.telegram.join_chat(more);
  }
  async add_chat_member(user_id) {
    if (this.chat) {
      return this.telegram.add_chat_member(this.chat.id, user_id);
    }
    return this.add_chat_member;
  }
  async report_chat(reason, more) {
    if (this.chat) {
      return this.telegram.report_chat(this.chat.id, reason, more);
    }
    return this.report_chat;
  }
  async create_chat(title, type, more) {
    return this.telegram.create_chat(title, type, more);
  }
  async search_messages(query, more) {
    return this.telegram.search_messages(query, more);
  }
  async search_chat_messages(query, more) {
    if (this.chat) {
      return this.telegram.search_chat_messages(this.chat.id, query, more);
    }
    return this.search_chat_messages;
  }
  async get_callback_query_answer(message_id, callback_data) {
    if (this.chat) {
      return this.telegram.get_callback_query_answer(this.chat.id, message_id, callback_data);
    }
    return this.get_callback_query_answer;
  }
  async delete_chat_history(more) {
    if (this.chat) {
      return this.telegram.delete_chat_history(this.chat.idmore);
    }
    return this.delete_chat_history;
  }
  async get_scheduled_messages() {
    if (this.chat) {
      return this.telegram.get_scheduled_messages(this.chat.id);
    }
    return this.get_scheduled_messages;
  }
  async edit_message_scheduling(message_id, more) {
    if (this.chat) {
      return this.telegram.edit_message_scheduling(this.chat.id, message_id, more);
    }
    return this.edit_message_scheduling;
  }
  async get_proxies() {
    return this.telegram.get_proxies();
  }
  async add_proxy(server, port, type, more) {
    return this.telegram.add_proxy(server, port, type, more);
  }
  async delete_proxy(proxy_id) {
    return this.telegram.delete_proxy(proxy_id);
  }
  async enable_proxy(proxy_id) {
    return this.telegram.enable_proxy(proxy_id);
  }
  async disable_proxy(proxy_id) {
    return this.telegram.disable_proxy(proxy_id);
  }
  async get_updates(more) {
    return this.telegram.get_updates(more);
  }
  async set_webhook(url, more) {
    return this.telegram.set_webhook(url, more);
  }
  async delete_webhook(more) {
    return this.telegram.delete_webhook(more);
  }
  async get_webhook_info() {
    return this.telegram.get_webhook_info();
  }
  async get_me() {
    return this.telegram.get_me();
  }
  async log_out() {
    return this.telegram.log_out();
  }
  async close() {
    return this.telegram.close();
  }
  async send_message(text, more) {
    if (this.chat) {
      return this.telegram.send_message(this.chat.id, text, more);
    }
    return this.send_message;
  }
  async forward_message(from_chat_id, message_id, more) {
    if (this.chat) {
      return this.telegram.forward_message(this.chat.id, from_chat_id, message_id, more);
    }
    return this.forward_message;
  }
  async copy_message(from_chat_id, message_id, more) {
    if (this.chat) {
      return this.telegram.copy_message(this.chat.id, from_chat_id, message_id, more);
    }
    return this.copy_message;
  }
  async send_photo(photo, more) {
    if (this.chat) {
      return this.telegram.send_photo(this.chat.id, photo, more);
    }
    return this.send_photo;
  }
  async send_audio(audio, more) {
    if (this.chat) {
      return this.telegram.send_audio(this.chat.id, audio, more);
    }
    return this.send_audio;
  }
  async send_document(document, more) {
    if (this.chat) {
      return this.telegram.send_document(this.chat.id, document, more);
    }
    return this.send_document;
  }
  async send_video(video, more) {
    if (this.chat) {
      return this.telegram.send_video(this.chat.id, video, more);
    }
    return this.send_video;
  }
  async send_animation(animation, more) {
    if (this.chat) {
      return this.telegram.send_animation(this.chat.id, animation, more);
    }
    return this.send_animation;
  }
  async send_voice(voice, more) {
    if (this.chat) {
      return this.telegram.send_voice(this.chat.id, voice, more);
    }
    return this.send_voice;
  }
  async send_video_note(video_note, more) {
    if (this.chat) {
      return this.telegram.send_video_note(this.chat.id, video_note, more);
    }
    return this.send_video_note;
  }
  async send_media_group(media, more) {
    if (this.chat) {
      return this.telegram.send_media_group(this.chat.id, media, more);
    }
    return this.send_media_group;
  }
  async send_location(latitude, longitude, more) {
    if (this.chat) {
      return this.telegram.send_location(this.chat.id, latitude, longitude, more);
    }
    return this.send_location;
  }
  async edit_message_live_location(latitude, longitude, more) {
    return this.telegram.edit_message_live_location(latitude, longitude, more);
  }
  async stop_message_live_location(more) {
    return this.telegram.stop_message_live_location(more);
  }
  async send_venue(latitude, longitude, title, address, more) {
    if (this.chat) {
      return this.telegram.send_venue(this.chat.id, latitude, longitude, title, address, more);
    }
    return this.send_venue;
  }
  async send_contact(phone_number, first_name, more) {
    if (this.chat) {
      return this.telegram.send_contact(this.chat.id, phone_number, first_name, more);
    }
    return this.send_contact;
  }
  async send_poll(question, options, more) {
    if (this.chat) {
      return this.telegram.send_poll(this.chat.id, question, options, more);
    }
    return this.send_poll;
  }
  async send_dice(more) {
    if (this.chat) {
      return this.telegram.send_dice(this.chat.idmore);
    }
    return this.send_dice;
  }
  async send_chat_action(action) {
    if (this.chat) {
      return this.telegram.send_chat_action(this.chat.id, action);
    }
    return this.send_chat_action;
  }
  async get_user_profile_photos(user_id, more) {
    return this.telegram.get_user_profile_photos(user_id, more);
  }
  async get_file(file_id) {
    return this.telegram.get_file(file_id);
  }
  async kick_chat_member(user_id, more) {
    if (this.chat) {
      return this.telegram.kick_chat_member(this.chat.id, user_id, more);
    }
    return this.kick_chat_member;
  }
  async unban_chat_member(user_id, more) {
    if (this.chat) {
      return this.telegram.unban_chat_member(this.chat.id, user_id, more);
    }
    return this.unban_chat_member;
  }
  async restrict_chat_member(user_id, permissions, more) {
    if (this.chat) {
      return this.telegram.restrict_chat_member(this.chat.id, user_id, permissions, more);
    }
    return this.restrict_chat_member;
  }
  async promote_chat_member(user_id, more) {
    if (this.chat) {
      return this.telegram.promote_chat_member(this.chat.id, user_id, more);
    }
    return this.promote_chat_member;
  }
  async set_chat_administrator_custom_title(user_id, custom_title) {
    if (this.chat) {
      return this.telegram.set_chat_administrator_custom_title(this.chat.id, user_id, custom_title);
    }
    return this.set_chat_administrator_custom_title;
  }
  async set_chat_permissions(permissions) {
    if (this.chat) {
      return this.telegram.set_chat_permissions(this.chat.id, permissions);
    }
    return this.set_chat_permissions;
  }
  async export_chat_invite_link() {
    if (this.chat) {
      return this.telegram.export_chat_invite_link(this.chat.id);
    }
    return this.export_chat_invite_link;
  }
  async set_chat_photo(photo) {
    if (this.chat) {
      return this.telegram.set_chat_photo(this.chat.id, photo);
    }
    return this.set_chat_photo;
  }
  async delete_chat_photo() {
    if (this.chat) {
      return this.telegram.delete_chat_photo(this.chat.id);
    }
    return this.delete_chat_photo;
  }
  async set_chat_title(title) {
    if (this.chat) {
      return this.telegram.set_chat_title(this.chat.id, title);
    }
    return this.set_chat_title;
  }
  async set_chat_description(more) {
    if (this.chat) {
      return this.telegram.set_chat_description(this.chat.idmore);
    }
    return this.set_chat_description;
  }
  async pin_chat_message(message_id, more) {
    if (this.chat) {
      return this.telegram.pin_chat_message(this.chat.id, message_id, more);
    }
    return this.pin_chat_message;
  }
  async unpin_chat_message(more) {
    if (this.chat) {
      return this.telegram.unpin_chat_message(this.chat.idmore);
    }
    return this.unpin_chat_message;
  }
  async unpin_all_chat_messages() {
    if (this.chat) {
      return this.telegram.unpin_all_chat_messages(this.chat.id);
    }
    return this.unpin_all_chat_messages;
  }
  async leave_chat() {
    if (this.chat) {
      return this.telegram.leave_chat(this.chat.id);
    }
    return this.leave_chat;
  }
  async get_chat() {
    if (this.chat) {
      return this.telegram.get_chat(this.chat.id);
    }
    return this.get_chat;
  }
  async get_chat_administrators() {
    if (this.chat) {
      return this.telegram.get_chat_administrators(this.chat.id);
    }
    return this.get_chat_administrators;
  }
  async get_chat_members_count() {
    if (this.chat) {
      return this.telegram.get_chat_members_count(this.chat.id);
    }
    return this.get_chat_members_count;
  }
  async get_chat_member(user_id) {
    if (this.chat) {
      return this.telegram.get_chat_member(this.chat.id, user_id);
    }
    return this.get_chat_member;
  }
  async set_chat_sticker_set(sticker_set_name) {
    if (this.chat) {
      return this.telegram.set_chat_sticker_set(this.chat.id, sticker_set_name);
    }
    return this.set_chat_sticker_set;
  }
  async delete_chat_sticker_set() {
    if (this.chat) {
      return this.telegram.delete_chat_sticker_set(this.chat.id);
    }
    return this.delete_chat_sticker_set;
  }
  async answer_callback_query(callback_query_id, more) {
    return this.telegram.answer_callback_query(callback_query_id, more);
  }
  async set_my_commands(commands) {
    return this.telegram.set_my_commands(commands);
  }
  async get_my_commands() {
    return this.telegram.get_my_commands();
  }
  async edit_message_text(text, more) {
    return this.telegram.edit_message_text(text, more);
  }
  async edit_message_caption(more) {
    return this.telegram.edit_message_caption(more);
  }
  async edit_message_media(media, more) {
    return this.telegram.edit_message_media(media, more);
  }
  async edit_message_reply_markup(more) {
    return this.telegram.edit_message_reply_markup(more);
  }
  async stop_poll(message_id, more) {
    if (this.chat) {
      return this.telegram.stop_poll(this.chat.id, message_id, more);
    }
    return this.stop_poll;
  }
  async delete_message(message_id) {
    if (this.chat) {
      return this.telegram.delete_message(this.chat.id, message_id);
    }
    return this.delete_message;
  }
  async send_sticker(sticker, more) {
    if (this.chat) {
      return this.telegram.send_sticker(this.chat.id, sticker, more);
    }
    return this.send_sticker;
  }
  async get_sticker_set(name) {
    return this.telegram.get_sticker_set(name);
  }
  async upload_sticker_file(user_id, png_sticker) {
    return this.telegram.upload_sticker_file(user_id, png_sticker);
  }
  async create_new_sticker_set(user_id, name, title, emojis, more) {
    return this.telegram.create_new_sticker_set(user_id, name, title, emojis, more);
  }
  async add_sticker_to_set(user_id, name, emojis, more) {
    return this.telegram.add_sticker_to_set(user_id, name, emojis, more);
  }
  async set_sticker_position_in_set(sticker, position) {
    return this.telegram.set_sticker_position_in_set(sticker, position);
  }
  async delete_sticker_from_set(sticker) {
    return this.telegram.delete_sticker_from_set(sticker);
  }
  async set_sticker_set_thumb(name, user_id, more) {
    return this.telegram.set_sticker_set_thumb(name, user_id, more);
  }
  async answer_inline_query(inline_query_id, results, more) {
    return this.telegram.answer_inline_query(inline_query_id, results, more);
  }
  async send_invoice(
    title,
    description,
    payload,
    provider_token,
    start_parameter,
    currency,
    prices,
    more
  ) {
    if (this.chat) {
      return this.telegram.send_invoice(
        this.chat.id,
        title,
        description,
        payload,
        provider_token,
        start_parameter,
        currency,
        prices,
        more
      );
    }
    return this.send_invoice;
  }
  async answer_shipping_query(shipping_query_id, ok, more) {
    return this.telegram.answer_shipping_query(shipping_query_id, ok, more);
  }
  async answer_pre_checkout_query(pre_checkout_query_id, ok, more) {
    return this.telegram.answer_pre_checkout_query(pre_checkout_query_id, ok, more);
  }
  async set_passport_data_errors(user_id, errors) {
    return this.telegram.set_passport_data_errors(user_id, errors);
  }
  async send_game(game_short_name, more) {
    if (this.chat) {
      return this.telegram.send_game(this.chat.id, game_short_name, more);
    }
    return this.send_game;
  }
  async set_game_score(user_id, score, more) {
    return this.telegram.set_game_score(user_id, score, more);
  }
  async get_game_high_scores(user_id, more) {
    return this.telegram.get_game_high_scores(user_id, more);
  }
  async get_memory_stats() {
    return this.telegram.get_memory_stats();
  }
}
