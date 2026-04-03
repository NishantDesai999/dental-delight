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

      /* Stats */
      'stat.patients':    'Patients Treated',
      'stat.rcts':        'Root Canals Done',
      'stat.implants':    'Dental Implants',
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
      'contact.hours_val': 'Mon – Fri: 8:00 AM – 1:00 PM<br>Saturday: 10:00 AM – 1:00 PM<br>Sunday: Closed',
      'contact.phone_label':'Call / WhatsApp',
      'contact.maps_label':'Google Maps',
      'contact.maps_link': 'Get Directions →',
      'contact.cta_title': 'Book Your Appointment',
      'contact.cta_desc':  "Send us a WhatsApp message with your name, preferred date, and treatment needed. We'll confirm your slot within 2 hours.",
      'contact.call_btn':  'Call the Clinic',

      /* Footer */
      'footer.copy': '© 2025 Dental Delight · Ahmedabad, Gujarat',

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
      'hero.tag':         'वेजलपुर, अहमदाबाद · कोमल दंत चिकित्सा',
      'hero.h1':          '<span class="italic teal">शुद्ध</span> देखभाल।<br><span class="italic">कोमल</span> हाथ।<br>स्वस्थ मुस्कान।',
      'hero.sub':         'डॉ. दिशा गोरिया का Pure Cure दर्शन केवल जरूरी उपचार करने पर आधारित है — सटीकता, करुणा और शून्य अनावश्यक प्रक्रियाओं के साथ।',
      'hero.cta_wa':      'WhatsApp पर बुक करें',
      'hero.cta_services':'हमारी सेवाएं →',

      /* Stats */
      'stat.patients':    'मरीज़ों का उपचार',
      'stat.rcts':        'रूट कैनाल किए',
      'stat.implants':    'डेंटल इम्प्लांट',
      'stat.established': 'वेजलपुर में सेवा',

      /* Pills */
      'pill.accepting':   'नए मरीज़ स्वीकार हो रहे हैं',
      'pill.painless':    'दर्दरहित RCT उपलब्ध',

      /* Philosophy */
      'phil.tag':         'हमारा दृष्टिकोण',
      'phil.heading':     'The <span class="teal">Pure Cure</span><br>दर्शन',
      'phil.intro':       'हम सिर्फ दांत नहीं, लोगों का इलाज करते हैं। हमारा वादा है कि हम केवल वही सुझाएंगे जो वास्तव में जरूरी है, और उसे भी पूरी तरह आरामदायक बनाएंगे।',
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
      'rev.r1_text':       '"डॉक्टर के काम से मैं बहुत प्रभावित था। उपचार दर्दरहित और सहज था। अत्यधिक अनुशंसा करता हूं।"',
      'rev.r1_author':     'Nishant Desai',
      'rev.r2_text':       '"डॉ. दिशा गोरिया से रूट कैनाल का बहुत अच्छा अनुभव रहा। वे पेशेवर, कोमल हैं और सब कुछ स्पष्ट रूप से समझाती हैं। प्रक्रिया सहज और आरामदायक थी। अत्यधिक संतुष्ट और निश्चित रूप से उनकी अनुशंसा करूंगा।"',
      'rev.r2_author':     'Bhumi Shah',
      'rev.r3_text':       '"डॉ. दिशा के साथ मेरी मुलाकात उत्कृष्ट रही। उन्होंने सब कुछ स्पष्ट रूप से समझाया, पूरी प्रक्रिया में मुझे आरामदायक महसूस कराया और बहुत देखभाल के साथ सब कुछ संभाला। क्लिनिक साफ है, वे मित्रवत हैं, और मैं अपने दंत स्वास्थ्य को लेकर आत्मविश्वास के साथ लौटा। डॉ. दिशा की अत्यधिक अनुशंसा करता हूं!"',
      'rev.r3_author':     'Heta Shah',
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
      'hero.tag':         'વેજલપુર, અમદાવાદ · કોmm દંત ચિકિત્સા',
      'hero.h1':          '<span class="italic teal">શુદ્ધ</span> સંભાળ।<br><span class="italic">કોmm</span> હાથ।<br>સ્વस्थ સ્મિત।',
      'hero.sub':         'ડૉ. દિશા ગોрияની Pure Cure ફिलोसোफी ફક્ત જrūrī સારвāर кरвानी छे — ивосіту, кarुणा ane शून्य бेзарурī प्रक्रियाઓ साথे।',
      'hero.cta_wa':      'WhatsApp पर बुक करो',
      'hero.cta_services':'अमारी सेवाओ →',

      /* Stats */
      'stat.patients':    'દર્દીઓની સારવાર',
      'stat.rcts':        'રૂટ કેનાલ કર્યા',
      'stat.implants':    'ડેન્ટલ ઇમ્પ્લાન્ટ',
      'stat.established': 'વેજલપુરમાં સેવા',

      /* Pills */
      'pill.accepting':   'नवा दर्दीओ स्वीकाराई रह्या छे',
      'pill.painless':    'पीडारहित RCT उपलब्ध',

      /* Philosophy */
      'phil.tag':         'अमारो अभिगम',
      'phil.heading':     'The <span class="teal">Pure Cure</span><br>ફिलोसोफी',
      'phil.intro':       'अमे फक्त दांत नहीं, लोकोनी सारवार करीए छीए. अमारुं वचन छे के अमे फक्त साचे जरूरी होय ते ज सूचवीशुं, ने ते पण पूरेपूरो आरामदायक बनावीशुं.',
      'phil.item1_title': 'न्यूनतम आक्रामक',
      'phil.item1_desc':  'मोटामां मोटी कुदरती दांत रचना जाळववी. ओछी ड्रिलिंग, सारी सारवार, लांबो समय टकतां परिणामो.',
      'phil.item2_title': 'बिनजरूरी सारवार नहीं',
      'phil.item2_desc':  'अमे फक्त ते ज सूचवीए छीए जे आपने खरेखर जोईए. पारदर्शी, प्रामाणिक निदान — हंमेशां, कोई अपवाद वगर.',
      'phil.item3_title': 'पीडारहित अनुभव',
      'phil.item3_desc':  'आधुनिक एनेस्थेसिया, कोmm तकनीक ने शांत वातावरण दरेक मुलाकातने आरामदायक बनावे छे.',
      'phil.item4_title': 'पुरावा-आधारित संभाळ',
      'phil.item4_desc':  'दरेक निर्णय वर्तमान दंत विज्ञान पर आधारित छे. अमे शीखतां रहीए छीए जेथी आपने श्रेष्ठ मळे.',

      /* Services */
      'svc.tag':              'अमे शुं सारवार करीए छीए',
      'svc.heading':          'अमारी <span class="teal">सेवाओ</span>',
      'svc.intro':            'एक छत नीचे व्यापक संभाळ — नियमित चेक-अपथी लईने पूर्ण स्मित परिवर्तन सुधी.',
      'svc.book_cta':         'અપોઈન્ટમેન્ટ બુક કરો →',
      'svc.rct_title':        'रूट केनाल सारवार',
      'svc.rct_desc':         'रोटरी तकनीक साथे पीडारहित RCT. आपना कुदरती दांत बचावो — झडपथी ने आरामथी.',
      'svc.whitening_title':  'दांत सफेद करवा',
      'svc.whitening_desc':   'व्यावसायिक व्हाइटनिंग जे एक सेशनमां नोंधपात्र रीते उज्जवळ दांत आपे छे.',
      'svc.implants_title':   'डेन्टल इम्प्लांट',
      'svc.implants_desc':    'कायमी दांत बदलवां जे कुदरती दांत जेवां ज दिखे, अनुभवाय ने काम करे.',
      'svc.scaling_title':    'स्केलिंग ने पोलिशिंग',
      'svc.scaling_desc':     'प्लेक ने टार्टर दूर करो. स्वस्थ पेढां, ताजो श्वास, सुरक्षित दांत.',
      'svc.smile_title':      'स्माइल डिझाइनिंग',
      'svc.smile_desc':       'कस्टम मेकओवर — वेनिर, बोन्डिंग, व्हाइटनिंग — आपना चेहरा ने ध्येय मुजब.',
      'svc.crowns_title':     'क्राउन ने ब्रिज',
      'svc.crowns_desc':      'उच्च गुणवत्तानां सिरामिक रेस्टोरेशन जे आपना हाला दांत साथे स्वाभाविक रीते भळे.',
      'svc.ortho_title':      'ऑर्थोडोन्टिक्स / ब्रेसेस',
      'svc.ortho_desc':       'बाळको ने पुखत व्यक्तिओ माटे परंपरागत ब्रेसेस ने क्लियर अलाइनर. जीवनभर सीधा दांत.',
      'svc.paeds_title':      'बाळ दंत चिकित्सा',
      'svc.paeds_desc':       'कोmm, बाळक-मित्रवत संभाळ जे नानी उंमरथी स्वस्थ दांत-स्वास्थ्यनी आदतो बनावे छे.',
      'svc.extraction_title': 'दांत काढवां',
      'svc.extraction_desc':  'सचोट, पीडारहित उत्खनन जेमां अकल दाढ पण सामेल छे, झडपी रिकवरी साथे.',

      /* Doctor */
      'doc.badge': 'Pure Cure दंत चिकित्सक',
      'doc.tag':   'आपना डोक्टरने मळो',
      'doc.qual':  'BDS · संस्थापक, डेन्टल डिलाइट Pure Cure · वेजलपुर, अमदावाद',
      'doc.bio':   'डॉ. दिशा गोरियाए डेन्टल डिलाइटनी स्थापना एक विश्वास साथे करी: सारी दंत चिकित्सा कदी दुखावी जोईए नहीं — शारीरिक, भावनात्मक के आर्थिक रीते. तेमनो Pure Cure अभिगम एटले ते फक्त जरूरी होय ते ज सूचवे छे, बधुं स्पष्ट रीते समजावे छे, ने खातरी करे छे के दरेक दर्दी चिंतित नहीं पण जागृत थईने जाय.<br><br>आधुनिक न्यूनतम आक्रामक तकनीकोमां प्रशिक्षित, ते गहेरी क्लिनिकल कुशळता साथे खरेखरी ऊष्मा लावे छे. दर्दीओ तेमने कोmm, प्रामाणिक ने आश्चर्यजनक रीते पीडारहित ग़णावे छे — जे प्रक्रियाओथी ते डरतां हतां तेमांथी पण.',
      'doc.chip1': 'न्यूनतम आक्रामक',
      'doc.chip2': 'रूट केनाल विशेषज्ञ',
      'doc.chip3': 'कोस्मेटिक दंत चिकित्सा',
      'doc.chip4': 'स्माइल डिझाइन',
      'doc.chip5': 'बाळ संभाळ',
      'doc.chip6': 'प्रामाणिक निदान',

      /* Reviews */
      'rev.tag':           'दर्दीओनी वातो',
      'rev.heading':       'अमारां <span class="teal">दर्दीओ</span> शुं कहे छे',
      'rev.google_count':  '135 Google समीक्षाओ',
      'rev.r1_text':       '"ડૉક્ટરનાં કામ થી હું ખૂબ પ્રભાવિત થયો. સારવાર પીડારહિત ને સહજ હતી. અત્યંત ભલામણ કરું છું."',
      'rev.r1_author':     'Nishant Desai',
      'rev.r2_text':       '"ડૉ. દિશા ગોરિયા પાસે રૂટ કેનાલનું ખૂબ અનુભવ રહ્યું. તેમની પ્રોફેશનલ, કોમળ ને બધું સ્પષ્ટ સમજાવ્યું. પ્રક્રિયા સહજ ને આરામદાયક હતી. ખૂબ સંતુષ્ટ ને ભલામણ કરું છું."',
      'rev.r2_author':     'Bhumi Shah',
      'rev.r3_text':       '"ડૉ. દિશા સાથે મારી મુલાકાત ઉત્કૃષ્ટ હતી. બધું સ્પષ્ટ સમજાવ્યું, પ્રક્રિયા દરમિયાન આરામદાયક મહેસૂસ કરાવ્યું ને ખૂબ કાળજી લીધી. ક્લિનિક સાફ છે, તેમની મિત્રવત છે ને હું આત્મવિશ્વાસ સાથે પરત્યો. ડૉ. દિશાની ભલામણ કરું છું!"',
      'rev.r3_author':     'Heta Shah',
      'rev.cta':           'Google પર બધી સમીક્ષાઓ વાંચો',
      'rev.post_cta':      '<i data-lucide="edit-3"></i> Google પર રિવ્યૂ પોસ્ટ કરો',

      /* Contact */
      'contact.tag':       'अमने शोधो',
      'contact.heading':   '<span class="teal">डेन्टल डिलाइट</span>नी मुलाकात लो',
      'contact.intro':     'वेजलपुर, अमदावादमां आवेलुं. वोक-इन आवकार्य — ओछी प्रतीक्षा माटे एपोइन्टमेन्ट पसंदीदा.',
      'contact.addr_label':'सरनामुं',
      'contact.addr_val':  'Jay Somnath School, 11/753, Shivalay Road,<br>Opp. Vinayak Society, Yogeshwar Park Society,<br>वेजलपुर, अमदावाद – 380051',
      'contact.hours_label':'क्लिनिक समय',
      'contact.hours_val': 'सोम – शुक्र: सवारे 8:00 – बपोरे 1:00<br>शनिवार: सवारे 10:00 – बपोरे 1:00<br>रविवार: बंध',
      'contact.phone_label':'फोन / WhatsApp',
      'contact.maps_label':'Google Maps',
      'contact.maps_link': 'दिशा मेळवो →',
      'contact.cta_title': 'आपनुं एपोइन्टमेन्ट बुक करो',
      'contact.cta_desc':  'अमने WhatsApp संदेश मोकलो — आपनुं नाम, पसंदीदा तारीख ने जोईती सारवार साथे. अमे 2 कलाकमां आपनो स्लोट कन्फर्म करीशुं.',
      'contact.call_btn':  'क्लिनिकने फोन करो',

      /* Footer */
      'footer.copy': '© 2025 डेन्टल डिलाइट · वेजलपुर, अमदावाद',

      /* Modal */
      'modal.title':         'एपोइन्टमेन्ट बुक करो',
      'modal.subtitle':      'आपनी विगत भरो ने अमे WhatsApp पहेलेथी भरेलां संदेश साथे खोलीशुं.',
      'modal.name_label':    'आपनुं नाम',
      'modal.name_placeholder': 'जेमके राहुल शाह',
      'modal.phone_label':   'फोन नंबर',
      'modal.phone_placeholder': 'जेमके 98765 43210',
      'modal.service_label': 'जोईती सेवा',
      'modal.service_opt0':  'एक सेवा पसंद करो (वैकल्पिक)',
      'modal.service_opt1':  'रूट केनाल सारवार',
      'modal.service_opt2':  'दांत सफेद करवा',
      'modal.service_opt3':  'डेन्टल इम्प्लांट',
      'modal.service_opt4':  'स्केलिंग ने पोलिशिंग',
      'modal.service_opt5':  'स्माइल डिझाइनिंग',
      'modal.service_opt6':  'क्राउन ने ब्रिज',
      'modal.service_opt7':  'ऑर्थोडोन्टिक्स / ब्रेसेस',
      'modal.service_opt8':  'बाळ दंत चिकित्सा',
      'modal.service_opt9':  'दांत काढवां',
      'modal.service_opt10': 'सामान्य तपास',
      'modal.date_label':    'पसंदीदा तारीख',
      'modal.submit':        'WhatsApp द्वारा मोकलो',

      /* Instagram */
      'ig.tag':        'Instagram पर',
      'ig.heading':    '<span class="teal">@dentaldelightdg</span> थी ताजुं',
      'ig.follow_cta': 'Instagram पर फोलो करो →'
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
