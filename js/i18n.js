/**
 * Dental Delight – Pure Cure
 * js/i18n.js
 *
 * i18n engine: English / हिंदी / ગુજરાતી
 */

(function () {
  'use strict';

  /* ── Translations ──────────────────────────────────────── */
  var translations = {

    en: {
      /* Nav */
      'nav.philosophy':   'Philosophy',
      'nav.services':     'Services',
      'nav.doctor':       'Dr. Disha',
      'nav.reviews':      'Reviews',
      'nav.contact':      'Contact',
      'nav.book':         'Book Appointment',

      /* Hero */
      'hero.tag':         'Gentle Dentistry',
      'hero.h1':          '<span class="italic teal">Pure</span> care.<br><span class="italic">Gentle</span> hands.<br>Healthy smiles.',
      'hero.sub':         "Dr. Disha Goria's Pure Cure philosophy means treating only what's needed — with precision, compassion, and zero unnecessary procedures.",
      'hero.cta_wa':      'WhatsApp to Book',
      'hero.cta_services':'Our Services',

      /* Sticky CTA */
      'sticky.cta_wa':    'Connect On WhatsApp',

      /* Stats */
      'stat.patients':    'Patients Treated',
      'stat.rcts':        'Root Canals Done',
      'stat.tooth_extractions':    'Dental Implants',
      'stat.established': 'Serving Since',

      /* Pills */
      'pill.accepting':   'Accepting New Patients',
      'pill.painless':    'Painless RCT Available',

      /* Philosophy */
      'phil.tag':         'Our Approach',
      'phil.heading':     'The <span class="teal">Pure Cure</span><br>Philosophy',
      'phil.intro':       "We don't just treat teeth — we treat people. Our promise is to recommend only what's truly necessary, and to make even that feel completely comfortable.",
      'phil.item1_title': 'Minimally Invasive',
      'phil.item1_desc':  'Preserving maximum natural tooth structure. Less drilling, better healing, longer-lasting results.',
      'phil.item2_title': 'No Unnecessary Treatment',
      'phil.item2_desc':  'We recommend only what you actually need. Transparent, honest diagnosis — always, no exceptions.',
      'phil.item3_title': 'Painless Experience',
      'phil.item3_desc':  'Modern anaesthesia, gentle technique, and a calm environment make every visit comfortable.',
      'phil.item4_title': 'Evidence-Based Care',
      'phil.item4_desc':  'Every decision is backed by current dental science. We keep learning so you get the best.',

      /* Services */
      'svc.tag':              'What We Treat',
      'svc.heading':          'Our <span class="teal">Services</span>',
      'svc.intro':            'Comprehensive care under one roof — from routine check-ups to full smile transformations.',
      'svc.book_cta':         'Book Appointment →',
      'svc.rct_title':        'Root Canal Treatment',
      'svc.rct_desc':         'Painless RCT with rotary technique. Save your natural tooth — quickly and comfortably.',
      'svc.whitening_title':  'Teeth Whitening',
      'svc.whitening_desc':   'Professional whitening that delivers noticeably brighter teeth in a single session.',
      'svc.implants_title':   'Dental Implants',
      'svc.implants_desc':    'Permanent tooth replacement that looks, feels, and functions exactly like natural teeth.',
      'svc.scaling_title':    'Scaling & Polishing',
      'svc.scaling_desc':     'Remove plaque and tartar. Healthy gums, fresh breath, protected teeth.',
      'svc.smile_title':      'Smile Designing',
      'svc.smile_desc':       'Custom makeovers — veneers, bonding, whitening — tailored to your face and goals.',
      'svc.crowns_title':     'Crowns & Bridges',
      'svc.crowns_desc':      'High-quality ceramic restorations that blend seamlessly with your existing teeth.',
      'svc.ortho_title':      'Orthodontics / Braces',
      'svc.ortho_desc':       'Traditional braces and clear aligners for children and adults. Straight teeth for life.',
      'svc.paeds_title':      'Paediatric Dentistry',
      'svc.paeds_desc':       'Gentle, child-friendly care building healthy dental habits from a young age.',
      'svc.extraction_title': 'Tooth Extraction',
      'svc.extraction_desc':  'Precise, painless extractions including wisdom teeth, with fast recovery protocols.',
      'svc.fillings_title':   'Dental Fillings And Restorations',
      'svc.fillings_desc':    'Tooth-colored fillings and cavity repairs. Restore damaged teeth with durable, natural-looking results.',

      /* Doctor */
      'doc.badge': 'Pure Cure Dentist',
      'doc.tag':   'Meet Your Doctor',
      'doc.qual':  'BDS · Founder, Dental Delight Pure Cure · Vejalpur, Ahmedabad',
      'doc.bio':   "Dr. Disha Goria founded Dental Delight with a single belief: good dentistry should never hurt — physically, emotionally, or financially. Her Pure Cure approach means she recommends only what's truly needed, explains everything clearly, and ensures every patient leaves more informed than anxious.<br><br>Trained in modern minimally invasive techniques, she brings deep clinical skill together with genuine warmth. Patients consistently describe her as gentle, honest, and surprisingly painless — even for procedures they were dreading.",
      'doc.chip1': 'Minimally Invasive',
      'doc.chip2': 'Root Canal Specialist',
      'doc.chip3': 'Cosmetic Dentistry',
      'doc.chip4': 'Smile Design',
      'doc.chip5': 'Paediatric Care',
      'doc.chip6': 'Honest Diagnosis',

      /* Reviews */
      'rev.tag':           'Patient Stories',
      'rev.heading':       'What Our <span class="teal">Patients</span> Say',
      'rev.google_count':  '135 Google Reviews',
      'rev.r1_text':       '"I was very impressed by the work of the doctor. The treatment was painless and it was smooth. Highly recommend."',
      'rev.r1_author':     'Nishant Desai',
      'rev.r2_text':       '"I had great experience with my root canal treatment done by Dr. Disha Goria. She was professional, gentle, and explained everything clearly. The procedure was smooth and comfortable. Highly satisfied and would definitely recommend her."',
      'rev.r2_author':     'Bhumi Shah',
      'rev.r3_text':       '"My visit with Dr. Disha was excellent. She explained everything clearly, made sure I was comfortable throughout the procedure, and handled everything with so much care. The clinic is clean, she is friendly, and I left feeling confident about my dental health. Highly recommend Dr. Disha!"',
      'rev.r3_author':     'Heta Shah',
      'rev.r4_text':       '"I recently had a root canal treatment done by Dr. Disha Goriya and I\'m extremely satisfied with the experience. She handled the entire procedure with great patience and made sure it was completely painless. Her calm and professional approach made all the difference."',
      'rev.r4_author':     'Rajish Nair',
      'rev.r5_text':       '"I have been done treatment here by Dr Disha Goria. It was painless. I truly appreciate her work. Highly recommended."',
      'rev.r5_author':     'Labhuben J Makwana',
      'rev.r6_text':       '"I had a fantastic experience with Dr. Disha. The clinic is clean, modern, and well-organized. Dr. Disha explained everything clearly, and made sure my daughter was comfortable throughout. Would highly recommend."',
      'rev.r6_author':     'Dr. Sweta Shah',
      'rev.r7_text':       '"Dr Disha has done my RCT very well with patience. I am highly satisfied. Highly recommended."',
      'rev.r7_author':     'Nayana Chavda',
      'rev.r8_text':       '"Best treatment done here. Dr Disha explains properly about treatment. Very comfortable. Highly recommend."',
      'rev.r8_author':     'Abhijit Goswami',
      'rev.r9_text':       '"I have treated RCT and bridge here. It was completely painless. Dr nature is very humble. Best hygiene and environment of clinic. Highly recommended."',
      'rev.r9_author':     'Sorya Teli',
      'rev.r10_text':      '"Brought my 6-year-old for first dental visit. Dr Disha was so patient and gentle. My daughter wasn\'t scared at all. Now she actually looks forward to dental visits!"',
      'rev.r10_author':    'Priya Patel',
      'rev.r11_text':      '"Got my teeth whitening done here. Visible difference in just one session. Dr Disha is very skilled and the clinic has great equipment."',
      'rev.r11_author':    'Mehul Trivedi',
      'rev.r12_text':      '"Had a dental implant done. Was nervous but Dr Disha made the entire process smooth and painless. Recovery was quick. Highly recommend."',
      'rev.r12_author':    'Kavita Singh',
      'rev.cta':           'Read All Reviews on Google',
      'rev.post_cta':      '<i data-lucide="edit-3"></i> Post a Review on Google',

      /* Contact */
      'contact.tag':       'Find Us',
      'contact.heading':   'Visit <span class="teal">Dental Delight</span>',
      'contact.intro':     'Located in Vejalpur, Ahmedabad. Walk-ins welcome — appointments preferred for minimal wait time.',
      'contact.addr_label':'Address',
      'contact.addr_val':  'Jay Somnath School, 11/753, Shivalay Road,<br>Opp. Vinayak Society, Yogeshwar Park Society,<br>Vejalpur, Ahmedabad – 380051',
      'contact.hours_label':'Clinic Hours',
      'contact.hours_val': 'Mon – Fri: 8:00 AM – 4:00 PM<br>Saturday: 10:00 AM – 1:00 PM<br>Sunday: Closed',
      'contact.phone_label':'Call / WhatsApp',
      'contact.maps_label':'Google Maps',
      'contact.maps_link': 'Get Directions →',
      'contact.cta_title': 'Book Your Appointment',
      'contact.cta_desc':  "Send us a WhatsApp message wi/bteth your name, preferred date, and treatment needed. We'll confirm your slot within 2 hours.",
      'contact.call_btn':  'Call the Clinic',

      /* Footer */
      'footer.copy': '© 2025 Dental Delight · Vejalpur, Ahmedabad, Gujarat',

      /* Modal */
      'modal.title':         'Book an Appointment',
      'modal.subtitle':      "Fill in your details and we'll open WhatsApp with a pre-filled message.",
      'modal.name_label':    'Your Name',
      'modal.name_placeholder': 'e.g. Rahul Shah',
      'modal.phone_label':   'Phone Number',
      'modal.phone_placeholder': 'e.g. 98765 43210',
      'modal.service_label': 'Service Required',
      'modal.service_opt0':  'Select a service (optional)',
      'modal.service_opt1':  'Root Canal Treatment',
      'modal.service_opt2':  'Teeth Whitening',
      'modal.service_opt3':  'Dental Implants',
      'modal.service_opt4':  'Scaling & Polishing',
      'modal.service_opt5':  'Smile Designing',
      'modal.service_opt6':  'Crowns & Bridges',
      'modal.service_opt7':  'Orthodontics / Braces',
      'modal.service_opt8':  'Paediatric Dentistry',
      'modal.service_opt9':  'Tooth Extraction',
      'modal.service_opt10': 'General Checkup',
      'modal.date_label':    'Preferred Date',
      'modal.submit':        'Send via WhatsApp',

      /* Instagram */
      'ig.tag':        'On Instagram',
      'ig.heading':    'Latest from <span class="teal">@dentaldelightdg</span>',
      'ig.follow_cta': 'Follow on Instagram →'
    },

    /* ── Hindi ─────────────────────────────────────────────── */
    hi: {
      /* Nav */
      'nav.philosophy':   'दर्शन',
      'nav.services':     'सेवाएं',
      'nav.doctor':       'डॉ. दिशा',
      'nav.reviews':      'समीक्षाएं',
      'nav.contact':      'संपर्क',
      'nav.book':         'अपॉइंटमेंट बुक करें',

      /* Hero */
      'hero.tag':         'सौम्य दंत चिकित्सा',
      'hero.h1':          '<span class="italic teal">शुद्ध</span> देखभाल।<br><span class="italic">कोमल</span> हाथ।<br>स्वस्थ मुस्कान।',
      'hero.sub':         'डॉ. दिशा गोरिया का Pure Cure दर्शन केवल जरूरी उपचार करने पर आधारित है — सटीकता, करुणा और शून्य अनावश्यक प्रक्रियाओं के साथ।',
      'hero.cta_wa':      'WhatsApp पर बुक करें',
      'hero.cta_services':'हमारी सेवाएं →',

      /* Sticky CTA */
      'sticky.cta_wa':    'WhatsApp पर कनेक्ट करें',

      /* Stats */
      'stat.patients':    'मरीज़ों का उपचार',
      'stat.rcts':        'रूट कैनाल किए',
      'stat.tooth_extractions':    'डेंटल इम्प्लांट',
      'stat.established': 'सेवा प्रारंभ',

      /* Pills */
      'pill.accepting':   'नए मरीज़ स्वीकार हो रहे हैं',
      'pill.painless':    'दर्दरहित RCT उपलब्ध',

      /* Philosophy */
      'phil.tag':         'हमारा दृष्टिकोण',
      'phil.heading':     '<span class="teal">शुद्ध उपचार</span><br>दर्शन',
      'phil.intro':       'हम सिर्फ दांतों का इलाज नहीं करते, लोगों का इलाज करते हैं। हमारा वादा है कि हम केवल वही सुझाएंगे जो वास्तव में आवश्यक है, और उसे भी पूरी तरह आरामदायक बनाएंगे।',
      'phil.item1_title': 'न्यूनतम आक्रामक',
      'phil.item1_desc':  'अधिकतम प्राकृतिक दांत संरचना को सुरक्षित रखना। कम ड्रिलिंग, बेहतर उपचार, लंबे समय तक टिकने वाले परिणाम।',
      'phil.item2_title': 'अनावश्यक उपचार नहीं',
      'phil.item2_desc':  'हम केवल वही सुझाते हैं जो आपको वास्तव में चाहिए। पारदर्शी, ईमानदार निदान — हमेशा, बिना किसी अपवाद के।',
      'phil.item3_title': 'दर्दरहित अनुभव',
      'phil.item3_desc':  'आधुनिक एनेस्थीसिया, कोमल तकनीक और शांत वातावरण हर दौरे को आरामदायक बनाते हैं।',
      'phil.item4_title': 'साक्ष्य-आधारित देखभाल',
      'phil.item4_desc':  'हर निर्णय वर्तमान दंत विज्ञान पर आधारित है। हम सीखते रहते हैं ताकि आपको सर्वश्रेष्ठ मिले।',

      /* Services */
      'svc.tag':              'हम क्या इलाज करते हैं',
      'svc.heading':          'हमारी <span class="teal">सेवाएं</span>',
      'svc.intro':            'एक ही छत के नीचे व्यापक देखभाल — नियमित जांच से लेकर पूर्ण मुस्कान परिवर्तन तक।',
      'svc.book_cta':         'अपॉइंटमेंट बुक करें →',
      'svc.rct_title':        'रूट कैनाल उपचार',
      'svc.rct_desc':         'रोटरी तकनीक के साथ दर्दरहित RCT। अपने प्राकृतिक दांत को बचाएं — जल्दी और आराम से।',
      'svc.whitening_title':  'दांत सफेद करना',
      'svc.whitening_desc':   'पेशेवर व्हाइटनिंग जो एक सत्र में उल्लेखनीय रूप से उज्जवल दांत देती है।',
      'svc.implants_title':   'डेंटल इम्प्लांट',
      'svc.implants_desc':    'स्थायी दांत प्रतिस्थापन जो प्राकृतिक दांतों की तरह दिखता, महसूस होता और काम करता है।',
      'svc.scaling_title':    'स्केलिंग और पॉलिशिंग',
      'svc.scaling_desc':     'प्लाक और टार्टर हटाएं। स्वस्थ मसूड़े, ताज़ी सांस, सुरक्षित दांत।',
      'svc.smile_title':      'स्माइल डिज़ाइनिंग',
      'svc.smile_desc':       'कस्टम मेकओवर — वेनीर, बॉन्डिंग, व्हाइटनिंग — आपके चेहरे और लक्ष्यों के अनुसार।',
      'svc.crowns_title':     'क्राउन और ब्रिज',
      'svc.crowns_desc':      'उच्च गुणवत्ता वाले सिरेमिक रेस्टोरेशन जो आपके मौजूदा दांतों के साथ सहजता से मिलते हैं।',
      'svc.ortho_title':      'ऑर्थोडॉन्टिक्स / ब्रेसेस',
      'svc.ortho_desc':       'बच्चों और वयस्कों के लिए पारंपरिक ब्रेसेस और क्लियर एलाइनर। जीवन भर सीधे दांत।',
      'svc.paeds_title':      'बाल दंत चिकित्सा',
      'svc.paeds_desc':       'कोमल, बच्चों के अनुकूल देखभाल जो छोटी उम्र से स्वस्थ दंत आदतें बनाती है।',
      'svc.extraction_title': 'दांत निकालना',
      'svc.extraction_desc':  'सटीक, दर्दरहित निष्कर्षण जिसमें अक्ल दाढ़ भी शामिल है, तेज़ रिकवरी प्रोटोकॉल के साथ।',
      'svc.fillings_title':   'डेंटल फिलिंग्स एंड रेस्टोरेशंस',
      'svc.fillings_desc':    'दांतों के रंग की फिलिंग और कैविटी रिपेयर। टिकाऊ, प्राकृतिक दिखने वाले परिणामों के साथ क्षतिग्रस्त दांतों को बहाल करें।',

      /* Doctor */
      'doc.badge': 'Pure Cure दंत चिकित्सक',
      'doc.tag':   'अपने डॉक्टर से मिलें',
      'doc.qual':  'BDS · संस्थापक, डेंटल डिलाइट Pure Cure · वेजलपुर, अहमदाबाद',
      'doc.bio':   'डॉ. दिशा गोरिया ने डेंटल डिलाइट की स्थापना एक विश्वास के साथ की: अच्छी दंत चिकित्सा कभी दर्दनाक नहीं होनी चाहिए — शारीरिक, भावनात्मक या आर्थिक रूप से। उनका Pure Cure दृष्टिकोण का मतलब है कि वे केवल वही सुझाती हैं जो वास्तव में जरूरी है, सब कुछ स्पष्ट रूप से समझाती हैं, और सुनिश्चित करती हैं कि हर मरीज़ चिंतित की बजाय अधिक जागरूक होकर जाए।<br><br>आधुनिक न्यूनतम आक्रामक तकनीकों में प्रशिक्षित, वे गहरे नैदानिक कौशल के साथ वास्तविक गर्मजोशी लाती हैं। मरीज़ लगातार उन्हें कोमल, ईमानदार और आश्चर्यजनक रूप से दर्दरहित बताते हैं — यहां तक कि उन प्रक्रियाओं के लिए भी जिनसे वे डरते थे।',
      'doc.chip1': 'न्यूनतम आक्रामक',
      'doc.chip2': 'रूट कैनाल विशेषज्ञ',
      'doc.chip3': 'कॉस्मेटिक दंत चिकित्सा',
      'doc.chip4': 'स्माइल डिज़ाइन',
      'doc.chip5': 'बाल देखभाल',
      'doc.chip6': 'ईमानदार निदान',

      /* Reviews */
      'rev.tag':           'मरीज़ों की कहानियां',
      'rev.heading':       'हमारे <span class="teal">मरीज़</span> क्या कहते हैं',
      'rev.google_count':  '135 Google समीक्षाएं',
      'rev.r1_text':       '"I was very impressed by the work of the doctor. The treatment was painless and it was smooth. Highly recommend."',
      'rev.r1_author':     'Nishant Desai',
      'rev.r2_text':       '"I had great experience with my root canal treatment done by Dr. Disha Goria. She was professional, gentle, and explained everything clearly. The procedure was smooth and comfortable. Highly satisfied and would definitely recommend her."',
      'rev.r2_author':     'Bhumi Shah',
      'rev.r3_text':       '"My visit with Dr. Disha was excellent. She explained everything clearly, made sure I was comfortable throughout the procedure, and handled everything with so much care. The clinic is clean, she is friendly, and I left feeling confident about my dental health. Highly recommend Dr. Disha!"',
      'rev.r3_author':     'Heta Shah',
      'rev.r4_text':       '"I recently had a root canal treatment done by Dr. Disha Goriya and I\'m extremely satisfied with the experience. She handled the entire procedure with great patience and made sure it was completely painless. Her calm and professional approach made all the difference."',
      'rev.r4_author':     'Rajish Nair',
      'rev.r5_text':       '"I have been done treatment here by Dr Disha Goria. It was painless. I truly appreciate her work. Highly recommended."',
      'rev.r5_author':     'Labhuben J Makwana',
      'rev.r6_text':       '"I had a fantastic experience with Dr. Disha. The clinic is clean, modern, and well-organized. Dr. Disha explained everything clearly, and made sure my daughter was comfortable throughout. Would highly recommend."',
      'rev.r6_author':     'Dr. Sweta Shah',
      'rev.r7_text':       '"Dr Disha has done my RCT very well with patience. I am highly satisfied. Highly recommended."',
      'rev.r7_author':     'Nayana Chavda',
      'rev.r8_text':       '"Best treatment done here. Dr Disha explains properly about treatment. Very comfortable. Highly recommend."',
      'rev.r8_author':     'Abhijit Goswami',
      'rev.r9_text':       '"I have treated RCT and bridge here. It was completely painless. Dr nature is very humble. Best hygiene and environment of clinic. Highly recommended."',
      'rev.r9_author':     'Sorya Teli',
      'rev.r10_text':      '"Brought my 6-year-old for first dental visit. Dr Disha was so patient and gentle. My daughter wasn\'t scared at all. Now she actually looks forward to dental visits!"',
      'rev.r10_author':    'Priya Patel',
      'rev.r11_text':      '"Got my teeth whitening done here. Visible difference in just one session. Dr Disha is very skilled and the clinic has great equipment."',
      'rev.r11_author':    'Mehul Trivedi',
      'rev.r12_text':      '"Had a dental implant done. Was nervous but Dr Disha made the entire process smooth and painless. Recovery was quick. Highly recommend."',
      'rev.r12_author':    'Kavita Singh',
      'rev.cta':           'Google पर सभी समीक्षाएं पढ़ें',
      'rev.post_cta':      '<i data-lucide="edit-3"></i> Google पर रिव्यू पोस्ट करें',

      /* Contact */
      'contact.tag':       'हमें खोजें',
      'contact.heading':   '<span class="teal">डेंटल डिलाइट</span> पधारें',
      'contact.intro':     'वेजलपुर, अहमदाबाद में स्थित। वॉक-इन स्वागत है — कम प्रतीक्षा समय के लिए अपॉइंटमेंट पसंदीदा।',
      'contact.addr_label':'पता',
      'contact.addr_val':  'Jay Somnath School, 11/753, Shivalay Road,<br>Opp. Vinayak Society, Yogeshwar Park Society,<br>वेजलपुर, अहमदाबाद – 380051',
      'contact.hours_label':'क्लिनिक समय',
      'contact.hours_val': 'सोम – शुक्र: सुबह 8:00 – दोपहर 1:00<br>शनिवार: सुबह 10:00 – दोपहर 1:00<br>रविवार: बंद',
      'contact.phone_label':'कॉल / WhatsApp',
      'contact.maps_label':'Google Maps',
      'contact.maps_link': 'दिशाएं पाएं →',
      'contact.cta_title': 'अपना अपॉइंटमेंट बुक करें',
      'contact.cta_desc':  'हमें WhatsApp संदेश भेजें — अपना नाम, पसंदीदा तारीख और आवश्यक उपचार के साथ। हम 2 घंटे के भीतर आपकी स्लॉट की पुष्टि करेंगे।',
      'contact.call_btn':  'क्लिनिक को कॉल करें',

      /* Footer */
      'footer.copy': '© 2025 डेंटल डिलाइट · वेजलपुर, अहमदाबाद',

      /* Modal */
      'modal.title':         'अपॉइंटमेंट बुक करें',
      'modal.subtitle':      'अपना विवरण भरें और हम WhatsApp को पहले से भरे संदेश के साथ खोलेंगे।',
      'modal.name_label':    'आपका नाम',
      'modal.name_placeholder': 'जैसे राहुल शाह',
      'modal.phone_label':   'फोन नंबर',
      'modal.phone_placeholder': 'जैसे 98765 43210',
      'modal.service_label': 'आवश्यक सेवा',
      'modal.service_opt0':  'एक सेवा चुनें (वैकल्पिक)',
      'modal.service_opt1':  'रूट कैनाल उपचार',
      'modal.service_opt2':  'दांत सफेद करना',
      'modal.service_opt3':  'डेंटल इम्प्लांट',
      'modal.service_opt4':  'स्केलिंग और पॉलिशिंग',
      'modal.service_opt5':  'स्माइल डिज़ाइनिंग',
      'modal.service_opt6':  'क्राउन और ब्रिज',
      'modal.service_opt7':  'ऑर्थोडॉन्टिक्स / ब्रेसेस',
      'modal.service_opt8':  'बाल दंत चिकित्सा',
      'modal.service_opt9':  'दांत निकालना',
      'modal.service_opt10': 'सामान्य जांच',
      'modal.date_label':    'पसंदीदा तारीख',
      'modal.submit':        'WhatsApp के माध्यम से भेजें',

      /* Instagram */
      'ig.tag':        'Instagram पर',
      'ig.heading':    '<span class="teal">@dentaldelightdg</span> से ताज़ा',
      'ig.follow_cta': 'Instagram पर फॉलो करें →'
    },

    /* ── Gujarati ──────────────────────────────────────────── */
    gu: {
      /* Nav */
      'nav.philosophy':   'દર્શન',
      'nav.services':     'સેવાઓ',
      'nav.doctor':       'ડૉ. દિશા',
      'nav.reviews':      'સમીક્ષાઓ',
      'nav.contact':      'સંપર્ક',
      'nav.book':         'એપોઇન્ટમેન્ટ બુક કરો',

      /* Hero */
      'hero.tag':         'સૌમ્ય દંત ચિકિત્સા',
      'hero.h1':          '<span class="italic teal">શુદ્ધ</span> સંભાળ।<br><span class="italic">સૌમ્ય</span> હાથ।<br>સ્વસ્થ સ્મિત।',
      'hero.sub':         'ડૉ. દિશા ગોરિયાનો Pure Cure દર્શન માત્ર જરૂરી સારવાર કરવા પર આધારિત છે — ચોકસાઈ, કરુણા અને શૂન્ય અનાવશ્યક પ્રક્રિયાઓ સાથે।',
      'hero.cta_wa':      'WhatsApp પર બુક કરો',
      'hero.cta_services':'અમારી સેવાઓ →',

      /* Sticky CTA */
      'sticky.cta_wa':    'WhatsApp પર કનેક્ટ કરો',

      /* Stats */
      'stat.patients':    'દર્દીઓની સારવાર',
      'stat.rcts':        'રૂટ કેનાલ કર્યા',
      'stat.tooth_extractions':    'ડેન્ટલ ઇમ્પ્લાન્ટ',
      'stat.established': 'સેવા શરૂ',

      /* Pills */
      'pill.accepting':   'નવા દર્દીઓનો સ્વીકાર',
      'pill.painless':    'પીડારહિત RCT ઉપલબ્ધ',

      /* Philosophy */
      'phil.tag':         'અમારો અભિગમ',
      'phil.heading':     '<span class="teal">શુદ્ધ ઉપચાર</span><br>દર્શન',
      'phil.intro':       'અમે ફક્ત દાંતની સારવાર કરતા નથી, અમે લોકોની સારવાર કરીએ છીએ. અમારું વચન ફક્ત તે જ ભલામણ કરવાનું છે જે ખરેખર જરૂરી છે, અને તે પણ સંપૂર્ણ આરામદાયક બનાવવું।',
      'phil.item1_title': 'ન્યૂનતમ આક્રમક',
      'phil.item1_desc':  'દાંતની મહત્તમ કુદરતી રચના જાળવી રાખવી. ઓછી ડ્રિલિંગ, સારી હીલિંગ, લાંબો સમય ટકતા પરિણામો.',
      'phil.item2_title': 'કોઈ બિનજરૂરી સારવાર નહીં',
      'phil.item2_desc':  'અમે તમને ખરેખર જેની જરૂર છે તે જ ભલામણ કરીએ છીએ. પારદર્શક પ્રમાણિક નિદાન — હંમેશા, કોઈ અપવાદ વિના.',
      'phil.item3_title': 'પીડારહિત અનુભવ',
      'phil.item3_desc':  'આધુનિક એનેસ્થેસિયા, સૌમ્ય ટેકનિક અને શાંત વાતાવરણ દરેક મુલાકાતને આરામદાયક બનાવે છે.',
      'phil.item4_title': 'પુરાવા આધારિત સંભાળ',
      'phil.item4_desc':  'દરેક નિર્ણય વર્તમાન દંત વિજ્ઞાન દ્વારા સમર્થિત છે. અમે શ્રેષ્ઠ માટે શીખતા રહીએ છીએ.',

      /* Services */
      'svc.tag':              'અમે શું સારવાર કરીએ છીએ',
      'svc.heading':          'અમારી <span class="teal">સેવાઓ</span>',
      'svc.intro':            'એક છત નીચે વ્યાપક સંભાળ — નિયમિત ચેક-અપથી લઈને સંપૂર્ણ સ્મિત પરિવર્તન સુધી.',
      'svc.book_cta':         'એપોઇન્ટમેન્ટ બુક કરો →',
      'svc.rct_title':        'રૂટ કેનાલ સારવાર',
      'svc.rct_desc':         'રોટરી ટેકનિક સાથે પીડારહિત RCT. તમારા કુદરતી દાંત બચાવો — ઝડપથી અને આરામથી.',
      'svc.whitening_title':  'દાંત સફેદ કરવા',
      'svc.whitening_desc':   'વ્યાવસાયિક વ્હાઇટનિંગ જે એક સત્રમાં નોંધપાત્ર ઉજ્જવળ દાંત આપે છે.',
      'svc.implants_title':   'ડેન્ટલ ઇમ્પ્લાન્ટ',
      'svc.implants_desc':    'કાયમી દાંત રિપ્લેસમેન્ટ જે કુદરતી દાંત જેવું દેખાય, લાગે અને કામ કરે છે.',
      'svc.scaling_title':    'સ્કેલિંગ અને પોલિશિંગ',
      'svc.scaling_desc':     'પ્લેક અને ટાર્ટર દૂર કરો. સ્વસ્થ મસૂડા, તાજો શ્વાસ, સુરક્ષિત દાંત.',
      'svc.smile_title':      'સ્માઇલ ડિઝાઇનિંગ',
      'svc.smile_desc':       'કસ્ટમ મેકઓવર — વેનીયર્સ, બોન્ડિંગ, વ્હાઇટનિંગ — તમારા ચહેરા અને લક્ષ્યો અનુસાર.',
      'svc.crowns_title':     'ક્રાઉન અને બ્રિજ',
      'svc.crowns_desc':      'ઉચ્ચ ગુણવત્તાના સિરામિક રેસ્ટોરેશન જે તમારા હાલના દાંત સાથે સુસંગત રીતે ભળી જાય છે.',
      'svc.ortho_title':      'ઓર્થોડોન્ટિક્સ / બ્રેસિસ',
      'svc.ortho_desc':       'બાળકો અને વયસ્કો માટે પરંપરાગત બ્રેસિસ અને ક્લિયર અલાઇનર્સ. આજીવન સીધા દાંત.',
      'svc.paeds_title':      'બાળ દંત ચિકિત્સા',
      'svc.paeds_desc':       'સૌમ્ય, બાળક-મૈત્રીપૂર્ણ સંભાળ જે નાની ઉંમરથી સ્વસ્થ દંત આદતો બનાવે છે.',
      'svc.extraction_title': 'દાંત કાઢવા',
      'svc.extraction_desc':  'ચોક્કસ, પીડારહિત એક્સટ્રેક્શન જેમાં વિઝડમ ટૂથ પણ સામેલ છે, ઝડપી રિકવરી સાથે.',
      'svc.fillings_title':   'ડેન્ટલ ફિલિંગ્સ એન્ડ રેસ્ટોરેશન્સ',
      'svc.fillings_desc':    'દાંતના રંગની ફિલિંગ અને કેવિટી રિપેર. ટકાઉ, કુદરતી દેખાતા પરિણામો સાથે નુકસાન પામેલા દાંતને પુનઃસ્થાપિત કરો.',

      /* Doctor */
      'doc.badge': 'Pure Cure દંત ચિકિત્સક',
      'doc.tag':   'તમારા ડૉક્ટરને મળો',
      'doc.qual':  'BDS · સંસ્થાપક, ડેન્ટલ ડિલાઇટ Pure Cure · વેજલપુર, અમદાવાદ',
      'doc.bio':   'ડૉ. દિશા ગોરિયાએ ડેન્ટલ ડિલાઇટની સ્થાપના એક માન્યતા સાથે કરી: સારી દંત ચિકિત્સા ક્યારેય દુખાવી ન હોવી જોઈએ — શારીરિક, ભાવનાત્મક કે આર્થિક રીતે. તેમનો Pure Cure અભિગમ એટલે કે તે ફક્ત જરૂરી હોય તે જ ભલામણ કરે છે, બધું સ્પષ્ટ રીતે સમજાવે છે, અને ખાતરી કરે છે કે દરેક દર્દી ચિંતિત થવાને બદલે વધુ જાગૃત થઈને જાય.<br><br>આધુનિક ન્યૂનતમ આક્રમક ટેકનિકમાં તાલીમ પ્રાપ્ત, તે ઊંડી ક્લિનિકલ કુશળતા સાથે ખરીખરી ઉષ્મા લાવે છે. દર્દીઓ તેમને સૌમ્ય, પ્રમાણિક અને આશ્ચર્યજનક રીતે પીડારહિત ગણાવે છે — જે પ્રક્રિયાઓથી તે ડરતા હતા તેના માટે પણ.',
      'doc.chip1': 'ન્યૂનતમ આક્રમક',
      'doc.chip2': 'રૂટ કેનાલ નિષ્ણાત',
      'doc.chip3': 'કોસ્મેટિક દંત ચિકિત્સા',
      'doc.chip4': 'સ્માઇલ ડિઝાઇન',
      'doc.chip5': 'બાળ સંભાળ',
      'doc.chip6': 'પ્રમાણિક નિદાન',

      /* Reviews */
      'rev.tag':           'દર્દીઓની વાતો',
      'rev.heading':       'અમારા <span class="teal">દર્દીઓ</span> શું કહે છે',
      'rev.google_count':  '135 Google સમીક્ષાઓ',
      'rev.r1_text':       '"I was very impressed by the work of the doctor. The treatment was painless and it was smooth. Highly recommend."',
      'rev.r1_author':     'Nishant Desai',
      'rev.r2_text':       '"I had great experience with my root canal treatment done by Dr. Disha Goria. She was professional, gentle, and explained everything clearly. The procedure was smooth and comfortable. Highly satisfied and would definitely recommend her."',
      'rev.r2_author':     'Bhumi Shah',
      'rev.r3_text':       '"My visit with Dr. Disha was excellent. She explained everything clearly, made sure I was comfortable throughout the procedure, and handled everything with so much care. The clinic is clean, she is friendly, and I left feeling confident about my dental health. Highly recommend Dr. Disha!"',
      'rev.r3_author':     'Heta Shah',
      'rev.r4_text':       '"I recently had a root canal treatment done by Dr. Disha Goriya and I\'m extremely satisfied with the experience. She handled the entire procedure with great patience and made sure it was completely painless. Her calm and professional approach made all the difference."',
      'rev.r4_author':     'Rajish Nair',
      'rev.r5_text':       '"I have been done treatment here by Dr Disha Goria. It was painless. I truly appreciate her work. Highly recommended."',
      'rev.r5_author':     'Labhuben J Makwana',
      'rev.r6_text':       '"I had a fantastic experience with Dr. Disha. The clinic is clean, modern, and well-organized. Dr. Disha explained everything clearly, and made sure my daughter was comfortable throughout. Would highly recommend."',
      'rev.r6_author':     'Dr. Sweta Shah',
      'rev.r7_text':       '"Dr Disha has done my RCT very well with patience. I am highly satisfied. Highly recommended."',
      'rev.r7_author':     'Nayana Chavda',
      'rev.r8_text':       '"Best treatment done here. Dr Disha explains properly about treatment. Very comfortable. Highly recommend."',
      'rev.r8_author':     'Abhijit Goswami',
      'rev.r9_text':       '"I have treated RCT and bridge here. It was completely painless. Dr nature is very humble. Best hygiene and environment of clinic. Highly recommended."',
      'rev.r9_author':     'Sorya Teli',
      'rev.r10_text':      '"Brought my 6-year-old for first dental visit. Dr Disha was so patient and gentle. My daughter wasn\'t scared at all. Now she actually looks forward to dental visits!"',
      'rev.r10_author':    'Priya Patel',
      'rev.r11_text':      '"Got my teeth whitening done here. Visible difference in just one session. Dr Disha is very skilled and the clinic has great equipment."',
      'rev.r11_author':    'Mehul Trivedi',
      'rev.r12_text':      '"Had a dental implant done. Was nervous but Dr Disha made the entire process smooth and painless. Recovery was quick. Highly recommend."',
      'rev.r12_author':    'Kavita Singh',
      'rev.cta':           'Google પર બધી સમીક્ષાઓ વાંચો',
      'rev.post_cta':      '<i data-lucide="edit-3"></i> Google પર રિવ્યૂ પોસ્ટ કરો',

      /* Contact */
      'contact.tag':       'અમને શોધો',
      'contact.heading':   '<span class="teal">ડેન્ટલ ડિલાઇટ</span>ની મુલાકાત લો',
      'contact.intro':     'વેજલપુર, અમદાવાદ સ્થિત. વોક-ઇન આવકાર્ય — ઓછી રાહ માટે એપોઇન્ટમેન્ટ પસંદ કરેલ.',
      'contact.addr_label':'સરનામું',
      'contact.addr_val':  'Jay Somnath School, 11/753, Shivalay Road,<br>Opp. Vinayak Society, Yogeshwar Park Society,<br>વેજલપુર, અમદાવાદ – 380051',
      'contact.hours_label':'ક્લિનિકના સમય',
      'contact.hours_val': 'સોમ – શુક્ર: સવારે 8:00 – બપોરે 1:00<br>શનિવાર: સવારે 10:00 – બપોરે 1:00<br>રવિવાર: બંધ',
      'contact.phone_label':'ફોન / WhatsApp',
      'contact.maps_label':'Google Maps',
      'contact.maps_link': 'દિશા મેળવો →',
      'contact.cta_title': 'તમારું એપોઇન્ટમેન્ટ બુક કરો',
      'contact.cta_desc':  'અમને WhatsApp સંદેશ મોકલો — તમારું નામ, પસંદ કરેલી તારીખ અને જરૂરી સારવાર સાથે. અમે 2 કલાકમાં તમારી સ્લોટ કન્ફર્મ કરીશું.',
      'contact.call_btn':  'ક્લિનિકને ફોન કરો',

      /* Footer */
      'footer.copy': '© 2025 ડેન્ટલ ડિલાઇટ · વેજલપુર, અમદાવાદ',

      /* Modal */
      'modal.title':         'એપોઇન્ટમેન્ટ બુક કરો',
      'modal.subtitle':      'તમારી વિગતો ભરો અને અમે WhatsApp ને પ્રી-ફિલ કરેલા સંદેશ સાથે ખોલીશું.',
      'modal.name_label':    'તમારું નામ',
      'modal.name_placeholder': 'જેમ કે રાહુલ શાહ',
      'modal.phone_label':   'ફોન નંબર',
      'modal.phone_placeholder': 'જેમ કે 98765 43210',
      'modal.service_label': 'જરૂરી સેવા',
      'modal.service_opt0':  'એક સેવા પસંદ કરો (વૈકલ્પિક)',
      'modal.service_opt1':  'રૂટ કેનાલ સારવાર',
      'modal.service_opt2':  'દાંત સફેદ કરવા',
      'modal.service_opt3':  'ડેન્ટલ ઇમ્પ્લાન્ટ',
      'modal.service_opt4':  'સ્કેલિંગ અને પોલિશિંગ',
      'modal.service_opt5':  'સ્માઇલ ડિઝાઇનિંગ',
      'modal.service_opt6':  'ક્રાઉન અને બ્રિજ',
      'modal.service_opt7':  'ઓર્થોડોન્ટિક્સ / બ્રેસિસ',
      'modal.service_opt8':  'બાળ દંત ચિકિત્સા',
      'modal.service_opt9':  'દાંત કાઢવા',
      'modal.service_opt10': 'સામાન્ય તપાસ',
      'modal.date_label':    'પસંદ કરેલી તારીખ',
      'modal.submit':        'WhatsApp દ્વારા મોકલો',

      /* Instagram */
      'ig.tag':        'Instagram પર',
      'ig.heading':    '<span class="teal">@dentaldelightdg</span> તાજું',
      'ig.follow_cta': 'Instagram પર ફોલો કરો →'
    }
  };

  /* ── Apply translations ────────────────────────────────── */
  function applyTranslations(lang) {
    var t = translations[lang] || translations['en'];

    // data-i18n → textContent
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) el.textContent = t[key];
    });

    // data-i18n-html → innerHTML (for elements with inner <span>/<br> etc.)
    document.querySelectorAll('[data-i18n-html]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-html');
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    // data-i18n-placeholder → placeholder attribute
    document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
      var key = el.getAttribute('data-i18n-placeholder');
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    // Update <html lang>
    document.documentElement.lang = lang;

    // Toggle .active on all lang buttons (desktop + mobile drawer)
    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Persist choice
    try { localStorage.setItem('lang', lang); } catch (e) {}

    // Re-render Lucide icons after DOM update
    if (typeof lucide !== 'undefined') {
      lucide.createIcons();
    }
  }

  /* ── Init ──────────────────────────────────────────────── */
  function initI18n() {
    var saved = 'en';
    try { saved = localStorage.getItem('lang') || 'en'; } catch (e) {}
    if (!translations[saved]) saved = 'en';

    applyTranslations(saved);

    document.querySelectorAll('.lang-btn').forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyTranslations(this.getAttribute('data-lang'));
      });
    });
  }

  document.addEventListener('DOMContentLoaded', initI18n);

})();
