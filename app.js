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
    ar:{eyebrow:'لوحة مهام القلعة',title:'Doomsday Farm Bots',telegramId:'معرّف تيليجرام',farm:'القلعة',notice:'اختر وظيفة واحدة لكل قلعة: جمع الموارد أو قتل الزومبي. هجوم الزومبي يرسل كل الفيالق المتاحة أو لا يرسل شيئًا.',castleName:'اسم القلعة',email:'البريد الإلكتروني',password:'كلمة مرور جديدة',passwordHint:'اتركها فارغة للاحتفاظ بكلمة المرور الحالية',showPassword:'إظهار كلمة المرور',on:'تشغيل',off:'إيقاف',gather:'جمع الموارد',zombie:'قتل الزومبي',food:'الطعام',wood:'الخشب',steel:'الفولاذ',oil:'البترول',total:'إجمالي الفيالق',zombieLevel:'مستوى الزومبي',multiplier:'مضاعف الهجوم',autoMultiplier:'تلقائي: ×10 ثم ×5 ثم ×2 ثم عادي',normalMultiplier:'عادي بدون مضاعف',allLegions:'سيهاجم بكل الفيالق المتاحة. إذا لم تكفِ الطاقة أو عناصر المضاعف لكل الفيالق فلن يرسل أي فيلق.',noCamp:'التخييم بعد الهجوم مغلق دائمًا.',send:'💾 حفظ وتنفيذ المهمة',sending:'جارٍ إرسال الطلب...',sent:'تم إرسال الإعدادات والمهمة إلى البوت. ستصلك النتيجة في المحادثة.',max:'لا يمكن أن يتجاوز إجمالي الفيالق 5',none:'لا توجد قلعة مرتبطة بحسابك.',changeLanguage:'تغيير اللغة',openTelegram:'افتح الواجهة من زر البوت داخل تيليجرام',invalidData:'تعذر قراءة بيانات القلعة. افتح الواجهة من البوت مرة أخرى.'},
    en:{eyebrow:'FARM ACTIONS',title:'Doomsday Farm Bots',telegramId:'Telegram ID',farm:'Farm',notice:'Choose one action per farm: gather resources or kill zombies. Zombie attacks send every available legion or none.',castleName:'Castle name',email:'Email',password:'New password',passwordHint:'Leave blank to keep the current password',showPassword:'Show password',on:'ON',off:'OFF',gather:'Gather resources',zombie:'Kill zombies',food:'Food',wood:'Wood',steel:'Steel',oil:'Oil',total:'Total legions',zombieLevel:'Zombie level',multiplier:'Attack multiplier',autoMultiplier:'Auto: ×10, then ×5, then ×2, then normal',normalMultiplier:'Normal, no multiplier',allLegions:'Every available legion will attack. If energy or multiplier items cannot cover all legions, none are sent.',noCamp:'Camp after attack is always off.',send:'💾 Save and execute action',sending:'Sending request...',sent:'Settings and action sent. The result will arrive in the chat.',max:'Total legions cannot exceed 5',none:'No farm is linked to your account.',changeLanguage:'Change language',openTelegram:'Open this panel from the Telegram bot button',invalidData:'Farm data could not be read. Open the panel from the bot again.'},
    fr:{eyebrow:'ACTIONS DE LA FERME',title:'Doomsday Farm Bots',telegramId:'Identifiant Telegram',farm:'Ferme',notice:'Choisissez une action par ferme : collecter des ressources ou éliminer des zombies. L’attaque de zombies envoie toutes les légions disponibles, ou aucune.',castleName:'Nom du château',email:'Adresse e-mail',password:'Nouveau mot de passe',passwordHint:'Laissez vide pour conserver le mot de passe actuel',showPassword:'Afficher le mot de passe',on:'ACTIVÉE',off:'ARRÊTÉE',gather:'Collecter des ressources',zombie:'Éliminer des zombies',food:'Nourriture',wood:'Bois',steel:'Acier',oil:'Pétrole',total:'Total des légions',zombieLevel:'Niveau du zombie',multiplier:'Multiplicateur d’attaque',autoMultiplier:'Auto : ×10, puis ×5, puis ×2, puis normal',normalMultiplier:'Normal, sans multiplicateur',allLegions:'Toutes les légions disponibles attaqueront. Si l’énergie ou les objets multiplicateurs ne suffisent pas pour toutes, aucune ne sera envoyée.',noCamp:'Le campement après l’attaque est toujours désactivé.',send:'💾 Enregistrer et exécuter l’action',sending:'Envoi de la demande...',sent:'Paramètres et action envoyés. Le résultat arrivera dans la discussion.',max:'Le total des légions ne peut pas dépasser 5',none:'Aucune ferme liée à votre compte.',changeLanguage:'Changer de langue',openTelegram:'Ouvrez ce panneau depuis le bouton du bot Telegram',invalidData:'Impossible de lire les données de la ferme. Rouvrez le panneau depuis le bot.'},
    de:{eyebrow:'FARM-AKTIONEN',title:'Doomsday Farm Bots',telegramId:'Telegram-ID',farm:'Farm',notice:'Wähle pro Farm eine Aktion: Ressourcen sammeln oder Zombies töten. Beim Zombieangriff werden alle verfügbaren Legionen gesendet oder keine.',castleName:'Name der Burg',email:'E-Mail-Adresse',password:'Neues Passwort',passwordHint:'Leer lassen, um das aktuelle Passwort zu behalten',showPassword:'Passwort anzeigen',on:'AKTIV',off:'AUS',gather:'Ressourcen sammeln',zombie:'Zombies töten',food:'Nahrung',wood:'Holz',steel:'Stahl',oil:'Öl',total:'Legionen gesamt',zombieLevel:'Zombie-Stufe',multiplier:'Angriffsmultiplikator',autoMultiplier:'Automatisch: ×10, dann ×5, dann ×2, dann normal',normalMultiplier:'Normal, ohne Multiplikator',allLegions:'Alle verfügbaren Legionen greifen an. Reichen Energie oder Multiplikator-Gegenstände nicht für alle, wird keine Legion gesendet.',noCamp:'Lagern nach dem Angriff ist immer deaktiviert.',send:'💾 Speichern und Aktion ausführen',sending:'Anfrage wird gesendet...',sent:'Einstellungen und Aktion wurden gesendet. Das Ergebnis erscheint im Chat.',max:'Insgesamt sind höchstens 5 Legionen erlaubt',none:'Mit deinem Konto ist keine Farm verknüpft.',changeLanguage:'Sprache ändern',openTelegram:'Öffne dieses Panel über die Schaltfläche im Telegram-Bot',invalidData:'Die Farmdaten konnten nicht gelesen werden. Öffne das Panel erneut über den Bot.'},
    it:{eyebrow:'AZIONI DELLA FATTORIA',title:'Doomsday Farm Bots',telegramId:'ID Telegram',farm:'Fattoria',notice:'Scegli un’azione per ogni fattoria: raccogliere risorse o eliminare zombie. L’attacco zombie invia tutte le legioni disponibili oppure nessuna.',castleName:'Nome del castello',email:'Indirizzo e-mail',password:'Nuova password',passwordHint:'Lascia vuoto per mantenere la password attuale',showPassword:'Mostra password',on:'ATTIVA',off:'FERMA',gather:'Raccogli risorse',zombie:'Elimina zombie',food:'Cibo',wood:'Legno',steel:'Acciaio',oil:'Petrolio',total:'Legioni totali',zombieLevel:'Livello zombie',multiplier:'Moltiplicatore d’attacco',autoMultiplier:'Automatico: ×10, poi ×5, poi ×2, poi normale',normalMultiplier:'Normale, senza moltiplicatore',allLegions:'Attaccheranno tutte le legioni disponibili. Se energia o oggetti moltiplicatori non bastano per tutte, non ne verrà inviata nessuna.',noCamp:'L’accampamento dopo l’attacco è sempre disattivato.',send:'💾 Salva ed esegui l’azione',sending:'Invio richiesta...',sent:'Impostazioni e azione inviate. Il risultato arriverà in chat.',max:'Il totale delle legioni non può superare 5',none:'Nessuna fattoria collegata al tuo account.',changeLanguage:'Cambia lingua',openTelegram:'Apri questo pannello dal pulsante del bot Telegram',invalidData:'Impossibile leggere i dati della fattoria. Riapri il pannello dal bot.'},
    es:{eyebrow:'ACCIONES DE LA GRANJA',title:'Doomsday Farm Bots',telegramId:'ID de Telegram',farm:'Granja',notice:'Elige una acción por granja: recolectar recursos o eliminar zombis. El ataque zombi envía todas las legiones disponibles o ninguna.',castleName:'Nombre del castillo',email:'Correo electrónico',password:'Nueva contraseña',passwordHint:'Déjalo vacío para conservar la contraseña actual',showPassword:'Mostrar contraseña',on:'ACTIVA',off:'DETENIDA',gather:'Recolectar recursos',zombie:'Eliminar zombis',food:'Comida',wood:'Madera',steel:'Acero',oil:'Petróleo',total:'Legiones totales',zombieLevel:'Nivel del zombi',multiplier:'Multiplicador de ataque',autoMultiplier:'Automático: ×10, luego ×5, luego ×2 y después normal',normalMultiplier:'Normal, sin multiplicador',allLegions:'Atacarán todas las legiones disponibles. Si la energía o los objetos multiplicadores no alcanzan para todas, no se enviará ninguna.',noCamp:'Acampar después del ataque siempre está desactivado.',send:'💾 Guardar y ejecutar la acción',sending:'Enviando solicitud...',sent:'Configuración y acción enviadas. El resultado llegará al chat.',max:'El total de legiones no puede superar 5',none:'No hay ninguna granja vinculada a tu cuenta.',changeLanguage:'Cambiar idioma',openTelegram:'Abre este panel desde el botón del bot de Telegram',invalidData:'No se pudieron leer los datos de la granja. Vuelve a abrir el panel desde el bot.'},
    pt:{eyebrow:'AÇÕES DA FAZENDA',title:'Doomsday Farm Bots',telegramId:'ID do Telegram',farm:'Fazenda',notice:'Escolha uma ação por fazenda: coletar recursos ou eliminar zumbis. O ataque a zumbis envia todas as legiões disponíveis ou nenhuma.',castleName:'Nome do castelo',email:'E-mail',password:'Nova senha',passwordHint:'Deixe em branco para manter a senha atual',showPassword:'Mostrar senha',on:'ATIVA',off:'PARADA',gather:'Coletar recursos',zombie:'Eliminar zumbis',food:'Comida',wood:'Madeira',steel:'Aço',oil:'Petróleo',total:'Total de legiões',zombieLevel:'Nível do zumbi',multiplier:'Multiplicador de ataque',autoMultiplier:'Automático: ×10, depois ×5, depois ×2 e então normal',normalMultiplier:'Normal, sem multiplicador',allLegions:'Todas as legiões disponíveis atacarão. Se a energia ou os itens multiplicadores não forem suficientes para todas, nenhuma será enviada.',noCamp:'Acampar após o ataque fica sempre desativado.',send:'💾 Salvar e executar a ação',sending:'Enviando solicitação...',sent:'Configurações e ação enviadas. O resultado chegará no chat.',max:'O total de legiões não pode passar de 5',none:'Nenhuma fazenda está vinculada à sua conta.',changeLanguage:'Alterar idioma',openTelegram:'Abra este painel pelo botão do bot no Telegram',invalidData:'Não foi possível ler os dados da fazenda. Abra o painel novamente pelo bot.'},
    ru:{eyebrow:'ДЕЙСТВИЯ ФЕРМЫ',title:'Doomsday Farm Bots',telegramId:'ID Telegram',farm:'Ферма',notice:'Выберите одно действие для каждой фермы: сбор ресурсов или уничтожение зомби. В атаку отправляются все доступные легионы либо ни одного.',castleName:'Название замка',email:'Электронная почта',password:'Новый пароль',passwordHint:'Оставьте пустым, чтобы сохранить текущий пароль',showPassword:'Показать пароль',on:'ВКЛ',off:'ВЫКЛ',gather:'Собирать ресурсы',zombie:'Уничтожать зомби',food:'Еда',wood:'Дерево',steel:'Сталь',oil:'Нефть',total:'Всего легионов',zombieLevel:'Уровень зомби',multiplier:'Множитель атаки',autoMultiplier:'Авто: ×10, затем ×5, затем ×2, затем обычная атака',normalMultiplier:'Обычная атака без множителя',allLegions:'Атакуют все доступные легионы. Если энергии или предметов-множителей не хватает на всех, не отправится ни один легион.',noCamp:'Лагерь после атаки всегда отключён.',send:'💾 Сохранить и выполнить действие',sending:'Отправка запроса...',sent:'Настройки и действие отправлены. Результат придёт в чат.',max:'Общее число легионов не может превышать 5',none:'К вашему аккаунту не привязана ферма.',changeLanguage:'Сменить язык',openTelegram:'Откройте эту панель кнопкой в Telegram-боте',invalidData:'Не удалось прочитать данные фермы. Откройте панель заново через бота.'}
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
  function savedResourceCount(farm,key) { var saved=farm&&farm.resources&&typeof farm.resources==='object'?farm.resources:farm; var count=Number(saved&&saved[key]); return isFinite(count)?Math.max(0,Math.min(5,Math.floor(count))):0; }
  function savedZombie(farm) { var value=farm&&farm.zombie&&typeof farm.zombie==='object'?farm.zombie:{}; var level=Math.floor(Number(value.level)||10); var multiplier=String(value.multiplier||'auto'); if(['auto','1','2','5','10'].indexOf(multiplier)<0)multiplier='auto'; return {level:Math.max(1,Math.min(40,level)),multiplier:multiplier}; }
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
        var zombie=savedZombie(farm); var operation=String(farm.operation||'gather'); if(['gather','zombie'].indexOf(operation)<0)operation='gather';
        return {id:String(farm.id||''),castle_name:String(farm.castle_name||farm.name||''),login:String(farm.login||''),password:'',on_off:Number(farm.on_off)?1:0,operation:operation,zombie_level:zombie.level,zombie_multiplier:zombie.multiplier,food:savedResourceCount(farm,'food'),wood:savedResourceCount(farm,'wood'),steel:savedResourceCount(farm,'steel'),oil:savedResourceCount(farm,'oil')};
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

  function operationTabs(farm){return '<div class="operation-tabs"><button type="button" data-operation="gather" class="operation-tab '+(farm.operation==='gather'?'active':'')+'">🌾 '+tr('gather')+'</button><button type="button" data-operation="zombie" class="operation-tab '+(farm.operation==='zombie'?'active':'')+'">🧟 '+tr('zombie')+'</button></div>';}
  function zombiePanel(farm){return '<div class="action-panel zombie-panel" data-panel="zombie" '+(farm.operation==='zombie'?'':'hidden')+'><label class="account-field"><span>'+tr('zombieLevel')+'</span><input type="number" min="1" max="40" inputmode="numeric" data-zombie="level" value="'+farm.zombie_level+'"></label><label class="account-field"><span>'+tr('multiplier')+'</span><select data-zombie="multiplier"><option value="auto" '+(farm.zombie_multiplier==='auto'?'selected':'')+'>'+tr('autoMultiplier')+'</option><option value="10" '+(farm.zombie_multiplier==='10'?'selected':'')+'>×10</option><option value="5" '+(farm.zombie_multiplier==='5'?'selected':'')+'>×5</option><option value="2" '+(farm.zombie_multiplier==='2'?'selected':'')+'>×2</option><option value="1" '+(farm.zombie_multiplier==='1'?'selected':'')+'>'+tr('normalMultiplier')+'</option></select></label><div class="safety-note">🛡️ '+tr('allLegions')+'</div><div class="camp-note">⛺ '+tr('noCamp')+'</div></div>';}

  function render() {
    userInfo.textContent=telegramId?tr('telegramId')+': '+telegramId:''; sendBtn.textContent=tr('send'); showMessage('',true);
    if(!dataIsValid){farmsRoot.innerHTML='';sendBtn.disabled=true;showMessage(tr('invalidData'),false);return;}
    sendBtn.disabled=false;
    if(!farms.length){farmsRoot.innerHTML='<div class="panel empty"><div class="empty-icon">🏰</div><div>'+tr('none')+'</div></div>';return;}
    farmsRoot.innerHTML=farms.map(function(farm,index){return '<article class="farm-card" data-index="'+index+'"><div class="farm-head"><div class="farm-title"><h2>🏰 '+escapeHtml(farm.castle_name||tr('farm'))+'</h2><div class="farm-id">ID: '+escapeHtml(farm.id)+'</div></div><button type="button" class="toggle '+(farm.on_off?'on':'off')+'" data-toggle>'+(farm.on_off?tr('on'):tr('off'))+'</button></div><div class="account-fields"><label class="account-field"><span>'+tr('castleName')+'</span><input type="text" maxlength="200" data-account="castle_name" value="'+escapeHtml(farm.castle_name)+'"></label><label class="account-field"><span>'+tr('email')+'</span><input type="email" maxlength="200" data-account="login" value="'+escapeHtml(farm.login)+'"></label><label class="account-field"><span>'+tr('password')+'</span><div class="password-wrap"><input type="password" maxlength="200" autocomplete="new-password" placeholder="'+escapeHtml(tr('passwordHint'))+'" data-account="password" value=""><button type="button" class="password-toggle" data-password-toggle aria-label="'+escapeHtml(tr('showPassword'))+'">👁️</button></div></label></div>'+operationTabs(farm)+'<div class="action-panel" data-panel="gather" '+(farm.operation==='gather'?'':'hidden')+'><div class="resources">'+resources.map(function(key){return resourceRow(index,key);}).join('')+'</div><div class="total"><span>'+tr('total')+'</span><span><b data-total>'+total(farm)+'</b> / 5</span></div></div>'+zombiePanel(farm)+'</article>';}).join('');
    Array.prototype.forEach.call(farmsRoot.querySelectorAll('.farm-card'),function(card){var index=Number(card.getAttribute('data-index'));card.querySelector('[data-toggle]').onclick=function(event){farms[index].on_off=farms[index].on_off?0:1;event.currentTarget.className='toggle '+(farms[index].on_off?'on':'off');event.currentTarget.textContent=farms[index].on_off?tr('on'):tr('off');};Array.prototype.forEach.call(card.querySelectorAll('[data-account]'),function(input){input.oninput=function(){farms[index][input.getAttribute('data-account')]=input.value;if(input.getAttribute('data-account')==='castle_name'){card.querySelector('.farm-title h2').textContent='🏰 '+(input.value||tr('farm'));}};});var passwordToggle=card.querySelector('[data-password-toggle]');passwordToggle.onclick=function(){var input=card.querySelector('[data-account="password"]');input.type=input.type==='password'?'text':'password';};Array.prototype.forEach.call(card.querySelectorAll('[data-operation]'),function(button){button.onclick=function(){farms[index].operation=button.getAttribute('data-operation');Array.prototype.forEach.call(card.querySelectorAll('[data-operation]'),function(tab){tab.classList.toggle('active',tab.getAttribute('data-operation')===farms[index].operation);});Array.prototype.forEach.call(card.querySelectorAll('[data-panel]'),function(panel){panel.hidden=panel.getAttribute('data-panel')!==farms[index].operation;});};});Array.prototype.forEach.call(card.querySelectorAll('[data-zombie]'),function(input){input.onchange=function(){if(input.getAttribute('data-zombie')==='level'){farms[index].zombie_level=Math.max(1,Math.min(40,Math.floor(Number(input.value)||10)));input.value=farms[index].zombie_level;}else{farms[index].zombie_multiplier=input.value;}};});Array.prototype.forEach.call(card.querySelectorAll('[data-step]'),function(button){button.onclick=function(){step(index,button.getAttribute('data-key'),Number(button.getAttribute('data-step')),card);};});});
  }

  function step(index,key,amount,card) {
    var candidate=Object.assign({},farms[index]); candidate[key]=Math.max(0,Math.min(5,(Number(candidate[key])||0)+amount));
    if(total(candidate)>5){showMessage(tr('max'),false);return;}
    farms[index][key]=candidate[key]; card.querySelector('[data-value="'+key+'"]').textContent=candidate[key]; card.querySelector('[data-total]').textContent=total(farms[index]); showMessage('',true);
  }

  function showApp(){applyLocale();languageScreen.hidden=true;appScreen.hidden=false;render();}

  function send() {
    if(!dataIsValid){showMessage(tr('invalidData'),false);return;}
    var orders=farms.map(function(farm){return {farm_id:farm.id,operation:farm.operation,zombie:{level:farm.zombie_level,multiplier:farm.zombie_multiplier},settings:{castle_name:farm.castle_name,login:farm.login,password:farm.password,on_off:farm.on_off?1:0},resources:{food:farm.food,wood:farm.wood,steel:farm.steel,oil:farm.oil}};});
    tg=telegramApp(); if(!tg||typeof tg.sendData!=='function'){showMessage(tr('openTelegram'),false);return;}
    var json=JSON.stringify({action:'save_and_execute',language:lang||'en',orders:orders});
    if(json.length>4096){showMessage('Request is too large.',false);return;}
    sendBtn.disabled=true;sendBtn.textContent=tr('sending');
    try{tg.sendData(json);showMessage(tr('sent'),true);}catch(error){console.error(error);sendBtn.disabled=false;sendBtn.textContent=tr('send');showMessage(error.message||tr('openTelegram'),false);}
  }

  loadInitialData(); sendBtn.onclick=send; languageBtn.onclick=chooseLanguage; if(lang){showApp();}else{chooseLanguage();}
}());
