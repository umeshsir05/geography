// Saare 53 MCQs ka complete dataset
const mcqData = [
  {
    id: 1,
    question: "प्रथमतः सौरमण्डल के बारे में विश्व के समक्ष जानकारी प्रस्तुत करने का श्रेय निम्न में से किस विद्वान को है?",
    options: ["(क) गैलीलियो गैलिली", "(ख) स्ट्रैबो", "(ग) कॉपरनिकस", "(घ) केपलर"],
    answer: "(ग) कॉपरनिकस"
  },
  {
    id: 2,
    question: "भूगोल को एक अलग अध्ययन शास्त्र के रूप में स्थापित करने का श्रेय निम्न में से किस विद्वान को है?",
    options: ["(क) इरैटोस्थनीज", "(ख) हिकैटियस", "(ग) हिप्पार्कस", "(घ) हेरोडोटस"],
    answer: "(ख) हिकैटियस"
  },
  {
    id: 3,
    question: "निम्न में से किस विद्वान को 'भूगोल का पिता' कहा जाता है?",
    options: ["(क) हेरोडोटस", "(ख) हिप्पार्कस", "(ग) हिकैटियस", "(घ) पोसीडोनियस"],
    answer: "(ग) हिकैटियस"
  },
  {
    id: 4,
    question: "विश्व की प्रथम जलवायु मानचित्रावली 'किताब-अल-अंशकाल' किस अरब विद्वान द्वारा लिखी गयी थी?",
    options: ["(क) रहमुर मुजी", "(ख) इब्ने खुरदादबेह", "(ग) अल मसूदी", "(घ) अल बल्खी"],
    answer: "(घ) अल बल्खी"
  },
  {
    id: 5,
    question: "आकाश गंगा (Milky way) वर्गीकृत की गई है-",
    options: ["(क) सर्पिलाकार गैलेक्सी के रूप में", "(ख) विद्युत गैलेक्सी के रूप में", "(ग) अनियमित गैलेक्सी के रूप में", "(घ) गोलाकार गैलेक्सी के रूप में"],
    answer: "(क) सर्पिलाकार गैलेक्सी के रूप में"
  },
  {
    id: 6,
    question: "हमारी आकाश गंगा के केन्द्र की परिक्रमा करने में सूर्य को समय लगता है-",
    options: ["(क) 2.5 करोड़ वर्ष", "(ख) 25 करोड़ वर्ष", "(ग) 10 करोड़ वर्ष", "(घ) 50 करोड़ वर्ष"],
    answer: "(ख) 25 करोड़ वर्ष"
  },
  {
    id: 7,
    question: "तारे का रंग सूचक है-",
    options: ["(क) सूर्य से दूरी का", "(ख) उसकी ज्योति का", "(ग) उसकी पृथ्वी से दूरी का", "(घ) उसके ताप का"],
    answer: "(घ) उसके ताप का"
  },
  {
    id: 8,
    question: "निम्नांकित में वह सीमा जिसके बाहर तारे आन्तरिक मृत्यु से ग्रसित होते हैं कहलाती है-",
    options: ["(क) चन्द्रशेखर सीमा", "(ख) एडिंगटन सीमा", "(ग) हायल सीमा", "(घ) फाउलर सीमा"],
    answer: "(क) चन्द्रशेखर सीमा"
  },
  {
    id: 9,
    question: "कृष्ण-छिद्र सिद्धान्त के प्रतिपादक थे-",
    options: ["(क) सी.वी. रमन", "(ख) एच.जे. भाभा", "(ग) एस. चन्द्रशेखर", "(घ) हर गोविन्द खुराना"],
    answer: "(ग) एस. चन्द्रशेखर"
  },
  {
    id: 10,
    question: "निम्नलिखित में कौन तारों के कारण घटित आकाशीय परिघटना है?",
    options: ["(क) ओजोन छिद्र", "(ख) कृष्ण विवर", "(ग) इन्द्रधनुष", "(घ) धूमकेतु"],
    answer: "(ख) कृष्ण विवर"
  },
  {
    id: 11,
    question: "ब्लैकहोल अंतरिक्ष में एक पिंड है जो किसी प्रकार के विकिरण को बाहर नहीं आने देता। इस गुण का कारण है-",
    options: ["(क) बहुत छोटा आकार", "(ख) बहुत बड़ा आकार", "(ग) बहुत उच्च घनत्व", "(घ) बहुत अल्प घनत्व"],
    answer: "(ग) बहुत उच्च घनत्व"
  },
  {
    id: 12,
    question: "हमारे अंतरिक्ष में कुल तारामण्डलों की संख्या है-",
    options: ["(क) 87", "(ख) 88", "(ग) 89", "(घ) 90"],
    answer: "(ख) 88"
  },
  {
    id: 13,
    question: "निम्नलिखित में कौन अंतरिक्ष में नहीं पाया जाता है?",
    options: ["(क) पल्सर", "(ख) ब्रिटल स्टार", "(ग) ब्लैक होल", "(घ) क्वासर"],
    answer: "(ख) ब्रिटल स्टार"
  },
  {
    id: 14,
    question: "हबल अंतरिक्ष टेलिस्कोप ने पहली बार जिस दूरस्थ तारे के सतह की छाया भेजी है उसका नाम है –",
    options: ["(क) विरगो", "(ख) 70 वरजिन्स", "(ग) बीटलग्यूस", "(घ) बिग डिपर"],
    answer: "(ग) बीटलग्यूस"
  },
  {
    id: 15,
    question: "एक खगोलीय एकक औसत दूरी होती है-",
    options: ["(क) पृथ्वी और सूर्य के बीच की", "(ख) पृथ्वी और चन्द्रमा के बीच की", "(ग) बृहस्पति और सूर्य के बीच की", "(घ) प्लूटो और सूर्य के बीच की"],
    answer: "(क) पृथ्वी और सूर्य के बीच की"
  },
  {
    id: 16,
    question: "भूमध्य सागरीय जलवायु निम्न में से किस फसल की कृषि के लिए सर्वाधिक उपयुक्त है?",
    options: ["(क) चावल", "(ख) गेहूँ", "(ग) फल", "(घ) दालें"],
    answer: "(ग) फल"
  },
  {
    id: 17,
    question: "भारत के दक्षिणी प्रायद्वीपीय पठार पर मिलने वाली वनस्पतियों पर निम्न में से किस कारक का सर्वाधिक प्रभाव पड़ा है?",
    options: ["(क) मिट्टी", "(ख) ऊंचाई", "(ग) वर्षा", "(घ) भूमध्यरेखा से दूरी"],
    answer: "(ग) वर्षा"
  },
  {
    id: 18,
    question: "विश्व के शीत मरुस्थलों को किस अन्य नाम से जाना जाता है?",
    options: ["(क) टैगा", "(ख) टुण्ड्रा", "(ग) हिमाच्छादित क्षेत्र", "(घ) उपर्युक्त में से कोई नहीं"],
    answer: "(ख) टुण्ड्रा"
  },
  {
    id: 19,
    question: "निम्न में से कौन अधात्विक खनिज है?",
    options: ["(क) मैग्नीशियम", "(ख) मैंगनीज", "(ग) जिप्सम", "(घ) बाक्साइट"],
    answer: "(ग) जिप्सम"
  },
  {
    id: 20,
    question: "यदि पृथ्वी एवं अन्तरिक्ष के बीच से वायुमण्डल को हटा हुआ माना जाय तो आसमान का रंग कैसा होगा?",
    options: ["(क) नीला", "(ख) सफेद", "(ग) लाल", "(घ) काला"],
    answer: "(घ) काला"
  },
  {
    id: 21,
    question: "निम्न में से कौन-सी नदी 'पक्षिपाद डेल्टा' (Birdfoot delta) का निर्माण करती है?",
    options: ["(क) मिसीसिपी", "(ख) अमेजन", "(ग) नील", "(घ) ब्रह्मपुत्र"],
    answer: "(क) मिसीसिपी"
  },
  {
    id: 22,
    question: "निम्न में कौन सुमेलित नहीं है?",
    options: ["(क) यूरेनियम - पिच ब्लैण्ड", "(ख) सोडियम - रॉक साल्ट", "(ग) सिल्वर - ऑर्जेनाइट", "(घ) आयरन - ऐन्थ्रेसाइट"],
    answer: "(घ) आयरन - ऐन्थ्रेसाइट"
  },
  {
    id: 23,
    question: "'सेरीकल्चर' (Sericulture) निम्न में से किसके उत्पादन से सम्बन्धित है?",
    options: ["(क) सूरजमुखी", "(ख) कपास", "(ग) रेशम", "(घ) लाख"],
    answer: "(ग) रेशम"
  },
  {
    id: 24,
    question: "निम्न में से किस महाद्वीप में जलविद्युत शक्ति की सम्भाव्यता सर्वाधिक है?",
    options: ["(क) उत्तरी अमेरिका", "(ख) दक्षिणी अमेरिका", "(ग) एशिया", "(घ) अफ्रीका"],
    answer: "(घ) अफ्रीका"
  },
  {
    id: 25,
    question: "विश्व में मैंगनीज का सर्वाधिक उत्पादन करने वाला देश कौन-सा है?",
    options: ["(क) भारत", "(ख) रूस", "(ग) ब्राजील", "(घ) घाना"],
    answer: "(ख) रूस"
  },
  {
    id: 26,
    question: "वर्ष 1959 में विश्व में सबसे पहले तेलकूप की खुदाई निम्न में से किस देश में की गयी?",
    options: ["(क) सऊदी अरब", "(ख) सं० रा० अमेरिका", "(ग) पूर्व सोवियत संघ", "(घ) उपर्युक्त में से कोई नहीं"],
    answer: "(ख) सं० रा० अमेरिका"
  },
  {
    id: 27,
    question: "सूची I तथा सूची II को सुमेलित कीजिए।",
    table: {
      headers: ["सूची I", "सूची II"],
      rows: [
        ["(अ) पेट्रोकेमिकल्स", "(1) डेट्रायट"],
        ["(ब) लौह-इस्पात", "(2) विशाखापटनम"],
        ["(स) सूती वस्त्र", "(3) नगोया"],
        ["(द) मोटरवाहन उद्योग", "(4) यूराल औद्योगिक सम्मिश्र"],
        ["(य) जलयान निर्माण", "(5) बर्मिंघम"]
      ]
    },
    subText: "<strong>कूट:</strong>",
    options: [
      "(क) अ-1, ब-2, स-3, द-4, य-5",
      "(ख) अ-4, ब-5, स-3, द-1, य-2",
      "(ग) अ-5, ब-4, स-3, द-2, य-1",
      "(घ) अ-2, ब-1, स-3, द-4, य-5"
    ],
    answer: "(ख) [4, 5, 3, 1, 2]"
  },
  {
    id: 28,
    question: "कुद्रेमुख लौह खनिज परियोजना निम्न में से किस राज्य में स्थित है?",
    options: ["(क) केरल", "(ख) तमिलनाडु", "(ग) कर्नाटक", "(घ) महाराष्ट्र"],
    answer: "(ग) कर्नाटक"
  },
  {
    id: 29,
    question: "भारत में बृहत् पैमाने पर जूट की खेती निम्नलिखित में से किस नदी के घाटी क्षेत्र में की जाती है?",
    options: ["(क) दामोदर", "(ख) हुगली", "(ग) गंगा", "(घ) सिन्धु"],
    answer: "(ख) हुगली"
  },
  {
    id: 30,
    question: "भारत में खनिज तेल के भण्डार मुख्यतः किस प्रकार की चट्टानों में पाये जाते हैं?",
    options: ["(क) कायान्तरित", "(ख) अवसादी या परतदार", "(ग) आग्नेय", "(घ) उपर्युक्त सभी"],
    answer: "(ख) अवसादी या परतदार"
  },
  {
    id: 31,
    question: "निम्न में कौन मध्य अमेरिकी देशों में शामिल नहीं किया जाता है?",
    options: ["(क) पेरू", "(ख) निकारागुआ", "(ग) पनामा", "(घ) एल साल्वाडोर"],
    answer: "(क) पेरू"
  },
  {
    id: 32,
    question: "निम्न में से कौन बेमेल है?",
    options: ["(क) अंकलेश्वर - जलप्रपात", "(ख) अंकलेश्वर - खनिज तेल क्षेत्र", "(ग) अहमदाबाद - लौह-इस्पात उद्योग", "(घ) नेपानगर - अखबारी कागज"],
    answer: "(ग) अहमदाबाद - लौह-इस्पात उद्योग"
  },
  {
    id: 33,
    question: "भारतीय जलवायु की सबसे महत्वपूर्ण विशेषता कौन-सी है?",
    options: ["(क) वर्ष भर वर्षा की प्राप्ति", "(ख) पवनों की दिशा में मौसमी परिवर्तन", "(ग) ग्रीष्म एवं शीतकालीन वर्षा", "(घ) पवनों का विपरीत स्वभाव"],
    answer: "(घ) पवनों का विपरीत स्वभाव"
  },
  {
    id: 34,
    question: "निम्नलिखित में से कौन नियमित अथवा ग्रहीय पवन है?",
    options: ["(क) मिस्ट्रल पवन", "(ख) मानसून पवन", "(ग) व्यापारिक पवन", "(घ) चिनुक"],
    answer: "(ग) व्यापारिक पवन"
  },
  {
    id: 35,
    question: "निम्नलिखित देशों में से किसके पास दुनिया का सबसे बड़ा यूरेनियम भंडार है-",
    options: ["(क) आस्ट्रेलिया", "(ख) रशियन फेडरेशन", "(ग) यू.एस.ए.", "(घ) कनाडा"],
    answer: "(घ) कनाडा"
  },
  {
    id: 36,
    question: "कोइलकारो जलविद्युत परियोजना निम्नलिखित में से किस राज्य में स्थित है?",
    options: ["(क) जम्मू एवं कश्मीर", "(ख) बिहार", "(ग) हिमाचल प्रदेश", "(घ) मेघालय"],
    answer: "(ख) बिहार"
  },
  {
    id: 37,
    question: "सूची I एवं सूची II को सुमेलित कीजिए।",
    table: {
      headers: ["सूची I", "सूची II"],
      rows: [
        ["(अ) पश्चिमी आस्ट्रेलिया", "(1) ब्रिस्बेन"],
        ["(ब) दक्षिणी आस्ट्रेलिया", "(2) सिडनी"],
        ["(स) विक्टोरिया", "(3) मेलबोर्न"],
        ["(द) न्यू साउथ वेल्स", "(4) एडीलेड"],
        ["", "(5) पर्थ"]
      ]
    },
    subText: "<strong>कूट:</strong>",
    options: [
      "(क) अ-5, ब-4, स-3, द-2",
      "(ख) अ-4, ब-3, स-2, द-1",
      "(ग) अ-1, ब-2, स-3, द-4",
      "(घ) अ-2, ब-4, स-5, द-3"
    ],
    answer: "(क) [5, 4, 3, 2]"
  },
  {
    id: 38,
    question: "निम्नलिखित में से किस महाद्वीप को उसके काफी बड़े भाग में वर्षा की कम मात्रा की प्राप्ति के कारण 'प्यासी भूमि का महाद्वीप' कहा जाता है?",
    options: ["(क) अफ्रीका", "(ख) एशिया", "(ग) आस्ट्रेलिया", "(घ) यूरोप"],
    answer: "(ग) आस्ट्रेलिया"
  },
  {
    id: 39,
    question: "निम्नलिखित युग्मों पर विचार कीजिए-",
    table: {
      headers: ["प्रसिद्ध स्थान", "देश"],
      rows: [
        ["1. कान", "फ्रांस"],
        ["2. दावोस", "डेनमार्क"],
        ["3. रोलाँ गारो", "द नीदरलैण्ड्स"]
      ]
    },
    subText: "उपर्युक्त युग्मों में से कौन सा/से सही सुमेलित है?",
    options: ["(क) केवल 1", "(ख) केवल 1 और 2", "(ग) केवल 2 और 3", "(घ) 1, 2 और 3"],
    answer: "(क) केवल 1"
  },
  {
    id: 40,
    question: "चक्रवातों की उत्पत्ति से सम्बन्धित 'ध्रुवीय वाताग्र सिद्धान्त' (Polar Front Theory) का प्रतिपादन निम्नलिखित में से किसके द्वारा किया गया है?",
    options: ["(क) नेपियर शॉ तथा लिम्फर्ट", "(ख) फिट्जेराय", "(ग) जे० बर्कनीज", "(घ) टॉर बर्गराॅन"],
    answer: "(ग) जे० बर्कनीज"
  },
  {
    id: 41,
    question: "निम्नलिखित में से किस ज्वालामुखी को 'भूमध्यसागर का प्रकाश स्तम्भ' कहा जाता है?",
    options: ["(क) एटना", "(ख) वल्कैनो", "(ग) स्ट्राबोली", "(घ) क्राकाटाओ"],
    answer: "(ग) स्ट्राबोली"
  },
  {
    id: 42,
    question: "विकीर्ण या बिखरी बस्तियों के लिए निम्नलिखित में से कौन-सा कारक उत्तरदायी है?",
    options: ["(क) जनसंख्या वृद्धि", "(ख) आर्थिक विकास", "(ग) (क) तथा (ख) दोनों", "(घ) उपर्युक्त में से कोई नहीं"],
    answer: "(ग) (क) तथा (ख) दोनों"
  },
  {
    id: 43,
    question: "भारत में नमक की प्राप्ति मुख्य रूप से किस स्रोत से होती है?",
    options: ["(क) सागरीय जल", "(ख) झील एवं मृदा जल", "(ग) चट्टानी नमक की परतें", "(घ) उपर्युक्त सभी"],
    answer: "(घ) उपर्युक्त सभी"
  },
  {
    id: 44,
    question: "भारतीय वन सर्वेक्षण विभाग की स्थापना कब की गई थी?",
    options: ["(क) 1981", "(ख) 1983", "(ग) 1988", "(घ) 1990"],
    answer: "(क) 1981"
  },
  {
    id: 45,
    question: "समप्राय मैदानों का निर्माण नदी की किस अवस्था में होता है?",
    options: ["(क) युवावस्था", "(ख) प्रौढ़ावस्था", "(ग) वृद्धावस्था", "(घ) उपर्युक्त सभी में"],
    answer: "(ग) वृद्धावस्था"
  },
  {
    id: 46,
    question: "निम्न में से कौन सुमेलित नहीं है?",
    options: [
      "(क) ग्रहाणु परिकल्पना - टी० सी० चैम्बरलिन",
      "(ख) ज्वारीय परिकल्पना - जेम्स जींस एवं जेफरीज",
      "(ग) अन्तरतारक धूल परिकल्पना - आटो श्मिथ",
      "(घ) बृहस्पति-सूर्य द्वैतारक परिकल्पना - फ्रेड हॉयल एवं लिटिलटन"
    ],
    answer: "(घ) बृहस्पति-सूर्य द्वैतारक परिकल्पना - फ्रेड हॉयल एवं लिटिलटन"
  },
  {
    id: 47,
    question: "महाद्वीप एवं महासागरीय नितल की उत्पत्ति से सम्बन्धित चतुष्फलक सिद्धान्त निम्नलिखित में से किस सिद्धान्त द्वारा प्रतिपादित किया गया है?",
    options: ["(क) लोथियन ग्रीन", "(ख) इली डि ब्यूमोंट", "(ग) एफ० बी०टेलर", "(घ) एण्टोनियो स्नीडर"],
    answer: "(क) लोथियन ग्रीन"
  },
  {
    id: 48,
    question: "निम्न में से कौन-सी अप्रत्राभिक शैल (Non-foliated Rock) है?",
    options: ["(क) स्लेट", "(ख) संगमरमर", "(ग) सिस्ट", "(घ) नीस"],
    answer: "(ख) संगमरमर"
  },
  {
    id: 49,
    question: "नीचे ज्वारभाटा की उत्पत्ति से सम्बन्धित कुछ सिद्धान्त एवं उनके प्रतिपादक दिये गये हैं। कौन सा युग्म सुमेलित नहीं हैं?",
    options: [
      "(क) सन्तुलन सिद्धान्त - सर आइजक न्यूटन",
      "(ख) गतिक सिद्धान्त - लाप्लास",
      "(ग) प्रगामी तरंग सिद्धान्त - जी० बी० एयरी",
      "(घ) स्थैतिक तरंग सिद्धान्त - आर० ए० हैरिस"
    ],
    answer: "(ग) प्रगामी तरंग सिद्धान्त - जी० बी० एयरी"
  },
  {
    id: 50,
    question: "निम्नलिखित में कौन बेमेल है?",
    options: ["(क) दैनिक ज्वार", "(ख) भूमध्यरेखीय ज्वार", "(ग) बैरोमीट्रिक ज्वार", "(घ) उपभू ज्वार"],
    answer: "(ग) बैरोमीट्रिक ज्वार"
  },
  {
    id: 51,
    question: "निम्नलिखित में से कौन सा एक मलेशिया देश की प्रशासनिक राजधानी तथा नया संघीय प्रशासनिक केन्द्र है?",
    options: ["(क) कोटा भारू", "(ख) कुआ टेंगानू", "(ग) पुत्रा जाया", "(घ) ताइपिंग"],
    answer: "(ग) पुत्रा जाया"
  },
  {
    id: 52,
    question: "व्यापारिक रूप से मत्स्य-पालन का व्यवसाय किस नाम से जाना जाता है?",
    options: ["(क) विटीकल्चर", "(ख) एपीकल्चर", "(ग) सेरीकल्चर", "(घ) पिसीकल्चर"],
    answer: "(घ) पिसीकल्चर"
  },
  {
    id: 53,
    question: "'मेरीकल्चर' (Meryculture) में किसका उत्पादन किया जाता है?",
    options: ["(क) वृक्षों तथा झाड़ियों", "(ख) फूलों", "(ग) समुद्री जीवों", "(घ) मधुमक्खियों"],
    answer: "(ग) समुद्री जीवों"
  }
];

// App Initialization
document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("questionsContainer");

  // Dynamic Rendering function
  function renderQuestions() {
    container.innerHTML = "";
    mcqData.forEach((item) => {
      const card = document.createElement("article");
      card.className = "question-card";
      card.id = `q${item.id}`;

      let tableHtml = "";
      if (item.table) {
        let headersHtml = item.table.headers.map(h => `<th>${h}</th>`).join("");
        let rowsHtml = item.table.rows.map(r => `<tr><td>${r[0]}</td><td>${r[1]}</td></tr>`).join("");
        tableHtml = `
          <div class="match-table-box">
            <table class="match-table">
              <thead><tr>${headersHtml}</tr></thead>
              <tbody>${rowsHtml}</tbody>
            </table>
          </div>
        `;
      }

      let subTextHtml = item.subText ? `<p class="sub-text">${item.subText}</p>` : "";
      let optionsHtml = item.options.map(opt => `<li>${opt}</li>`).join("");

      card.innerHTML = `
        <div class="card-header">
          <span class="badge">प्रश्न ${item.id}</span>
        </div>
        <p class="question-text">${item.question}</p>
        ${tableHtml}
        ${subTextHtml}
        <ul class="options-list">
          ${optionsHtml}
        </ul>
        <button class="toggle-answer-btn">उत्तर देखें</button>
        <div class="answer-box">
          <strong>सही उत्तर:</strong> ${item.answer}
        </div>
      `;

      container.appendChild(card);
    });

    // Attach Toggle Answer Event Listeners
    document.querySelectorAll(".toggle-answer-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const answerBox = btn.nextElementSibling;
        answerBox.classList.toggle("active");
        btn.textContent = answerBox.classList.contains("active") ? "उत्तर छुपाएं" : "उत्तर देखें";
      });
    });
  }

  // Render all cards on load
  renderQuestions();

  // Elements Selection
  const themeToggle = document.getElementById("themeToggle");
  const hamburgerBtn = document.getElementById("hamburgerBtn");
  const closeDrawerBtn = document.getElementById("closeDrawerBtn");
  const sideDrawer = document.getElementById("sideDrawer");
  const menuOverlay = document.getElementById("menuOverlay");

  const jumpInput = document.getElementById("jumpInput");
  const jumpBtn = document.getElementById("jumpBtn");
  const drawerJumpInput = document.getElementById("drawerJumpInput");
  const drawerJumpBtn = document.getElementById("drawerJumpBtn");

  const menuScrollTop = document.getElementById("menuScrollTop");
  const menuScrollBottom = document.getElementById("menuScrollBottom");
  const floatingTopBtn = document.getElementById("floatingTopBtn");

  // 1. Dark Mode / Light Mode with LocalStorage
  const currentTheme = localStorage.getItem("theme") || "light";
  if (currentTheme === "dark") {
    document.body.setAttribute("data-theme", "dark");
    themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
  }

  themeToggle.addEventListener("click", () => {
    const isDark = document.body.getAttribute("data-theme") === "dark";
    if (isDark) {
      document.body.removeAttribute("data-theme");
      themeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
      localStorage.setItem("theme", "light");
    } else {
      document.body.setAttribute("data-theme", "dark");
      themeToggle.innerHTML = '<i class="fa-solid fa-sun"></i>';
      localStorage.setItem("theme", "dark");
    }
  });

  // 2. Hamburger Drawer Open/Close Logic
  function openDrawer() {
    sideDrawer.classList.add("active");
    menuOverlay.classList.add("active");
  }

  function closeDrawer() {
    sideDrawer.classList.remove("active");
    menuOverlay.classList.remove("active");
  }

  hamburgerBtn.addEventListener("click", openDrawer);
  closeDrawerBtn.addEventListener("click", closeDrawer);
  menuOverlay.addEventListener("click", closeDrawer);

  // 3. Jump to Specific Question
  function jumpToQuestion(qNum) {
    if (!qNum || qNum < 1 || qNum > 53) {
      alert("कृपया 1 से 53 के बीच की संख्या दर्ज करें।");
      return;
    }
    const target = document.getElementById(`q${qNum}`);
    if (target) {
      closeDrawer();
      target.scrollIntoView({ behavior: "smooth" });

      target.style.border = "2px solid var(--primary-color)";
      setTimeout(() => {
        target.style.border = "1px solid var(--border-color)";
      }, 1800);
    }
  }

  if (jumpBtn) {
    jumpBtn.addEventListener("click", () => {
      jumpToQuestion(parseInt(jumpInput.value.trim(), 10));
    });
    jumpInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") jumpToQuestion(parseInt(jumpInput.value.trim(), 10));
    });
  }

  if (drawerJumpBtn) {
    drawerJumpBtn.addEventListener("click", () => {
      jumpToQuestion(parseInt(drawerJumpInput.value.trim(), 10));
    });
    drawerJumpInput.addEventListener("keydown", (e) => {
      if (e.key === "Enter") jumpToQuestion(parseInt(drawerJumpInput.value.trim(), 10));
    });
  }

  // 4. Scroll to Top & Bottom
  menuScrollTop.addEventListener("click", () => {
    closeDrawer();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  menuScrollBottom.addEventListener("click", () => {
    closeDrawer();
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  });

  floatingTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      floatingTopBtn.style.display = "flex";
    } else {
      floatingTopBtn.style.display = "none";
    }
  });
});
