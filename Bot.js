// don't sale this source.
// this source is part from NextGram <https://github.com/butthx/NextGram>
// Copyright butthx <https://github.com/butthx>
// NextGram is open source software. You can redistribute it and/or modify.
// It under the terms of the MIT License as published.
'use-strict';
var Bot = class extends Composer {
  constructor(token, loginAs = 'bot') {
    super();
    MakePrivate(this, 'telegram', new Api(token, loginAs));
  }
  doPost(e) {
    if (e) {
      if (e.postData.type == 'application/json') {
        let update = JSON.parse(e.postData.contents);
        return this.handleUpdate(update);
      }
    }
    return "Don't running this function!!!";
  }
  handleUpdate(update) {
    update = new Context(update, this.telegram);
    return run(this.middleware(), update);
  }
};
