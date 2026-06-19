/* =============================================
   CONNECT THE WORLD — Travel Assistant Chatbot
   ============================================= */

(function () {
  'use strict';

  /* ---- Knowledge base ---- */
  var KB = [
    {
      patterns: ['hello','hi','hey','good morning','good evening','good afternoon','salam','مرحبا','السلام'],
      response: "👋 Hello! Welcome to <strong>Connect The World</strong>. I'm your personal travel assistant.<br><br>How can I help you today? You can ask me about our packages, destinations, pricing, or how to book a trip!"
    },
    {
      patterns: ['package','packages','tour','tours','what do you offer','offerings'],
      response: "✈️ We offer <strong>6 handpicked travel packages</strong>:<br><br>🏙️ <strong>Dubai Luxury Escape</strong> — 5D/4N from AED 3,499<br>🗺️ <strong>European Grand Tour</strong> — 14D/13N from AED 8,999<br>🏝️ <strong>Maldives Honeymoon</strong> — 7D/6N from AED 12,499<br>🏯 <strong>Japan Discovery</strong> — 10D/9N from AED 7,299<br>🦁 <strong>Safari & Serengeti</strong> — 8D/7N from AED 9,799<br>🕌 <strong>Turkey Highlights</strong> — 9D/8N from AED 5,699<br><br>All packages are fully customisable. Which one interests you?"
    },
    {
      patterns: ['dubai','burj','desert safari','dhow'],
      response: "🏙️ <strong>Dubai Luxury Escape</strong> — 5 Days / 4 Nights<br><br>✅ Burj Khalifa visit<br>✅ Desert Safari with BBQ dinner<br>✅ Abu Dhabi day trip<br>✅ Gold Souk & Dubai Mall<br>✅ Traditional Dhow Cruise dinner<br><br>💰 From <strong>AED 3,499 per person</strong> (up to 8 persons)<br><br>Ready to book? <a href='#enquiry'>Send us an enquiry</a> and we'll get back to you within 24 hours!"
    },
    {
      patterns: ['europe','european','paris','rome','barcelona','amsterdam'],
      response: "🗺️ <strong>European Grand Tour</strong> — 14 Days / 13 Nights<br><br>🗼 Paris & Palace of Versailles<br>🏔️ Swiss Alps – Interlaken<br>🏛️ Rome – Colosseum & Vatican<br>⛪ Barcelona – Sagrada Familia<br><br>💰 From <strong>AED 8,999 per person</strong> (up to 20 persons)<br><br>This is our most popular group tour! <a href='#enquiry'>Enquire now</a> to check availability."
    },
    {
      patterns: ['maldives','honeymoon','overwater','villa','romantic'],
      response: "🏝️ <strong>Maldives Honeymoon Package</strong> — 7 Days / 6 Nights<br><br>💑 Private overwater villa<br>🤿 Guided snorkelling & dolphin watching<br>💆 Couples spa treatment<br>🏝️ Island hopping adventure<br>🌅 Candlelit beachside dinner<br><br>💰 From <strong>AED 12,499 per person</strong> (2 persons)<br><br>Perfect for couples! <a href='#enquiry'>Send an enquiry</a> and we'll craft your dream honeymoon."
    },
    {
      patterns: ['japan','tokyo','kyoto','cherry','blossom','samurai'],
      response: "🏯 <strong>Japan Discovery</strong> — 10 Days / 9 Nights<br><br>🌸 Cherry blossoms & ancient temples<br>🚄 Bullet train experience<br>🍜 Authentic food tours<br>🏙️ Modern Tokyo exploration<br>⛩️ Traditional tea ceremony in Kyoto<br><br>💰 From <strong>AED 7,299 per person</strong> (up to 15 persons)<br><br><a href='#enquiry'>Enquire now</a> — this is a fan favourite!"
    },
    {
      patterns: ['safari','serengeti','africa','tanzania','wildlife','lion','migration'],
      response: "🦁 <strong>Safari & Serengeti</strong> — 8 Days / 7 Nights<br><br>🐘 Witness the Great Migration<br>🦒 Ngorongoro Crater game drive<br>🌅 Luxury tented camps<br>📸 Professional wildlife photography<br><br>💰 From <strong>AED 9,799 per person</strong> (up to 10 persons)<br><br>A life-changing experience awaits! <a href='#enquiry'>Book your safari</a> today."
    },
    {
      patterns: ['turkey','istanbul','cappadocia','balloon','ankara','bosphorus'],
      response: "🕌 <strong>Turkey Highlights</strong> — 9 Days / 8 Nights<br><br>🕌 Istanbul's grand mosques & bazaars<br>🎈 Hot-air balloon over Cappadocia<br>🌊 Aegean coast exploration<br>🍢 Turkish culinary experiences<br><br>💰 From <strong>AED 5,699 per person</strong> (up to 18 persons)<br><br>One of our best value packages! <a href='#enquiry'>Enquire here</a>."
    },
    {
      patterns: ['destination','destinations','where','countries','places','travel to'],
      response: "🌍 We cover <strong>50+ destinations</strong> worldwide, including:<br><br>🏖️ <strong>Middle East</strong> — Dubai, Abu Dhabi, Jordan<br>🌿 <strong>Asia</strong> — Japan, Thailand, Bali, Maldives<br>🏰 <strong>Europe</strong> — France, Italy, Spain, Switzerland, Turkey<br>🦁 <strong>Africa</strong> — Tanzania, Kenya, Morocco<br>🏙️ <strong>Americas</strong> — USA, Canada, Brazil<br><br>Don't see your dream destination? <a href='#enquiry'>Tell us</a> — we can arrange custom trips anywhere!"
    },
    {
      patterns: ['price','cost','how much','pricing','rate','fee','aed','budget'],
      response: "💰 Our packages start from <strong>AED 3,499 per person</strong>.<br><br>📌 Dubai — from AED 3,499<br>📌 Turkey — from AED 5,699<br>📌 Japan — from AED 7,299<br>📌 Europe — from AED 8,999<br>📌 Safari — from AED 9,799<br>📌 Maldives — from AED 12,499<br><br>All prices include accommodation, transport & guided tours. We also offer <strong>group discounts</strong> for 10+ persons. <a href='#enquiry'>Get a custom quote</a>!"
    },
    {
      patterns: ['book','booking','reserve','reservation','how to book','get started'],
      response: "📋 Booking is simple — <strong>3 easy steps</strong>:<br><br>1️⃣ <a href='#enquiry'>Fill in our enquiry form</a> with your details<br>2️⃣ Our travel expert contacts you within <strong>24 hours</strong><br>3️⃣ We finalise your itinerary & process payment<br><br>You can also reach us directly:<br>📞 <strong>+971 4 321 9876</strong><br>📧 <strong>info@connecttheworld.ae</strong><br><br>We're open Mon–Sat, 9AM–7PM UAE time."
    },
    {
      patterns: ['visa','visas','visa assistance','visa help','visa application'],
      response: "🛂 Yes! We provide <strong>comprehensive visa assistance</strong> for all major destinations.<br><br>Our team will:<br>✅ Guide you through the application process<br>✅ Prepare and review your documents<br>✅ Track your visa status<br>✅ Handle re-applications if needed<br><br>Visa processing time varies by destination. <a href='#enquiry'>Contact us</a> early to avoid delays!"
    },
    {
      patterns: ['insurance','travel insurance','cover','coverage','accident','medical'],
      response: "🛡️ We <strong>strongly recommend</strong> travel insurance for every trip!<br><br>Our insurance plans cover:<br>✅ Medical emergencies<br>✅ Trip cancellation/delay<br>✅ Lost baggage<br>✅ Emergency evacuation<br><br>We offer competitive rates and can arrange coverage for individuals, couples, or groups. Ask us when booking your package!"
    },
    {
      patterns: ['group','group tour','groups','family','corporate','team','event'],
      response: "👥 We specialise in <strong>group travel</strong> of all sizes!<br><br>🏷️ <strong>Group discounts</strong> for 10+ persons<br>🚌 Private coaches & transport<br>🎯 Dedicated group coordinator<br>🏨 Group hotel bookings<br>🍽️ Custom dining arrangements<br><br>We handle corporate retreats, family reunions, school trips, and more. <a href='#enquiry'>Get a group quote</a>!"
    },
    {
      patterns: ['custom','customise','customize','tailor','personalise','personalize','special','bespoke'],
      response: "✏️ Every trip we plan is <strong>fully customisable</strong>!<br><br>You can adjust:<br>🗓️ Travel dates & duration<br>🏨 Accommodation level (standard to ultra-luxury)<br>🎯 Activities & excursions<br>👨‍👩‍👧 Group size<br>💰 Budget range<br><br>Just share your preferences and we'll build your perfect itinerary from scratch. <a href='#enquiry'>Start planning</a>!"
    },
    {
      patterns: ['contact','phone','call','email','reach','office','address','location'],
      response: "📍 <strong>Connect The World — Dubai Office</strong><br><br>🏢 Office 412, Al Habtoor Business Tower<br>&nbsp;&nbsp;&nbsp;&nbsp;Dubai Marina, Dubai, UAE<br>📞 <strong>+971 4 321 9876</strong><br>📧 <strong>info@connecttheworld.ae</strong><br>🕐 Mon–Sat: 9:00 AM – 7:00 PM<br><br>You can also <a href='#enquiry'>send an online enquiry</a> and we'll reply within 24 hours!"
    },
    {
      patterns: ['hours','timing','open','office hours','working hours','when are you'],
      response: "🕐 Our office is open:<br><br><strong>Monday – Saturday</strong><br>9:00 AM – 7:00 PM (UAE Time, GST)<br><br>We're closed on Sundays and UAE public holidays.<br><br>Outside office hours? <a href='#enquiry'>Leave us an enquiry</a> and we'll respond first thing next working day!"
    },
    {
      patterns: ['payment','pay','how to pay','credit card','bank transfer','cash'],
      response: "💳 We accept multiple payment methods:<br><br>✅ Bank transfer (local & international)<br>✅ Credit & debit cards (Visa, Mastercard, Amex)<br>✅ Cash payments at our Dubai office<br><br>All online payments are <strong>SSL encrypted</strong>. We typically require a <strong>deposit to confirm booking</strong>, with the balance due before departure."
    },
    {
      patterns: ['arabic','عربي','عربية','arab','language'],
      response: "نعم، نقدم خدماتنا باللغة <strong>العربية والإنجليزية</strong> بشكل كامل! 🌐<br><br>فريقنا ثنائي اللغة وجاهز لمساعدتك في التخطيط لرحلتك بأي لغة تفضلها.<br><br>يمكنك التواصل معنا عبر <a href='#enquiry'>نموذج الاستفسار</a> أو الاتصال بنا مباشرة."
    },
    {
      patterns: ['experience','years','how long','since when','history','established','founded','trusted'],
      response: "🏆 <strong>14+ years</strong> of crafting unforgettable journeys!<br><br>Since 2010, we've served <strong>5,000+ happy travellers</strong> across <strong>50+ destinations</strong>, maintaining a <strong>98% satisfaction rate</strong>.<br><br>Our team of expert travel consultants brings deep destination knowledge and genuine passion for creating perfect trips. You're in safe hands! ✈️"
    },
    {
      patterns: ['thank','thanks','thank you','شكرا','appreciate','great','awesome','perfect','wonderful'],
      response: "😊 You're very welcome! It's our pleasure to help.<br><br>Is there anything else I can assist you with? Whether it's a specific destination, pricing, or booking — I'm here!<br><br>Ready to start planning? <a href='#enquiry'>Send us an enquiry</a> and our team will be in touch within 24 hours. ✈️"
    },
    {
      patterns: ['bye','goodbye','see you','later','take care','شكرا مع السلامة'],
      response: "👋 It was lovely chatting with you!<br><br>Whenever you're ready to explore the world, <strong>Connect The World</strong> is here for you.<br><br>Safe travels! ✈️🌍"
    }
  ];

  var SUGGESTIONS = ['📦 Packages', '✈️ Book a Trip', '💰 Pricing', '🌍 Destinations', '📞 Contact Us'];

  /* ---- Utility ---- */
  function now() {
    return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  }

  function findResponse(text) {
    var lower = text.toLowerCase().trim();
    for (var i = 0; i < KB.length; i++) {
      var entry = KB[i];
      for (var j = 0; j < entry.patterns.length; j++) {
        if (lower.indexOf(entry.patterns[j]) !== -1) {
          return entry.response;
        }
      }
    }
    return "🤔 I'm not sure I have specific information about that, but our travel experts definitely do!<br><br>Please <a href='#enquiry'>send us an enquiry</a> or call us at <strong>+971 4 321 9876</strong> and we'll help you plan the perfect trip. ✈️";
  }

  /* ---- DOM Builder ---- */
  function buildWidget() {
    /* Floating button */
    var btn = document.createElement('button');
    btn.className = 'ctw-chat-btn';
    btn.setAttribute('aria-label', 'Open travel assistant chat');
    btn.innerHTML =
      '<svg class="icon-chat" width="26" height="26" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/></svg>' +
      '<svg class="icon-close" width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>' +
      '<span class="ctw-badge" aria-label="1 new message">1</span>';

    /* Panel */
    var panel = document.createElement('div');
    panel.className = 'ctw-panel';
    panel.setAttribute('role', 'dialog');
    panel.setAttribute('aria-label', 'Travel assistant chat');

    /* Header */
    panel.innerHTML =
      '<div class="ctw-header">' +
        '<div class="ctw-avatar">🌍</div>' +
        '<div class="ctw-header-info">' +
          '<div class="ctw-header-name">Connect The World Assistant</div>' +
          '<div class="ctw-header-status"><span class="ctw-status-dot"></span>Online · Replies instantly</div>' +
        '</div>' +
        '<button class="ctw-header-close" aria-label="Close chat">✕</button>' +
      '</div>' +
      '<div class="ctw-suggestions">' +
        SUGGESTIONS.map(function(s) {
          return '<button class="ctw-chip">' + s + '</button>';
        }).join('') +
      '</div>' +
      '<div class="ctw-messages" id="ctwMessages"></div>' +
      '<div class="ctw-input-area">' +
        '<input class="ctw-input" id="ctwInput" type="text" placeholder="Ask me anything about travel…" maxlength="200" autocomplete="off" />' +
        '<button class="ctw-send" id="ctwSend" aria-label="Send message">' +
          '<svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="white" stroke-width="2.5"><path stroke-linecap="round" stroke-linejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>' +
        '</button>' +
      '</div>' +
      '<div class="ctw-footer">Powered by <span>Connect The World</span> · Available 24/7</div>';

    document.body.appendChild(btn);
    document.body.appendChild(panel);
    return { btn: btn, panel: panel };
  }

  /* ---- Message rendering ---- */
  function addMessage(container, text, isUser) {
    var wrap = document.createElement('div');
    wrap.className = 'ctw-msg' + (isUser ? ' user' : '');

    var icon = document.createElement('div');
    icon.className = 'ctw-msg-icon';
    icon.textContent = isUser ? '👤' : '🌍';

    var inner = document.createElement('div');

    var bubble = document.createElement('div');
    bubble.className = 'ctw-bubble';
    bubble.innerHTML = text;

    var time = document.createElement('div');
    time.className = 'ctw-time';
    time.textContent = now();

    inner.appendChild(bubble);
    inner.appendChild(time);
    wrap.appendChild(icon);
    wrap.appendChild(inner);
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;
  }

  function showTyping(container) {
    var wrap = document.createElement('div');
    wrap.className = 'ctw-typing';
    wrap.id = 'ctwTyping';

    var icon = document.createElement('div');
    icon.className = 'ctw-msg-icon';
    icon.textContent = '🌍';

    var dots = document.createElement('div');
    dots.className = 'ctw-typing-dots';
    dots.innerHTML = '<span></span><span></span><span></span>';

    wrap.appendChild(icon);
    wrap.appendChild(dots);
    container.appendChild(wrap);
    container.scrollTop = container.scrollHeight;
  }

  function removeTyping() {
    var el = document.getElementById('ctwTyping');
    if (el) el.remove();
  }

  /* ---- Core logic ---- */
  function sendMessage(text, messages) {
    if (!text.trim()) return;
    addMessage(messages, text, true);
    showTyping(messages);

    var delay = 800 + Math.random() * 600;
    setTimeout(function () {
      removeTyping();
      addMessage(messages, findResponse(text), false);
    }, delay);
  }

  /* ---- Init ---- */
  function init() {
    var els = buildWidget();
    var btn    = els.btn;
    var panel  = els.panel;
    var badge  = btn.querySelector('.ctw-badge');
    var msgs   = panel.querySelector('#ctwMessages');
    var input  = panel.querySelector('#ctwInput');
    var send   = panel.querySelector('#ctwSend');
    var close  = panel.querySelector('.ctw-header-close');
    var chips  = panel.querySelectorAll('.ctw-chip');

    /* Welcome message after short delay */
    setTimeout(function () {
      addMessage(msgs,
        "👋 Hi there! I'm your personal travel assistant from <strong>Connect The World</strong>.<br><br>I can help you explore our <strong>packages</strong>, find the perfect <strong>destination</strong>, get <strong>pricing</strong>, or answer any <strong>travel questions</strong>.<br><br>What can I help you with today? ✈️",
        false
      );
    }, 600);

    /* Toggle panel */
    function openChat() {
      panel.classList.add('is-open');
      btn.classList.add('is-open');
      if (badge) badge.classList.add('hidden');
      setTimeout(function () { input.focus(); }, 350);
    }
    function closeChat() {
      panel.classList.remove('is-open');
      btn.classList.remove('is-open');
    }

    btn.addEventListener('click', function () {
      panel.classList.contains('is-open') ? closeChat() : openChat();
    });
    close.addEventListener('click', closeChat);

    /* Send on button click */
    send.addEventListener('click', function () {
      sendMessage(input.value, msgs);
      input.value = '';
    });

    /* Send on Enter key */
    input.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input.value, msgs);
        input.value = '';
      }
    });

    /* Quick suggestion chips */
    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var label = chip.textContent.replace(/[^\w\s]/g, '').trim();
        openChat();
        setTimeout(function () {
          sendMessage(label, msgs);
        }, 100);
      });
    });

    /* Close on outside click */
    document.addEventListener('click', function (e) {
      if (panel.classList.contains('is-open') &&
          !panel.contains(e.target) &&
          !btn.contains(e.target)) {
        closeChat();
      }
    });

    /* ESC to close */
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeChat();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
