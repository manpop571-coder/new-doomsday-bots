(function () {
  'use strict';

  function telegramApp() {
    return window.Telegram && window.Telegram.WebApp ? window.Telegram.WebApp : null;
  }

  var tg = telegramApp();
  if (tg) {
    try { tg.ready(); tg.expand(); } catch (error) { console.error(error); }
  }

  var LANGS = [
    {code:'ar', name:'العربية', flag:'🇸🇦'},
    {code:'en', name:'English', flag:'🇬🇧'},
    {code:'fr', name:'Français', flag:'🇫🇷'},
    {code:'de', name:'Deutsch', flag:'🇩🇪'},
    {code:'it', name:'Italiano', flag:'🇮🇹'},
    {code:'es', name:'Español', flag:'🇪🇸'},
    {code:'pt', name:'Português', flag:'🇵🇹'},
    {code:'ru', name:'Русский', flag:'🇷🇺'}
  ];

  var T = {
    ar:{eyebrow:'لوحة جمع الموارد',title:'Doomsday Farm Bots',telegramId:'معرّف تيليجرام',farm:'القلعة',notice:'عدّل بيانات القلعة أو اختر فيالق جمع الموارد. الحد الأقصى 5، وسيُرسل البوت المتاح فقط.',castleName:'اسم القلعة',email:'البريد الإلكتروني',password:'كلمة مرور جديدة',passwordHint:'اتركها فارغة للاحتفاظ بكلمة المرور الحالية',showPassword:'إظهار كلمة المرور',on:'تشغيل',off:'إيقاف',food:'الطعام',wood:'الخشب',steel:'الفولاذ',oil:'البترول',total:'إجمالي الفيالق',send:'💾 حفظ وتنفيذ جمع الموارد',sending:'جارٍ إرسال الطلب...',sent:'تم إرسال التعديلات والطلب إلى البوت. ستصلك النتيجة في المحادثة.',max:'لا يمكن أن يتجاوز إجمالي الفيالق 5',none:'لا توجد قلعة مرتبطة بحسابك.',changeLanguage:'تغيير اللغة',openTelegram:'افتح الواجهة من زر البوت داخل تيليجرام',invalidData:'تعذر قراءة بيانات القلعة. افتح الواجهة من البوت مرة أخرى.'},
    en:{eyebrow:'RESOURCE GATHERING',title:'Doomsday Farm Bots',telegramId:'Telegram ID',farm:'Farm',notice:'Edit farm details or choose gathering legions. Maximum 5; the bot sends only what is available.',castleName:'Castle name',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Show password',on:'ON',off:'OFF',food:'Food',wood:'Wood',steel:'Steel',oil:'Oil',total:'Total legions',send:'💾 Save and gather resources',sending:'Sending request...',sent:'Changes and request sent. The result will arrive in the chat.',max:'Total legions cannot exceed 5',none:'No farm is linked to your account.',changeLanguage:'Change language',openTelegram:'Open this panel from the Telegram bot button',invalidData:'Farm data could not be read. Open the panel from the bot again.'},
    fr:{eyebrow:'COLLECTE DE RESSOURCES',title:'Doomsday Farm Bots',telegramId:'Identifiant Telegram',farm:'Ferme',ready:'Prête',notice:'Choisissez les légions par ressource. Maximum 5 par ferme.',food:'Nourriture',wood:'Bois',steel:'Acier',oil:'Pétrole',total:'Total des légions',send:'🚀 Envoyer les légions',sending:'Envoi...',sent:'Demande envoyée. Le résultat arrivera dans le chat.',max:'Le total ne peut pas dépasser 5',chooseOne:'Choisissez au moins une légion',none:'Aucune ferme liée.',changeLanguage:'Changer de langue',openTelegram:'Ouvrez ce panneau depuis le bot Telegram',invalidData:'Impossible de lire les données de la ferme.'},
    de:{eyebrow:'RESSOURCEN SAMMELN',title:'Doomsday Farm Bots',telegramId:'Telegram-ID',farm:'Farm',ready:'Bereit',notice:'Wähle Legionen pro Ressource. Maximal 5 pro Farm.',food:'Nahrung',wood:'Holz',steel:'Stahl',oil:'Öl',total:'Legionen gesamt',send:'🚀 Legionen senden',sending:'Wird gesendet...',sent:'Anfrage gesendet. Das Ergebnis erscheint im Chat.',max:'Maximal 5 Legionen',chooseOne:'Wähle mindestens eine Legion',none:'Keine Farm verbunden.',changeLanguage:'Sprache ändern',openTelegram:'Öffne dieses Panel über den Telegram-Bot',invalidData:'Farmdaten konnten nicht gelesen werden.'},
    it:{eyebrow:'RACCOLTA RISORSE',title:'Doomsday Farm Bots',telegramId:'ID Telegram',farm:'Fattoria',ready:'Pronta',notice:'Scegli le legioni per risorsa. Massimo 5 per fattoria.',food:'Cibo',wood:'Legno',steel:'Acciaio',oil:'Petrolio',total:'Legioni totali',send:'🚀 Invia legioni',sending:'Invio...',sent:'Richiesta inviata. Il risultato arriverà in chat.',max:'Massimo 5 legioni',chooseOne:'Scegli almeno una legione',none:'Nessuna fattoria collegata.',changeLanguage:'Cambia lingua',openTelegram:'Apri il pannello dal bot Telegram',invalidData:'Dati della fattoria non validi.'},
    es:{eyebrow:'RECOLECCIÓN DE RECURSOS',title:'Doomsday Farm Bots',telegramId:'ID de Telegram',farm:'Granja',ready:'Lista',notice:'Elige legiones por recurso. Máximo 5 por granja.',food:'Comida',wood:'Madera',steel:'Acero',oil:'Petróleo',total:'Legiones totales',send:'🚀 Enviar legiones',sending:'Enviando...',sent:'Solicitud enviada. El resultado llegará al chat.',max:'Máximo 5 legiones',chooseOne:'Elige al menos una legión',none:'No hay granjas vinculadas.',changeLanguage:'Cambiar idioma',openTelegram:'Abre el panel desde el bot de Telegram',invalidData:'No se pudieron leer los datos.'},
    pt:{eyebrow:'COLETA DE RECURSOS',title:'Doomsday Farm Bots',telegramId:'ID do Telegram',farm:'Fazenda',ready:'Pronta',notice:'Escolha legiões por recurso. Máximo de 5 por fazenda.',food:'Comida',wood:'Madeira',steel:'Aço',oil:'Petróleo',total:'Total de legiões',send:'🚀 Enviar legiões',sending:'Enviando...',sent:'Pedido enviado. O resultado chegará no chat.',max:'Máximo de 5 legiões',chooseOne:'Escolha pelo menos uma legião',none:'Nenhuma fazenda vinculada.',changeLanguage:'Alterar idioma',openTelegram:'Abra o painel pelo bot do Telegram',invalidData:'Não foi possível ler os dados.'},
    ru:{eyebrow:'СБОР РЕСУРСОВ',title:'Doomsday Farm Bots',telegramId:'Telegram ID',farm:'Ферма',ready:'Готова',notice:'Выберите легионы для ресурсов. Максимум 5 на ферму.',food:'Еда',wood:'Дерево',steel:'Сталь',oil:'Нефть',total:'Всего легионов',send:'🚀 Отправить легионы',sending:'Отправка...',sent:'Запрос отправлен. Результат придёт в чат.',max:'Максимум 5 легионов',chooseOne:'Выберите хотя бы один легион',none:'Нет привязанных ферм.',changeLanguage:'Сменить язык',openTelegram:'Откройте панель из Telegram-бота',invalidData:'Не удалось прочитать данные фермы.'}
  };

  var lang = localStorage.getItem('dfb_gather_lang') || '';
  var farms = [];
  var telegramId = '';
  var dataIsValid = false;
  var resources = ['food','wood','steel','oil'];
  var resourceIcons = {food:'🌾',wood:'🪵',steel:'⛓️',oil:'🛢️'};

  var languageScreen = document.getElementById('languageScreen');
  var appScreen = document.getElementById('appScreen');
  var farmsRoot = document.getElementById('farms');
  var sendBtn = document.getElementById('sendBtn');
  var message = document.getElementById('message');
  var eyebrow = document.getElementById('eyebrow');
  var appTitle = document.getElementById('appTitle');
  var languageBtn = document.getElementById('languageBtn');
  var userInfo = document.getElementById('userInfo');
  var notice = document.getElementById('notice');

  function tr(key) { return (T[lang] || T.en)[key] || T.en[key] || key; }
  function escapeHtml(value) { return String(value == null ? '' : value).replace(/[&<>'"]/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c];}); }
  function total(farm) { return resources.reduce(function(sum,key){return sum + (Number(farm[key]) || 0);},0); }
  function base64UrlDecode(value) { var normalized=value.replace(/-/g,'+').replace(/_/g,'/'); while(normalized.length%4)normalized+='='; var binary=atob(normalized); var bytes=new Uint8Array(binary.length); for(var i=0;i<binary.length;i++)bytes[i]=binary.charCodeAt(i); return new TextDecoder('utf-8').decode(bytes); }

  function loadInitialData() {
    try {
      var encoded = new URLSearchParams(window.location.search).get('data');
      if (!encoded) return;
      var payload = JSON.parse(base64UrlDecode(encoded));
      telegramId = String(payload.telegram_id || '');
      var supplied = String(payload.language || '').toLowerCase();
      if (supplied && T[supplied]) { lang=supplied; localStorage.setItem('dfb_gather_lang',lang); }
      farms = (Array.isArray(payload.farms) ? payload.farms : []).map(function(farm){
        return {id:String(farm.id||''),castle_name:String(farm.castle_name||farm.name||''),login:String(farm.login||''),password:'',on_off:Number(farm.on_off)?1:0,food:0,wood:0,steel:0,oil:0};
      });
      dataIsValid = Boolean(telegramId && farms.length);
    } catch (error) { console.error(error); }
  }

  function applyLocale() {
    document.documentElement.lang=lang||'en'; document.documentElement.dir=lang==='ar'?'rtl':'ltr'; document.body.setAttribute('data-lang',lang||'en');
    eyebrow.textContent=tr('eyebrow'); appTitle.textContent=tr('title'); languageBtn.setAttribute('aria-label',tr('changeLanguage')); languageBtn.title=tr('changeLanguage'); notice.textContent=tr('notice');
  }
  function showMessage(text,ok){message.className=text?(ok?'success':'error'):'';message.textContent=text||'';}

  function chooseLanguage() {
    appScreen.hidden=true; languageScreen.hidden=false;
    languageScreen.innerHTML='<div class="language-heading"><span class="language-globe">🌐</span><div><h2>Choose your language</h2><p>Select your language / اختر لغتك</p></div></div><div class="languages">'+LANGS.map(function(item){return '<button type="button" class="language-option'+(lang===item.code?' selected':'')+'" data-lang="'+item.code+'"><span class="flag">'+item.flag+'</span><span>'+item.name+'</span></button>';}).join('')+'</div>';
    Array.prototype.forEach.call(languageScreen.querySelectorAll('[data-lang]'),function(btn){btn.onclick=function(){lang=btn.getAttribute('data-lang');localStorage.setItem('dfb_gather_lang',lang);showApp();};});
  }

  function resourceRow(index,key){return '<div class="resource"><span class="resource-label">'+resourceIcons[key]+' '+tr(key)+'</span><button class="step" type="button" data-step="-1" data-key="'+key+'">−</button><output data-value="'+key+'">'+farms[index][key]+'</output><button class="step" type="button" data-step="1" data-key="'+key+'">+</button></div>';}

  function render() {
    userInfo.textContent=telegramId?tr('telegramId')+': '+telegramId:''; sendBtn.textContent=tr('send'); showMessage('',true);
    if(!dataIsValid){farmsRoot.innerHTML='';sendBtn.disabled=true;showMessage(tr('invalidData'),false);return;}
    sendBtn.disabled=false;
    if(!farms.length){farmsRoot.innerHTML='<div class="panel empty"><div class="empty-icon">🏰</div><div>'+tr('none')+'</div></div>';return;}
    farmsRoot.innerHTML=farms.map(function(farm,index){return '<article class="farm-card" data-index="'+index+'"><div class="farm-head"><div class="farm-title"><h2>🏰 '+escapeHtml(farm.castle_name||tr('farm'))+'</h2><div class="farm-id">ID: '+escapeHtml(farm.id)+'</div></div><button type="button" class="toggle '+(farm.on_off?'on':'off')+'" data-toggle>'+(farm.on_off?tr('on'):tr('off'))+'</button></div><div class="account-fields"><label class="account-field"><span>'+tr('castleName')+'</span><input type="text" maxlength="200" data-account="castle_name" value="'+escapeHtml(farm.castle_name)+'"></label><label class="account-field"><span>'+tr('email')+'</span><input type="email" maxlength="200" data-account="login" value="'+escapeHtml(farm.login)+'"></label><label class="account-field"><span>'+tr('password')+'</span><div class="password-wrap"><input type="password" maxlength="200" autocomplete="new-password" placeholder="'+escapeHtml(tr('passwordHint'))+'" data-account="password" value=""><button type="button" class="password-toggle" data-password-toggle aria-label="'+escapeHtml(tr('showPassword'))+'">👁️</button></div></label></div><div class="resources">'+resources.map(function(key){return resourceRow(index,key);}).join('')+'</div><div class="total"><span>'+tr('total')+'</span><span><b data-total>'+total(farm)+'</b> / 5</span></div></article>';}).join('');
    Array.prototype.forEach.call(farmsRoot.querySelectorAll('.farm-card'),function(card){var index=Number(card.getAttribute('data-index'));card.querySelector('[data-toggle]').onclick=function(event){farms[index].on_off=farms[index].on_off?0:1;event.currentTarget.className='toggle '+(farms[index].on_off?'on':'off');event.currentTarget.textContent=farms[index].on_off?tr('on'):tr('off');};Array.prototype.forEach.call(card.querySelectorAll('[data-account]'),function(input){input.oninput=function(){farms[index][input.getAttribute('data-account')]=input.value;if(input.getAttribute('data-account')==='castle_name'){card.querySelector('.farm-title h2').textContent='🏰 '+(input.value||tr('farm'));}};});var passwordToggle=card.querySelector('[data-password-toggle]');passwordToggle.onclick=function(){var input=card.querySelector('[data-account="password"]');input.type=input.type==='password'?'text':'password';};Array.prototype.forEach.call(card.querySelectorAll('[data-step]'),function(button){button.onclick=function(){step(index,button.getAttribute('data-key'),Number(button.getAttribute('data-step')),card);};});});
  }

  function step(index,key,amount,card) {
    var candidate=Object.assign({},farms[index]); candidate[key]=Math.max(0,Math.min(5,(Number(candidate[key])||0)+amount));
    if(total(candidate)>5){showMessage(tr('max'),false);return;}
    farms[index][key]=candidate[key]; card.querySelector('[data-value="'+key+'"]').textContent=candidate[key]; card.querySelector('[data-total]').textContent=total(farms[index]); showMessage('',true);
  }

  function showApp(){applyLocale();languageScreen.hidden=true;appScreen.hidden=false;render();}

  function send() {
    if(!dataIsValid){showMessage(tr('invalidData'),false);return;}
    var orders=farms.map(function(farm){return {farm_id:farm.id,settings:{castle_name:farm.castle_name,login:farm.login,password:farm.password,on_off:farm.on_off?1:0},resources:{food:farm.food,wood:farm.wood,steel:farm.steel,oil:farm.oil}};});
    tg=telegramApp(); if(!tg||typeof tg.sendData!=='function'){showMessage(tr('openTelegram'),false);return;}
    var json=JSON.stringify({action:'save_and_gather',language:lang||'en',orders:orders});
    if(json.length>4096){showMessage('Request is too large.',false);return;}
    sendBtn.disabled=true;sendBtn.textContent=tr('sending');
    try{tg.sendData(json);showMessage(tr('sent'),true);}catch(error){console.error(error);sendBtn.disabled=false;sendBtn.textContent=tr('send');showMessage(error.message||tr('openTelegram'),false);}
  }

  loadInitialData(); sendBtn.onclick=send; languageBtn.onclick=chooseLanguage; if(lang){showApp();}else{chooseLanguage();}
}());
