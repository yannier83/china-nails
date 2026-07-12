/* ============================================================
   China Nails — AI Chat Assistant
   ============================================================ */
(function () {
  'use strict';

  var PHONE = '18134394239';

  var KNOWLEDGE = {
    services: {
      es: [
        { name: 'Manicura clásica', price: '$25', desc: 'Limado, cutícula, hidratación y esmaltado tradicional.' },
        { name: 'Esmaltado semipermanente', price: '$35', desc: 'Color duradero en gel, brillo por semanas.' },
        { name: 'Uñas acrílicas', price: '$45', desc: 'Extensiones y refuerzo con forma y largo a tu gusto.' },
        { name: 'Pedicura spa', price: '$40', desc: 'Remojo, exfoliación, masaje y esmaltado de pies.' },
        { name: 'Nail art / diseños', price: '$10+', desc: 'Diseños personalizados, pedrería, francesa y temáticos.' },
        { name: 'Retiro y reparación', price: '$15', desc: 'Retiro seguro de gel/acrílico y arreglo de uñas dañadas.' }
      ],
      en: [
        { name: 'Classic manicure', price: '$25', desc: 'Shaping, cuticle care, hydration and classic polish.' },
        { name: 'Gel polish', price: '$35', desc: 'Long-lasting gel color with weeks of shine.' },
        { name: 'Acrylic nails', price: '$45', desc: 'Extensions and reinforcement, shaped to any length.' },
        { name: 'Spa pedicure', price: '$40', desc: 'Soak, exfoliation, massage and polish for your feet.' },
        { name: 'Nail art / designs', price: '$10+', desc: 'Custom designs, rhinestones, French and themed art.' },
        { name: 'Removal & repair', price: '$15', desc: 'Safe gel/acrylic removal and repair of damaged nails.' }
      ]
    },
    hours: {
      es: 'Lunes a Sábado: 10:00 AM – 7:00 PM\nDomingo: Cerrado',
      en: 'Monday – Saturday: 10:00 AM – 7:00 PM\nSunday: Closed'
    },
    location: {
      es: 'Spring Hill, FL 34608',
      en: 'Spring Hill, FL 34608'
    },
    contact: {
      es: 'Teléfono: (813) 439-4239\nEmail: chinayeinys@gmail.com\nInstagram: @chinanails91\nTikTok: @chinanails91',
      en: 'Phone: (813) 439-4239\nEmail: chinayeinys@gmail.com\nInstagram: @chinanails91\nTikTok: @chinanails91'
    }
  };

  var RESPONSES = {
    es: {
      greeting: '¡Hola! 👋 Soy el asistente virtual de China Nails. ¿En qué puedo ayudarte?',
      services: function () {
        var list = KNOWLEDGE.services.es.map(function (s) {
          return '<b>' + s.name + '</b> — desde ' + s.price + '\n' + s.desc;
        }).join('\n\n');
        return '💅 Estos son nuestros servicios (los precios son referenciales):\n\n' + list + '\n\n¿Te gustaría reservar una cita?';
      },
      hours: '🕐 Nuestro horario:\n\n' + KNOWLEDGE.hours.es + '\n\n¿Necesitas algo más?',
      location: '📍 Estamos en la zona de:\n\n' + KNOWLEDGE.location.es + '\n\n<a href="https://www.google.com/maps/search/?api=1&query=34608" target="_blank" rel="noopener">Ver zona en Google Maps →</a>\n\nPara darte la dirección exacta, primero agenda tu cita 📅:\n\n<a href="https://wa.me/' + PHONE + '?text=%C2%A1Hola%20China%20Nails!%20Quiero%20reservar%20una%20cita%20%F0%9F%92%85" target="_blank" rel="noopener">Reservar por WhatsApp →</a>',
      contact: '📞 Datos de contacto:\n\n' + KNOWLEDGE.contact.es,
      booking: '📅 ¡Genial! Para reservar tu cita puedes:\n\n• <a href="https://wa.me/' + PHONE + '?text=%C2%A1Hola%20China%20Nails!%20Quiero%20reservar%20una%20cita%20%F0%9F%92%85" target="_blank" rel="noopener">Escribirnos por WhatsApp →</a>\n• <a href="tel:+1' + PHONE + '">Llamar al (813) 439-4239 →</a>\n\n¡Te esperamos!',
      price: function () {
        var list = KNOWLEDGE.services.es.map(function (s) {
          return s.name + ': desde ' + s.price;
        }).join('\n');
        return '💰 Precios referenciales:\n\n' + list + '\n\nLos precios finales se confirman contigo. ¿Quieres reservar?';
      },
      manicure: '💅 <b>Manicura clásica</b> — desde $25\nIncluye limado, cutícula, hidratación y esmaltado.\n\n<b>Esmaltado semipermanente</b> — desde $35\nGel duradero con brillo por semanas.\n\n¿Te interesa reservar?',
      pedicure: '🦶 <b>Pedicura spa</b> — desde $40\nRemojo, exfoliación, masaje y esmaltado.\n\nUna experiencia relajante para tus pies. ¿Quieres agendar?',
      acrylic: '✨ <b>Uñas acrílicas</b> — desde $45\nExtensiones con la forma y largo que prefieras.\n\n<b>Nail art</b> — desde $10 adicional\nDiseños personalizados, pedrería y más.\n\n¿Te gustaría una cita?',
      thanks: '¡De nada! 😊 Si necesitas algo más, aquí estoy. ¡Te esperamos en China Nails! 💅',
      unknown: 'No estoy segura de entender tu pregunta 🤔 Puedo ayudarte con:\n\n• Servicios y precios\n• Horarios\n• Ubicación\n• Reservar cita\n• Contacto\n\n¿Sobre qué te gustaría saber?'
    },
    en: {
      greeting: 'Hi there! 👋 I\'m the China Nails virtual assistant. How can I help you?',
      services: function () {
        var list = KNOWLEDGE.services.en.map(function (s) {
          return '<b>' + s.name + '</b> — from ' + s.price + '\n' + s.desc;
        }).join('\n\n');
        return '💅 Here are our services (prices are approximate):\n\n' + list + '\n\nWould you like to book an appointment?';
      },
      hours: '🕐 Our hours:\n\n' + KNOWLEDGE.hours.en + '\n\nAnything else I can help with?',
      location: '📍 We\'re located in the:\n\n' + KNOWLEDGE.location.en + ' area\n\n<a href="https://www.google.com/maps/search/?api=1&query=34608" target="_blank" rel="noopener">View area on Google Maps →</a>\n\nTo get the exact address, please book your appointment first 📅:\n\n<a href="https://wa.me/' + PHONE + '?text=Hi%20China%20Nails!%20I\'d%20like%20to%20book%20an%20appointment%20%F0%9F%92%85" target="_blank" rel="noopener">Book on WhatsApp →</a>',
      contact: '📞 Contact info:\n\n' + KNOWLEDGE.contact.en,
      booking: '📅 Great! To book your appointment:\n\n• <a href="https://wa.me/' + PHONE + '?text=Hi%20China%20Nails!%20I\'d%20like%20to%20book%20an%20appointment%20%F0%9F%92%85" target="_blank" rel="noopener">Message us on WhatsApp →</a>\n• <a href="tel:+1' + PHONE + '">Call (813) 439-4239 →</a>\n\nWe look forward to seeing you!',
      price: function () {
        var list = KNOWLEDGE.services.en.map(function (s) {
          return s.name + ': from ' + s.price;
        }).join('\n');
        return '💰 Approximate pricing:\n\n' + list + '\n\nFinal prices are confirmed with you. Want to book?';
      },
      manicure: '💅 <b>Classic manicure</b> — from $25\nIncludes shaping, cuticle care, hydration and polish.\n\n<b>Gel polish</b> — from $35\nLong-lasting shine for weeks.\n\nInterested in booking?',
      pedicure: '🦶 <b>Spa pedicure</b> — from $40\nSoak, exfoliation, massage and polish.\n\nA relaxing treat for your feet. Want to schedule?',
      acrylic: '✨ <b>Acrylic nails</b> — from $45\nExtensions shaped to any length you like.\n\n<b>Nail art</b> — from $10 extra\nCustom designs, rhinestones and more.\n\nWould you like an appointment?',
      thanks: 'You\'re welcome! 😊 If you need anything else, I\'m here. See you at China Nails! 💅',
      unknown: 'I\'m not sure I understand 🤔 I can help with:\n\n• Services & pricing\n• Hours\n• Location\n• Booking an appointment\n• Contact info\n\nWhat would you like to know?'
    }
  };

  var QUICK = {
    es: [
      { label: 'Servicios', key: 'services' },
      { label: 'Precios', key: 'price' },
      { label: 'Horario', key: 'hours' },
      { label: 'Ubicación', key: 'location' },
      { label: 'Reservar cita', key: 'booking' }
    ],
    en: [
      { label: 'Services', key: 'services' },
      { label: 'Pricing', key: 'price' },
      { label: 'Hours', key: 'hours' },
      { label: 'Location', key: 'location' },
      { label: 'Book now', key: 'booking' }
    ]
  };

  var PATTERNS = [
    { keys: ['servicio', 'service', 'que ofrecen', 'what do you', 'menu', 'menú', 'opciones', 'options'], resp: 'services' },
    { keys: ['precio', 'price', 'cost', 'cuanto', 'cuánto', 'how much', 'tarifa', 'rate'], resp: 'price' },
    { keys: ['horario', 'hora', 'hour', 'when', 'abierto', 'open', 'cerrado', 'close', 'schedule', 'tiempo'], resp: 'hours' },
    { keys: ['donde', 'dónde', 'ubicacion', 'ubicación', 'dirección', 'direccion', 'where', 'location', 'address', 'map', 'mapa', 'llegar'], resp: 'location' },
    { keys: ['contacto', 'contact', 'telefono', 'teléfono', 'phone', 'email', 'correo', 'instagram', 'tiktok', 'redes', 'social'], resp: 'contact' },
    { keys: ['reservar', 'reserva', 'cita', 'book', 'appointment', 'agendar', 'schedule', 'turno'], resp: 'booking' },
    { keys: ['manicur', 'mani', 'gel', 'esmalte', 'polish', 'semipermanente'], resp: 'manicure' },
    { keys: ['pedicur', 'pedi', 'pie', 'feet', 'foot'], resp: 'pedicure' },
    { keys: ['acrilic', 'acrylic', 'nail art', 'diseño', 'design', 'extensi', 'pedreria', 'piedra', 'rhinestone'], resp: 'acrylic' },
    { keys: ['gracia', 'thank', 'genial', 'perfect', 'great', 'bye', 'adios', 'adiós', 'chao'], resp: 'thanks' },
    { keys: ['hola', 'hello', 'hi ', 'hey', 'buenas', 'buenos', 'buen dia', 'good morning', 'good afternoon'], resp: 'greeting' }
  ];

  function getLang() {
    return (document.body.getAttribute('data-lang') || 'es');
  }

  function matchIntent(text) {
    var lower = text.toLowerCase().trim();
    for (var i = 0; i < PATTERNS.length; i++) {
      for (var k = 0; k < PATTERNS[i].keys.length; k++) {
        if (lower.indexOf(PATTERNS[i].keys[k]) !== -1) return PATTERNS[i].resp;
      }
    }
    return 'unknown';
  }

  function getResponse(key) {
    var lang = getLang();
    var r = RESPONSES[lang][key] || RESPONSES[lang].unknown;
    return typeof r === 'function' ? r() : r;
  }

  function formatMsg(text) {
    return text.replace(/\n/g, '<br>').replace(/\*\*(.*?)\*\*/g, '<b>$1</b>');
  }

  /* ----------  Build UI  ---------- */
  var css = document.createElement('style');
  css.textContent = [
    '.cb-fab{position:fixed;bottom:24px;right:24px;z-index:90;width:60px;height:60px;border-radius:50%;',
    'background:linear-gradient(135deg,#3a2230,#5a3a4c);color:#faf3ee;border:none;cursor:pointer;',
    'box-shadow:0 6px 24px rgba(58,34,48,.45);display:flex;align-items:center;justify-content:center;',
    'transition:transform .3s,box-shadow .3s}',
    '.cb-fab:hover{transform:scale(1.08);box-shadow:0 8px 30px rgba(58,34,48,.6)}',
    '.cb-fab svg{width:28px;height:28px;transition:transform .3s}',
    '.cb-fab.open svg{transform:rotate(90deg)}',
    '.cb-panel{position:fixed;bottom:96px;right:24px;z-index:89;width:370px;max-width:calc(100vw - 32px);',
    'max-height:min(520px,70vh);border-radius:20px;background:#faf3ee;border:1px solid rgba(58,34,48,.14);',
    'box-shadow:0 24px 60px -12px rgba(58,34,48,.35);display:flex;flex-direction:column;',
    'transform:translateY(16px) scale(.96);opacity:0;pointer-events:none;transition:transform .35s cubic-bezier(.2,.7,.2,1),opacity .35s}',
    '.cb-panel.open{transform:none;opacity:1;pointer-events:auto}',
    '.cb-head{background:#3a2230;color:#faf3ee;padding:18px 20px;border-radius:20px 20px 0 0;display:flex;align-items:center;gap:12px;flex:none}',
    '.cb-head-dot{width:10px;height:10px;border-radius:50%;background:#c1455c;box-shadow:0 0 0 3px rgba(193,69,92,.25);flex:none}',
    '.cb-head-title{font-family:var(--serif,Georgia,serif);font-size:1.05rem}',
    '.cb-head-sub{font-size:.72rem;opacity:.7;letter-spacing:.08em}',
    '.cb-body{flex:1;overflow-y:auto;padding:16px;display:flex;flex-direction:column;gap:10px;scroll-behavior:smooth}',
    '.cb-msg{max-width:88%;padding:12px 16px;border-radius:16px;font-size:.9rem;line-height:1.55;word-wrap:break-word}',
    '.cb-msg a{color:#c1455c;text-decoration:underline}',
    '.cb-msg.bot{background:#f0e0db;color:#3a2230;align-self:flex-start;border-bottom-left-radius:4px}',
    '.cb-msg.user{background:#3a2230;color:#faf3ee;align-self:flex-end;border-bottom-right-radius:4px}',
    '.cb-quick{display:flex;flex-wrap:wrap;gap:6px;padding:0 16px 10px}',
    '.cb-quick button{font-family:var(--sans,system-ui,sans-serif);font-size:.76rem;padding:7px 14px;',
    'border-radius:20px;border:1px solid rgba(58,34,48,.2);background:transparent;color:#3a2230;',
    'cursor:pointer;transition:.25s;letter-spacing:.04em}',
    '.cb-quick button:hover{background:#3a2230;color:#faf3ee}',
    '.cb-foot{display:flex;gap:8px;padding:12px 16px;border-top:1px solid rgba(58,34,48,.1);flex:none}',
    '.cb-foot input{flex:1;border:1px solid rgba(58,34,48,.18);border-radius:24px;padding:10px 16px;',
    'font-family:var(--sans,system-ui,sans-serif);font-size:.88rem;background:transparent;color:#3a2230;outline:none}',
    '.cb-foot input:focus{border-color:#c1455c}',
    '.cb-foot input::placeholder{color:rgba(58,34,48,.4)}',
    '.cb-foot button{width:40px;height:40px;border-radius:50%;background:#c1455c;color:#faf3ee;border:none;',
    'cursor:pointer;display:flex;align-items:center;justify-content:center;transition:background .25s;flex:none}',
    '.cb-foot button:hover{background:#3a2230}',
    '.cb-typing{display:flex;gap:4px;align-items:center;padding:12px 16px;align-self:flex-start}',
    '.cb-typing span{width:7px;height:7px;border-radius:50%;background:#c1455c;opacity:.4;',
    'animation:cbBounce .6s infinite alternate}',
    '.cb-typing span:nth-child(2){animation-delay:.15s}',
    '.cb-typing span:nth-child(3){animation-delay:.3s}',
    '@keyframes cbBounce{to{opacity:1;transform:translateY(-3px)}}',
    '.cb-badge{position:absolute;top:-4px;right:-4px;width:18px;height:18px;border-radius:50%;',
    'background:#c1455c;color:#fff;font-size:.65rem;display:flex;align-items:center;justify-content:center;',
    'font-weight:600;border:2px solid #faf3ee}',
    '@media(max-width:520px){.cb-panel{bottom:0;right:0;left:0;width:100%;max-width:100%;max-height:85vh;',
    'border-radius:20px 20px 0 0}.cb-fab{bottom:16px;right:16px}}'
  ].join('\n');
  document.head.appendChild(css);

  var fab = document.createElement('button');
  fab.className = 'cb-fab';
  fab.setAttribute('aria-label', 'Chat assistant');
  fab.innerHTML = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><span class="cb-badge">1</span>';
  document.body.appendChild(fab);

  var panel = document.createElement('div');
  panel.className = 'cb-panel';
  panel.innerHTML = [
    '<div class="cb-head">',
    '  <span class="cb-head-dot"></span>',
    '  <div><div class="cb-head-title">China Nails</div><div class="cb-head-sub" data-es="Asistente virtual" data-en="Virtual assistant">Asistente virtual</div></div>',
    '</div>',
    '<div class="cb-body" id="cbBody"></div>',
    '<div class="cb-quick" id="cbQuick"></div>',
    '<div class="cb-foot">',
    '  <input type="text" id="cbInput" data-es-placeholder="Escribe tu pregunta..." data-en-placeholder="Type your question...">',
    '  <button id="cbSend" aria-label="Send"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></button>',
    '</div>'
  ].join('\n');
  document.body.appendChild(panel);

  var body = document.getElementById('cbBody');
  var input = document.getElementById('cbInput');
  var sendBtn = document.getElementById('cbSend');
  var quickWrap = document.getElementById('cbQuick');
  var isOpen = false;
  var greeted = false;

  function scrollChat() {
    setTimeout(function () { body.scrollTop = body.scrollHeight; }, 60);
  }

  function addMsg(html, who) {
    var div = document.createElement('div');
    div.className = 'cb-msg ' + who;
    div.innerHTML = formatMsg(html);
    body.appendChild(div);
    scrollChat();
  }

  function showTyping() {
    var t = document.createElement('div');
    t.className = 'cb-typing';
    t.id = 'cbTyping';
    t.innerHTML = '<span></span><span></span><span></span>';
    body.appendChild(t);
    scrollChat();
  }

  function hideTyping() {
    var t = document.getElementById('cbTyping');
    if (t) t.remove();
  }

  function botReply(key) {
    showTyping();
    var delay = 400 + Math.random() * 400;
    setTimeout(function () {
      hideTyping();
      addMsg(getResponse(key), 'bot');
    }, delay);
  }

  function renderQuick() {
    var lang = getLang();
    var items = QUICK[lang] || QUICK.es;
    quickWrap.innerHTML = '';
    items.forEach(function (q) {
      var btn = document.createElement('button');
      btn.textContent = q.label;
      btn.addEventListener('click', function () {
        addMsg(q.label, 'user');
        botReply(q.key);
      });
      quickWrap.appendChild(btn);
    });
  }

  function handleSend() {
    var text = input.value.trim();
    if (!text) return;
    addMsg(text, 'user');
    input.value = '';
    var intent = matchIntent(text);
    botReply(intent);
  }

  fab.addEventListener('click', function () {
    isOpen = !isOpen;
    panel.classList.toggle('open', isOpen);
    fab.classList.toggle('open', isOpen);
    var badge = fab.querySelector('.cb-badge');
    if (badge) badge.remove();
    if (isOpen && !greeted) {
      greeted = true;
      renderQuick();
      updatePlaceholder();
      botReply('greeting');
    }
    if (isOpen) input.focus();
  });

  sendBtn.addEventListener('click', handleSend);
  input.addEventListener('keydown', function (e) {
    if (e.key === 'Enter') handleSend();
  });

  function updatePlaceholder() {
    var lang = getLang();
    input.placeholder = lang === 'en' ? 'Type your question...' : 'Escribe tu pregunta...';
    var sub = panel.querySelector('.cb-head-sub');
    if (sub) sub.textContent = lang === 'en' ? 'Virtual assistant' : 'Asistente virtual';
    if (greeted) renderQuick();
  }

  var langObserver = new MutationObserver(function () { updatePlaceholder(); });
  langObserver.observe(document.body, { attributes: true, attributeFilter: ['data-lang'] });
})();
