/* ============================================================
   China Nails — interactions
   ============================================================ */
(function () {
  'use strict';

  /* ----------  Language toggle  ---------- */
  var LANG_KEY = 'chinanails-lang';
  var body = document.body;

  function applyLang(lang) {
    document.documentElement.lang = lang;
    body.setAttribute('data-lang', lang);
    document.querySelectorAll('[data-es]').forEach(function (el) {
      var val = el.getAttribute('data-' + lang);
      if (val != null) el.innerHTML = val;
    });
    document.querySelectorAll('.lang button').forEach(function (b) {
      b.classList.toggle('active', b.getAttribute('data-setlang') === lang);
    });
    buildMarquee(lang);
    setWhatsApp(lang);
    try { localStorage.setItem(LANG_KEY, lang); } catch (e) {}
  }

  document.querySelectorAll('.lang button').forEach(function (b) {
    b.addEventListener('click', function () {
      applyLang(b.getAttribute('data-setlang'));
    });
  });

  /* ----------  WhatsApp link (prefilled, per language)  ---------- */
  var WA_NUMBER = '18134394239';
  var WA_MSG = {
    es: '¡Hola China Nails! Quiero reservar una cita 💅',
    en: "Hi China Nails! I'd like to book an appointment 💅"
  };
  function setWhatsApp(lang) {
    var href = 'https://wa.me/' + WA_NUMBER + '?text=' + encodeURIComponent(WA_MSG[lang] || WA_MSG.es);
    document.querySelectorAll('.wa-link').forEach(function (a) { a.setAttribute('href', href); });
  }

  /* ----------  Marquee  ---------- */
  var TERMS = {
    es: ['Manicura', 'Pedicura Spa', 'Uñas Acrílicas', 'Gel', 'Nail Art', 'Diseños'],
    en: ['Manicure', 'Spa Pedicure', 'Acrylic Nails', 'Gel', 'Nail Art', 'Designs']
  };
  function buildMarquee(lang) {
    var track = document.getElementById('stripTrack');
    if (!track) return;
    var items = TERMS[lang] || TERMS.es;
    var one = items.map(function (t) {
      return '<span class="star">✦</span><span>' + t + '</span>';
    }).join('');
    track.innerHTML = one + one;
  }

  /* ----------  Nav shadow on scroll  ---------- */
  var nav = document.getElementById('nav');
  function onScroll() {
    if (nav) nav.classList.toggle('scrolled', window.scrollY > 12);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  /* ----------  Mobile menu  ---------- */
  var burger = document.getElementById('burger');
  var menu = document.getElementById('mobileMenu');
  var scrim = document.getElementById('scrim');
  function setMenu(open) {
    if (!menu) return;
    burger.classList.toggle('open', open);
    menu.classList.toggle('open', open);
    scrim.classList.toggle('open', open);
    body.style.overflow = open ? 'hidden' : '';
  }
  if (burger) burger.addEventListener('click', function () {
    setMenu(!menu.classList.contains('open'));
  });
  if (scrim) scrim.addEventListener('click', function () { setMenu(false); });
  if (menu) menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () { setMenu(false); });
  });

  /* ----------  Scroll reveal  ---------- */
  var reveals = Array.prototype.slice.call(document.querySelectorAll('.reveal'));
  function revealAll() { reveals.forEach(function (el) { el.classList.add('in'); }); }

  if (!('IntersectionObserver' in window)) {
    revealAll();
  } else {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) {
          e.target.classList.add('in');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    reveals.forEach(function (el, i) {
      el.style.transitionDelay = (Math.min(i % 6, 5) * 60) + 'ms';
      io.observe(el);
    });
    window.addEventListener('load', function () { setTimeout(revealAll, 2500); });
  }

  /* ----------  Hours: highlight today + open-now badge  ---------- */
  (function () {
    var now = new Date();
    var day = now.getDay();
    var mins = now.getHours() * 60 + now.getMinutes();
    var sched = {
      1: [600, 1140], 2: [600, 1140], 3: [600, 1140], 4: [600, 1140], 5: [600, 1140],
      6: [600, 1140]
    };
    document.querySelectorAll('.hours-list li').forEach(function (li) {
      var days = (li.getAttribute('data-day') || '').split(',');
      if (days.indexOf(String(day)) !== -1) li.classList.add('today');
    });
    var open = sched[day] && mins >= sched[day][0] && mins < sched[day][1];
    var badge = document.querySelector('.badge-open');
    if (badge && !open) {
      var pulse = badge.querySelector('.pulse');
      var txt = badge.querySelector('span:last-child');
      if (pulse) pulse.style.background = '#b06a6a';
      badge.style.color = '#9b5757';
      badge.style.background = 'rgba(155,87,87,.1)';
      if (txt) { txt.setAttribute('data-es', 'Cerrado ahora'); txt.setAttribute('data-en', 'Closed now'); }
    }
  })();

  /* ----------  Init language  ---------- */
  var saved = 'es';
  try { saved = localStorage.getItem(LANG_KEY) || 'es'; } catch (e) {}
  applyLang(saved);
})();
