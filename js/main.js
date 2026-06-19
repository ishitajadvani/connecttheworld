/* =============================================
   CONNECT THE WORLD - Main JavaScript
   ============================================= */

/* ---- TRANSLATIONS ---- */
const translations = {
  en: {
    dir: 'ltr',
    lang_toggle: '🌐 عربي',
    nav_home: 'Home',
    nav_destinations: 'Destinations',
    nav_packages: 'Packages',
    nav_itinerary: 'Itinerary',
    nav_about: 'About Us',
    nav_enquiry: 'Enquiry',
    nav_contact: 'Contact',
    hero_badge: 'Connect the World – Bringing the World Closer',
    hero_title: 'Explore the World with <span>Connect The World</span>',
    hero_subtitle: 'Unforgettable journeys, expertly crafted. Let us take you to the destinations you\'ve always dreamed of.',
    hero_btn1: '✈ Explore Packages',
    hero_btn2: 'Watch Our Story',
    stat1_num: '14+',
    stat1_label: 'Years of Experience',
    stat2_num: '5,000+',
    stat2_label: 'Happy Travellers',
    stat3_num: '50+',
    stat3_label: 'World Destinations',
    stat4_num: '98%',
    stat4_label: 'Satisfaction Rate',
    dest_tag: 'World Destinations',
    dest_title: 'Explore Our <span>Top Destinations</span>',
    dest_sub: 'From the pristine beaches of the Maldives to the historic streets of Europe — discover the world\'s most breathtaking places.',
    dest1_country: 'Switzerland',
    dest1_name: 'Swiss Alps & Zurich',
    dest1_desc: 'Breathtaking mountain scenery, charming villages, and world-class skiing in the heart of Europe.',
    dest1_tag: '7 Days',
    dest2_country: 'Japan',
    dest2_name: 'Tokyo & Kyoto',
    dest2_desc: 'Experience the perfect blend of ancient tradition and modern innovation in the Land of the Rising Sun.',
    dest2_tag: '10 Days',
    dest3_country: 'Maldives',
    dest3_name: 'Maldives Paradise',
    dest3_desc: 'Crystal-clear waters, overwater bungalows, and pristine white sand beaches await you.',
    dest3_tag: '5 Days',
    dest4_country: 'Italy',
    dest4_name: 'Rome & Tuscany',
    dest4_desc: 'Walk through centuries of history, savour authentic cuisine, and admire Renaissance art.',
    dest4_tag: '8 Days',
    dest5_country: 'Turkey',
    dest5_name: 'Istanbul & Cappadocia',
    dest5_desc: 'Where East meets West — explore stunning palaces, hot air balloons, and vibrant bazaars.',
    dest5_tag: '9 Days',
    dest6_country: 'Thailand',
    dest6_name: 'Bangkok & Phuket',
    dest6_desc: 'Golden temples, tropical beaches, exquisite street food, and warm Thai hospitality.',
    dest6_tag: '7 Days',
    pkg_tag: 'Our Packages',
    pkg_title: 'Handpicked <span>Travel Packages</span>',
    pkg_sub: 'All-inclusive packages designed for every kind of traveller — from adventure seekers to luxury lovers.',
    pkg_book: 'Book Now',
    pkg_from: 'From',
    pkg_per: '/ per person',
    pkg1_title: 'Dubai Luxury Escape',
    pkg1_days: '5 Days / 4 Nights',
    pkg1_persons: 'Up to 8 persons',
    pkg1_type: 'Luxury',
    pkg1_desc: 'Experience the glitz and glamour of Dubai — Burj Khalifa, desert safari, and a dhow cruise.',
    pkg1_badge: 'Best Seller',
    pkg2_title: 'European Grand Tour',
    pkg2_days: '14 Days / 13 Nights',
    pkg2_persons: 'Up to 20 persons',
    pkg2_type: 'Group Tour',
    pkg2_desc: 'Paris, Rome, Barcelona, Amsterdam and more — the ultimate European adventure in one journey.',
    pkg2_badge: 'Hot Deal',
    pkg3_title: 'Maldives Honeymoon',
    pkg3_days: '7 Days / 6 Nights',
    pkg3_persons: '2 persons',
    pkg3_type: 'Romantic',
    pkg3_desc: 'A private overwater villa, candlelit dinners, and snorkelling in the Indian Ocean paradise.',
    pkg4_title: 'Japan Discovery',
    pkg4_days: '10 Days / 9 Nights',
    pkg4_persons: 'Up to 15 persons',
    pkg4_type: 'Cultural',
    pkg4_desc: 'Cherry blossoms, ancient temples, bullet trains, and cutting-edge Tokyo — Japan at its finest.',
    pkg4_badge: 'New',
    pkg5_title: 'Safari & Serengeti',
    pkg5_days: '8 Days / 7 Nights',
    pkg5_persons: 'Up to 10 persons',
    pkg5_type: 'Adventure',
    pkg5_desc: 'Witness the Great Migration across Tanzania\'s Serengeti and the majestic Ngorongoro Crater.',
    pkg6_title: 'Turkey Highlights',
    pkg6_days: '9 Days / 8 Nights',
    pkg6_persons: 'Up to 18 persons',
    pkg6_type: 'Cultural & Adventure',
    pkg6_desc: 'Istanbul\'s grand mosques, a hot-air balloon ride over Cappadocia, and the turquoise Aegean coast.',
    itin_tag: 'Sample Itineraries',
    itin_title: 'Your Journey, <span>Day by Day</span>',
    itin_sub: 'Meticulously planned itineraries so you can focus on making memories.',
    itin_tab1: 'Dubai 5D',
    itin_tab2: 'Europe 14D',
    itin_tab3: 'Maldives 7D',
    day: 'Day',
    dubai_d1_title: 'Arrival & City Tour',
    dubai_d1_desc: 'Arrive in Dubai, check into hotel, and enjoy an evening City Tour including the iconic Burj Khalifa.',
    dubai_d2_title: 'Desert Safari Adventure',
    dubai_d2_desc: 'Morning at leisure, afternoon dune bashing, camel riding, henna painting, and a BBQ dinner under the stars.',
    dubai_d3_title: 'Abu Dhabi Day Trip',
    dubai_d3_desc: 'Visit Sheikh Zayed Grand Mosque, the Corniche, and Ferrari World on this full-day excursion.',
    dubai_d4_title: 'Shopping & Dhow Cruise',
    dubai_d4_desc: 'Explore the Gold Souk, Dubai Mall, and end the day with a traditional Dhow Cruise Dinner.',
    dubai_d5_title: 'Departure Day',
    dubai_d5_desc: 'Leisure morning, last-minute shopping, hotel check-out, and transfer to the airport.',
    dubai_h1: '🏙️ City Tour',
    dubai_h2: '🐪 Desert Safari',
    dubai_h3: '🕌 Abu Dhabi',
    dubai_h4: '🛥️ Dhow Cruise',
    europe_d1_title: 'Paris Arrival – Eiffel & Louvre',
    europe_d1_desc: 'Land in Paris, settle in, and explore the Eiffel Tower and Louvre Museum in the evening.',
    europe_d2_title: 'Versailles & Paris Highlights',
    europe_d2_desc: 'Guided tour of Palace of Versailles, then Champs-Élysées and Seine River cruise.',
    europe_d3_title: 'Swiss Alps – Interlaken',
    europe_d3_desc: 'Train to Switzerland, free time in Interlaken, stunning mountain panorama views.',
    europe_d4_title: 'Rome – Colosseum & Vatican',
    europe_d4_desc: 'Fly to Rome, guided tours of the Colosseum, Vatican Museums and Sistine Chapel.',
    europe_d5_title: 'Barcelona – Sagrada Familia',
    europe_d5_desc: 'High-speed train or flight to Barcelona, visit Gaudí\'s masterpieces and La Rambla.',
    europe_h1: '🗼 Eiffel Tower',
    europe_h2: '🏔️ Swiss Alps',
    europe_h3: '🏛️ Rome Colosseum',
    europe_h4: '⛪ Sagrada Familia',
    maldives_d1_title: 'Arrival in Paradise',
    maldives_d1_desc: 'Speedboat transfer to your private island resort, welcome drink, and sunset from the villa.',
    maldives_d2_title: 'Snorkelling & Marine Life',
    maldives_d2_desc: 'Guided snorkelling tour over the coral reefs, dolphin watching sunset cruise.',
    maldives_d3_title: 'Spa & Private Beach Day',
    maldives_d3_desc: 'Full-day couples spa treatment, private beachside dining, and stargazing at night.',
    maldives_d4_title: 'Island Hopping Adventure',
    maldives_d4_desc: 'Visit local Maldivian islands, fishing village, and a sandbank picnic lunch.',
    maldives_d5_title: 'Diving & Water Sports',
    maldives_d5_desc: 'Try scuba diving, jet skiing, kayaking, or simply relax on the pristine beach.',
    maldives_h1: '🤿 Snorkelling',
    maldives_h2: '💆 Couples Spa',
    maldives_h3: '🏝️ Island Hopping',
    maldives_h4: '🌊 Water Sports',
    why_tag: 'Why Choose Us',
    why_title: 'Travel Smarter with <span>Connect The World</span>',
    why_sub: 'With over 14 years of expertise and thousands of happy travellers, we make every journey seamless and unforgettable.',
    why_years_num: '14+ Years',
    why_years_label: 'Trusted Experience',
    why1_title: 'Expert Local Guides',
    why1_desc: 'Our certified guides bring destinations to life with insider knowledge and genuine passion for travel.',
    why2_title: 'Fully Customised Tours',
    why2_desc: 'Every trip is tailored to your preferences, budget, and travel style — no one-size-fits-all packages.',
    why3_title: '24/7 Travel Support',
    why3_desc: 'Our dedicated support team is always available, wherever you are in the world.',
    why4_title: 'Best Price Guarantee',
    why4_desc: 'We negotiate the best rates directly with hotels and airlines so you get maximum value.',
    why5_title: 'Safe & Secure Travel',
    why5_desc: 'Comprehensive travel insurance, safety briefings, and vetted accommodation across all destinations.',
    review_tag: 'Testimonials',
    review_title: 'What Our <span>Travellers Say</span>',
    review_sub: 'Real stories from real travellers who explored the world with us.',
    r1_text: 'The Dubai package was absolutely flawless! Every detail was taken care of — from the airport pickup to the desert safari. Connect The World truly lives up to its name.',
    r1_name: 'Sarah Al Mansouri',
    r1_country: '🇦🇪 Abu Dhabi, UAE',
    r2_text: 'We booked the European Grand Tour for our anniversary and it was the trip of a lifetime. Professional guides, comfortable transport, and magical memories at every stop.',
    r2_name: 'James & Linda Morrison',
    r2_country: '🇬🇧 London, UK',
    r3_text: 'Our Maldives honeymoon was pure magic. The overwater villa was stunning, and the team arranged a private candlelit dinner on the beach. Simply perfect!',
    r3_name: 'Ahmed & Fatima Al Rashidi',
    r3_country: '🇦🇪 Dubai, UAE',
    r4_text: 'Japan was always my dream destination. The team handled everything seamlessly — from the Bullet Train tickets to the tea ceremony in Kyoto. Highly recommend!',
    r4_name: 'Priya Menon',
    r4_country: '🇮🇳 Mumbai, India',
    r5_text: 'The safari in Tanzania was beyond words. Seeing the Great Migration was a life-changing moment. Connect The World made it all possible with zero stress.',
    r5_name: 'Omar Al Farsi',
    r5_country: '🇦🇪 Sharjah, UAE',
    r6_text: 'Booking in Arabic was so easy! The bilingual support team helped us throughout our Turkey trip. Professional, friendly, and highly knowledgeable.',
    r6_name: 'Khalid bin Yousef',
    r6_country: '🇸🇦 Riyadh, Saudi Arabia',
    faq_tag: 'FAQ',
    faq_title: 'Frequently Asked <span>Questions</span>',
    faq_sub: 'Have questions? We have answers. If you need more help, our team is just a call away.',
    faq1_q: 'How do I book a tour with Connect The World?',
    faq1_a: 'You can book directly through our website, call our UAE office, or visit us in person. Our team will guide you through every step of the booking process.',
    faq2_q: 'Are your packages customisable?',
    faq2_a: 'Absolutely! All our packages are fully customisable. You can adjust the duration, accommodation type, activities, and budget to suit your preferences.',
    faq3_q: 'Do you provide visa assistance?',
    faq3_a: 'Yes, we provide comprehensive visa assistance for all major destinations. Our team will guide you through the visa application process and required documentation.',
    faq4_q: 'Is travel insurance included in the packages?',
    faq4_a: 'Travel insurance can be added to any package. We strongly recommend it and can arrange comprehensive coverage at competitive rates.',
    faq5_q: 'What payment methods do you accept?',
    faq5_a: 'We accept bank transfers, credit/debit cards, and cash payments at our office. Online payments are secured with SSL encryption.',
    faq6_q: 'Can I book a group tour?',
    faq6_a: 'Yes! We specialise in group tours and can accommodate groups of all sizes. Special group discounts are available for bookings of 10 or more persons.',
    footer_about: 'Connecting travellers to the world\'s most beautiful destinations since 2010. Based in the UAE, serving clients across the globe.',
    footer_quick: 'Quick Links',
    footer_destinations: 'Destinations',
    footer_contact: 'Contact Us',
    footer_f1: 'Home',
    footer_f2: 'About Us',
    footer_f3: 'Packages',
    footer_f4: 'Itinerary',
    footer_f5: 'Reviews',
    footer_f6: 'Contact',
    footer_d1: 'Dubai & Abu Dhabi',
    footer_d2: 'Europe Tours',
    footer_d3: 'Maldives & Seychelles',
    footer_d4: 'Asia & Far East',
    footer_d5: 'Africa & Safari',
    footer_d6: 'Americas',
    footer_addr: 'Office 412, Al Habtoor Business Tower, Dubai Marina, Dubai, UAE',
    footer_phone: '+971 4 321 9876',
    footer_email: 'info@connecttheworld.ae',
    footer_hours: 'Mon – Sat: 9:00 AM – 7:00 PM',
    footer_copy: '© 2024 Connect The World Tourism LLC. All rights reserved.',
    footer_privacy: 'Privacy Policy',
    footer_terms: 'Terms & Conditions',
    enq_tag: 'Get In Touch',
    enq_title: 'Send Us an <span>Enquiry</span>',
    enq_sub: 'Fill in your details and our travel experts will get back to you within 24 hours.',
    enq_fname: 'First Name',
    enq_lname: 'Last Name',
    enq_contact: 'Contact Number',
    enq_country: 'Country',
    enq_city: 'City',
    enq_submit: '✈ Send Enquiry',
    enq_success_title: 'Enquiry Received!',
    enq_success_msg: 'Thank you! Our travel experts will contact you within 24 hours.',
    enq_error: 'Something went wrong. Please try again or call us directly.',
  },
  ar: {
    dir: 'rtl',
    lang_toggle: '🌐 English',
    nav_home: 'الرئيسية',
    nav_destinations: 'الوجهات',
    nav_packages: 'الباقات',
    nav_itinerary: 'البرامج',
    nav_about: 'من نحن',
    nav_enquiry: 'الاستفسار',
    nav_contact: 'اتصل بنا',
    hero_badge: 'كونكت ذا وورلد – نقرّب العالم إليك',
    hero_title: 'اكتشف العالم مع <span>كونكت ذا وورلد</span>',
    hero_subtitle: 'رحلات لا تُنسى، مُصمَّمة باحتراف. دعنا نأخذك إلى الوجهات التي طالما حلمت بها.',
    hero_btn1: '✈ استكشف الباقات',
    hero_btn2: 'شاهد قصتنا',
    stat1_num: '+14',
    stat1_label: 'سنوات من الخبرة',
    stat2_num: '+5,000',
    stat2_label: 'مسافر سعيد',
    stat3_num: '+50',
    stat3_label: 'وجهة حول العالم',
    stat4_num: '98%',
    stat4_label: 'نسبة الرضا',
    dest_tag: 'الوجهات العالمية',
    dest_title: 'استكشف <span>أبرز وجهاتنا</span>',
    dest_sub: 'من شواطئ المالديف البكر إلى شوارع أوروبا التاريخية — اكتشف أجمل أماكن العالم.',
    dest1_country: 'سويسرا',
    dest1_name: 'جبال الألب وزيورخ',
    dest1_desc: 'مناظر جبلية خلابة وقرى ساحرة ومنتجعات تزلج عالمية المستوى في قلب أوروبا.',
    dest1_tag: '7 أيام',
    dest2_country: 'اليابان',
    dest2_name: 'طوكيو وكيوتو',
    dest2_desc: 'تجربة التزاوج المثالي بين التقاليد العريقة والابتكار الحديث في بلد الشمس المشرقة.',
    dest2_tag: '10 أيام',
    dest3_country: 'المالديف',
    dest3_name: 'جنة المالديف',
    dest3_desc: 'مياه صافية كالكريستال وبنغالات فوق الماء وشواطئ رملية ناصعة البياض في انتظارك.',
    dest3_tag: '5 أيام',
    dest4_country: 'إيطاليا',
    dest4_name: 'روما وتوسكانا',
    dest4_desc: 'تجوّل عبر قرون من التاريخ وتذوّق المأكولات الأصيلة وأبهر بالفن الإيطالي.',
    dest4_tag: '8 أيام',
    dest5_country: 'تركيا',
    dest5_name: 'إسطنبول وكابادوكيا',
    dest5_desc: 'حيث يلتقي الشرق بالغرب — استكشف القصور الرائعة والمناطيد الهوائية والأسواق الشعبية.',
    dest5_tag: '9 أيام',
    dest6_country: 'تايلاند',
    dest6_name: 'بانكوك وفوكيت',
    dest6_desc: 'معابد ذهبية وشواطئ استوائية ومأكولات شعبية رائعة وكرم الضيافة التايلاندي.',
    dest6_tag: '7 أيام',
    pkg_tag: 'باقاتنا السياحية',
    pkg_title: 'باقات سفر <span>مختارة بعناية</span>',
    pkg_sub: 'باقات شاملة مصممة لكل أنواع المسافرين — من محبي المغامرة إلى عشاق الرفاهية.',
    pkg_book: 'احجز الآن',
    pkg_from: 'يبدأ من',
    pkg_per: '/ للشخص',
    pkg1_title: 'إجازة دبي الفاخرة',
    pkg1_days: '5 أيام / 4 ليالي',
    pkg1_persons: 'حتى 8 أشخاص',
    pkg1_type: 'باقة فاخرة',
    pkg1_desc: 'عش بريق ورفاهية دبي — برج خليفة وسفاري الصحراء ورحلة عشاء على المراكب التقليدية.',
    pkg1_badge: 'الأكثر مبيعاً',
    pkg2_title: 'الجولة الأوروبية الكبرى',
    pkg2_days: '14 يوم / 13 ليلة',
    pkg2_persons: 'حتى 20 شخصاً',
    pkg2_type: 'جولة جماعية',
    pkg2_desc: 'باريس وروما وبرشلونة وأمستردام والمزيد — مغامرة أوروبية شاملة في رحلة واحدة.',
    pkg2_badge: 'عرض مميز',
    pkg3_title: 'شهر عسل في المالديف',
    pkg3_days: '7 أيام / 6 ليالي',
    pkg3_persons: 'شخصان',
    pkg3_type: 'باقة رومانسية',
    pkg3_desc: 'فيلا خاصة فوق الماء وعشاء رومانسي على ضوء الشموع وغوص في المحيط الهندي.',
    pkg4_title: 'اكتشاف اليابان',
    pkg4_days: '10 أيام / 9 ليالي',
    pkg4_persons: 'حتى 15 شخصاً',
    pkg4_type: 'ثقافية',
    pkg4_desc: 'أزهار الكرز والمعابد القديمة والقطارات فائقة السرعة وطوكيو العصرية.',
    pkg4_badge: 'جديد',
    pkg5_title: 'سفاري سيرينجيتي',
    pkg5_days: '8 أيام / 7 ليالي',
    pkg5_persons: 'حتى 10 أشخاص',
    pkg5_type: 'مغامرة',
    pkg5_desc: 'شهد الهجرة الكبرى في سيرينجيتي تنزانيا وحافة نجورونجورو المهيبة.',
    pkg6_title: 'أبرز معالم تركيا',
    pkg6_days: '9 أيام / 8 ليالي',
    pkg6_persons: 'حتى 18 شخصاً',
    pkg6_type: 'ثقافية ومغامرة',
    pkg6_desc: 'مساجد إسطنبول الكبرى ورحلة المنطاد فوق كابادوكيا وساحل بحر إيجه الفيروزي.',
    itin_tag: 'نماذج البرامج السياحية',
    itin_title: 'رحلتك <span>يوماً بيوم</span>',
    itin_sub: 'برامج مُخطَّطة بدقة متناهية حتى تتفرغ لصنع الذكريات الجميلة.',
    itin_tab1: 'دبي 5 أيام',
    itin_tab2: 'أوروبا 14 يوم',
    itin_tab3: 'المالديف 7 أيام',
    day: 'يوم',
    dubai_d1_title: 'الوصول وجولة المدينة',
    dubai_d1_desc: 'الوصول إلى دبي وتسجيل الوصول في الفندق، ثم جولة مسائية تشمل برج خليفة الشهير.',
    dubai_d2_title: 'مغامرة سفاري الصحراء',
    dubai_d2_desc: 'صباح حر، ثم انطلق بعد الظهر لجلسات التزلج على الكثبان وركوب الجمال وحناء وعشاء شواء تحت النجوم.',
    dubai_d3_title: 'رحلة يوم إلى أبوظبي',
    dubai_d3_desc: 'زيارة مسجد الشيخ زايد الكبير والكورنيش وعالم فيراري في جولة يوم كامل.',
    dubai_d4_title: 'تسوق ورحلة دو',
    dubai_d4_desc: 'استكشاف سوق الذهب ودبي مول، ثم إنهاء اليوم برحلة عشاء على المراكب التقليدية.',
    dubai_d5_title: 'يوم المغادرة',
    dubai_d5_desc: 'صباح حر وتسوق أخير ومغادرة الفندق والتوجه إلى المطار.',
    dubai_h1: '🏙️ جولة المدينة',
    dubai_h2: '🐪 سفاري الصحراء',
    dubai_h3: '🕌 أبوظبي',
    dubai_h4: '🛥️ رحلة دو',
    europe_d1_title: 'باريس – برج إيفل واللوفر',
    europe_d1_desc: 'الوصول إلى باريس والاستقرار في الفندق، ثم استكشاف برج إيفل ومتحف اللوفر مساءً.',
    europe_d2_title: 'فرساي ومعالم باريس',
    europe_d2_desc: 'جولة مرشدة في قصر فرساي، ثم الشانزليزيه ورحلة نهر السين.',
    europe_d3_title: 'جبال الألب السويسرية',
    europe_d3_desc: 'قطار إلى سويسرا، وقت حر في إنترلاكن ومناظر جبلية بانورامية خلابة.',
    europe_d4_title: 'روما – الكولوسيوم والفاتيكان',
    europe_d4_desc: 'رحلة إلى روما وجولات مرشدة في الكولوسيوم ومتاحف الفاتيكان والكنيسة السيستينية.',
    europe_d5_title: 'برشلونة – ساغرادا فاميليا',
    europe_d5_desc: 'قطار سريع إلى برشلونة وزيارة روائع غاودي ولا رامبلا.',
    europe_h1: '🗼 برج إيفل',
    europe_h2: '🏔️ الألب السويسرية',
    europe_h3: '🏛️ كولوسيوم روما',
    europe_h4: '⛪ ساغرادا فاميليا',
    maldives_d1_title: 'الوصول إلى الجنة',
    maldives_d1_desc: 'انتقال بالزورق السريع إلى منتجعك الخاص، ومشروب ترحيبي ومشاهدة الغروب من الفيلا.',
    maldives_d2_title: 'الغوص والحياة البحرية',
    maldives_d2_desc: 'جولة غوص مرشدة فوق الشعاب المرجانية ورحلة مشاهدة الدلافين عند الغروب.',
    maldives_d3_title: 'سبا وشاطئ خاص',
    maldives_d3_desc: 'جلسة سبا كاملة للثنائي وعشاء على الشاطئ ومراقبة النجوم ليلاً.',
    maldives_d4_title: 'مغامرة الجزر',
    maldives_d4_desc: 'زيارة الجزر المالديفية المحلية وقرية الصيادين وغداء على رمال الشاطئ.',
    maldives_d5_title: 'الغوص والرياضات المائية',
    maldives_d5_desc: 'جرّب الغوص بالأنابيب أو التزلج على الماء أو الكياك أو استرخ على الشاطئ.',
    maldives_h1: '🤿 الغوص',
    maldives_h2: '💆 سبا الثنائي',
    maldives_h3: '🏝️ جزر المالديف',
    maldives_h4: '🌊 رياضات مائية',
    why_tag: 'لماذا تختارنا',
    why_title: 'سافر بذكاء مع <span>كونكت ذا وورلد</span>',
    why_sub: 'بخبرة تزيد على 14 عاماً وآلاف المسافرين السعداء، نجعل كل رحلة سلسة ولا تُنسى.',
    why_years_num: '+14 سنة',
    why_years_label: 'خبرة موثوقة',
    why1_title: 'مرشدون محليون متخصصون',
    why1_desc: 'مرشدونا المعتمدون يُضفون الحياة على الوجهات السياحية بمعرفتهم الداخلية وشغفهم الحقيقي بالسفر.',
    why2_title: 'جولات مخصصة بالكامل',
    why2_desc: 'كل رحلة تُصمَّم وفق تفضيلاتك وميزانيتك وأسلوب سفرك — لا أنماط موحدة.',
    why3_title: 'دعم سفر على مدار الساعة',
    why3_desc: 'فريق الدعم المخصص لدينا متاح دائماً أينما كنت في العالم.',
    why4_title: 'ضمان أفضل سعر',
    why4_desc: 'نفاوض مباشرة مع الفنادق وشركات الطيران لنمنحك أقصى قيمة مقابل ميزانيتك.',
    why5_title: 'سفر آمن ومطمئن',
    why5_desc: 'تأمين سفر شامل وإحاطات أمنية وإقامة مُراجَعة في جميع الوجهات.',
    review_tag: 'آراء عملائنا',
    review_title: 'ماذا يقول <span>مسافرونا</span>',
    review_sub: 'قصص حقيقية من مسافرين حقيقيين استكشفوا العالم معنا.',
    r1_text: 'كانت باقة دبي مثالية تماماً! تم الاهتمام بكل التفاصيل — من الاستقبال في المطار إلى سفاري الصحراء. كونكت ذا وورلد يرقى إلى مستوى اسمه فعلاً.',
    r1_name: 'سارة المنصوري',
    r1_country: '🇦🇪 أبوظبي، الإمارات',
    r2_text: 'حجزنا الجولة الأوروبية الكبرى لذكرى زواجنا وكانت رحلة العمر. مرشدون محترفون ووسائل نقل مريحة وذكريات رائعة في كل محطة.',
    r2_name: 'جيمس وليندا موريسون',
    r2_country: '🇬🇧 لندن، المملكة المتحدة',
    r3_text: 'كان شهر العسل في المالديف سحراً بحتاً. كانت الفيلا فوق الماء رائعة، ونظّم الفريق عشاءً خاصاً على الشاطئ بالشموع. مثالي تماماً!',
    r3_name: 'أحمد وفاطمة الراشدي',
    r3_country: '🇦🇪 دبي، الإمارات',
    r4_text: 'كانت اليابان حلمي دائماً. تعامل الفريق مع كل شيء بسلاسة — من تذاكر القطار فائق السرعة إلى حفل الشاي في كيوتو. أنصح بشدة!',
    r4_name: 'بريا مينون',
    r4_country: '🇮🇳 مومباي، الهند',
    r5_text: 'كان السفاري في تنزانيا يفوق الوصف. مشاهدة الهجرة الكبرى كانت لحظة غيّرت حياتي. جعل كونكت ذا وورلد كل شيء ممكناً دون أي توتر.',
    r5_name: 'عمر الفارسي',
    r5_country: '🇦🇪 الشارقة، الإمارات',
    r6_text: 'الحجز بالعربية كان سهلاً للغاية! ساعدنا فريق الدعم ثنائي اللغة طوال رحلة تركيا. محترفون وودودون ومتميزون.',
    r6_name: 'خالد بن يوسف',
    r6_country: '🇸🇦 الرياض، المملكة العربية السعودية',
    faq_tag: 'الأسئلة الشائعة',
    faq_title: 'الأسئلة <span>المتكررة</span>',
    faq_sub: 'لديك أسئلة؟ لدينا إجابات. إذا احتجت مزيداً من المساعدة فريقنا على بُعد مكالمة.',
    faq1_q: 'كيف أحجز رحلة مع كونكت ذا وورلد؟',
    faq1_a: 'يمكنك الحجز مباشرة عبر موقعنا أو الاتصال بمكتبنا في الإمارات أو زيارتنا شخصياً. سيرشدك فريقنا خطوة بخطوة.',
    faq2_q: 'هل باقاتكم قابلة للتخصيص؟',
    faq2_a: 'بالتأكيد! جميع باقاتنا قابلة للتعديل الكامل. يمكنك ضبط المدة ونوع الإقامة والأنشطة والميزانية وفق رغباتك.',
    faq3_q: 'هل تقدمون مساعدة في التأشيرات؟',
    faq3_a: 'نعم، نقدم مساعدة شاملة في التأشيرات لجميع الوجهات الرئيسية. سيرشدك فريقنا في إجراءات التقديم والمستندات المطلوبة.',
    faq4_q: 'هل تأمين السفر مشمول في الباقات؟',
    faq4_a: 'يمكن إضافة تأمين السفر إلى أي باقة. نوصي بشدة بالتأمين ويمكننا توفير تغطية شاملة بأسعار تنافسية.',
    faq5_q: 'ما وسائل الدفع التي تقبلونها؟',
    faq5_a: 'نقبل التحويلات البنكية وبطاقات الائتمان والخصم والدفع النقدي في مكتبنا. المدفوعات الإلكترونية مؤمّنة بتشفير SSL.',
    faq6_q: 'هل يمكنني حجز جولة جماعية؟',
    faq6_a: 'نعم! نتخصص في الجولات الجماعية ونستوعب مجموعات من جميع الأحجام. خصومات خاصة متاحة للحجوزات العشرة أشخاص فأكثر.',
    footer_about: 'نربط المسافرين بأجمل الوجهات في العالم منذ عام 2010. مقرنا الإمارات ونخدم عملاء من جميع أنحاء العالم.',
    footer_quick: 'روابط سريعة',
    footer_destinations: 'الوجهات',
    footer_contact: 'اتصل بنا',
    footer_f1: 'الرئيسية',
    footer_f2: 'من نحن',
    footer_f3: 'الباقات',
    footer_f4: 'البرامج',
    footer_f5: 'التقييمات',
    footer_f6: 'اتصل بنا',
    footer_d1: 'دبي وأبوظبي',
    footer_d2: 'جولات أوروبية',
    footer_d3: 'المالديف وسيشيل',
    footer_d4: 'آسيا والشرق الأقصى',
    footer_d5: 'أفريقيا والسفاري',
    footer_d6: 'القارتان الأمريكيتان',
    footer_addr: 'مكتب 412، برج الحبتور للأعمال، مارينا دبي، دبي، الإمارات العربية المتحدة',
    footer_phone: '+971 4 321 9876',
    footer_email: 'info@connecttheworld.ae',
    footer_hours: 'الاثنين – السبت: 9:00 ص – 7:00 م',
    footer_copy: '© 2024 كونكت ذا وورلد لخدمات السياحة ذ.م.م. جميع الحقوق محفوظة.',
    footer_privacy: 'سياسة الخصوصية',
    footer_terms: 'الشروط والأحكام',
    enq_tag: 'تواصل معنا',
    enq_title: 'أرسل لنا <span>استفساراً</span>',
    enq_sub: 'أدخل بياناتك وسيتواصل معك خبراء السفر لدينا خلال 24 ساعة.',
    enq_fname: 'الاسم الأول',
    enq_lname: 'اسم العائلة',
    enq_contact: 'رقم التواصل',
    enq_country: 'الدولة',
    enq_city: 'المدينة',
    enq_submit: '✈ إرسال الاستفسار',
    enq_success_title: 'تم استلام استفسارك!',
    enq_success_msg: 'شكراً لك! سيتواصل معك خبراء السفر لدينا خلال 24 ساعة.',
    enq_error: 'حدث خطأ ما. يرجى المحاولة مرة أخرى أو الاتصال بنا مباشرة.',
  }
};

let currentLang = 'en';

function applyTranslations(lang) {
  const t = translations[lang];
  document.documentElement.setAttribute('lang', lang);
  document.body.setAttribute('dir', t.dir);

  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) {
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });
}

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'ar' : 'en';
  applyTranslations(currentLang);
}

/* ---- HEADER SCROLL ---- */
function initHeader() {
  const header = document.getElementById('header');
  const onScroll = () => {
    if (window.scrollY > 60) header.classList.add('scrolled');
    else header.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll, { passive: true });
}

/* ---- MOBILE MENU ---- */
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const nav = document.getElementById('mobileNav');
  const overlay = document.getElementById('mobileNavOverlay');
  const close = () => nav.classList.remove('open');
  btn.addEventListener('click', () => nav.classList.toggle('open'));
  overlay.addEventListener('click', close);
}

/* ---- HERO SLIDER ---- */
function initHeroSlider() {
  const slides = document.querySelectorAll('.hero-slide');
  const dots = document.querySelectorAll('.hero-dot');
  let current = 0;
  let timer;

  function goTo(index) {
    slides[current].classList.remove('active');
    dots[current].classList.remove('active');
    current = (index + slides.length) % slides.length;
    slides[current].classList.add('active');
    dots[current].classList.add('active');
  }

  function next() { goTo(current + 1); }

  function startAuto() { timer = setInterval(next, 5000); }
  function stopAuto() { clearInterval(timer); }

  dots.forEach((dot, i) => dot.addEventListener('click', () => { stopAuto(); goTo(i); startAuto(); }));
  startAuto();
}

/* ---- DESTINATIONS SLIDER ---- */
function initDestSlider() {
  const track = document.getElementById('destTrack');
  const cards = track.querySelectorAll('.dest-card');
  const dots = document.querySelectorAll('.slider-dot');
  const prevBtn = document.getElementById('destPrev');
  const nextBtn = document.getElementById('destNext');
  let current = 0;

  function getVisible() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function getMax() { return Math.max(0, cards.length - getVisible()); }

  function updateSlider() {
    const cardWidth = cards[0].offsetWidth + 24;
    track.style.transform = `translateX(${document.body.dir === 'rtl' ? '' : '-'}${current * cardWidth}px)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }

  prevBtn.addEventListener('click', () => {
    current = current > 0 ? current - 1 : getMax();
    updateSlider();
  });
  nextBtn.addEventListener('click', () => {
    current = current < getMax() ? current + 1 : 0;
    updateSlider();
  });
  dots.forEach((dot, i) => dot.addEventListener('click', () => { current = i; updateSlider(); }));
  window.addEventListener('resize', () => { current = 0; updateSlider(); });

  updateSlider();
}

/* ---- ITINERARY TABS ---- */
function initItinerary() {
  const tabs = document.querySelectorAll('.itinerary-tab');
  const contents = document.querySelectorAll('.itinerary-content');

  tabs.forEach((tab, i) => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      contents[i].classList.add('active');
    });
  });
}

/* ---- FAQ ACCORDION ---- */
function initFAQ() {
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
      if (!isOpen) item.classList.add('open');
    });
  });
}

/* ---- SCROLL ANIMATIONS ---- */
function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
}

/* ---- SMOOTH SCROLL ---- */
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const target = document.querySelector(a.getAttribute('href'));
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        document.getElementById('mobileNav').classList.remove('open');
      }
    });
  });
}

/* ---- COUNTER ANIMATION ---- */
function initCounters() {
  const counters = document.querySelectorAll('.stat-num');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-target') || el.textContent);
        const suffix = el.textContent.replace(/[0-9.,]/g, '');
        let start = 0;
        const duration = 1800;
        const step = (timestamp) => {
          if (!start) start = timestamp;
          const progress = Math.min((timestamp - start) / duration, 1);
          const value = Math.floor(progress * target);
          el.textContent = value.toLocaleString() + suffix;
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        observer.unobserve(el);
      }
    });
  }, { threshold: 0.5 });
  counters.forEach(c => observer.observe(c));
}

/* ---- INIT ---- */
document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initMobileMenu();
  initHeroSlider();
  initDestSlider();
  initItinerary();
  initFAQ();
  initScrollAnimations();
  initSmoothScroll();
  initCounters();
  applyTranslations('en');

  document.querySelectorAll('.lang-btn, .mobile-lang-btn').forEach(btn => {
    btn.addEventListener('click', toggleLanguage);
  });
});
