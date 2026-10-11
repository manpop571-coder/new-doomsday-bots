/* Public appearance only. Authority comes from the Telegram bot, never this key. */
(function () {
  'use strict';
  var catalog = Object.freeze({
    denis: Object.freeze({id:'denis', name:'DLS FARM BOT', username:'DLS_FERM_BOT',
      channel:'https://t.me/yagadls', logo:'./brands/denis.jpg'})
  });
  var query = new URLSearchParams(location.search).get('brand');
  var current = query ? catalog[query] : null;
  function render() {
    if (!current) { return; }
    document.title = current.name;
    var bar = document.createElement('aside');
    bar.className = 'merchant-brand';
    bar.id = 'merchantBrand';
    var avatar = document.createElement('img');
    avatar.src = current.logo; avatar.alt = current.name; avatar.width = avatar.height = 42;
    var title = document.createElement('strong'); title.textContent = current.name;
    var channel = document.createElement('a'); channel.href = current.channel;
    channel.target = '_blank'; channel.rel = 'noopener noreferrer';
    channel.textContent = '📣 @' + new URL(current.channel).pathname.slice(1);
    bar.append(avatar, title, channel);
    document.querySelector('.shell').prepend(bar);
  }
  window.FarmBrand = {
    get active() { return current; },
    accept: function (payload) {
      if (query && !current) { return false; }
      var declared = payload && payload.br && payload.br.id;
      if (current) { return !payload || declared === current.id; }
      return !declared;
    }
  };
  render();
}());
