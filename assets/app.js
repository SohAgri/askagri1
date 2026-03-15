// ===== LANGUAGE SYSTEM =====
const LANG = {
  en: {
    nav_home:'Home', nav_diseases:'Diseases', nav_prices:'Prices', nav_schemes:'Schemes',
    nav_tips:'Tips', nav_ai:'AI Chat', nav_upload:'Upload', nav_ask:'Ask',
    tip_label:'Tip of the Day:', tip_text:' Apply Urea in 3 splits — not all at once — for 20% better nitrogen use in wheat & paddy!',
    hero_badge:"India's Farming AI Assistant", hero_sub:'Ask Anything About Farming – Kisan Ka Saathi',
    search_placeholder:'e.g. Why are my paddy leaves turning yellow?',
    feat_ai_title:'AI Farming Assistant', feat_ai_desc:'Chat with local AI assistant demo for practical farming guidance',
    feat_upload_title:'Crop Disease Scanner', feat_upload_desc:'Upload photo to scan crop disease and get practical guidance',
    feat_mandi_title:'Mandi Prices', feat_mandi_desc:"Today's live market prices for all major crops",
    feat_disease_title:'Crop Disease Guide', feat_disease_desc:'Symptoms, causes & treatments for 10 crops',
    weather_loading:'Fetching your location...', weather_agri:'Checking farming conditions...',
    sec_disease_guide:'Crop Disease Guide', sec_schemes:'Popular Government Schemes',
    back_home:'Back to Home', back:'Back', disease_sub:'Tap any crop to see diseases, symptoms & solutions',
    mandi_title:'Mandi Market Prices', mandi_sub:"Today's prices across major Indian mandis",
    mandi_live:'Live Mandi Prices', mandi_updated:'Updated: Today, 9:00 AM',
    th_crop:'🌾 Crop', th_mandi:'📍 Mandi', th_state:'🏙️ State', th_min:'💰 Min (₹/Q)', th_max:'💰 Max (₹/Q)', th_trend:'📈 Trend',
    mandi_disclaimer:'* Prices are indicative. Verify with local mandi before selling.',
    schemes_title:'Government Schemes for Farmers', schemes_sub:'Know your benefits and how to apply',
    seasonal_title:'Seasonal Farming Tips', seasonal_sub:'Best practices for Kharif, Rabi & Zaid seasons',
    ai_title:'AI Agriculture Assistant', ai_sub:'Local demo assistant — ask any farming question',
    ai_online:'● Online — Ready to help farmers',
    chat_placeholder:'Ask about crop disease, fertilizers, schemes...',
    quick_q:'Quick Questions:',
    upload_title:'Crop Disease Scanner', upload_sub:'Upload crop photo and get demo disease result with guidance',
    upload_tap:'Tap to Upload Crop Photo', upload_hint:'Supports JPG, PNG — Take a clear photo of the affected leaf',
    analyze_btn:'Scan Crop Disease',
    ask_title:'Ask a Farming Question', ask_sub:"Can't find an answer? Our experts will respond in 24 hours!",
    ask_name_label:'Your Name (optional)', ask_q_label:'Your Question',
    submit_btn:'Submit Question', success_msg:'Question submitted! Our experts will respond within 24 hours.',
    footer_tagline:"Helping Farmers Grow Better · किसानों को बेहतर उगाने में मदद",
    trends_rising:'📈 Rising', trends_falling:'📉 Falling',
    suggestions:['Paddy leaf yellowing','Tomato leaf curl','Best fertilizer wheat','Chilli pest control','Blast disease paddy','Urea application time'],
    quickQuestions:['What fertilizer for wheat?','How to treat paddy blast?','PM-KISAN scheme details','Tomato early blight solution','Best time to sow paddy','Mandi price today'],
    welcome:'Namaste! I\'m KrishiBot, your AI farming assistant. Ask me anything — crop diseases, fertilizers, mandi prices, or government schemes. I\'m here to help! 🙏',
    agri_hot:'Very hot — avoid afternoon irrigation, irrigate at dawn',
    agri_warm:'Good conditions for irrigation and spraying today',
    agri_cool:'Cool weather — good for Rabi crops',
    agri_rain:'Rain expected — postpone spraying, check drainage',
  },
  hi: {
    nav_home:'होम', nav_diseases:'रोग', nav_prices:'मंडी', nav_schemes:'योजनाएं',
    nav_tips:'सुझाव', nav_ai:'AI चैट', nav_upload:'फोटो', nav_ask:'पूछें',
    tip_label:'आज की सलाह:', tip_text:' यूरिया को 3 बार में डालें — एक बार नहीं — गेहूं और धान में 20% बेहतर नाइट्रोजन उपयोग!',
    hero_badge:'भारत का किसान AI सहायक', hero_sub:'खेती के बारे में कुछ भी पूछें – किसान का साथी',
    search_placeholder:'जैसे: धान की पत्तियां पीली क्यों हो रही हैं?',
    feat_ai_title:'AI कृषि सहायक', feat_ai_desc:'तुरंत खेती के जवाब के लिए AI से चैट करें',
    feat_upload_title:'फसल रोग पहचानें', feat_upload_desc:'फोटो अपलोड करें — AI रोग बताएगा और उपचार देगा',
    feat_mandi_title:'मंडी भाव', feat_mandi_desc:'सभी प्रमुख फसलों के आज के भाव',
    feat_disease_title:'फसल रोग मार्गदर्शिका', feat_disease_desc:'10 फसलों के लक्षण, कारण और उपचार',
    weather_loading:'आपकी लोकेशन खोज रहे हैं...', weather_agri:'खेती की स्थिति जांच रहे हैं...',
    sec_disease_guide:'फसल रोग मार्गदर्शिका', sec_schemes:'लोकप्रिय सरकारी योजनाएं',
    back_home:'होम पर वापस', back:'वापस', disease_sub:'किसी भी फसल पर टैप करें — रोग, लक्षण और समाधान देखें',
    mandi_title:'मंडी बाजार भाव', mandi_sub:'प्रमुख भारतीय मंडियों में आज के भाव',
    mandi_live:'लाइव मंडी भाव', mandi_updated:'अपडेट: आज, सुबह 9 बजे',
    th_crop:'🌾 फसल', th_mandi:'📍 मंडी', th_state:'🏙️ राज्य', th_min:'💰 न्यूनतम', th_max:'💰 अधिकतम', th_trend:'📈 रुझान',
    mandi_disclaimer:'* भाव सांकेतिक हैं। बेचने से पहले स्थानीय मंडी से जांचें।',
    schemes_title:'किसानों के लिए सरकारी योजनाएं', schemes_sub:'अपने लाभ जानें और आवेदन कैसे करें',
    seasonal_title:'मौसमी खेती सुझाव', seasonal_sub:'खरीफ, रबी और जायद मौसम के लिए सर्वोत्तम सुझाव',
    ai_title:'AI कृषि सहायक', ai_sub:'स्थानीय डेमो सहायक — खेती का कोई भी सवाल पूछें',
    ai_online:'● ऑनलाइन — किसानों की मदद के लिए तैयार',
    chat_placeholder:'फसल रोग, खाद, योजनाओं के बारे में पूछें...',
    quick_q:'त्वरित प्रश्न:',
    upload_title:'AI फसल रोग पहचान', upload_sub:'फोटो अपलोड करें — AI रोग पहचानेगा और उपचार बताएगा',
    upload_tap:'फसल फोटो अपलोड करने के लिए टैप करें', upload_hint:'JPG, PNG — प्रभावित पत्ती की स्पष्ट फोटो लें',
    analyze_btn:'रोग विश्लेषण करें',
    ask_title:'खेती का सवाल पूछें', ask_sub:'जवाब नहीं मिला? हमारे विशेषज्ञ 24 घंटे में जवाब देंगे!',
    ask_name_label:'आपका नाम (वैकल्पिक)', ask_q_label:'आपका सवाल',
    submit_btn:'सवाल भेजें', success_msg:'सवाल भेजा गया! हमारे विशेषज्ञ 24 घंटे में जवाब देंगे।',
    footer_tagline:'किसानों को बेहतर उगाने में मदद करना',
    trends_rising:'📈 बढ़ रहा', trends_falling:'📉 गिर रहा',
    suggestions:['धान पत्ती पीली','टमाटर रोग','गेहूं खाद','मिर्च कीट नियंत्रण','धान ब्लास्ट','यूरिया कब डालें'],
    quickQuestions:['गेहूं के लिए कौन सी खाद?','धान ब्लास्ट का उपचार?','PM-KISAN योजना','टमाटर अर्ली ब्लाइट','धान बोने का सही समय','आज का मंडी भाव'],
    welcome:'नमस्ते! मैं KrishiBot हूं, आपका AI खेती सहायक। फसल रोग, खाद, मंडी भाव या सरकारी योजनाओं के बारे में कुछ भी पूछें। 🙏',
    agri_hot:'बहुत गर्मी — दोपहर में सिंचाई न करें, सुबह करें',
    agri_warm:'सिंचाई और छिड़काव के लिए अच्छा मौसम',
    agri_cool:'ठंडा मौसम — रबी फसलों के लिए अच्छा',
    agri_rain:'बारिश की संभावना — छिड़काव न करें, जल निकासी जांचें',
  },
  te: {
    nav_home:'హోమ్', nav_diseases:'వ్యాధులు', nav_prices:'ధరలు', nav_schemes:'పథకాలు',
    nav_tips:'చిట్కాలు', nav_ai:'AI చాట్', nav_upload:'ఫోటో', nav_ask:'అడగండి',
    tip_label:'నేటి చిట్కా:', tip_text:' యూరియాను 3 సార్లు వేయండి — ఒకేసారి కాదు — గోధుమ & వరిలో 20% మెరుగైన నత్రజని వినియోగం!',
    hero_badge:'భారత రైతు AI సహాయకుడు', hero_sub:'వ్యవసాయం గురించి ఏదైనా అడగండి – కిసాన్ కా సాథి',
    search_placeholder:'ఉదా: నా వరి ఆకులు పసుపు రంగుకు మారడానికి కారణమేమిటి?',
    feat_ai_title:'AI వ్యవసాయ సహాయకుడు', feat_ai_desc:'తక్షణ నిపుణ సమాధానాల కోసం AI తో చాట్ చేయండి',
    feat_upload_title:'పంట వ్యాధి నిర్ధారణ', feat_upload_desc:'ఫోటో అప్‌లోడ్ చేయండి — AI వ్యాధిని గుర్తిస్తుంది',
    feat_mandi_title:'మండి ధరలు', feat_mandi_desc:'నేటి మార్కెట్ ధరలు',
    feat_disease_title:'పంట వ్యాధి గైడ్', feat_disease_desc:'10 పంటలకు లక్షణాలు మరియు చికిత్సలు',
    weather_loading:'మీ స్థానాన్ని పొందుతున్నారు...', weather_agri:'వ్యవసాయ పరిస్థితులు తనిఖీ చేస్తున్నారు...',
    sec_disease_guide:'పంట వ్యాధి గైడ్', sec_schemes:'ప్రముఖ ప్రభుత్వ పథకాలు',
    back_home:'హోమ్‌కు తిరిగి', back:'వెనక్కి', disease_sub:'వ్యాధులు చూడటానికి పంటపై నొక్కండి',
    mandi_title:'మండి మార్కెట్ ధరలు', mandi_sub:'ప్రధాన మండులలో నేటి ధరలు',
    mandi_live:'లైవ్ మండి ధరలు', mandi_updated:'అప్‌డేట్: ఈరోజు, ఉదయం 9 గంటలు',
    th_crop:'🌾 పంట', th_mandi:'📍 మండి', th_state:'🏙️ రాష్ట్రం', th_min:'💰 కనిష్ట', th_max:'💰 గరిష్ట', th_trend:'📈 ట్రెండ్',
    mandi_disclaimer:'* ధరలు సూచనార్థమైనవి. అమ్మడానికి ముందు స్థానిక మండిని సంప్రదించండి.',
    schemes_title:'రైతులకు ప్రభుత్వ పథకాలు', schemes_sub:'మీ ప్రయోజనాలు తెలుసుకోండి',
    seasonal_title:'సీజనల్ వ్యవసాయ చిట్కాలు', seasonal_sub:'ఖరీఫ్, రబీ & జైద్ సీజన్‌ల కోసం',
    ai_title:'AI వ్యవసాయ సహాయకుడు', ai_sub:'లోకల్ డెమో సహాయకుడు — ఏ వ్యవసాయ ప్రశ్న అయినా అడగండి',
    ai_online:'● ఆన్‌లైన్ — రైతులకు సహాయం చేయడానికి సిద్ధంగా ఉన్నారు',
    chat_placeholder:'పంట వ్యాధి, ఎరువులు, పథకాల గురించి అడగండి...',
    quick_q:'త్వరిత ప్రశ్నలు:',
    upload_title:'AI పంట వ్యాధి గుర్తింపు', upload_sub:'ఫోటో అప్‌లోడ్ చేయండి — AI వ్యాధిని గుర్తిస్తుంది',
    upload_tap:'పంట ఫోటో అప్‌లోడ్ చేయడానికి నొక్కండి', upload_hint:'JPG, PNG — ప్రభావిత ఆకు యొక్క స్పష్టమైన ఫోటో తీయండి',
    analyze_btn:'వ్యాధి విశ్లేషించండి',
    ask_title:'వ్యవసాయ ప్రశ్న అడగండి', ask_sub:'సమాధానం కనుగొనలేదా? మా నిపుణులు 24 గంటలలో స్పందిస్తారు!',
    ask_name_label:'మీ పేరు (ఐచ్ఛికం)', ask_q_label:'మీ ప్రశ్న',
    submit_btn:'ప్రశ్న సమర్పించండి', success_msg:'ప్రశ్న సమర్పించబడింది! మా నిపుణులు 24 గంటలలో స్పందిస్తారు.',
    footer_tagline:'రైతులకు మెరుగైన వ్యవసాయం లో సహాయం',
    trends_rising:'📈 పెరుగుతోంది', trends_falling:'📉 తగ్గుతోంది',
    suggestions:['వరి ఆకు పసుపు','టమాటా వ్యాధి','గోధుమ ఎరువు','మిర్చి కీటకాలు','వరి బ్లాస్ట్','యూరియా సమయం'],
    quickQuestions:['గోధుమకు ఏ ఎరువు?','వరి బ్లాస్ట్ చికిత్స?','PM-KISAN పథకం','టమాటా అర్లీ బ్లైట్','వరి నాటే సమయం','నేటి మండి ధర'],
    welcome:'నమస్కారం! నేను KrishiBot, మీ AI వ్యవసాయ సహాయకుడిని. పంట వ్యాధులు, ఎరువులు, మండి ధరలు లేదా ప్రభుత్వ పథకాల గురించి ఏదైనా అడగండి. 🙏',
    agri_hot:'చాలా వేడి — మధ్యాహ్నం నీటిపారుదల మానుకోండి, తెల్లవారుజామున చేయండి',
    agri_warm:'నీటిపారుదల మరియు పిచికారీకి మంచి పరిస్థితులు',
    agri_cool:'చల్లని వాతావరణం — రబీ పంటలకు మంచిది',
    agri_rain:'వర్షం అంచనా — పిచికారీ చేయకండి, నీటి పారుదల తనిఖీ చేయండి',
  },
  od: {
    nav_home:'ହୋମ', nav_diseases:'ରୋଗ', nav_prices:'ମୂଲ୍ୟ', nav_schemes:'ଯୋଜନା',
    nav_tips:'ଟିପ୍ସ', nav_ai:'AI ଚାଟ', nav_upload:'ଫୋଟୋ', nav_ask:'ପଚାରନ୍ତୁ',
    tip_label:'ଆଜିର ଟିପ୍:', tip_text:' ୟୁରିଆ ୩ ଭାଗରେ ପ୍ରୟୋଗ କରନ୍ତୁ — ଏକ ଥରରେ ନୁହେଁ — ଗହମ ଓ ଧାନରେ ୨୦% ଭଲ ଫଳ!',
    hero_badge:'ଭାରତର କୃଷି AI ସହାୟକ', hero_sub:'ଚାଷ ବିଷୟରେ ଯେ କୌଣସି ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ – କିସାନ୍ କା ସାଥି',
    search_placeholder:'ଯଥା: ମୋ ଧାନ ପତ୍ର ହଳଦୀ ହେଉଛି କ\'ଣ?',
    feat_ai_title:'AI କୃଷି ସହାୟକ', feat_ai_desc:'ତୁରନ୍ତ ଉତ୍ତର ପାଇଁ AI ସହ ଚାଟ କରନ୍ତୁ',
    feat_upload_title:'ଫସଲ ରୋଗ ଚିହ୍ନଟ', feat_upload_desc:'ଫୋଟୋ ଅପଲୋଡ କରନ୍ତୁ — AI ରୋଗ ଚିହ୍ନଟ କରିବ',
    feat_mandi_title:'ମଣ୍ଡି ମୂଲ୍ୟ', feat_mandi_desc:'ଆଜିର ବଜାର ମୂଲ୍ୟ',
    feat_disease_title:'ଫସଲ ରୋଗ ଗାଇଡ', feat_disease_desc:'୧୦ ଫସଲ ପାଇଁ ଲକ୍ଷଣ ଓ ଚିକିତ୍ସା',
    weather_loading:'ଆପଣଙ୍କ ଅବସ୍ଥାନ ଖୋଜୁଛୁ...', weather_agri:'କୃଷି ପରିସ୍ଥିତି ଯାଞ୍ଚ କରୁଛୁ...',
    sec_disease_guide:'ଫସଲ ରୋଗ ଗାଇଡ', sec_schemes:'ଲୋକପ୍ରିୟ ସରକାରୀ ଯୋଜନା',
    back_home:'ହୋମ୍ ଫେରନ୍ତୁ', back:'ଫେରନ୍ତୁ', disease_sub:'ରୋଗ ଦେଖିବାକୁ ଯେ କୌଣସି ଫସଲ ଉପରେ ଟ୍ୟାପ କରନ୍ତୁ',
    mandi_title:'ମଣ୍ଡି ବଜାର ମୂଲ୍ୟ', mandi_sub:'ପ୍ରଧାନ ଭାରତୀୟ ମଣ୍ଡିଗୁଡ଼ିକରେ ଆଜିର ମୂଲ୍ୟ',
    mandi_live:'ଲାଇଭ ମଣ୍ଡି ମୂଲ୍ୟ', mandi_updated:'ଅଦ୍ୟତନ: ଆଜି, ସକାଳ ୯ ଟା',
    th_crop:'🌾 ଫସଲ', th_mandi:'📍 ମଣ୍ଡି', th_state:'🏙️ ରାଜ୍ୟ', th_min:'💰 ସର୍ବନିମ୍ନ', th_max:'💰 ସର୍ବୋଚ୍ଚ', th_trend:'📈 ଟ୍ରେଣ୍ଡ',
    mandi_disclaimer:'* ମୂଲ୍ୟ ସୂଚକ। ବିକ୍ରୟ ପୂର୍ବରୁ ସ୍ଥାନୀୟ ମଣ୍ଡି ଯାଞ୍ଚ କରନ୍ତୁ।',
    schemes_title:'କୃଷକଙ୍କ ପାଇଁ ସରକାରୀ ଯୋଜନା', schemes_sub:'ଆପଣଙ୍କ ସୁବିଧା ଜାଣନ୍ତୁ',
    seasonal_title:'ଋତୁ ଅନୁଯାୟୀ ଚାଷ ଟିପ୍ସ', seasonal_sub:'ଖରିଫ, ରବି ଓ ଜାୟଦ ଋତୁ ପାଇଁ',
    ai_title:'AI କୃଷି ସହାୟକ', ai_sub:'ସ୍ଥାନୀୟ ଡେମୋ ସହାୟକ — ଯେକୌଣସି ଚାଷ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ',
    ai_online:'● ଅନ୍‌ଲାଇନ — କୃଷକଙ୍କ ସାହାଯ୍ୟ ପାଇଁ ପ୍ରସ୍ତୁତ',
    chat_placeholder:'ଫସଲ ରୋଗ, ସାର, ଯୋଜନା ବିଷୟରେ ପଚାରନ୍ତୁ...',
    quick_q:'ଦ୍ରୁତ ପ୍ରଶ୍ନ:',
    upload_title:'AI ଫସଲ ରୋଗ ଚିହ୍ନଟ', upload_sub:'ଫୋଟୋ ଅପଲୋଡ କରନ୍ତୁ — AI ରୋଗ ଚିହ୍ନଟ କରିବ',
    upload_tap:'ଫସଲ ଫୋଟୋ ଅପଲୋଡ କରିବାକୁ ଟ୍ୟାପ କରନ୍ତୁ', upload_hint:'JPG, PNG — ଆକ୍ରାନ୍ତ ପତ୍ରର ସ୍ପଷ୍ଟ ଫୋଟୋ ନିଅନ୍ତୁ',
    analyze_btn:'ରୋଗ ବିଶ୍ଳେଷଣ କରନ୍ତୁ',
    ask_title:'ଚାଷ ପ୍ରଶ୍ନ ପଚାରନ୍ତୁ', ask_sub:'ଉତ୍ତର ମିଳୁ ନାହିଁ? ଆମ ବିଶେଷଜ୍ଞ ୨୪ ଘଣ୍ଟାରେ ଉତ୍ତର ଦେବେ!',
    ask_name_label:'ଆପଣଙ୍କ ନାମ (ଐଚ୍ଛିକ)', ask_q_label:'ଆପଣଙ୍କ ପ୍ରଶ୍ନ',
    submit_btn:'ପ୍ରଶ୍ନ ଦାଖଲ କରନ୍ତୁ', success_msg:'ପ୍ରଶ୍ନ ଦାଖଲ ହୋଇଛି! ଆମ ବିଶେଷଜ୍ଞ ୨୪ ଘଣ୍ଟାରେ ଉତ୍ତର ଦେବେ।',
    footer_tagline:'କୃଷକଙ୍କ ଭଲ ଚାଷ ପାଇଁ ସାହାଯ୍ୟ',
    trends_rising:'📈 ବଢ଼ୁଛି', trends_falling:'📉 ଖସୁଛି',
    suggestions:['ଧାନ ପତ୍ର ହଳଦୀ','ଟମାଟୋ ରୋଗ','ଗହମ ସାର','ଲଙ୍କା କୀଟ ନିୟନ୍ତ୍ରଣ','ଧାନ ବ୍ଲାଷ୍ଟ','ୟୁରିଆ ସମୟ'],
    quickQuestions:['ଗହମ ପାଇଁ ସାର?','ଧାନ ବ୍ଲାଷ୍ଟ ଚିକିତ୍ସା?','PM-KISAN ଯୋଜନା','ଟମାଟୋ ଅର୍ଲି ବ୍ଲାଇଟ','ଧାନ ଲଗାଇବା ସମୟ','ଆଜିର ମଣ୍ଡି ମୂଲ୍ୟ'],
    welcome:'ନମସ୍କାର! ମୁଁ KrishiBot, ଆପଣଙ୍କ AI କୃଷି ସହାୟକ। ଫସଲ ରୋଗ, ସାର, ମଣ୍ଡି ମୂଲ୍ୟ ବା ସରକାରୀ ଯୋଜନା ବିଷୟରେ ଯାହା ହେଉ ପଚାରନ୍ତୁ। 🙏',
    agri_hot:'ବହୁତ ଗରମ — ଦ୍ୱିପ୍ରହରରେ ଜଳ ସେଚ ଏଡ଼ାନ୍ତୁ, ଭୋରରୁ କରନ୍ତୁ',
    agri_warm:'ଜଳ ସେଚ ଓ ସ୍ପ୍ରେ ପାଇଁ ଭଲ ପାଣିଆ',
    agri_cool:'ଥଣ୍ଡା ପାଣିଆ — ରବି ଫସଲ ପାଇଁ ଭଲ',
    agri_rain:'ବର୍ଷା ସଂଭାବନା — ସ୍ପ୍ରେ ଏଡ଼ାନ୍ତୁ, ଜଳ ନିଷ୍କାଶନ ଯାଞ୍ଚ କରନ୍ତୁ',
  }
    };

let currentLang = 'en';

function t(key) { return LANG[currentLang][key] || LANG['en'][key] || key; }

function setLang(lang) {
  currentLang = lang;
  // Update all data-key elements
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (LANG[lang][key] !== undefined) el.textContent = LANG[lang][key];
  });
  // Update placeholders
  document.querySelectorAll('[data-key-placeholder]').forEach(el => {
    const key = el.getAttribute('data-key-placeholder');
    if (LANG[lang][key] !== undefined) el.placeholder = LANG[lang][key];
  });
  // Update suggestions
  renderSuggestions();
  renderQuickQuestions();
  // Update welcome
  const wm = document.getElementById('welcomeMsg');
  if (wm) wm.textContent = t('welcome');
  // Re-render dynamic content
  loadSchemes();
  renderHomeCropGrid();
  renderDiseaseCropGrid();
}

// ===== PAGE NAVIGATION =====

// ===== CROPS DATA =====
const crops = [
  { id:'paddy', icon:'🌾', en:'Paddy/Rice', hi:'धान/चावल', te:'వరి/బియ్యం', od:'ଧାନ/ଚାଉଳ' },
  { id:'tomato', icon:'🍅', en:'Tomato', hi:'टमाटर', te:'టమాటా', od:'ଟମାଟୋ' },
  { id:'wheat', icon:'🌿', en:'Wheat', hi:'गेहूं', te:'గోధుమ', od:'ଗହମ' },
  { id:'chilli', icon:'🌶️', en:'Chilli', hi:'मिर्च', te:'మిర్చి', od:'ଲଙ୍କା' },
  { id:'brinjal', icon:'🍆', en:'Brinjal', hi:'बैंगन', te:'వంకాయ', od:'ବାଇଗଣ' },
  { id:'potato', icon:'🥔', en:'Potato', hi:'आलू', te:'బంగాళాదుంప', od:'ଆଳୁ' },
  { id:'onion', icon:'🧅', en:'Onion', hi:'प्याज', te:'ఉల్లిపాయ', od:'ପିଆଜ' },
  { id:'cotton', icon:'🌸', en:'Cotton', hi:'कपास', te:'పత్తి', od:'କପା' },
  { id:'sugarcane', icon:'🎋', en:'Sugarcane', hi:'गन्ना', te:'చెరకు', od:'କ୍ଷୀରରଜ' },
  { id:'maize', icon:'🌽', en:'Maize', hi:'मक्का', te:'మొక్కజొన్న', od:'ମକା' },
];

function cropName(c) {
  return c[currentLang] || c.en;
}

function renderHomeCropGrid() {
  const grid = document.getElementById('homeCropGrid');
  if (!grid) return;
  grid.innerHTML = crops.slice(0,8).map(c => `
    <div class="crop-card" onclick="showDisease('${c.id}')">
      <div class="icon">${c.icon}</div>
      <div class="name">${c.en}</div>
      <div class="name-local">${c[currentLang] || ''}</div>
    </div>`).join('');
}

function renderDiseaseCropGrid() {
  const grid = document.getElementById('diseaseCropGrid');
  if (!grid) return;
  grid.innerHTML = crops.map(c => `
    <div class="crop-card" onclick="showDisease('${c.id}')">
      <div class="icon">${c.icon}</div>
      <div class="name">${c.en}</div>
      <div class="name-local">${c[currentLang] || ''}</div>
    </div>`).join('');
    }

    function renderSuggestions() {
  const sugg = t('suggestions');
  const el = document.getElementById('homeSuggestions');
  if (!el) return;
  el.innerHTML = sugg.map(s => `<span onclick="quickSearch('${s}')">${s}</span>`).join('');
}

function renderQuickQuestions() {
  const qs = t('quickQuestions');
  const el = document.getElementById('quickQs');
  if (!el) return;
  el.innerHTML = qs.map(q => `
    <span onclick="setQuickChat('${q}')" style="display:inline-block;background:var(--green-pale);color:var(--green);padding:6px 14px;border-radius:14px;margin:3px;font-size:0.8rem;cursor:pointer;font-weight:600;border:1.5px solid var(--border);transition:background 0.2s;"
    onmouseover="this.style.background='#c8e6c9'" onmouseout="this.style.background='var(--green-pale)'">${q}</span>`).join('');
}

function setQuickChat(q) {
  document.getElementById('chatInput').value = q;
  sendChat();
}

// ===== REAL WEATHER =====
async function loadWeather() {
  const weatherIcons = {0:'☀️',1:'🌤️',2:'⛅',3:'☁️',45:'🌫️',48:'🌫️',51:'🌦️',53:'🌦️',55:'🌧️',61:'🌧️',63:'🌧️',65:'🌧️',80:'🌦️',81:'🌧️',82:'⛈️',95:'⛈️'};
  const weatherDesc = {0:'Clear Sky',1:'Mostly Clear',2:'Partly Cloudy',3:'Overcast',45:'Foggy',48:'Foggy',51:'Drizzle',53:'Drizzle',55:'Drizzle',61:'Rain',63:'Moderate Rain',65:'Heavy Rain',80:'Showers',81:'Heavy Showers',82:'Violent Showers',95:'Thunderstorm'};

  try {
    const pos = await new Promise((res, rej) => {
      if (!navigator.geolocation) return rej('no geo');
      navigator.geolocation.getCurrentPosition(res, rej, {timeout: 8000});
    });

    const {latitude:lat, longitude:lon} = pos.coords;

    // Reverse geocode with Open-Meteo geocoding
    let locName = 'Your Location';
    try {
      const geoResp = await fetch(`https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lon}&format=json`);
      const geoData = await geoResp.json();
      locName = geoData.address?.city || geoData.address?.town || geoData.address?.village || geoData.address?.county || 'Your Location';
    } catch(e) {}

    // Weather data
    const wxResp = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,precipitation&timezone=auto`);
    const wxData = await wxResp.json();
    const c = wxData.current;

    const temp = Math.round(c.temperature_2m);
    const humidity = c.relative_humidity_2m;
    const wind = Math.round(c.wind_speed_10m);
    const code = c.weather_code;
    const precip = c.precipitation;

    document.getElementById('weather-loc').textContent = `📍 ${locName}`;
    document.getElementById('weather-temp').textContent = `${temp}°C`;
    document.getElementById('weatherIcon').textContent = weatherIcons[code] || '⛅';
    document.getElementById('weather-desc').textContent = `${weatherDesc[code]||'Partly Cloudy'} · Humidity ${humidity}% · Wind ${wind} km/h`;

    // Agri advice
    let agriKey = 'agri_warm';
    if (temp > 38) agriKey = 'agri_hot';
    else if (temp < 15) agriKey = 'agri_cool';
    else if (precip > 1 || code >= 61) agriKey = 'agri_rain';
    document.getElementById('weather-agri').textContent = t(agriKey);

    // Card color for rain
    if (code >= 61 && code <= 82) {
      document.getElementById('weatherCard').style.background = 'linear-gradient(135deg, #1a237e 0%, #1565c0 50%, #1976d2 100%)';
    }

  } catch(e) {
    document.getElementById('weather-loc').textContent = '📍 India (Enable location for local weather)';
    document.getElementById('weather-desc').textContent = 'Allow location access for real-time weather';
    document.getElementById('weather-temp').textContent = '--°C';
  }
    }

    // ===== VOICE SEARCH =====
function startVoice(inputId) {
  const SR = window.SpeechRecognition || window.webkitSpeechRecognition;
  if (!SR) return alert('Voice search not supported on this browser.');
  const r = new SR();
  r.lang = currentLang === 'hi' ? 'hi-IN' : currentLang === 'te' ? 'te-IN' : currentLang === 'od' ? 'or-IN' : 'en-IN';
  r.start();
  const btn = document.getElementById('voiceBtn');
  if (btn) btn.classList.add('listening');
  const inp = document.getElementById(inputId);
  inp.placeholder = '🎙️ Listening...';
  r.onresult = e => {
    inp.value = e.results[0][0].transcript;
    if (inputId === 'searchInput') doSearch();
    else if (inputId === 'chatInput') sendChat();
  };
  r.onend = () => {
    if (btn) btn.classList.remove('listening');
    inp.placeholder = t(inputId === 'chatInput' ? 'chat_placeholder' : 'search_placeholder');
  };
}

// ===== SEARCH =====
const knowledgeBase = {
  'paddy leaf yellowing': {
    title:'Paddy Leaf Yellowing – Causes & Solution',
    tags:['Paddy','Yellowing','Nitrogen Deficiency'],
    content:[
      {h:'🔍 Possible Causes',b:'Paddy leaf yellowing is commonly caused by: (1) Nitrogen deficiency – most common, leaves turn pale yellow from older leaves first. (2) Iron deficiency – young leaves turn yellow with green veins. (3) Blast disease – yellow-brown diamond-shaped spots. (4) Waterlogging reducing nutrient uptake. (5) Sulfur deficiency – newer leaves turn yellow.'},
      {h:'🔬 Symptoms to Identify',b:'Uniform yellowing of older leaves → Nitrogen deficiency. Yellowing of young leaves with green veins → Iron deficiency. Diamond-shaped spots → Blast disease. Yellowing near roots with foul smell → Root rot. Pale green young leaves → Sulfur deficiency.'},
      {h:'✅ Treatment',b:'Nitrogen deficiency: Apply Urea 30-40 kg/acre in 3 splits. Iron deficiency: Spray Ferrous Sulphate (0.5%) solution. Blast disease: Spray Tricyclazole 75 WP @ 6g/15L water. Improve drainage immediately if waterlogged.'},
      {h:'💡 Prevention',b:'Soil test before sowing. Apply basal DAP + MOP. Use resistant varieties IR-64, Swarna. Maintain 2-3 cm water in paddy field. Monitor twice weekly.'}
    ]
  },
  'tomato leaf curl': {
    title:'Tomato Leaf Curl Virus – Causes & Solution',
    tags:['Tomato','Leaf Curl','Virus','Whitefly'],
    content:[
      {h:'🔍 What is Tomato Leaf Curl?',b:'Tomato Leaf Curl Virus (ToLCV) is spread by whiteflies (Bemisia tabaci). Can destroy 80-100% crop if uncontrolled. Major pest in India especially in summer and post-rainy season.'},
      {h:'🌿 Symptoms',b:'Leaves curl upward and inward. Young leaves turn yellow. Plants become stunted and bushy. Flowers drop before fruit set. Fruits become small and malformed. Severe cases: complete plant loss.'},
      {h:'✅ Solution',b:'Control whiteflies immediately: Spray Imidacloprid 17.8 SL @ 0.3ml/L or Thiamethoxam 25 WG @ 0.3g/L. Remove and destroy infected plants immediately. Yellow sticky traps @ 10/acre. Neem oil 5% as preventive spray.'},
      {h:'💡 Prevention',b:'Resistant varieties: Arka Rakshak, Pusa Ruby, NS 585. Cover nursery beds with nylon nets (50 mesh). Avoid planting near older infected fields. Marigold as border crop to repel insects.'}
    ]
  },
  'best fertilizer wheat': {
    title:'Complete Fertilizer Guide for Wheat',
    tags:['Wheat','NPK','Urea','DAP'],
    content:[
      {h:'🌿 Recommended NPK Schedule',b:'Per acre: Nitrogen (N) = 60 kg, Phosphorus (P) = 30 kg, Potassium (K) = 20 kg. Use DAP (18-46-0) as base fertilizer at sowing = provides N + full P in one shot.'},
      {h:'📅 Application Timing',b:'At sowing: Full DAP (75 kg/acre) + half Urea (30 kg) + full MOP (33 kg). First irrigation (CRI – 21 days): Remaining half Urea (30 kg). Second irrigation (40-45 days): Extra Urea 15 kg if crop looks pale.'},
      {h:'✅ Organic Options',b:'FYM 4-5 tonnes/acre improves soil. Vermicompost 1 tonne/acre is excellent. Zinc Sulphate 10 kg/acre if zinc deficient. Bio-fertilizer Azotobacter saves 20% chemical N.'},
      {h:'⚠️ Key Tips',b:'NEVER apply Urea in standing water – loses N as ammonia. Split Urea always better than single dose. Spray 2% Urea at grain filling stage for better protein content. Do soil test every 3 years.'}
    ]
  },
  'chilli pest control': {
    title:'Chilli Pest Control – Complete Guide',
    tags:['Chilli','Thrips','Mites','Aphids'],
    content:[
      {h:'🐛 Major Pests',b:'Thrips (Scirtothrips dorsalis): Tiny insects causing silvery leaf streaks and curling. Mites (Polyphagotarsonemus latus): Cause bronze/rusty appearance, leaf distortion. Aphids: Yellow colonies under leaves, honeydew secretion. Fruit Borer (Helicoverpa): Holes in fruits. Whitefly: Spreads viral diseases.'},
      {h:'✅ Chemical Control',b:'Thrips: Spinosad 45 SC @ 0.3ml/L or Fipronil 5 SC @ 1.5ml/L. Mites: Dicofol 18.5 EC @ 2.5ml/L or Spiromesifen 240 SC @ 0.9ml/L. Fruit Borer: Chlorantraniliprole 18.5 SC @ 0.3ml/L.'},
      {h:'🌿 Organic/Neem Control',b:'Neem oil 50ml/L every 7 days. Verticillium lecanii bio-pesticide for thrips. Yellow sticky traps 10/acre. Blue sticky traps specifically for thrips monitoring. Garlic + chilli extract spray.'},
      {h:'💡 Prevention',b:'Avoid water stress. Proper plant spacing 45x30 cm. Remove weeds. Crop rotation every season. Scout twice weekly. Use IPM approach – combine biological + cultural + chemical.'}
    ]
  },
  'blast disease paddy': {
    title:'Paddy Blast Disease – Complete Management',
    tags:['Paddy','Blast','Fungal Disease','Tricyclazole'],
    content:[
      {h:'🔍 About Blast Disease',b:'Blast (Magnaporthe oryzae) is the most devastating paddy disease worldwide. Affects all above-ground parts. Leaf blast, neck blast (most severe – causes grain sterility), node blast, collar blast. Heavy losses in high N conditions + cool humid weather.'},
      {h:'🌿 Symptoms',b:'Leaf blast: Diamond/eye-shaped gray-brown spots with dark borders. Neck blast: Rotting at panicle base → entire panicle dies (white ear). Node blast: Black rotting nodes. High humidity + temperature 20-28°C = ideal for outbreak.'},
      {h:'✅ Treatment',b:'Chemical: Tricyclazole 75 WP @ 6g/15L water. Or Isoprothiolane 40 EC @ 1.5ml/L. Spray at first sign of disease. Repeat after 10-12 days. Preventive spray at booting stage is critical.'},
      {h:'💡 Management',b:'Use resistant varieties: Pusa Basmati 1509, IR-64, Swarna Sub1. Avoid excess Nitrogen. Maintain adequate soil moisture. Do not spray urea after blast appears. Silicon soil amendment improves resistance.'}
    ]
  },
  'urea application time': {
    title:'Correct Time & Method for Urea Application',
    tags:['Urea','Fertilizer','Nitrogen','Timing'],
    content:[
      {h:'⏰ Best Time to Apply Urea',b:'Always in the early morning (6-9 AM) or late evening (4-7 PM). Never during midday – 30-40% N lost as ammonia. Never apply to wet/flooded soil for standing crops (except paddy after draining).'},
      {h:'📅 Split Application Schedule',b:'Wheat: 1/3 at sowing + 1/3 at CRI (21 days) + 1/3 at jointing (45 days). Paddy: 1/3 at transplanting + 1/3 at tillering (25 days) + 1/3 at panicle initiation. Maize: 1/3 at sowing + 1/3 at knee height + 1/3 at tasseling.'},
      {h:'✅ Correct Method',b:'Broadcast uniformly in moist soil. Incorporate into soil immediately (by irrigation or light hoeing). For paddy, apply 4-5 days after drainage of water. Foliar spray: 1-2% urea solution for micronutrient correction only.'},
      {h:'⚠️ Common Mistakes',b:'Applying whole dose at once → big N loss. Applying in waterlogged conditions → denitrification. Using urea in alkaline soils without sulfur → poor absorption. Old/caked urea – break lumps before application.'}
    ]
  },
  'default': {
    title:'Farming Information',
    tags:['General','Farming'],
    content:[
      {h:'🌾 General Advice',b:'For best results, always test your soil before sowing. Use certified seeds from government outlets. Follow proper irrigation schedule.'},
      {h:'🔬 Pest & Disease Management',b:'Scout your fields regularly (twice a week). Use Integrated Pest Management (IPM). Always read pesticide labels before use.'},
      {h:'💰 Get Better Prices',b:'Check mandi prices before selling. Store crops properly. Consider FPOs for better bargaining power. Sell through e-NAM platform.'}
    ]
  }
};

    function doSearch() {
  const q = document.getElementById('searchInput').value.trim();
  if (!q) return;
  showPage('search-results');
  document.getElementById('searchInput2').value = q;
  renderResults(q);
}
function doSearch2() {
  const q = document.getElementById('searchInput2').value.trim();
  if (!q) return;
  renderResults(q);
}
function quickSearch(q) {
  document.getElementById('searchInput').value = q;
  doSearch();
}
function renderResults(q) {
  const ql = q.toLowerCase();
  let found = null;
  for (const key in knowledgeBase) {
    if (key === 'default') continue;
    if (ql.includes(key) || key.split(' ').some(w => ql.includes(w))) { found = knowledgeBase[key]; break; }
  }
  if (!found) found = knowledgeBase['default'];
  const c = document.getElementById('search-results-content');
  const shareUrl = `https://wa.me/?text=AskKrishi: ${encodeURIComponent(found.title)} - sohagri.github.io/askkrishi`;
  let html = `<h2 style="font-size:1rem;color:var(--text-light);margin-bottom:16px;">Results for: <strong style="color:var(--green)">"${q}"</strong></h2>`;
  found.content.forEach(item => html += `<div class="result-card"><h3>${item.h}</h3><p>${item.b}</p></div>`);
  if (found.tags) html += `<div style="margin-bottom:12px;">${found.tags.map(t => `<span class="tag">${t}</span>`).join('')}</div>`;
  html += `<a class="whatsapp-share" href="${shareUrl}" target="_blank">📲 Share on WhatsApp</a>`;
  c.innerHTML = html;
    }

    // ===== DISEASE DATA =====
const diseases = {
  paddy:{title:'Paddy / Rice Diseases 🌾',sub:'Common diseases affecting paddy crop in India',items:[
    {name:'Blast Disease',cause:'Fungus Magnaporthe oryzae',symptoms:'Diamond-shaped grey-brown spots on leaves; neck blast causes white sterile panicles (white ear)',solution:'Spray Tricyclazole 75WP @ 6g/15L. Preventive spray at booting stage. Use resistant varieties.'},
    {name:'Brown Plant Hopper (BPH)',cause:'Insect Nilaparvata lugens',symptoms:'Plants dry up suddenly (hopper burn), yellowing at base, masses of brown insects at stem base',solution:'Drain field, spray Imidacloprid 17.8 SL @ 0.25ml/L or Buprofezin 25 SC @ 1ml/L'},
    {name:'Bacterial Leaf Blight',cause:'Bacteria Xanthomonas oryzae pv. oryzae',symptoms:'Water-soaked lesions on leaf tips, turn yellow then straw colored, leaves dry up',solution:'Spray Streptocycline 500ppm + Copper oxychloride 0.3% (3g/L)'},
    {name:'Sheath Blight',cause:'Fungus Rhizoctonia solani',symptoms:'Oval water-soaked lesions on leaf sheath near water level, white mycelium visible',solution:'Spray Hexaconazole 5EC @ 2ml/L or Validamycin 3SL @ 2ml/L. Reduce plant density.'},
    {name:'False Smut',cause:'Fungus Ustilaginoidea virens',symptoms:'Individual grains replaced by orange/green powdery balls (smut balls)',solution:'Spray Propiconazole 25EC @ 0.1% at boot leaf stage. Use certified seeds.'}
  ]},
  tomato:{title:'Tomato Diseases 🍅',sub:'Common diseases affecting tomato crop',items:[
    {name:'Early Blight',cause:'Fungus Alternaria solani',symptoms:'Dark brown spots with concentric rings (target-board pattern) on older leaves first',solution:'Spray Mancozeb 75 WP @ 2.5g/L or Copper oxychloride @ 3g/L every 10 days'},
    {name:'Late Blight',cause:'Oomycete Phytophthora infestans',symptoms:'Water-soaked dark lesions on leaves/stems, white fungal growth on underside in humid conditions, fruit rot',solution:'Spray Metalaxyl + Mancozeb 72 WP @ 2.5g/L. Remove infected plants.'},
    {name:'Leaf Curl Virus (ToLCV)',cause:'Begomovirus, spread by whitefly Bemisia tabaci',symptoms:'Upward curling of leaves, yellowing, stunted growth, reduced fruit set',solution:'Control whiteflies with Imidacloprid @ 0.3ml/L. Remove infected plants. Use resistant varieties.'},
    {name:'Fusarium Wilt',cause:'Soil fungus Fusarium oxysporum f.sp. lycopersici',symptoms:'Yellowing lower leaves, brown vascular discoloration inside stem, plant wilts and dies',solution:'No chemical cure. Use resistant varieties. Trichoderma viride seed treatment. Avoid waterlogging.'}
  ]},
  wheat:{title:'Wheat Diseases 🌿',sub:'Common diseases affecting wheat crop',items:[
    {name:'Yellow Rust (Stripe Rust)',cause:'Fungus Puccinia striiformis',symptoms:'Bright yellow-orange pustules in stripes along leaf veins; white powdery strips visible',solution:'Spray Propiconazole 25 EC @ 0.1% at first sign. Resistant varieties: HD-2967, PBW-550.'},
    {name:'Loose Smut',cause:'Fungus Ustilago segetum var. tritici',symptoms:'All grains in ear replaced by black powdery mass (smut spores)',solution:'Treat seeds with Carboxin 37.5% + Thiram 37.5% (Vitavax) @ 3g/kg seed before sowing.'},
    {name:'Powdery Mildew',cause:'Fungus Blumeria graminis f.sp. tritici',symptoms:'White powdery patches on leaves; severe in cool humid weather 15-20°C',solution:'Spray Karathane (Dinocap) @ 1ml/L or Sulfex (Wettable Sulfur) @ 3g/L'},
    {name:'Root Rot (Karnal Bunt)',cause:'Fungus Tilletia indica',symptoms:'Partial replacement of grain with black powdery smut; fishy smell from grains',solution:'Treat seeds with Thiram @ 2.5g/kg. Use certified disease-free seeds.'}
  ]},
  chilli:{title:'Chilli Diseases 🌶️',sub:'Common diseases affecting chilli crop',items:[
    {name:'Anthracnose (Fruit Rot)',cause:'Fungus Colletotrichum capsici',symptoms:'Circular dark sunken spots on ripe fruits, orange spore mass in humid conditions',solution:'Spray Mancozeb 75 WP @ 2g/L. Remove infected fruits. Avoid wetting foliage.'},
    {name:'Powdery Mildew',cause:'Fungus Leveillula taurica',symptoms:'White powdery coating on underside of leaves, yellowing of upper surface, defoliation',solution:'Spray Wettable Sulfur @ 3g/L or Hexaconazole @ 1ml/L'},
    {name:'Leaf Curl (Chilli Virus)',cause:'Multiple viruses spread by thrips/mites',symptoms:'Downward curling of leaves, yellowing, stunted growth, reduced flowering',solution:'Control thrips with Spinosad 45 SC @ 0.3ml/L. Use virus-free seedlings. Spray neem oil.'},
    {name:'Damping Off',cause:'Soil fungi Pythium aphanidermatum',symptoms:'Seedlings collapse at soil level, brown constriction visible at stem base',solution:'Drench nursery with Copper oxychloride @ 3g/L. Use sterile nursery soil + Trichoderma.'}
  ]},
  brinjal:{title:'Brinjal (Eggplant) Diseases 🍆',sub:'Common diseases affecting brinjal crop',items:[
    {name:'Shoot & Fruit Borer',cause:'Moth larvae Leucinodes orbonalis',symptoms:'Wilting of young shoots, entry holes in fruits, frass visible, maggots inside',solution:'Remove infested shoots weekly. Spray Chlorantraniliprole 18.5 SC @ 0.3ml/L'},
    {name:'Little Leaf Disease',cause:'Phytoplasma (spread by leafhopper Amrasca biguttula)',symptoms:'Leaves become tiny, flower petals leaf-like, severe stunting, no fruit set',solution:'Remove infected plants immediately. Control leafhoppers with Imidacloprid. No cure.'},
    {name:'Phomopsis Blight',cause:'Fungus Phomopsis vexans',symptoms:'Brown circular spots on leaves, dark lesions on stems, fruit rot',solution:'Spray Copper oxychloride 3g/L + Mancozeb 2g/L alternately every 10 days.'},
    {name:'Bacterial Wilt',cause:'Bacteria Ralstonia solanacearum',symptoms:'Sudden wilting without leaf yellowing, stem shows brown discoloration when cut',solution:'No effective cure. Remove plants. Use resistant rootstock grafting. Rotate crops.'}
  ]},
  potato:{title:'Potato Diseases 🥔',sub:'Common diseases affecting potato crop',items:[
    {name:'Late Blight',cause:'Oomycete Phytophthora infestans',symptoms:'Water-soaked dark lesions on leaves, white mold on underside, tuber rot with brown discoloration',solution:'Spray Metalaxyl + Mancozeb @ 2.5g/L every 7-10 days. Avoid overhead irrigation.'},
    {name:'Early Blight',cause:'Alternaria solani',symptoms:'Dark brown circular spots with yellow halo and concentric rings on older leaves',solution:'Spray Mancozeb 75 WP @ 2.5g/L or Chlorothalonil 75 WP @ 2g/L'},
    {name:'Common Scab',cause:'Bacteria Streptomyces scabies',symptoms:'Raised, pitted or sunken brown corky lesions on tuber skin',solution:'Maintain acidic soil (pH 5.0-5.2). Ensure steady soil moisture at tuber initiation.'},
    {name:'Black Scurf (Rhizoctonia)',cause:'Fungus Rhizoctonia solani',symptoms:'Black hard sclerotia on tuber surface, stem canker, stunted plants with aerial tubers',solution:'Treat seed tubers with Carbendazim 50 WP @ 2g/kg before planting.'}
  ]},
  onion:{title:'Onion Diseases 🧅',sub:'Common diseases affecting onion crop',items:[
    {name:'Purple Blotch',cause:'Fungus Alternaria porri',symptoms:'Small white lesions with purple center on leaves/stalks; severe infection causes crop lodging',solution:'Spray Mancozeb 75 WP @ 2.5g/L or Iprodione 50 WP @ 2g/L at 10-day intervals.'},
    {name:'Thrips (Thrips tabaci)',cause:'Insect pest; spreads IYSV virus',symptoms:'Silvery streaks and speckling on leaves, severe distortion, reduced bulb size',solution:'Spray Spinosad 45 SC @ 0.3ml/L or Fipronil 5 SC @ 1.5ml/L. Blue sticky traps.'},
    {name:'Downy Mildew',cause:'Peronospora destructor',symptoms:'Pale green to yellow lesions covered with violet-grey fungal growth',solution:'Spray Metalaxyl + Mancozeb 72 WP @ 2.5g/L. Avoid overhead irrigation.'},
    {name:'Basal Rot',cause:'Fusarium oxysporum f.sp. cepae',symptoms:'Roots rot from tip, basal plate turns pink-brown, bulbs shrivel and rot',solution:'Treat sets with Thiram. Practice crop rotation minimum 3 years. Improve drainage.'}
  ]},
  cotton:{title:'Cotton Diseases 🌸',sub:'Common diseases affecting cotton crop',items:[
    {name:'American Bollworm',cause:'Helicoverpa armigera larvae',symptoms:'Holes in buds, flowers, and bolls; partially eaten bolls with frass',solution:'Spray Profenofos 50 EC @ 2ml/L or Chlorantraniliprole @ 0.3ml/L. Pheromone traps.'},
    {name:'Bacterial Blight',cause:'Xanthomonas citri pv. malvacearum',symptoms:'Angular water-soaked leaf spots, stem blackening (black arm), boll rot',solution:'Spray Streptocycline 500ppm + Copper oxychloride 0.3%. Use certified disease-free seeds.'},
    {name:'Alternaria Leaf Spot',cause:'Alternaria macrospora',symptoms:'Circular brown spots with yellow halo; severe defoliation in humid conditions',solution:'Spray Mancozeb 75 WP @ 2.5g/L. Maintain proper plant spacing 90x60 cm.'},
    {name:'Root Rot (Phytophthora)',cause:'Phytophthora parasitica var. camphora',symptoms:'Reddish-brown root discoloration, sudden plant wilting and death',solution:'Improve field drainage. Drench Metalaxyl 25 WP @ 2g/L around root zone.'}
  ]},
  sugarcane:{title:'Sugarcane Diseases 🎋',sub:'Common diseases affecting sugarcane crop',items:[
    {name:'Red Rot',cause:'Fungus Colletotrichum falcatum',symptoms:'Drying of leaves from tips downward, red discoloration inside cane with white patches and smell',solution:'Use disease-free setts. Treat setts with Carbendazim @ 1g/L for 10 min. Remove infected canes.'},
    {name:'Wilt',cause:'Fungus Fusarium sacchari + moist heat',symptoms:'Yellowing leaves, shriveled stalks, hollow canes with internal brown discoloration',solution:'Use resistant varieties. Hot water sett treatment at 50°C for 2 hours. Use healthy nursery material.'},
    {name:'Smut',cause:'Fungus Sporisorium scitamineum',symptoms:'Long black whip (smut sorus) emerging from the growing point of plant',solution:'Remove and destroy smutted shoots immediately. Use resistant varieties. Hot water treatment.'},
    {name:'Grassy Shoot Disease',cause:'Phytoplasma (insect-borne)',symptoms:'Excessive tillering, pale yellow thin shoots, no normal cane formation',solution:'Use healthy setts. Destroy affected clumps. Control insect vectors.'}
  ]},
  maize:{title:'Maize Diseases 🌽',sub:'Common diseases affecting maize crop',items:[
    {name:'Turcicum Blight (N. Leaf Blight)',cause:'Fungus Exserohilum turcicum',symptoms:'Long tan-colored cigar-shaped lesions (5-15 cm) on leaves',solution:'Spray Mancozeb 75 WP @ 2g/L or Propiconazole @ 1ml/L. Use resistant hybrids.'},
    {name:'Fall Armyworm (FAW)',cause:'Spodoptera frugiperda (invasive pest)',symptoms:'Ragged holes in leaves, frass in whorls, damage to cobs; caterpillar with inverted Y on head',solution:'Apply Chlorantraniliprole 18.5 SC @ 0.3ml/L inside whorls. Spinetoram 11.7 SC @ 0.5ml/L.'},
    {name:'Common Rust',cause:'Puccinia sorghi',symptoms:'Oval to elongate reddish-brown powdery pustules on both leaf surfaces',solution:'Spray Propiconazole 25 EC @ 0.1% at first sign. Use resistant hybrids.'},
    {name:'Downy Mildew',cause:'Peronosclerospora sorghi',symptoms:'Yellow striping on young leaves, white downy growth on underside, stunted plants',solution:'Treat seeds with Metalaxyl 35 WS @ 6g/kg. Remove infected plants early.'}
  ]}
};

   function showDisease(crop) {
  const d = diseases[crop];
  if (!d) return;
  document.getElementById('disease-title').textContent = d.title;
  document.getElementById('disease-subtitle').textContent = d.sub;
  let html = '';
  d.items.forEach(item => {
    html += `<div class="result-card">
      <h3>🌿 ${item.name}</h3>
      <div class="info-grid">
        <div class="info-box"><h4>📋 Cause</h4><p>${item.cause}</p></div>
        <div class="info-box"><h4>🔍 Symptoms</h4><p>${item.symptoms}</p></div>
      </div>
      <div class="info-box" style="margin-bottom:10px;"><h4>✅ Solution</h4><p>${item.solution}</p></div>
      <a class="whatsapp-share" href="https://wa.me/?text=AskKrishi: ${encodeURIComponent(item.name + ' – ' + item.solution)}" target="_blank">📲 Share</a>
    </div>`;
  });
  document.getElementById('disease-content').innerHTML = html;
  showPage('disease-page');
    } 

    // ===== MANDI DATA =====
const mandiData = [
  {crop:'🌾 Paddy', mandi:'Amritsar', state:'Punjab', min:1940, max:2160, trend:'up'},
  {crop:'🌾 Paddy', mandi:'Cuttack', state:'Odisha', min:1850, max:2050, trend:'up'},
  {crop:'🌿 Wheat', mandi:'Hapur', state:'Uttar Pradesh', min:2050, max:2280, trend:'up'},
  {crop:'🌿 Wheat', mandi:'Kota', state:'Rajasthan', min:2020, max:2200, trend:'up'},
  {crop:'🍅 Tomato', mandi:'Pune', state:'Maharashtra', min:800, max:1800, trend:'down'},
  {crop:'🍅 Tomato', mandi:'Kurnool', state:'Andhra Pradesh', min:600, max:1600, trend:'down'},
  {crop:'🧅 Onion', mandi:'Lasalgaon', state:'Maharashtra', min:600, max:1450, trend:'up'},
  {crop:'🥔 Potato', mandi:'Agra', state:'Uttar Pradesh', min:700, max:1250, trend:'up'},
  {crop:'🌶️ Chilli', mandi:'Guntur', state:'Andhra Pradesh', min:5000, max:12500, trend:'up'},
  {crop:'🌶️ Chilli', mandi:'Khammam', state:'Telangana', min:4800, max:11000, trend:'up'},
  {crop:'🌽 Maize', mandi:'Gulbarga', state:'Karnataka', min:1450, max:1740, trend:'down'},
  {crop:'🌱 Soybean', mandi:'Indore', state:'Madhya Pradesh', min:4200, max:4850, trend:'up'},
  {crop:'🌻 Sunflower', mandi:'Raichur', state:'Karnataka', min:4800, max:5650, trend:'up'},
  {crop:'🎋 Sugarcane', mandi:'Lucknow', state:'Uttar Pradesh', min:290, max:320, trend:'up'},
  {crop:'🌸 Cotton', mandi:'Akola', state:'Maharashtra', min:6200, max:7500, trend:'down'},
  {crop:'🫘 Moong Dal', mandi:'Jaipur', state:'Rajasthan', min:7200, max:8600, trend:'up'},
  {crop:'🌾 Paddy (Sona Masuri)', mandi:'Nalgonda', state:'Telangana', min:2200, max:2600, trend:'up'},
];

function loadMandi() {
  renderMandiTable(mandiData);
}
function filterMandi() {
  const stateF = document.getElementById('stateFilter').value;
  const cropF = document.getElementById('cropFilter').value;
  const filtered = mandiData.filter(r => {
    const stateMatch = stateF === 'All States' || r.state === stateF;
    const cropMatch = cropF === 'All Crops' || r.crop.toLowerCase().includes(cropF.toLowerCase());
    return stateMatch && cropMatch;
  });
  renderMandiTable(filtered);
}
function renderMandiTable(data) {
  const tbody = document.getElementById('mandiBody');
  if (!tbody) return;
  tbody.innerHTML = '';
  if (data.length === 0) {
    tbody.innerHTML = `<tr><td colspan="6" style="text-align:center;color:var(--text-light);padding:20px;">No data found for this filter.</td></tr>`;
    return;
  }
  data.forEach(r => {
    const tr = document.createElement('tr');
    const isUp = r.trend === 'up';
    tr.innerHTML = `<td><strong>${r.crop}</strong></td><td>${r.mandi}</td><td>${r.state}</td><td>₹${r.min}</td><td class="${isUp?'price-up':'price-down'}">₹${r.max} ${isUp?'▲':'▼'}</td><td>${isUp?`<span class="trend-up">${t('trends_rising')}</span>`:`<span class="trend-down">${t('trends_falling')}</span>`}</td>`;
    tbody.appendChild(tr);
  });
    }

   // ===== SCHEMES =====
const schemesData = [
  {icon:'💰',name:'PM-KISAN Samman Nidhi',badge:'₹6,000/year',desc:'Provides ₹6,000/year to eligible farmers in 3 installments of ₹2,000. For small/marginal farmers owning up to 2 hectares. Register at Common Service Centre.',apply:'pmkisan.gov.in'},
  {icon:'🌧️',name:'PM Fasal Bima Yojana',badge:'Crop Insurance',desc:'Crop insurance at very low premium: 1.5% for Kharif, 1% for Rabi. Covers natural calamities, pests and diseases. Claim through bank or insurance company.',apply:'pmfby.gov.in'},
  {icon:'💧',name:'PM Krishi Sinchayee Yojana',badge:'55% Subsidy',desc:"'Har Khet Ko Pani' — 55% subsidy on drip/sprinkler irrigation for all farmers. Saves 40-50% water. Apply through state agriculture department.",apply:'pmksy.gov.in'},
  {icon:'🏦',name:'Kisan Credit Card (KCC)',badge:'Loan @ 4%',desc:'Easy credit at just 4% per annum for crop production, post-harvest expenses and farm assets. Apply at any nationalized bank with land documents.',apply:'Your nearest bank'},
  {icon:'📱',name:'e-NAM (Electronic Market)',badge:'Better Prices',desc:'Online trading platform connecting farmers directly to buyers across India. Reduces middlemen, better prices. Register through nearest APMC mandi.',apply:'enam.gov.in'},
  {icon:'🧪',name:'Soil Health Card Scheme',badge:'Free Soil Test',desc:'Free soil testing and recommendations for fertilizer use. Test every 2 years. Leads to 10-15% reduction in fertilizer cost with better yields.',apply:'Agriculture Department'},
  {icon:'🌾',name:'Pradhan Mantri Annadata Aay SanraksHan Abhiyan',badge:'MSP Protection',desc:'Ensures farmers get Minimum Support Price for their produce. Price Deficiency Payment and Procurement support when market prices fall below MSP.',apply:'State Agriculture Dept.'},
];

function loadSchemes() {
  const el = document.getElementById('schemes-content');
  if (!el) return;
  let html = '';
  schemesData.forEach(s => {
    html += `<div class="scheme-card">
      <div class="scheme-icon">${s.icon}</div>
      <div class="scheme-info">
        <h4>${s.name}</h4>
        <p>${s.desc}</p>
        <span class="scheme-badge">${s.badge}</span>
        <span class="scheme-badge" style="background:#fff3e0;color:#e65100;margin-left:6px;">🌐 ${s.apply}</span>
      </div>
    </div>`;
  });
  el.innerHTML = html;
  // Also render home schemes preview
  const homeSchemes = document.getElementById('homeSchemes');
  if (homeSchemes) {
    homeSchemes.innerHTML = schemesData.slice(0,2).map(s => `
      <div class="scheme-card" onclick="showPage('schemes')">
        <div class="scheme-icon">${s.icon}</div>
        <div class="scheme-info">
          <h4>${s.name}</h4>
          <p>${s.desc.substring(0,100)}...</p>
          <span class="scheme-badge">${s.badge}</span>
        </div>
      </div>`).join('');
  }
    } 

    // ===== SEASONAL =====
const seasonData = {
  kharif:[
    {title:'Soil Preparation (May–June)',body:'Deep plough in summer to expose soil to sunlight — kills pests and fungi naturally. Add 4-5 tonnes FYM or compost per acre before sowing.'},
    {title:'Seed Treatment',body:'Treat seeds with Thiram + Carbendazim @ 3g/kg before sowing. Use certified seeds from government outlets. Paddy: Use 25 kg/acre seed rate for direct seeding.'},
    {title:'Sowing Time',body:'Paddy: June–July after monsoon onset. Maize: June. Soybean: June 20–July 15. Cotton: May–June. Timely sowing is critical for maximum yield.'},
    {title:'Water Management',body:'Paddy: maintain 2–3 cm standing water. Other crops: irrigate at 50% field capacity depletion. Drain excess water within 24 hours of heavy rain.'},
    {title:'Fertilizer Management',body:'Apply basal dose of DAP + Potash at sowing. Split Urea into 3 applications. Never apply all at once — reduces N efficiency by 30-40%.'},
    {title:'Pest Monitoring',body:'Scout fields twice weekly. Record pest numbers. Use Economic Threshold Level (ETL) for spray decisions. Combine IPM: biological + cultural + chemical.'},
  ],
  rabi:[
    {title:'Post-Kharif Soil Care (October)',body:'Deep ploughing after Kharif. Apply lime if pH < 6.0. Incorporate crop residues. This is best time for soil testing.'},
    {title:'Wheat Sowing (Nov 1–20)',body:'Sow at 100-125 kg seed/acre. Row spacing 22-23 cm. Treat seed with Carboxin + Thiram. HD-2967, HD-3086, PBW-550 for north India.'},
    {title:'Wheat Irrigation (5–6 times)',body:'Critical stages: Crown Root Initiation (CRI, 21 days), Tillering (40 days), Jointing, Flowering, Milking, Dough stage. Never skip CRI irrigation.'},
    {title:'Mustard & Oilseeds',body:'Sow mustard October. Apply sulfur 15 kg/acre — essential for oil content. Boron deficiency causes hollow heart — apply Borax 2 kg/acre.'},
    {title:'Cold Wave/Frost Protection',body:'Light irrigation before predicted frost night. Spray Potassium nitrate 1% or burn biomass in field corners. Frost damages wheat at ear emergence stage.'},
    {title:'Post-Harvest Storage',body:'Harvest at 20-25% moisture, dry to 12% before storage. Use hermetic bags (PICS bags) for safe storage without pesticides. Protects against weevils.'},
  ],
  zaid:[
    {title:'Summer Crops (Feb–March)',body:'Moong, Watermelon, Cucumber, Bitter gourd, Bottle gourd, Fodder crops. Moong adds 30-40 kg N/acre through N-fixation when plowed under.'},
    {title:'Critical Water Management',body:'Summer crops need frequent irrigation. Drip irrigation saves 40-50% water. Always irrigate in morning or evening — never afternoon. High evaporation in summer.'},
    {title:'Vegetable Opportunity',body:'Summer vegetables (Bottle gourd, Ridge gourd, Bitter gourd) fetch premium prices. Poly mulch saves 40% moisture and controls weeds.'},
    {title:'Green Manuring',body:'Grow Dhaincha/Sunhemp in summer and plow before monsoon. Adds 60-80 kg N/acre naturally. Reduces fertilizer cost significantly.'},
    {title:'Soil Health Activities',body:'Best time for: soil testing, land leveling, irrigation channel repair, bund strengthening, applying lime/gypsum, and preparing for next Kharif season.'},
  ]
};

function showSeason(s, btn) {
  document.querySelectorAll('.season-tab').forEach(t => t.classList.remove('active'));
  if (btn) btn.classList.add('active');
  const tips = seasonData[s];
  document.getElementById('season-content').innerHTML = tips.map((tip, i) =>
    `<div class="tip-card"><div class="tip-num">${i+1}</div><div class="tip-content"><h4>${tip.title}</h4><p>${tip.body}</p></div></div>`
  ).join('');
    }
    // ===== CROP SCANNER (LOCAL DEMO) =====
const scannerConfig = {
  mode: 'local', // future upgrade: api/model
};

const scannerDemoData = {
  rice: [
    {
      disease: 'Rice Blast',
      cause: 'Fungal infection (Magnaporthe) in humid weather and excess nitrogen',
      symptoms: 'Diamond-shaped grey/brown spots on leaves, neck infection near panicle.',
      prevention: 'Use resistant variety, avoid excess urea, maintain proper spacing and field hygiene.',
      treatment: 'Spray Tricyclazole 75 WP @ 6g/15L water as per label and local advisory.',
      inputs: ['Tricyclazole 75 WP', 'Balanced NPK fertilizer', 'Neem-based bio-protectant']
    },
    {
      disease: 'Bacterial Leaf Blight (BLB)',
      cause: 'Bacterial spread favored by heavy rain/wind and high nitrogen use.',
      symptoms: 'Yellowing and drying from leaf tip/edges, straw-colored streaks.',
      prevention: 'Use clean seed, avoid excess nitrogen, improve drainage and remove heavily affected leaves.',
      treatment: 'Use locally recommended bactericide/copper product only after agri expert advice.',
      inputs: ['Copper oxychloride product', 'Potash-rich nutrition', 'Seed treatment material']
    }
  ],
  tomato: [
    {
      disease: 'Tomato Early Blight',
      cause: 'Fungal disease (Alternaria) under warm humid conditions.',
      symptoms: 'Target-like concentric brown spots on older leaves, lower leaves dry first.',
      prevention: 'Crop rotation, remove infected leaves, avoid late-evening overhead irrigation.',
      treatment: 'Spray Mancozeb/Chlorothalonil as per crop label and local recommendation.',
      inputs: ['Mancozeb 75 WP', 'Sticker/spreader', 'Calcium + micronutrient spray']
    },
    {
      disease: 'Tomato Late Blight',
      cause: 'Water-mold infection in cool humid/wet conditions.',
      symptoms: 'Water-soaked dark lesions on leaves/stems with fast spread; fruit rot in severe cases.',
      prevention: 'Good airflow, avoid leaf wetness, remove infected plant parts quickly.',
      treatment: 'Use local advisory fungicide schedule immediately when symptoms appear.',
      inputs: ['Metalaxyl + Mancozeb', 'Protective fungicide', 'Disease scouting kit']
    }
  ],
  chilli: [
    {
      disease: 'Chilli Leaf Curl',
      cause: 'Mostly viral; spread by whiteflies and thrips.',
      symptoms: 'Upward/downward leaf curl, stunted plants, poor flowering and fruit set.',
      prevention: 'Use healthy seedlings, install yellow sticky traps, control vector insects early.',
      treatment: 'Remove severe plants and follow local vector-control spray recommendation.',
      inputs: ['Yellow sticky traps', 'Neem oil 1500 ppm', 'Whitefly/thrips control product']
    }
  ],
  grapes: [
    {
      disease: 'Powdery Mildew',
      cause: 'Fungal infection favored by warm days and humid nights.',
      symptoms: 'White powdery growth on leaves/young shoots, leaf curling, poor fruit quality.',
      prevention: 'Pruning for aeration, avoid dense canopy, regular field scouting.',
      treatment: 'Use wettable sulphur or local recommended fungicide per label.',
      inputs: ['Wettable sulphur', 'Canopy management tools', 'Recommended fungicide rotation plan']
    }
  ],
  default: [
    {
      disease: 'Possible Nutrient Stress / Fungal Leaf Spot',
      cause: 'Could be due to nutrient imbalance, moisture stress, or common leaf infection.',
      symptoms: 'Yellowing, spotting or patchy leaf discoloration visible in affected area.',
      prevention: 'Do soil test, maintain balanced nutrition, avoid over-irrigation and stagnant water.',
      treatment: 'Use crop-specific recommendation from local KVK/agri officer after field verification.',
      inputs: ['Soil test kit', 'Balanced NPK fertilizer', 'Bio-fungicide (Trichoderma)']
    }
  ]
};

let scannerLastFileName = '';

function previewImage(e) {
  const file = e.target.files[0];
  const errorBox = document.getElementById('scanError');
  if (errorBox) errorBox.style.display = 'none';
  if (!file) return;

  if (!file.type.startsWith('image/')) {
    if (errorBox) {
      errorBox.textContent = 'Please upload a valid image file (JPG/PNG).';
      errorBox.style.display = 'block';
    }
    return;
  }

  scannerLastFileName = file.name.toLowerCase();
  const reader = new FileReader();
  reader.onload = ev => {
    const imgEl = document.getElementById('previewImg');
    const preview = document.getElementById('uploadPreview');
    const analyzeBtn = document.getElementById('analyzeBtn');
    const result = document.getElementById('analysisResult');
    if (!imgEl || !preview || !analyzeBtn || !result) return;
    imgEl.src = ev.target.result;
    preview.style.display = 'block';
    analyzeBtn.style.display = 'inline-block';
    result.style.display = 'none';
  };
  reader.readAsDataURL(file);
}

function pickDemoDiagnosis(crop) {
  const selected = scannerDemoData[crop] || scannerDemoData.default;
  const idx = Math.floor(Math.random() * selected.length);
  return selected[idx];
}

function inferCropForDemo() {
  const cropSel = document.getElementById('scanCropSelect');
  const selected = cropSel ? cropSel.value : 'auto';
  if (selected && selected !== 'auto') return selected;

  if (scannerLastFileName.includes('rice') || scannerLastFileName.includes('paddy')) return 'rice';
  if (scannerLastFileName.includes('tomato')) return 'tomato';
  if (scannerLastFileName.includes('chilli') || scannerLastFileName.includes('chili')) return 'chilli';
  if (scannerLastFileName.includes('grape')) return 'grapes';
  return 'default';
}

async function analyzeImage() {
  const btn = document.getElementById('analyzeBtn');
  const resultBox = document.getElementById('analysisResult');
  const errorBox = document.getElementById('scanError');
  const img = document.getElementById('previewImg');

  if (errorBox) errorBox.style.display = 'none';
  if (!img || !img.src) {
    if (errorBox) {
      errorBox.textContent = 'Please upload crop photo before scanning.';
      errorBox.style.display = 'block';
    }
    return;
  }

  btn.innerHTML = '<span class="loading"></span> Scanning crop...';
  btn.disabled = true;

  try {
    await new Promise(res => setTimeout(res, 1200));
    const crop = inferCropForDemo();
    const r = pickDemoDiagnosis(crop);
    const conf = 78 + Math.floor(Math.random() * 18);

    resultBox.style.display = 'block';
    resultBox.innerHTML = `
      <h3>🧪 Crop Disease Scanner Result <span style="font-size:0.72rem;background:#fff3e0;color:#e65100;padding:2px 8px;border-radius:8px;margin-left:8px;">Demo Mode</span></h3>
      <p style="font-size:0.84rem;color:var(--text-light);margin-bottom:8px;">Likely analysis based on uploaded image and crop selection.</p>
      <p style="font-size:1.03rem;font-weight:800;color:var(--green);margin-bottom:4px;">${r.disease}</p>
      <p style="font-size:0.8rem;color:var(--text-light);margin-bottom:8px;">Crop: <strong>${crop === 'default' ? 'General Crop' : crop.charAt(0).toUpperCase() + crop.slice(1)}</strong></p>
      <p style="font-size:0.8rem;font-weight:700;color:var(--text-light);margin-bottom:4px;">Confidence</p>
      <div class="confidence-bar"><div class="confidence-fill" id="confFill" style="width:0%"></div></div>
      <p style="font-size:0.8rem;color:var(--green);font-weight:700;margin-bottom:12px;">${conf}% match</p>

      <div class="info-grid">
        <div class="info-box"><h4>🌾 Crop Name</h4><p>${crop === 'default' ? 'Not specified (auto demo)' : crop.charAt(0).toUpperCase() + crop.slice(1)}</p></div>
        <div class="info-box"><h4>🧬 Possible Cause</h4><p>${r.cause}</p></div>
      </div>
      <div class="info-box" style="margin-top:10px;"><h4>🔍 Visible Symptoms</h4><p>${r.symptoms}</p></div>
      <div class="info-box" style="margin-top:10px;"><h4>💡 Prevention Tips</h4><p>${r.prevention}</p></div>
      <div class="info-box" style="margin-top:10px;"><h4>✅ Treatment / Control Advice</h4><p>${r.treatment}</p></div>
      <div class="info-box" style="margin-top:10px;background:#fff8e1;border-color:#ffe082;"><h4 style="color:#e65100;">🧪 Suggested Treatment Materials (Informational)</h4><ul>${r.inputs.map(i => `<li>${i}</li>`).join('')}</ul></div>
      <div class="info-box" style="margin-top:10px;"><h4>⚠️ Advisory</h4><p>This scanner is for educational guidance only. Verify pesticide/fungicide use, dosage, and waiting period with local agriculture expert/KVK before field application.</p></div>
      <a class="whatsapp-share" style="margin-top:14px;" href="https://wa.me/?text=${encodeURIComponent('AskKrishi Scanner (Demo): ' + r.disease + '\\nCause: ' + r.cause + '\\nTreatment: ' + r.treatment)}" target="_blank">📲 Share Result</a>
    `;

    setTimeout(() => {
      const cf = document.getElementById('confFill');
      if (cf) cf.style.width = conf + '%';
    }, 100);

  } catch (err) {
    if (errorBox) {
      errorBox.textContent = 'Scanner is unable to process right now. Please try again.';
      errorBox.style.display = 'block';
    }
  } finally {
    btn.innerHTML = `🔬 <span data-key="analyze_btn">${t('analyze_btn')}</span>`;
    btn.disabled = false;
  }
}


    // ===== AI AGRICULTURE ASSISTANT (LOCAL DEMO) =====
const assistantConfig = {
  mode: 'local', // future: 'api'
  apiEndpoint: '',
};

const assistantExamples = [
  'Why are my rice leaves turning yellow?',
  'Best fertilizer for tomato?',
  'How to control chilli pests?',
  'Which crop is best for my district?'
];

const assistantKnowledgeBase = [
  {
    keys: ['rice blast', 'paddy blast', 'blast disease'],
    answer: `Rice blast is a fungal disease.
• Symptoms: Diamond-shaped grey spots on leaves, neck infection near panicle.
• Immediate step: Spray Tricyclazole 75 WP @ 6g per 15L water (follow label/local advice).
• Field care: Avoid excess nitrogen, keep proper plant spacing, drain standing water when possible.`
  },
  {
    keys: ['bacterial leaf blight', 'blb', 'rice leaf blight'],
    answer: `Bacterial leaf blight in rice spreads fast in humid weather.
• Symptoms: Yellow to straw-colored leaf edges with drying from tip.
• First actions: Avoid heavy urea dose, keep field clean, remove badly infected leaves.
• Guidance: Copper-based/bactericide use should be confirmed with local expert for correct product and dose.`
  },
  {
    keys: ['tomato early blight', 'early blight tomato', 'tomato leaf spots'],
    answer: `Tomato early blight is usually fungal.
• Symptoms: Brown concentric ring spots on older leaves.
• Management: Remove infected leaves, avoid overhead irrigation late evening.
• Spray option: Mancozeb/Chlorothalonil products are commonly used — verify dose and waiting period locally.`
  },
  {
    keys: ['chilli leaf curl', 'chili leaf curl', 'mirchi leaf curl'],
    answer: `Chilli leaf curl is often viral and spread by whiteflies/thrips.
• Symptoms: Upward curling leaves, stunted plants, poor fruit set.
• Action: Remove badly affected plants early.
• Control vector: Use yellow sticky traps and need-based spray for whitefly/thrips after local recommendation.`
  },
  {
    keys: ['powdery mildew', 'powder on leaves', 'white powder leaves'],
    answer: `Powdery mildew appears as white powder on leaves.
• Favours dry days + humid nights.
• Management: Improve air movement, avoid dense canopy.
• Common option: Wettable sulphur products are used in many crops — check crop label and local advisory first.`
  },
  {
    keys: ['fertilizer', 'best fertilizer', 'npk', 'urea', 'dap'],
    answer: `Basic fertilizer guidance:
• Start with soil test whenever possible.
• Use balanced nutrients (N:P:K) instead of only urea.
• Split nitrogen dose (2-3 times) for better uptake.
• Add organic matter (FYM/compost) for long-term soil health.`
  },
  {
    keys: ['pest control', 'insect control', 'pests'],
    answer: `Pest control basics (IPM):
• Monitor field twice weekly.
• Use traps (yellow/pheromone) for early detection.
• Keep weeds and alternate hosts under control.
• Use recommended pesticide only when threshold is crossed; rotate molecules to avoid resistance.`
  },
  {
    keys: ['best crop for my district', 'which crop is best for my district', 'district crop'],
    answer: `To select best crop for your district:
• Check rainfall + irrigation availability.
• Match crop to soil type and market demand.
• Prefer locally proven varieties from KVK/agri university.
• Share your district name and season; I can suggest 3 suitable crops.`
  }
];

function renderAssistantExamples() {
  const el = document.getElementById('assistantExamples');
  if (!el) return;
  el.innerHTML = assistantExamples.map(q => `<span onclick="askAssistantExample('${q.replace(/'/g, "\'")}')">${q}</span>`).join('');
}

function askAssistantExample(q) {
  const input = document.getElementById('chatInput');
  if (!input) return;
  input.value = q;
  sendChat();
}

function getAssistantResponseLocal(question) {
  const q = question.toLowerCase();
  const matched = assistantKnowledgeBase.find(item => item.keys.some(k => q.includes(k)));
  if (matched) return matched.answer;
  return `I can help with crop diseases, fertilizer planning, pest control, and crop selection.
Please share:
• Crop name
• Problem/symptoms
• Crop stage
• Your district/state
Then I will give a practical step-by-step answer.`;
}

async function getAssistantResponseAPI(question) {
  throw new Error('API mode not configured yet');
}

async function getAssistantResponse(question) {
  if (assistantConfig.mode === 'api') {
    return getAssistantResponseAPI(question);
  }
  return getAssistantResponseLocal(question);
}

let chatHistory = [];

async function sendChat() {
  const input = document.getElementById('chatInput');
  const q = input.value.trim();
  if (!q) return;
  input.value = '';

  appendMsg(q, 'user');
  chatHistory.push({ role: 'user', content: q });

  const typing = document.getElementById('chatTyping');
  const errBox = document.getElementById('chatError');
  if (errBox) errBox.style.display = 'none';
  if (typing) typing.style.display = 'block';
  scrollChat();

  try {
    await new Promise(res => setTimeout(res, 450));
    const aiText = await getAssistantResponse(q);
    chatHistory.push({ role: 'assistant', content: aiText });
    if (typing) typing.style.display = 'none';
    appendMsg(aiText, 'ai');
  } catch (err) {
    if (typing) typing.style.display = 'none';
    if (errBox) errBox.style.display = 'block';
    appendMsg('Sorry, I could not answer right now. Please try again.', 'ai');
  }
  scrollChat();
}

function appendMsg(text, type) {
  const msgs = document.getElementById('chatMessages');
  const div = document.createElement('div');
  div.className = `chat-msg ${type}`;
  if (type === 'ai') {
    div.innerHTML = `<div class="ai-name">🌾 KrishiBot</div>${text.replace(/\n/g, '<br>')}`;
  } else {
    div.textContent = text;
  }
  msgs.appendChild(div);
  scrollChat();
}

function scrollChat() {
  const msgs = document.getElementById('chatMessages');
  msgs.scrollTop = msgs.scrollHeight;
}


// ===== ASK FORM =====
function submitQuestion() {
  const msg = document.getElementById('successMsg');
  msg.style.display = 'block';
  setTimeout(() => msg.style.display = 'none', 4000);
    }

  // ===== INIT =====

// ===== NEWS TICKER =====
const newsItems=[
  '📢 PM-KISAN 18th Installment released — Check pmkisan.gov.in',
  '🌾 MSP Kharif 2025-26: Paddy ₹2,183 | Maize ₹2,225 | Soybean ₹4,892 | Groundnut ₹6,783/qtl',
  '🌧️ IMD: Normal monsoon predicted for Odisha & AP — kharif season outlook good',
  '🟠 KALIA Scheme: New beneficiary list — Check kalia.odisha.gov.in',
  '🔵 YSR Rythu Bharosa: New season payment released for AP farmers',
  '🍄 NABARD: New SHG loan for mushroom farming — Apply at District Co-op Bank',
  '🌱 Zero Budget Natural Farming camps in Guntur & Kurnool — Contact Block Agriculture Office',
  '💧 PM-KUSUM: 60% subsidy on solar pumps — Apply at mnre.gov.in',
  '📊 eNAM: 1000+ mandis online — Sell directly from village level',
  '🧪 Soil Health Cards: Free testing at KVK in your district',
  '🐝 National Bee Board: Beekeeping training — ₹40,000 subsidy for 10 bee boxes',
];
function renderNewsTicker(){
  const el=document.getElementById('newsTicker');if(!el)return;
  el.innerHTML=newsItems.map(n=>`<span class="news-item"><span class="news-dot">●</span>${n}</span>`).join('');
  }

    // ===== EXPANDED MANDI DATA (All regions) =====
const mandiDataNew={
  odisha:[
    {crop:'🌾 Paddy (Common)',mandi:'Bhubaneswar OAFM',state:'Odisha',min:2000,max:2183,trend:'up'},
    {crop:'🌾 Paddy (Fine MTU-7029)',mandi:'Cuttack APMC',state:'Odisha',min:2183,max:2380,trend:'up'},
    {crop:'🌾 Paddy (Fine)',mandi:'Sambalpur APMC',state:'Odisha',min:2100,max:2280,trend:'stable'},
    {crop:'🌾 Paddy (Lalat)',mandi:'Koraput APMC',state:'Odisha',min:2000,max:2183,trend:'stable'},
    {crop:'🌿 Arhar Dal',mandi:'Bhubaneswar',state:'Odisha',min:6800,max:7200,trend:'down'},
    {crop:'🌿 Black Gram',mandi:'Cuttack',state:'Odisha',min:7200,max:7800,trend:'up'},
    {crop:'🌿 Green Gram',mandi:'Bhubaneswar',state:'Odisha',min:8000,max:8500,trend:'up'},
    {crop:'🫚 Groundnut',mandi:'Berhampur APMC',state:'Odisha',min:5800,max:6300,trend:'up'},
    {crop:'🌶️ Chilli (Dry)',mandi:'Ganjam APMC',state:'Odisha',min:15000,max:18500,trend:'up'},
    {crop:'🟡 Turmeric',mandi:'Koraput APMC',state:'Odisha',min:8500,max:9500,trend:'up'},
    {crop:'🟡 Ginger',mandi:'Koraput',state:'Odisha',min:12000,max:14500,trend:'up'},
    {crop:'🫚 Mustard',mandi:'Sambalpur',state:'Odisha',min:4800,max:5200,trend:'up'},
    {crop:'🟤 Ragi',mandi:'Koraput',state:'Odisha',min:3600,max:3846,trend:'stable'},
    {crop:'🌽 Maize',mandi:'Cuttack',state:'Odisha',min:1800,max:2000,trend:'down'},
    {crop:'🍌 Banana',mandi:'Balasore',state:'Odisha',min:700,max:900,trend:'stable'},
    {crop:'🥔 Potato',mandi:'Balasore',state:'Odisha',min:1400,max:1700,trend:'down'},
    {crop:'🍅 Tomato',mandi:'Bhubaneswar',state:'Odisha',min:800,max:1600,trend:'down'},
    {crop:'🌿 Jute',mandi:'Balasore APMC',state:'Odisha',min:4200,max:4800,trend:'up'},
  ],
  andhra:[
    {crop:'🌾 Paddy (Raw)',mandi:'Kurnool APMC',state:'Andhra Pradesh',min:2000,max:2183,trend:'stable'},
    {crop:'🌾 Paddy (BPT 5204)',mandi:'Krishna APMC',state:'Andhra Pradesh',min:2400,max:2650,trend:'up'},
    {crop:'🌾 Paddy (Sona Masuri)',mandi:'Nellore APMC',state:'Andhra Pradesh',min:2200,max:2450,trend:'up'},
    {crop:'🌶️ Chilli (Teja)',mandi:'Guntur',state:'Andhra Pradesh',min:18000,max:24000,trend:'up'},
    {crop:'🌶️ Chilli (Wonder Hot)',mandi:'Guntur',state:'Andhra Pradesh',min:12000,max:16000,trend:'up'},
    {crop:'🌶️ Chilli (Sannam S4)',mandi:'Prakasam',state:'Andhra Pradesh',min:10000,max:14000,trend:'up'},
    {crop:'🌸 Cotton',mandi:'Kurnool',state:'Andhra Pradesh',min:6400,max:6900,trend:'stable'},
    {crop:'🟡 Turmeric',mandi:'Nizamabad',state:'Andhra Pradesh',min:9500,max:11000,trend:'up'},
    {crop:'🌿 Tobacco (VA)',mandi:'Guntur',state:'Andhra Pradesh',min:11500,max:13500,trend:'down'},
    {crop:'🫚 Groundnut',mandi:'Tirupati APMC',state:'Andhra Pradesh',min:5900,max:6450,trend:'up'},
    {crop:'🍅 Tomato',mandi:'Tirupati',state:'Andhra Pradesh',min:800,max:2000,trend:'down'},
    {crop:'🥭 Mango (Banginapalli)',mandi:'Tirupati',state:'Andhra Pradesh',min:4500,max:7000,trend:'up'},
    {crop:'🥥 Coconut',mandi:'Vijayawada',state:'Andhra Pradesh',min:1600,max:2000,trend:'stable'},
    {crop:'🦐 Prawn (Tiger)',mandi:'Kakinada',state:'Andhra Pradesh',min:38000,max:46000,trend:'up'},
    {crop:'🫘 Red Gram',mandi:'Kurnool',state:'Andhra Pradesh',min:6800,max:7400,trend:'down'},
    {crop:'🌽 Maize',mandi:'East Godavari',state:'Andhra Pradesh',min:1900,max:2100,trend:'stable'},
  ],
  north:[
    {crop:'🌿 Wheat',mandi:'Hapur APMC',state:'Uttar Pradesh',min:2050,max:2280,trend:'up'},
    {crop:'🌾 Paddy (Basmati)',mandi:'Karnal',state:'Haryana',min:3200,max:5500,trend:'up'},
    {crop:'🌾 Paddy (Common)',mandi:'Amritsar',state:'Punjab',min:1940,max:2183,trend:'up'},
    {crop:'🥔 Potato',mandi:'Agra',state:'Uttar Pradesh',min:700,max:1250,trend:'up'},
    {crop:'🧅 Onion',mandi:'Aligarh',state:'Uttar Pradesh',min:700,max:1400,trend:'up'},
    {crop:'🌿 Mustard',mandi:'Kota',state:'Rajasthan',min:4600,max:5100,trend:'up'},
    {crop:'🧄 Garlic',mandi:'Kota',state:'Rajasthan',min:10000,max:15000,trend:'up'},
    {crop:'🌿 Cumin (Jeera)',mandi:'Unjha',state:'Gujarat',min:22000,max:35000,trend:'up'},
    {crop:'🫘 Soybean',mandi:'Indore',state:'Madhya Pradesh',min:4200,max:4700,trend:'down'},
    {crop:'🌿 Wheat',mandi:'Bhopal',state:'Madhya Pradesh',min:2020,max:2200,trend:'up'},
    {crop:'🌿 Chickpea',mandi:'Nagpur',state:'Maharashtra',min:5000,max:5600,trend:'up'},
    {crop:'🌾 Paddy',mandi:'Patna',state:'Bihar',min:1900,max:2183,trend:'stable'},
  ],
  south:[
    {crop:'🌾 Paddy',mandi:'Thanjavur',state:'Tamil Nadu',min:1900,max:2183,trend:'stable'},
    {crop:'🥥 Coconut',mandi:'Pollachi',state:'Tamil Nadu',min:1400,max:1800,trend:'up'},
    {crop:'🍌 Banana (Nendran)',mandi:'Palakkad',state:'Kerala',min:2500,max:3500,trend:'up'},
    {crop:'☕ Coffee (Arabica)',mandi:'Chikmagalur',state:'Karnataka',min:18000,max:28000,trend:'up'},
    {crop:'🍫 Cocoa',mandi:'Mangalore',state:'Karnataka',min:7500,max:9000,trend:'up'},
    {crop:'🌾 Paddy (Sona Masuri)',mandi:'Bangalore',state:'Karnataka',min:2000,max:2400,trend:'up'},
    {crop:'🌿 Ragi',mandi:'Mysore',state:'Karnataka',min:3500,max:3846,trend:'stable'},
    {crop:'🫚 Groundnut',mandi:'Bellary',state:'Karnataka',min:5500,max:6000,trend:'up'},
    {crop:'🌶️ Chilli',mandi:'Khammam',state:'Telangana',min:8000,max:15000,trend:'up'},
    {crop:'🟡 Turmeric',mandi:'Erode',state:'Tamil Nadu',min:8000,max:12000,trend:'up'},
    {crop:'🫚 Castor',mandi:'Mahbubnagar',state:'Telangana',min:6200,max:6635,trend:'up'},
    {crop:'🫚 Groundnut',mandi:'Anantapur',state:'Andhra Pradesh',min:5700,max:6200,trend:'up'},
  ],
  east:[
    {crop:'🌾 Paddy',mandi:'Cuttack',state:'Odisha',min:2000,max:2183,trend:'up'},
    {crop:'🌿 Jute (Raw)',mandi:'Kolkata APMC',state:'West Bengal',min:4500,max:4900,trend:'up'},
    {crop:'🌾 Rice (Fine)',mandi:'Kolkata',state:'West Bengal',min:3500,max:4000,trend:'up'},
    {crop:'🥔 Potato',mandi:'Hooghly',state:'West Bengal',min:800,max:1400,trend:'stable'},
    {crop:'🥦 Litchi',mandi:'Muzaffarpur',state:'Bihar',min:6000,max:15000,trend:'up'},
    {crop:'🌾 Paddy',mandi:'Ranchi',state:'Jharkhand',min:1950,max:2183,trend:'stable'},
    {crop:'🟡 Turmeric',mandi:'Koraput',state:'Odisha',min:8500,max:9500,trend:'up'},
    {crop:'🍌 Banana',mandi:'Malda',state:'West Bengal',min:600,max:1000,trend:'stable'},
    {crop:'🌿 Wheat',mandi:'Patna',state:'Bihar',min:2000,max:2200,trend:'up'},
    {crop:'🌾 Paddy',mandi:'Guwahati',state:'Assam',min:1900,max:2183,trend:'stable'},
    {crop:'🍵 Tea',mandi:'Guwahati',state:'Assam',min:15000,max:25000,trend:'up'},
    {crop:'🌿 Mustard',mandi:'Kolkata',state:'West Bengal',min:4500,max:5000,trend:'up'},
  ],
  west:[
    {crop:'🧅 Onion',mandi:'Lasalgaon',state:'Maharashtra',min:600,max:1450,trend:'up'},
    {crop:'🍇 Grapes (Thompson)',mandi:'Nashik',state:'Maharashtra',min:3000,max:8000,trend:'stable'},
    {crop:'🥭 Mango (Alphonso)',mandi:'Ratnagiri',state:'Maharashtra',min:25000,max:60000,trend:'up'},
    {crop:'🌸 Cotton',mandi:'Akola',state:'Maharashtra',min:6300,max:6900,trend:'stable'},
    {crop:'🫘 Soybean',mandi:'Latur',state:'Maharashtra',min:4100,max:4700,trend:'down'},
    {crop:'🫚 Groundnut',mandi:'Rajkot',state:'Gujarat',min:5600,max:6200,trend:'up'},
    {crop:'🌸 Cotton (Sankar)',mandi:'Surat',state:'Gujarat',min:6500,max:7200,trend:'up'},
    {crop:'🟤 Castor',mandi:'Mehsana',state:'Gujarat',min:6200,max:6800,trend:'up'},
    {crop:'🌿 Cumin (Jeera)',mandi:'Unjha',state:'Gujarat',min:22000,max:35000,trend:'up'},
    {crop:'🌿 Fennel (Saunf)',mandi:'Unjha',state:'Gujarat',min:12000,max:18000,trend:'up'},
    {crop:'🍎 Pomegranate',mandi:'Solapur',state:'Maharashtra',min:8000,max:16000,trend:'up'},
    {crop:'🫘 Chickpea',mandi:'Nagpur',state:'Maharashtra',min:4900,max:5600,trend:'up'},
  ],
  all:[
    {crop:'🌾 Paddy (Odisha)',mandi:'Cuttack',state:'Odisha',min:2000,max:2183,trend:'up'},
    {crop:'🌶️ Chilli Teja',mandi:'Guntur',state:'Andhra Pradesh',min:18000,max:24000,trend:'up'},
    {crop:'🌿 Wheat',mandi:'Hapur UP',state:'Uttar Pradesh',min:2050,max:2280,trend:'up'},
    {crop:'🧅 Onion',mandi:'Lasalgaon MH',state:'Maharashtra',min:600,max:1450,trend:'up'},
    {crop:'🌸 Cotton',mandi:'Kurnool AP',state:'Andhra Pradesh',min:6400,max:6900,trend:'stable'},
    {crop:'🟡 Turmeric',mandi:'Nizamabad AP',state:'Andhra Pradesh',min:9500,max:11000,trend:'up'},
    {crop:'☕ Coffee',mandi:'Chikmagalur KA',state:'Karnataka',min:18000,max:28000,trend:'up'},
    {crop:'🌿 Cumin',mandi:'Unjha GJ',state:'Gujarat',min:22000,max:35000,trend:'up'},
    {crop:'🍎 Apple',mandi:'Shimla HP',state:'Himachal Pradesh',min:6000,max:10000,trend:'up'},
    {crop:'🥭 Mango Alphonso',mandi:'Ratnagiri MH',state:'Maharashtra',min:25000,max:60000,trend:'up'},
    {crop:'🦐 Prawn Tiger',mandi:'Kakinada AP',state:'Andhra Pradesh',min:38000,max:46000,trend:'up'},
    {crop:'🌾 Basmati',mandi:'Karnal HR',state:'Haryana',min:3200,max:5500,trend:'up'},
    {crop:'🌾 Paddy (Bihar)',mandi:'Patna',state:'Bihar',min:1900,max:2183,trend:'stable'},
    {crop:'🍵 Tea',mandi:'Guwahati',state:'Assam',min:15000,max:25000,trend:'up'},
    {crop:'🥔 Potato',mandi:'Agra UP',state:'Uttar Pradesh',min:700,max:1250,trend:'up'},
    {crop:'🌿 Mustard',mandi:'Kota RJ',state:'Rajasthan',min:4600,max:5100,trend:'up'},
    {crop:'🫚 Groundnut',mandi:'Rajkot GJ',state:'Gujarat',min:5600,max:6200,trend:'up'},
    {crop:'🫘 Soybean',mandi:'Indore MP',state:'Madhya Pradesh',min:4200,max:4700,trend:'down'},
  ],
};
function loadMandiNew(state,btn){
  const data=mandiDataNew[state]||mandiDataNew.odisha;
  const tbody=document.getElementById('mandiBodyNew');if(!tbody)return;
  tbody.innerHTML=data.map(r=>{
    const ti=r.trend==='up'?'<span style="color:#2e7d32;font-weight:700;">▲ Rising</span>':r.trend==='down'?'<span style="color:#c62828;font-weight:700;">▼ Falling</span>':'<span style="color:#f57c00;font-weight:700;">─ Stable</span>';
    const mc=r.trend==='up'?'price-up':r.trend==='down'?'price-down':'';
    return `<tr><td>${r.crop}</td><td>${r.mandi}</td><td>${r.state}</td><td class="${mc}">₹${r.min.toLocaleString()}</td><td class="${mc}">₹${r.max.toLocaleString()}</td><td>${ti}</td></tr>`;
  }).join('');
  document.querySelectorAll('.mandi-tab').forEach(t=>t.classList.remove('active'));
  if(btn)btn.classList.add('active');
    }
    // ===== DISTRICT GUIDE (All 30 Odisha + 13 AP) =====
const districts={
  odisha:[
    {name:'Khordha',crops:['Paddy','Tomato','Brinjal','Flowers'],climate:'Tropical, 1400mm',soil:'Red laterite',season:'Kharif+Rabi',note:'Major vegetable hub for Bhubaneswar. Urban farming & floriculture growing rapidly.'},
    {name:'Cuttack',crops:['Paddy','Jute','Banana','Vegetables'],climate:'Subtropical humid, 1500mm',soil:'Alluvial clay',season:'Kharif+Rabi',note:'Delta district — river silt ideal for paddy. Fine rice (MTU-7029) extensively grown.'},
    {name:'Ganjam',crops:['Paddy','Groundnut','Turmeric','Chilli'],climate:'Coastal tropical, 1200mm',soil:'Sandy loam to clay',season:'Kharif+Rabi',note:'Southern Odisha agri hub. Significant turmeric and chilli production for AP markets.'},
    {name:'Sambalpur',crops:['Paddy','Soybean','Mustard','Linseed'],climate:'Sub-humid, 1300mm',soil:'Red loamy',season:'Kharif+Rabi double',note:'Hirakud dam — double cropping possible. Soybean important cash crop.'},
    {name:'Koraput',crops:['Paddy','Turmeric','Ginger','Ragi'],climate:'Cool sub-tropical, 1600mm',soil:'Red laterite, forest',season:'Kharif dominant',note:'Tribal hub. Organic Kandhamal turmeric GI tag. Ragi staple crop.'},
    {name:'Balasore',crops:['Paddy','Jute','Potato','Banana'],climate:'Coastal humid, 1600mm',soil:'Alluvial sandy',season:'Kharif+Rabi double',note:'North coastal — jute and banana important. Sandy soil suits groundnut.'},
    {name:'Kendrapara',crops:['Paddy','Coconut','Betel Vine','Fish'],climate:'Coastal, 1400mm',soil:'Alluvial coastal',season:'Kharif+perennial',note:'Bhitarkanika — coconut and aquaculture. Betel vine cultivation traditional.'},
    {name:'Puri',crops:['Paddy','Vegetables','Coconut'],climate:'Coastal tropical, 1400mm',soil:'Sandy coastal to alluvial',season:'Kharif+Rabi veg',note:'Vegetable for Puri-Bhubaneswar corridor. Coconut gardens along coast.'},
    {name:'Mayurbhanj',crops:['Paddy','Maize','Vegetables','Turmeric'],climate:'Sub-humid, 1500mm',soil:'Red laterite',season:'Kharif dominant',note:'Forest-rich tribal district. Rich indigenous crops. Organic practices traditional.'},
    {name:'Sundargarh',crops:['Paddy','Maize','Vegetables','Mustard'],climate:'Sub-humid, 1200mm',soil:'Red loamy',season:'Kharif+Rabi',note:'Industrial-agri mix. Vegetables for Rourkela city. IB River basin.'},
    {name:'Kandhamal',crops:['Turmeric','Ginger','Paddy','Coffee'],climate:'Hilly sub-tropical, 1800mm',soil:'Sandy loam, forest',season:'Kharif only',note:'Kandhamal turmeric GI tag — premium organic product nationally recognized.'},
    {name:'Kalahandi',crops:['Paddy','Maize','Groundnut','Millets'],climate:'Sub-humid semi-arid',soil:'Red sandy loam',season:'Kharif+limited Rabi',note:'Improving with canal irrigation. Maize and groundnut important.'},
    {name:'Nuapada',crops:['Paddy','Maize','Millets','Groundnut'],climate:'Semi-arid, 1000mm',soil:'Red sandy',season:'Kharif',note:'Drought-prone western district. Millet cultivation key for food security.'},
    {name:'Bolangir',crops:['Paddy','Maize','Mustard','Vegetables'],climate:'Sub-humid, 1200mm',soil:'Red loamy',season:'Kharif+Rabi',note:'Mixed farming. Sugarcane migration labor historically went to Maharashtra.'},
    {name:'Sonepur',crops:['Paddy','Sugarcane','Vegetables'],climate:'Sub-humid, 1200mm',soil:'Alluvial loamy',season:'Kharif+Rabi',note:'Hirakud canal tail-end. Vegetable and sugarcane production.'},
    {name:'Bargarh',crops:['Paddy','Wheat','Mustard','Vegetables'],climate:'Sub-humid, 1300mm',soil:'Alluvial loamy',season:'Double crop',note:'Largest paddy producer. Mahanadi canal — excellent irrigation infrastructure.'},
    {name:'Jharsuguda',crops:['Paddy','Maize','Vegetables'],climate:'Sub-humid, 1300mm',soil:'Red laterite',season:'Kharif+Rabi',note:'Industrial district with good agriculture. IB River basin farming.'},
    {name:'Deogarh',crops:['Paddy','Maize','Groundnut','Turmeric'],climate:'Sub-humid hilly, 1400mm',soil:'Red laterite',season:'Kharif',note:'Hilly interior. Tribal farming with traditional organic practices.'},
    {name:'Boudh',crops:['Paddy','Maize','Vegetables'],climate:'Sub-humid, 1300mm',soil:'Red loamy',season:'Kharif+Rabi',note:'Small district with Mahanadi river farming.'},
    {name:'Nayagarh',crops:['Paddy','Maize','Vegetables','Turmeric'],climate:'Subtropical, 1400mm',soil:'Laterite to alluvial',season:'Kharif+Rabi',note:'Daya river basin. Good paddy and vegetable production.'},
    {name:'Angul',crops:['Paddy','Maize','Turmeric','Vegetables'],climate:'Sub-humid, 1400mm',soil:'Laterite loamy',season:'Kharif+Rabi',note:'Mahanadi basin paddy. Industrial-agricultural mix.'},
    {name:'Dhenkanal',crops:['Paddy','Maize','Vegetables','Mustard'],climate:'Sub-humid, 1400mm',soil:'Alluvial to laterite',season:'Kharif+Rabi',note:'Mahanadi delta fringe. Good paddy and oilseed.'},
    {name:'Jajpur',crops:['Paddy','Jute','Vegetables'],climate:'Coastal sub-humid, 1500mm',soil:'Alluvial coastal',season:'Kharif+Rabi',note:'Baitarani river basin paddy. Industrial district.'},
    {name:'Bhadrak',crops:['Paddy','Jute','Vegetables','Aquaculture'],climate:'Coastal humid, 1500mm',soil:'Alluvial coastal',season:'Kharif+Rabi',note:'North coastal. Jute and paddy dominant. Aquaculture developing.'},
    {name:'Keonjhar',crops:['Paddy','Maize','Turmeric','Vegetables'],climate:'Sub-humid hilly, 1500mm',soil:'Red laterite, forest',season:'Kharif dominant',note:'Mineral-rich tribal district with traditional farming practices.'},
    {name:'Malkangiri',crops:['Paddy','Millets','Turmeric','Pulses'],climate:'Hilly humid, 1800mm',soil:'Forest clay loam',season:'Kharif only',note:'Remote tribal district. Traditional paddy and forest products.'},
    {name:'Nabarangpur',crops:['Paddy','Millets','Maize','Groundnut'],climate:'Hilly sub-tropical, 1500mm',soil:'Red laterite',season:'Kharif dominant',note:'Tribal interior. Ragi and millets important for food security.'},
    {name:'Rayagada',crops:['Paddy','Millets','Turmeric','Cashew'],climate:'Hilly humid, 1600mm',soil:'Laterite forest',season:'Kharif',note:'Eastern Ghats tribal. Cashew on hill slopes. Tourism potential.'},
    {name:'Gajapati',crops:['Paddy','Millets','Cashew','Ginger'],climate:'Hilly humid, 1400mm',soil:'Laterite hilly',season:'Kharif',note:'Hilly tribal. Cashew and ginger on slopes. Coffee cultivation potential.'},
    {name:'Jagatsinghpur',crops:['Paddy','Vegetables','Coconut','Aquaculture'],climate:'Coastal humid, 1400mm',soil:'Alluvial coastal',season:'Kharif+Rabi',note:'Coastal district. Rich alluvial soils. Prawn and fish aquaculture.'},
  ],
  andhra:[
    {name:'Guntur',crops:['Chilli','Cotton','Tobacco','Paddy'],climate:'Semi-arid tropical, 900mm',soil:'Black cotton + sandy loam',season:'Kharif: chilli/cotton, Rabi: tobacco',note:'Chilli capital India — Teja variety world-famous. Asia\'s largest spice market.'},
    {name:'Krishna',crops:['Paddy (BPT)','Lemon','Banana','Sugarcane'],climate:'Coastal tropical, 1000mm',soil:'Alluvial delta',season:'2 paddy crops/year',note:'Krishna delta — BPT 5204 premium paddy. Lemon orchards at Jaggayyapeta.'},
    {name:'Kurnool',crops:['Paddy','Groundnut','Jowar','Castor'],climate:'Semi-arid, 650mm',soil:'Red sandy to black',season:'Kharif: paddy/groundnut',note:'Drought-prone but major groundnut belt. Castor for industrial use.'},
    {name:'Visakhapatnam',crops:['Cashew','Cocoa','Ginger','Coffee'],climate:'Humid tropical, 1100mm',soil:'Red laterite, alluvial',season:'Perennial + Kharif',note:'Araku Valley — world-famous organic coffee GI. Tribal cashew on hills.'},
    {name:'Chittoor',crops:['Tomato','Mango (Banginapalli)','Groundnut'],climate:'Tropical, 900mm',soil:'Red sandy',season:'All seasons irrigated',note:'Tomato surplus zone. Banginapalli mango has GI tag — premium price.'},
    {name:'East Godavari',crops:['Paddy','Coconut','Banana','Aquaculture'],climate:'Humid tropical, 1200mm',soil:'Alluvial rich delta',season:'Triple crop possible',note:'Godavari delta — AP\'s highest paddy productivity. Prawn farming major.'},
    {name:'West Godavari',crops:['Paddy','Sugarcane','Banana','Aquaculture'],climate:'Humid tropical, 1100mm',soil:'Alluvial, highly fertile',season:'2-3 crops/year',note:'Richest agricultural district AP. High per-acre paddy. Sugarcane belt.'},
    {name:'Prakasam',crops:['Chilli','Cotton','Groundnut','Tobacco'],climate:'Semi-arid, 750mm',soil:'Red loam to black',season:'Kharif + Rabi',note:'2nd largest chilli district. Cotton-tobacco rotation common.'},
    {name:'Nellore',crops:['Paddy','Aquaculture','Groundnut','Mango'],climate:'Tropical, 1000mm',soil:'Sandy coastal alluvial',season:'2 paddy crops',note:'Largest aquaculture district AP. Sona Masuri paddy in river areas.'},
    {name:'SPSR Nellore',crops:['Paddy','Sugarcane','Vegetables','Aquaculture'],climate:'Tropical semi-humid',soil:'Alluvial to sandy',season:'Kharif+Rabi+Zaid',note:'Canal-irrigated. Vegetables for Chennai and Hyderabad markets.'},
    {name:'Sri Sathya Sai (Anantapur)',crops:['Groundnut','Cotton','Paddy','Banana'],climate:'Semi-arid, 550mm',soil:'Red sandy, low fertility',season:'Kharif dominant',note:'Dryland farming. Largest groundnut district in AP. Drought management key.'},
    {name:'YSR Kadapa',crops:['Tomato','Groundnut','Paddy','Mango'],climate:'Semi-arid tropical',soil:'Sandy loam to black',season:'Kharif+Rabi irrigated',note:'Tomato and groundnut dominant. Brahmam Gari Mattam mango famous.'},
    {name:'Alluri Sitarama Raju',crops:['Paddy','Coffee','Cashew','Millets'],climate:'Hilly humid, 1200mm',soil:'Laterite hilly forest',season:'Kharif dominant',note:'Tribal hill — Araku Valley coffee is GI tagged, world premium product.'},
  ]
};
let currentDistrictState='odisha';
function showDistricts(state,btn){
  currentDistrictState=state;
  const data=districts[state];
  const grid=document.getElementById('districtGrid');if(!grid)return;
  const badge=state==='odisha'?'<span class="state-badge">Odisha</span>':'<span class="ap-badge">A.P.</span>';
  grid.innerHTML=data.map(d=>`<div class="district-card" onclick="showDistrictDetail('${d.name}','${state}')">
    <h4>${d.name} ${badge}</h4>
    <p style="font-size:0.71rem;color:var(--text-light);">🌤️ ${d.climate} | 🪨 ${d.soil}</p>
    <div class="district-crop-tags">${d.crops.map(c=>'<span class="tag">'+c+'</span>').join('')}</div>
  </div>`).join('');
  document.getElementById('districtDetail').style.display='none';
  document.querySelectorAll('.state-tab').forEach(t=>t.classList.remove('active'));
  if(btn)btn.classList.add('active');
 }
function showDistrictDetail(name,state){
  const d=districts[state].find(x=>x.name===name);if(!d)return;
  const det=document.getElementById('districtDetail');
  det.style.display='block';
  det.innerHTML=`<button class="result-back" onclick="document.getElementById('districtDetail').style.display='none'">← Back to Districts</button>
  <div class="result-card">
    <h3>🗺️ ${d.name} — Agricultural Profile</h3>
    <div class="info-grid">
      <div class="info-box"><h4>🌤️ Climate</h4><p>${d.climate}</p></div>
      <div class="info-box"><h4>🪨 Soil Type</h4><p>${d.soil}</p></div>
      <div class="info-box"><h4>📅 Farming Season</h4><p>${d.season}</p></div>
      <div class="info-box"><h4>🌾 Major Crops</h4><p>${d.crops.join(', ')}</p></div>
    </div>
    <div class="info-box" style="margin-top:8px;"><h4>📋 Agricultural Profile</h4><p>${d.note}</p></div>
    <div style="margin-top:9px;">${d.crops.map(c=>'<span class="tag">'+c+'</span>').join('')}</div>
    <a class="whatsapp-share" style="margin-top:10px;" href="https://wa.me/?text=${encodeURIComponent('AskKrishi: '+d.name+' – Crops: '+d.crops.join(', '))}" target="_blank">📲 Share</a>
  </div>`;
  det.scrollIntoView({behavior:'smooth'});
    }

  // ===== CROP GUIDE DATA =====
const cropGuideData=[
  {id:'paddy-g',icon:'🌾',name:'Paddy (Rice)',category:'kharif',climate:'Tropical 25-35°C, 150-200cm rain',soil:'Clay loam, pH 5.5-6.5',season:'Kharif (Jun-Nov), Rabi (Nov-Mar in South)',fertilizer:'N:P:K=120:60:60 kg/ha. Basal DAP+MOP; split urea — 25% basal+50% tillering+25% PI stage.',pests:'Blast, BLB, stem borer, BPH, sheath blight. Tricyclazole for blast. Imidacloprid for BPH.',yield:'25-35 q/ha common; 40-50 q/ha HYV irrigated; 60+ q/ha hybrid',organic:'Azospirillum+PSB seed treatment. Vermicompost 2 t/ha. Neem cake 100 kg/ha. Jeevamrutha 200L/ha.'},
  {id:'wheat-g',icon:'🌿',name:'Wheat',category:'rabi',climate:'Cool 15-25°C, cold exposure needed',soil:'Loam to clay loam, pH 6-7',season:'Rabi — sow Oct 25–Nov 15 (optimal)',fertilizer:'N:P:K=120:60:40 kg/ha. Split urea: basal+CRI (21 days)+jointing (45 days).',pests:'Yellow/brown rust, Karnal bunt, aphids, powdery mildew. Propiconazole for rust.',yield:'30-40 q/ha irrigated; 15-20 q/ha rainfed',organic:'Trichoderma seed treatment. Azospirillum inoculant. FYM 8 t/ha.'},
  {id:'maize-g',icon:'🌽',name:'Maize',category:'kharif',climate:'Warm 21-27°C, 500-750mm rain',soil:'Sandy loam to loam, pH 5.8-7',season:'Kharif (Jun-Sep) & Rabi (Nov-Feb) in South',fertilizer:'N:P:K=150:75:60 kg/ha. Heavy N feeder; apply in 3 splits. Side-dress at knee-high stage.',pests:'FAW (invasive), stem borer, turcicum blight. Chlorantraniliprole for FAW (in whorls).',yield:'40-50 q/ha hybrid; 25-30 q/ha local',organic:'FYM 10 t/ha. Azospirillum+PSB. Trichogramma for stem borer egg masses.'},
  {id:'cotton-g',icon:'🌸',name:'Cotton',category:'kharif',climate:'Warm dry 20-30°C, 500-700mm',soil:'Black cotton soil (Vertisol), pH 6-8',season:'Kharif (May-Jun sowing; Oct-Jan harvest)',fertilizer:'N:P:K=100:50:50 kg/ha. Foliar 2% DAP at flowering. Boron at boll development.',pests:'Bollworm (use Bt cotton), whitefly, BLB. Profenofos for bollworm.',yield:'15-20 q/ha seed cotton irrigated',organic:'Neem oil for whitefly. Trichogramma egg parasitoid release. NPV spray.'},
  {id:'sugarcane-g',icon:'🎋',name:'Sugarcane',category:'kharif',climate:'Tropical 20-35°C, 1500mm',soil:'Deep loam to clay loam, pH 6-7.5',season:'Sow Nov-Feb; harvest after 10-12 months',fertilizer:'N:P:K=250:100:120 kg/ha. Split N in 4 doses. Trash mulching conserves moisture.',pests:'Red rot, smut, top borer. Treat setts before planting. Metalaxyl for red rot.',yield:'800-1200 q/ha irrigated',organic:'Pressmud 10 t/ha. Trichoderma+Azospirillum. Trash mulching.'},
  {id:'groundnut-g',icon:'🥜',name:'Groundnut',category:'kharif',climate:'Warm dry 25-30°C, 500-600mm',soil:'Sandy loam, well-drained, pH 6-6.5',season:'Kharif (Jun-Jul); Rabi (Nov-Dec in AP/TN)',fertilizer:'N:P:K=20:60:30 kg/ha. Gypsum 250 kg/ha at pegging (calcium for pods). Sulphur 20 kg/ha.',pests:'Leaf spot (Cercospora), collar rot, tobacco caterpillar. Chlorothalonil for leaf spot.',yield:'15-20 q/ha pods irrigated; 8-10 q/ha rainfed',organic:'Rhizobium+PGPR seed treatment. Neem cake 200 kg/ha. FYM 5 t/ha.'},
  {id:'turmeric-g',icon:'🟡',name:'Turmeric',category:'kharif',climate:'Humid tropical 20-30°C, 1500mm',soil:'Sandy clay loam, pH 5-7.5',season:'Apr-May planting; 8-9 months (Dec-Jan harvest)',fertilizer:'N:P:K=150:60:120 kg/ha. FYM 25 t/ha essential. Neem cake 250 kg/ha.',pests:'Rhizome rot (Pythium), leaf blotch, shoot borer. Metalaxyl drench for rhizome rot.',yield:'25-30 t/ha fresh; 5-6 t/ha dry',organic:'Trichoderma+Pseudomonas rhizome treatment. Raised beds. Mulching with paddy straw.'},
  {id:'chilli-g',icon:'🌶️',name:'Chilli',category:'kharif',climate:'Warm 20-30°C, moderate rain',soil:'Sandy loam to loam, pH 6-7',season:'Kharif: Jun-Jul transplant; Rabi: Oct-Nov (AP)',fertilizer:'N:P:K=120:80:80 kg/ha. Split N in 3 doses. Foliar micronutrients at flowering-fruit set.',pests:'Anthracnose, leaf curl virus, thrips, mites, powdery mildew.',yield:'20-25 q/ha dry chilli irrigated; premium Teja variety 30 q/ha',organic:'Neem oil 5ml/L for thrips. Trichoderma for anthracnose. Bordeaux paste on stem.'},
  {id:'ginger-g',icon:'🫚',name:'Ginger',category:'kharif',climate:'Warm humid 19-28°C, 150-250cm',soil:'Sandy clay loam, rich organic matter',season:'Apr-May planting; harvest Dec-Mar (8-9 months)',fertilizer:'N:P:K=75:50:50 kg/ha. FYM 25 t/ha. Split N in 3 doses.',pests:'Soft rot (Pythium — most destructive), shoot borer, nematodes.',yield:'15-20 t/ha fresh ginger',organic:'Trichoderma+Pseudomonas slurry rhizome treatment. Raised beds mandatory.'},
  {id:'mango-g',icon:'🥭',name:'Mango',category:'horticulture',climate:'Tropical/sub-tropical 24-27°C',soil:'Deep well-drained loam, pH 5.5-7.5',season:'Flowering Dec-Feb; fruit harvest May-Jul',fertilizer:'NPK 300:100:150 g/tree/year (increase yearly). FYM 50 kg/tree. Foliar KNO3 1% at fruiting.',pests:'Mango hopper (most serious), fruit fly, powdery mildew, anthracnose.',yield:'100-200 kg/tree mature; Banginapalli AP — 150-250 kg/tree',organic:'Neem oil for hopper. Bordeaux paste trunk protection. Kaolin clay spray for fruit fly.'},
  {id:'banana-g',icon:'🍌',name:'Banana',category:'horticulture',climate:'Humid tropical 26-30°C, 2000mm',soil:'Deep rich loam, high organic matter, pH 6-7.5',season:'Year-round tropical; harvest 11-13 months after planting',fertilizer:'N:P:K=200:30:300 g/plant. High K for quality. Split in 3-4 doses. FYM 25 kg/plant.',pests:'Panama wilt (Fusarium), Sigatoka, BBTV virus, banana weevil.',yield:'20-40 t/ha Cavendish/Grand Naine; Nendran Kerala 15-25 t/ha',organic:'Trichoderma + FYM preventive soil application. Pseudomonas for Panama wilt.'},
  {id:'mustard-g',icon:'🌿',name:'Mustard',category:'rabi',climate:'Cool dry 10-25°C',soil:'Loamy to sandy loam, pH 6.5-7.5',season:'Rabi Oct-Nov sowing; Feb-Mar harvest',fertilizer:'N:P:K=80:40:40 kg/ha. Sulphur 20 kg/ha (critical for oil content). Boron 1 kg/ha.',pests:'Aphids (peak Jan-Feb), Alternaria blight, powdery mildew, Sclerotinia rot.',yield:'12-16 q/ha irrigated; 6-8 q/ha rainfed',organic:'Rhizobium inoculant. Wettable sulphur (organic-approved fungicide).'},
];
let currentCropFilter='all';
function filterCropGuide(cat,btn){
  currentCropFilter=cat;renderCropGuide(cat);
  document.querySelectorAll('#cropFilter .fv-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
function renderCropGuide(cat){
  const data=cat==='all'?cropGuideData:cropGuideData.filter(c=>c.category===cat);
  const grid=document.getElementById('cropGuideGrid');if(!grid)return;
  grid.innerHTML=data.map(c=>`<div class="fv-card" onclick="showCropDetail('${c.id}')"><div class="icon">${c.icon}</div><div class="name">${c.name}</div><span class="type-badge">${c.category}</span></div>`).join('');
  document.getElementById('cropGuideDetail').style.display='none';
    }
    function showCropDetail(id){
  const c=cropGuideData.find(x=>x.id===id);if(!c)return;
  const det=document.getElementById('cropGuideDetail');
  det.style.display='block';
  det.innerHTML=`<button class="result-back" onclick="document.getElementById('cropGuideDetail').style.display='none'">← Back</button>
  <div class="result-card"><h3>${c.icon} ${c.name} — Complete Cultivation Guide</h3>
    <div class="info-grid">
      <div class="info-box"><h4>🌤️ Climate</h4><p>${c.climate}</p></div>
      <div class="info-box"><h4>🪨 Soil</h4><p>${c.soil}</p></div>
      <div class="info-box"><h4>📅 Season</h4><p>${c.season}</p></div>
      <div class="info-box"><h4>📦 Expected Yield</h4><p>${c.yield}</p></div>
    </div>
    <div class="info-box" style="margin-top:8px;"><h4>🧪 Fertilizer Schedule</h4><p>${c.fertilizer}</p></div>
    <div class="info-box" style="margin-top:8px;"><h4>🐛 Pest & Disease Management</h4><p>${c.pests}</p></div>
    <div class="info-box" style="margin-top:8px;background:#f1f8e9;border-color:#a5d6a7;"><h4 style="color:#2e7d32;">🌿 Organic Practices</h4><p>${c.organic}</p></div>
    <a class="whatsapp-share" style="margin-top:10px;" href="https://wa.me/?text=${encodeURIComponent('AskKrishi Crop Guide: '+c.name+' – '+c.fertilizer)}" target="_blank">📲 Share Guide</a>
  </div>`;
  det.scrollIntoView({behavior:'smooth'});
    }

  // ===== FRUITS & VEG (50+ entries) =====
const fvData=[
  {id:'mango',icon:'🥭',name:'Mango',type:'fruit',climate:'Tropical/sub-tropical 24-27°C',soil:'Deep loam, pH 5.5-7.5',fertilizer:'NPK 300:100:150 g/tree; KNO3 1% at fruiting',pest:'Hopper, fruit fly, anthracnose, powdery mildew'},
  {id:'banana2',icon:'🍌',name:'Banana',type:'fruit',climate:'Humid tropical 26-30°C',soil:'Rich loam, pH 6-7.5',fertilizer:'N:P:K=200:30:300 g/plant; high K',pest:'Panama wilt, Sigatoka, BBTV, weevil'},
  {id:'papaya',icon:'🍈',name:'Papaya',type:'fruit',climate:'Tropical 22-32°C',soil:'Sandy loam, well-drained',fertilizer:'N:P:K=200:100:200 g/plant/yr',pest:'Papaya ring spot virus, mealy bug, mildew'},
  {id:'guava',icon:'🍐',name:'Guava',type:'fruit',climate:'Tropical/sub-tropical',soil:'Any well-drained, pH 4.5-8',fertilizer:'N:P:K=600:300:600 g/tree',pest:'Fruit fly, Fusarium wilt, algal leaf spot'},
  {id:'coconut',icon:'🥥',name:'Coconut',type:'fruit',climate:'Humid tropical coastal',soil:'Sandy loam, coastal alluvial',fertilizer:'N:P:K=500:320:1200 g/palm',pest:'Rhinoceros beetle, bud rot, red palm weevil'},
  {id:'jackfruit',icon:'🍈',name:'Jackfruit',type:'fruit',climate:'Humid tropical',soil:'Deep loam, good drainage',fertilizer:'FYM 50 kg + NPK 300:150:300 g',pest:'Fruit borer, pink disease, stem rot'},
  {id:'litchi',icon:'🍒',name:'Litchi',type:'fruit',climate:'Sub-tropical humid',soil:'Deep loam, slightly acidic',fertilizer:'N:P:K=600:300:400 g/tree',pest:'Litchi mite, bark-eating caterpillar'},
  {id:'pomegranate',icon:'🍎',name:'Pomegranate',type:'fruit',climate:'Semi-arid, drought tolerant',soil:'Sandy loam to loam',fertilizer:'N:P:K=500:250:250 g/plant',pest:'Bacterial blight, fruit borer, anar butterfly'},
  {id:'sapota',icon:'🟤',name:'Sapota (Chiku)',type:'fruit',climate:'Tropical humid',soil:'Deep well-drained loam',fertilizer:'FYM 25 kg + NPK 500:250:500 g',pest:'Leaf webber, flower thrips, chiku moth'},
  {id:'lemon',icon:'🍋',name:'Lemon / Lime',type:'fruit',climate:'Tropical/sub-tropical',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=600:300:600 g/tree',pest:'Citrus canker, leaf miner, fruit fly'},
  {id:'orange',icon:'🍊',name:'Orange (Nagpur)',type:'fruit',climate:'Sub-tropical',soil:'Deep loam to clay loam',fertilizer:'N:P:K=900:450:900 g/tree',pest:'Citrus psylla, canker, tristeza virus'},
  {id:'watermelon',icon:'🍉',name:'Watermelon',type:'fruit',climate:'Warm dry 25-35°C',soil:'Sandy loam, well-drained',fertilizer:'N:P:K=100:50:50 kg/ha + drip',pest:'Downy mildew, Fusarium wilt, melon fly'},
  {id:'grapes',icon:'🍇',name:'Grapes',type:'fruit',climate:'Mediterranean / semi-arid',soil:'Sandy loam, pH 6.5-7',fertilizer:'N:P:K=300:150:300 g/vine',pest:'Powdery mildew, downy mildew, mealy bug'},
  {id:'pineapple',icon:'🍍',name:'Pineapple',type:'fruit',climate:'Humid tropical 22-32°C',soil:'Sandy loam, acid pH 4.5-5.5',fertilizer:'N:P:K=300:100:250 g/plant',pest:'Mealy bug wilt, heart rot, nematodes'},
  {id:'custardapple',icon:'🍏',name:'Custard Apple',type:'fruit',climate:'Semi-arid tropical',soil:'Shallow rocky to loam',fertilizer:'NPK 400:200:400 g/tree',pest:'Mealy bug, fruit rot, scale insects'},
  {id:'tomato-v',icon:'🍅',name:'Tomato',type:'vegetable',climate:'Warm 20-27°C',soil:'Sandy loam to loam, pH 6-7',fertilizer:'N:P:K=120:80:80 kg/ha',pest:'Early blight, ToLCV, fruit borer'},
  {id:'brinjal-v',icon:'🍆',name:'Brinjal',type:'vegetable',climate:'Warm humid 25-35°C',soil:'Sandy loam to clay loam',fertilizer:'N:P:K=100:50:50 kg/ha',pest:'Shoot fruit borer, little leaf, phomopsis'},
  {id:'potato-v',icon:'🥔',name:'Potato',type:'vegetable',climate:'Cool 15-25°C',soil:'Sandy loam, pH 5.5-6.5',fertilizer:'N:P:K=120:100:150 kg/ha',pest:'Late blight, early blight, common scab'},
  {id:'onion-v',icon:'🧅',name:'Onion',type:'vegetable',climate:'Cool 13-24°C',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=100:50:100 kg/ha; S 20 kg',pest:'Purple blotch, thrips, downy mildew'},
  {id:'cabbage',icon:'🥬',name:'Cabbage',type:'vegetable',climate:'Cool 15-20°C',soil:'Loam to clay loam',fertilizer:'N:P:K=120:60:60 kg/ha; B 2 kg',pest:'DBM, club root, black rot'},
  {id:'cauliflower',icon:'🥦',name:'Cauliflower',type:'vegetable',climate:'Cool 15-20°C',soil:'Sandy loam to clay loam',fertilizer:'N:P:K=150:60:60 kg/ha; B for curd',pest:'DBM, black rot, downy mildew'},
  {id:'okra',icon:'🫑',name:'Okra (Ladies Finger)',type:'vegetable',climate:'Warm humid 25-35°C',soil:'Sandy loam to loam',fertilizer:'N:P:K=75:40:30 kg/ha',pest:'YVMV virus, shoot webber, jassid'},
  {id:'pumpkin',icon:'🎃',name:'Pumpkin',type:'vegetable',climate:'Warm 22-30°C',soil:'Sandy loam, well-drained',fertilizer:'N:P:K=80:40:40 kg/ha',pest:'Pumpkin beetle, powdery mildew'},
  {id:'cucumber',icon:'🥒',name:'Cucumber',type:'vegetable',climate:'Warm 20-30°C',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=75:50:50 kg/ha',pest:'Downy mildew, angular leaf spot'},
  {id:'bittergourd',icon:'🫑',name:'Bitter Gourd',type:'vegetable',climate:'Warm humid 24-35°C',soil:'Sandy loam to loam',fertilizer:'N:P:K=75:50:50 kg/ha',pest:'Fruit fly, powdery mildew, mosaic'},
  {id:'spinach',icon:'🥬',name:'Spinach / Palak',type:'vegetable',climate:'Cool 15-25°C',soil:'Sandy loam, high OM',fertilizer:'N:P:K=60:30:30 kg/ha',pest:'Leaf miner, downy mildew, aphids'},
  {id:'carrot',icon:'🥕',name:'Carrot',type:'vegetable',climate:'Cool 16-22°C',soil:'Sandy loam, stone-free, deep',fertilizer:'N:P:K=60:40:60 kg/ha',pest:'Carrot fly, Alternaria blight'},
  {id:'garlic-v',icon:'🧄',name:'Garlic',type:'vegetable',climate:'Cool 12-24°C',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=100:60:40 kg/ha; S 20 kg',pest:'Purple blotch, thrips, nematodes'},
  {id:'capsicum',icon:'🫑',name:'Capsicum (Bell Pepper)',type:'vegetable',climate:'Warm 20-28°C',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=150:100:150 kg/ha',pest:'Phytophthora blight, BW, thrips'},
  {id:'sweetcorn',icon:'🌽',name:'Sweet Corn',type:'vegetable',climate:'Warm 20-30°C',soil:'Sandy loam to loam',fertilizer:'N:P:K=150:75:60 kg/ha',pest:'FAW, stem borer, silk fly, smut'},
  {id:'chilli-v',icon:'🌶️',name:'Chilli',type:'spice',climate:'Warm 20-30°C',soil:'Sandy loam to loam, pH 6-7',fertilizer:'N:P:K=120:80:80 kg/ha',pest:'Anthracnose, leaf curl, thrips'},
  {id:'turmeric-v',icon:'🟡',name:'Turmeric',type:'spice',climate:'Humid tropical 20-30°C',soil:'Sandy clay loam',fertilizer:'N:P:K=150:60:120 kg/ha',pest:'Rhizome rot, leaf blotch, shoot borer'},
  {id:'ginger-v',icon:'🫚',name:'Ginger',type:'spice',climate:'Warm humid 19-28°C',soil:'Sandy clay loam + OM',fertilizer:'N:P:K=75:50:50 kg/ha',pest:'Soft rot, BW, rhizome fly'},
  {id:'coriander',icon:'🌿',name:'Coriander (Dhania)',type:'spice',climate:'Cool dry 20-30°C',soil:'Sandy loam, well-drained',fertilizer:'N:P:K=60:40:20 kg/ha',pest:'Aphids, wilt, powdery mildew'},
  {id:'fenugreek',icon:'🟢',name:'Fenugreek (Methi)',type:'spice',climate:'Cool dry, frost tolerant',soil:'Sandy loam, pH 6-7',fertilizer:'N:P:K=20:40:20 kg/ha',pest:'Powdery mildew, Cercospora, collar rot'},
  {id:'cumin',icon:'🟤',name:'Cumin (Jeera)',type:'spice',climate:'Dry cool 20-30°C',soil:'Sandy loam, pH 7-8.5',fertilizer:'N:P:K=40:20:0 kg/ha',pest:'Powdery mildew, wilt, alternaria blight'},
  {id:'blackpepper',icon:'🔵',name:'Black Pepper',type:'spice',climate:'Tropical humid, >200cm rain',soil:'Rich loamy, good drainage',fertilizer:'N:P:K=100:40:140 g/vine + FYM',pest:'Phytophthora foot rot, pollu beetle'},
  {id:'cardamom',icon:'🟢',name:'Cardamom',type:'spice',climate:'Tropical hilly, 1500-4000mm',soil:'Rich loamy forest, pH 5-6.5',fertilizer:'N:P:K=75:75:150 kg/ha',pest:'Mosaic virus, thrips, shoot borer'},
  {id:'fennel',icon:'🌿',name:'Fennel (Saunf)',type:'spice',climate:'Cool dry 20-25°C',soil:'Sandy loam to loam',fertilizer:'N:P:K=60:30:15 kg/ha',pest:'Aphids, mite, powdery mildew'},
];
let currentFVFilter='all';
function filterFV(type,btn){
  currentFVFilter=type;renderFV(type);
  document.querySelectorAll('#fvFilter .fv-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
    }
   function renderFV(type){
  const data=type==='all'?fvData:fvData.filter(c=>c.type===type);
  const grid=document.getElementById('fvGrid');if(!grid)return;
  grid.innerHTML=data.map(c=>`<div class="fv-card" onclick="showFVDetail('${c.id}')"><div class="icon">${c.icon}</div><div class="name">${c.name}</div><span class="type-badge">${c.type}</span></div>`).join('');
  const det=document.getElementById('fvDetail');if(det)det.style.display='none';
}
function showFVDetail(id){
  const c=fvData.find(x=>x.id===id);if(!c)return;
  const det=document.getElementById('fvDetail');det.style.display='block';
  det.innerHTML=`<button class="result-back" onclick="document.getElementById('fvDetail').style.display='none'">← Back</button>
  <div class="result-card"><h3>${c.icon} ${c.name} — Cultivation Guide</h3>
    <div class="info-grid">
      <div class="info-box"><h4>🌤️ Climate</h4><p>${c.climate}</p></div>
      <div class="info-box"><h4>🪨 Soil</h4><p>${c.soil}</p></div>
      <div class="info-box"><h4>🧪 Fertilizer</h4><p>${c.fertilizer}</p></div>
      <div class="info-box"><h4>🐛 Pest & Disease</h4><p>${c.pest}</p></div>
    </div>
    <div class="info-box" style="margin-top:8px;background:#fff8e1;border-color:#ffe082;"><h4 style="color:#e65100;">🌿 Organic Methods</h4><p>Vermicompost 3-4 t/ha. Neem oil 5ml/L for pest control. Bio-inoculants (Azospirillum, VAM mycorrhiza) for nutrient uptake. Mulching for moisture conservation and weed suppression.</p></div>
    <a class="whatsapp-share" style="margin-top:10px;" href="https://wa.me/?text=${encodeURIComponent('AskKrishi: '+c.name+' – '+c.fertilizer)}" target="_blank">📲 Share</a>
  </div>`;
  det.scrollIntoView({behavior:'smooth'});
    }


// ===== FERTILIZERS / INPUTS =====
let fertData = [];
let currentFertFilter = 'all';
let fertDataLoaded = false;

async function ensureFertData() {
  if (fertDataLoaded) return;
  const resp = await fetch('fertilizers.json');
  if (!resp.ok) throw new Error('Failed to load fertilizers data');
  fertData = await resp.json();
  fertDataLoaded = true;
}

function filterFert(type, btn) {
  currentFertFilter = type;
  document.querySelectorAll('#fertFilter .fv-btn').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderFert(type);
}

async function renderFert(type = 'all') {
  const grid = document.getElementById('fertGrid');
  const det = document.getElementById('fertDetail');
  if (!grid) return;

  try {
    await ensureFertData();
    const data = type === 'all' ? fertData : fertData.filter(i => i.type === type);
    if (!data.length) {
      grid.innerHTML = `<div class="result-card"><p>No input data found for this filter.</p></div>`;
      if (det) det.style.display = 'none';
      return;
    }
    grid.innerHTML = data.map(i => `
      <div class="fert-card" onclick="showFertDetail('${(i.name || '').replace(/'/g, "&#39;")}')">
        <span class="fert-tag">${i.type}</span>
        <h4>${i.name}</h4>
        <p>${i.desc}</p>
      </div>
    `).join('');
    if (det) det.style.display = 'none';
  } catch (err) {
    grid.innerHTML = `<div class="result-card"><h3>⚠️ Unable to load inputs</h3><p>Please refresh the page and try again.</p></div>`;
    if (det) det.style.display = 'none';
  }
}

function showFertDetail(name) {
  const item = fertData.find(x => x.name === name);
  const det = document.getElementById('fertDetail');
  if (!item || !det) return;
  det.style.display = 'block';
  det.innerHTML = `
    <button class="result-back" onclick="document.getElementById('fertDetail').style.display='none'">← Back</button>
    <div class="result-card">
      <h3>🧪 ${item.name}</h3>
      <span class="tag">${item.type}</span>
      <p style="margin-top:8px;">${item.desc}</p>
      <div class="info-box" style="margin-top:10px;">
        <h4>✅ Usage Note</h4>
        <p>Always follow label dose, wear protective gear, and consult local agri officer/KVK for crop-stage specific recommendations.</p>
      </div>
    </div>
  `;
  det.scrollIntoView({ behavior: 'smooth' });
}

    // ===== ORGANIC FARMING =====
const organicData=[
  {title:'Zero Budget Natural Farming (ZBNF)',tag:'AP State Policy — 700,000+ Farmers',desc:'ZBNF uses Jeevamrutha (cow dung + urine fermented), Beejamrutha (seed treatment), Mulching, and Whapasa (air-water balance). Reduces input cost 50-70%. AP government policy for all 6 million farmers.'},
  {title:'Jeevamrutha — Core ZBNF Input',tag:'Bio-stimulant',desc:'10 kg desi cow dung + 10L cow urine + 2 kg jaggery + 2 kg pulse flour + handful soil. Ferment 48 hrs. Apply 200L/acre diluted as soil drench or foliar 2x/month. Activates 300 crore soil microbes per ml.'},
  {title:'Beejamrutha — Seed Treatment',tag:'ZBNF Seed Treatment',desc:'5 kg cow dung + 5L cow urine + 50g lime + handful soil in 20L water. Soak seeds 20 min. Protects against seed-borne diseases. Activates seed germination energy. AP farmers report 15-20% better germination.'},
  {title:'Vermicomposting — Home Production',tag:'Organic Fertilizer',desc:'Red earthworms (Eisenia fetida) + food scraps + crop residue → premium compost in 45-60 days. Investment: ₹5,000-10,000 for 4x2x2 ft bed. Income: Sell vermicompost ₹4-8/kg. Key for SHG enterprises.'},
  {title:'Dashaparni Ark — Organic Pesticide',tag:'Bio-Pesticide Preparation',desc:'10 medicinal plant leaves (neem, papaya, guava etc) + cow urine + water, fermented 30 days. Dilute 3% and spray. Controls 200+ pest species. Free raw material available on most farms.'},
  {title:'Cow Urine — Multi-purpose Input',tag:'Zero Cost Input',desc:'Undiluted: soil drench for soil-borne pathogens. Diluted 1:10: foliar spray for sucking pests. Contains urea (12%), 18 minerals, hormones, antibiotics. Stimulates soil microbial activity dramatically.'},
  {title:'Green Manuring',tag:'Soil Improvement',desc:'Grow Dhaincha (Sesbania) or Sunhemp; incorporate at 45 days. Adds 60-80 kg N/ha equivalent. Improves soil structure. Essential before paddy transplanting in Odisha. Free nitrogen + soil organic matter.'},
  {title:'Mulching for Water & Weed Control',tag:'Water Management',desc:'Paddy straw / sugarcane trash 5-7 cm thick. Reduces soil temperature by 5-8°C, conserves 30-40% moisture, suppresses 80% weeds. Especially valuable for vegetables and horticulture in Odisha summer season.'},
  {title:'Pheromone Traps — Eco-Friendly Pest Monitoring',tag:'IPM Tool',desc:'Sex pheromone traps for stem borer (paddy), bollworm (cotton), FAW (maize), brinjal fruit borer. 5 traps/acre for monitoring. Replace lure every 30 days. For mass trapping: 25+/acre reduces pest population.'},
  {title:'Crop Rotation for Disease Management',tag:'Cultural Practice',desc:'Rotating breaks pest-disease cycles. Key rotations: Paddy→Wheat/Mustard; Tomato→Paddy; Groundnut→Paddy. Minimum 2-3 year gap for wilt-prone crops. Reduces chemical input need by 40%.'},
  {title:'Conservation of Beneficial Insects',tag:'Biological Control',desc:'Ladybird beetles eat aphids. Spiders control multiple pests. Trichogramma wasps parasitize caterpillar eggs. To conserve: avoid broad-spectrum insecticides, grow marigold/coriander on bunds for nectar and shelter.'},
  {title:'Soil pH Correction — Organic Way',tag:'Soil Health',desc:'Acidic soil (pH < 6) common in Odisha — apply agricultural lime (CaCO3) 500-2000 kg/ha. For alkaline soils: gypsum 500-1000 kg/ha. FYM 10 t/ha + vermicompost 2 t/ha corrects multiple deficiencies naturally.'},
];
function renderOrganic(){
  const grid=document.getElementById('organicGrid');if(!grid)return;
  grid.innerHTML=organicData.map(o=>`<div class="organic-card"><h4>🌿 ${o.title}</h4><div class="organic-tag">${o.tag}</div><p>${o.desc}</p></div>`).join('');
}

// ===== SPECIAL FARMING (Mushroom, Beekeeping, Drip, Nursery, Dairy) =====
const specialData=[
  {title:'🍄 Oyster Mushroom Farming',content:'Easiest mushroom — ideal for women SHGs and small farmers. Paddy straw (abundant in Odisha/AP) is best substrate.',steps:['Substrate: Paddy straw 1 kg (dry) per bag — completely free raw material','Sterilize straw with hot water (80°C, 30 min) or 2% lime water solution','Spawn (seed): Order from ICAR/KVK — ₹60-100/kg. Or make own with sawdust PDA','Spawn run: 15-20 days in dark cool room (25-30°C, 85-90% humidity)','Pinning to harvest: 5-7 more days. 3-4 flushes per bag over 2 months','Yield: 700-900g fresh mushroom per 1 kg dry straw (70-90% BE)'],inv:'₹30,000-50,000 for 100 bag unit',profit:'₹80,000-1,20,000/year net',link:'Contact KVK in your district for free training and spawn'},
  {title:'🐝 Honey Bee Keeping (Apiculture)',content:'Beekeeping provides honey income + improves crop pollination 20-30%. Ideal near mustard, sunflower, litchi, mango orchards.',steps:['Start: 10 boxes (Apis mellifera — Italian variety for plains and AP/Odisha)','Equipment: Box ₹2,500-3,500 + queen, frames, smoker, veil, feeder','Locate near flowering crops: mustard (Rabi), mango, litchi, sunflower','Honey extraction: 2-3 times/year — 20-30 kg/box/year production','Sell: ₹200-400/kg farm gate; ₹500-800/kg retail (branded)','Extra income: Beeswax ₹500/kg, propolis, bee pollen premium market'],inv:'₹40,000-60,000 for 10 boxes setup',profit:'₹1,00,000-2,00,000/year',link:'NABARD: 40-50% subsidy for 50+ colony project under DEDS scheme'},
  {title:'💧 Drip Irrigation — Complete Setup Guide',content:'Saves 40-60% water, increases yield 30-50%, reduces fertilizer need 25-30% via fertigation. Supported by PM-KUSUM 60-70% subsidy.',steps:['Main pipe (HDPE 75-110mm) → Sub-main → Laterals (16mm) → Emitters','Spacing: Vegetables 30-45 cm, Orchards 50-100 cm, Field crops 60 cm','Pressure: 1-1.5 kg/cm² for drip; 1.5-2.5 for micro-sprinkler','Fertigation: Dissolve soluble fertilizers (19:19:19, urea, MOP) in Venturi tank','Filter: Sand filter + screen filter mandatory — prevents dripper clogging','Monitoring: Check dripper discharge weekly; flush laterals monthly'],inv:'₹25,000-40,000/acre for vegetables',profit:'Saves ₹8,000-15,000/acre in water + fertilizer every year',link:'Apply at District Agriculture Office or PMKSY portal — 60% subsidy'},
  {title:'🏡 Plant Nursery Business',content:'Vegetable seedling nursery — highly profitable low-land business. 10-20 cents (around home) is sufficient for commercial production.',steps:['Crops: Tomato, chilli, brinjal, cabbage, cauliflower, capsicum, onion seedlings','Pro-tray (98/128 cell) nursery: 1 tray = 98-128 seedlings; cost ₹8-12/tray','Medium: Cocopeat + vermiculite 3:1 — best germination, disease-free','Temperature: 25-30°C ideal; shade net 50% in summer essential','Sell: At 25-30 days at ₹0.50-2 per seedling by variety and size','Market: Local farmers, vegetable growers, government nursery contracts'],inv:'₹50,000-1,00,000 (shade net + pro-trays + irrigation)',profit:'₹2-5 lakh/year well-managed nursery',link:'HORTNET Odisha/AP for subsidy on protected nursery infrastructure'},
  {title:'🥛 Dairy Micro-Enterprise',content:'2-3 crossbred cows (HF/Jersey cross) — milk income + dung for vermicompost + urine for organic pest control = triple income.',steps:['Choose HF×Sahiwal or Jersey×Gir — yields 15-20 L/day at peak lactation','Housing: Clean ventilated shed 40-50 sqft/animal. Concrete floor with slope.','Feed: Green fodder (napier grass) + dry fodder + 2 kg concentrate/day','Milk sale: ₹28-40/L to dairy cooperative or direct retail consumers','Dung: 10-15 kg/day → vermicompost → ₹2,000-3,000/month extra','Urine: Collect for Jeevamrutha / cow urine pesticide preparation'],inv:'₹1,20,000-1,80,000 for 2 cows + shed',profit:'₹60,000-1,20,000/year milk + ₹30,000-40,000 vermicompost',link:'NABARD DEDS: 40% subsidy for dairy entrepreneurship'},
];
function renderSpecial(){
  const grid=document.getElementById('specialGrid');if(!grid)return;
  grid.innerHTML=specialData.map(s=>`<div class="special-card">
    <h3>${s.title}</h3>
    <p>${s.content}</p>
    <ul>${s.steps.map(st=>`<li>${st}</li>`).join('')}</ul>
    <div style="margin-top:9px;">
      <span class="profit-badge">💰 Investment: ${s.inv}</span>
      <span class="profit-badge">📈 Income: ${s.profit}</span>
    </div>
    <p style="font-size:0.73rem;color:var(--green);margin-top:7px;font-weight:600;">🔗 ${s.link}</p>
  </div>`).join('');
  }

 // ===== SEED VARIETIES =====
const seedData=[
  {id:'paddy-s',crop:'paddy',icon:'🌾',name:'Paddy / Rice Varieties',vars:['Swarna (MTU-7029) — High yield, BLB resistant — most grown in Odisha',
    'Swarna Sub1 — Submergence tolerant up to 14 days — flood-prone Odisha','IR-36 — Early 105 days, BPH resistant, wide adaptability',
    'BPT-5204 (Sona Masuri) — Premium quality, AP/Telangana flagship variety',
    'Naveen — Medium duration, high yielding, Odisha state recommended',
    'Lalat — Early, drought tolerant — for upland red laterite soils of Odisha',
    'DRR Dhan 44 — Zinc enriched biofortified — nutritious variety for tribal areas',
    'CR Dhan 310 — CRRI Cuttack variety for coastal saline Odisha'],note:'Choose variety based on land type (lowland/upland), water availability and market preference.'},
  {id:'wheat-s',crop:'wheat',icon:'🌿',name:'Wheat Varieties',vars:['HD-2967 — Most widely grown, rust resistant, excellent chapati quality',
    'PBW-550 — Punjab premium, bread quality, high yield',
    'DBW-222 — New ICAR release, semi-dwarf, high yield recommendation 2024',
    'HD-3226 — Heat tolerant for late-sown areas — saves yield in delayed planting',
    'GW-322 — Gujarat/Rajasthan, tolerates saline-alkaline soils',
    'LOK-1 — Maharashtra variety, medium height, rust resistant'],note:'Timely sowing Oct 25–Nov 15 maximizes yield. Late sowing reduces output 30-40 kg/ha per day.'},
  {id:'veg-s',crop:'vegetables',icon:'🥦',name:'Vegetable Varieties',vars:['Tomato: Arka Rakshak (disease resistant), Pusa Ruby, Abhinav F1 hybrid',
    'Chilli: LCA-206 (Guntur AP), G-4 (Warangal), Teja F1 hybrid',
    'Brinjal: Arka Kiran, Pusa Anmol, Pusa Hybrid-5 (pest tolerant)',
    'Onion: Pusa Red (kharif), Bhima Kiran, Nasik Red (rabi)',
    'Potato: Kufri Jyoti, Kufri Badshah, Kufri Pushkar (heat tolerant)',
    'Capsicum: Indra F1, Bharat F1, California Wonder (bell pepper)'],note:'Hybrid vegetables give 30-50% higher yield but seeds cannot be saved — buy fresh every season.'},
  {id:'pulses-s',crop:'pulses',icon:'🫘',name:'Pulse Varieties',vars:['Pigeonpea (Arhar): Asha ICPH-2671, Maruti, UPAS-120 (early maturing)',
    'Chickpea (Gram): JG-11, KAK-2, Pusa 256 (wilt resistant)',
    'Blackgram: ADT-3, CO-6, PU-31 (MYMV resistant for AP)',
    'Greengram: Pusa Vishal, HUM-1, Samrat (summer season)',
    'Lentil: Malika, DPL-15, K-75 (rabi crop for North India)',
    'Cowpea: V-16, Pusa Komal, Lobia (warm season legume)'],note:'Inoculate all pulse seeds with Rhizobium culture before planting — saves 40-60 kg N/ha worth of urea.'},
  {id:'horticulture-s',crop:'horticulture',icon:'🌳',name:'Horticulture Varieties',vars:['Mango: Banginapalli (GI, AP), Alphonso (GI, MH), Amrapali (dwarf, prolific)',
    'Banana: Grand Naine (Cavendish), Nendran (Kerala), G9 (export quality)',
    'Tomato: Arka Rakshak, PKM-1 (processing), Lakshmi F1 hybrid',
    'Guava: Allahabad Safeda, L-49 (Lucknow), Taiwan Guava (giant)',
    'Papaya: CO-7, Red Lady F1 hybrid, Pusa Delicious (gynodioecious)',
    'Coconut: Tall (WCT), Dwarf (Malayan Yellow), Hybrid (T×D cross)'],note:'Horticulture varieties need proper rootstock, graft compatibility and post-harvest management for commercial success.'},
];
let currentSeedFilter='all';
function filterSeeds(cat,btn){
  currentSeedFilter=cat;renderSeeds(cat);
  document.querySelectorAll('#seedFilter .fv-btn').forEach(b=>b.classList.remove('active'));
  if(btn)btn.classList.add('active');
}
function renderSeeds(cat){
  const data=cat==='all'?seedData:seedData.filter(s=>s.crop===cat);
  const grid=document.getElementById('seedGrid');if(!grid)return;
  grid.innerHTML=data.map(s=>`<div class="seed-card">
    <h4>${s.icon} ${s.name}</h4>
    <div style="margin-bottom:7px;">${s.vars.map(v=>`<span class="seed-var">${v.split('—')[0].trim().split('(')[0].trim()}</span>`).join('')}</div>
    ${s.vars.map(v=>`<p style="font-size:0.73rem;color:var(--text-light);margin-bottom:3px;padding-bottom:3px;border-bottom:1px dashed var(--border);">▸ ${v}</p>`).join('')}
    <div style="margin-top:7px;background:var(--green-pale);border-radius:10px;padding:7px;font-size:0.73rem;color:var(--text-light);">💡 ${s.note}</div>
  </div>`).join('');
    }

  // ===== WOMEN IN AGRICULTURE =====
const womenCategories=[
  {title:'🌸 Flower Gardening Business',desc:'Floriculture — high income, low land, sells to temple/wedding/export. One of the best women agri enterprises in AP & Odisha.',items:['Marigold — easiest; ₹30-60/kg; high temple/wedding demand year-round','Rose — 3-4 times/year harvest; ₹80-200/kg; protected cultivation premium','Jasmine (Mogra) — daily harvest; ₹200-800/kg in city markets','Chrysanthemum — for garlands, bouquets, festive export','Tube Rose — export quality; excellent price in AP flower markets','Gerbera — polyhouse floriculture; hotel/event markets price'],income:'₹2-5 lakh/year from 0.5 acre'},
  {title:'🥬 Kitchen Garden Management',desc:'10-20 cent plot near home provides food security + extra income. Zero investment except seeds and effort.',items:['Tomato, brinjal, okra — daily vegetables; zero purchase cost for family','Spinach, methi, curry leaf — always sellable to neighbors','Bitter gourd, ridge gourd on trellis — vertical space utilization','Chilli plants — perennial; daily picking for years','Drumstick (Moringa) — medicinal, high market value','Microgreens & sprouts — no land; sell to restaurants/hotels ₹200-500/kg'],income:'₹500-2,000/month savings + ₹1,000-3,000 income'},
  {title:'🫙 Home Food Processing',desc:'Value addition to farm produce — pickles, jams, powders, chips. SHG + online sales via WhatsApp/Amazon.',items:['Mango pickle (Avakaya / Ambula) — AP & Odisha specialty; ₹100-200/kg','Tamarind paste & concentrate — export quality product from AP','Tomato ketchup & sauce — homemade chemical-free premium product','Dried chilli powder — ₹150-300/kg processed vs ₹50/kg raw','Turmeric & ginger powder — Kandhamal/Koraput GI products','Banana chips & jackfruit chips — year-round production possible'],income:'₹3-8 lakh/year for SHG unit of 10 women'},
  {title:'🏪 Small Agri Business Ideas',desc:'Micro-enterprises supported by NABARD, ORMAS, KVK & SHG linkage.',items:['Mushroom farming (Oyster) — ₹50,000 investment → ₹2 lakh/yr net income','Beekeeping (honey) — 10 bee boxes → ₹1-2 lakh/yr + NABARD subsidy','Plant nursery — vegetable seedlings; ₹2-5 lakh/yr potential','Vermicompost unit — sell ₹4-8/kg to farmers in village','Agarbatti (incense sticks) making — KVIC support, SHG activity','Silk rearing (Sericulture) — Odisha Silk → state-supported with buyback'],income:'₹1-5 lakh/year depending on scale and management'},
  {title:'🌾 SHG & Government Support',desc:'Mission Shakti (Odisha) + DWCRA (AP) provide credit, training and market linkage.',items:['Mission Shakti Odisha: 70 lakh+ women in 6 lakh SHGs statewide','DWCRA / AP SERP: Women beneficiaries of YSR Rythu Bharosa scheme','NABARD SHG linkage: ₹1-5 lakh loans at 7-9% for women groups','ORMAS Odisha: Market for organic products from tribal women farmers','KVK training: Free farm + food processing training for SHG members','PM Vishwakarma / Mudra Loan: ₹50,000-10 lakh for small enterprise'],income:'Empowerment + credit access + certified market linkage'},
];
function renderWomen(){
  const grid=document.getElementById('womenGrid');if(!grid)return;
  grid.innerHTML=womenCategories.map(cat=>`<div class="women-card">
    <div class="women-icon">${cat.title.split(' ')[0]}</div>
    <div class="women-title">${cat.title}</div>
    <div class="women-sub">${cat.desc}</div>
    <ul class="women-items">${cat.items.map(i=>`<li>${i}</li>`).join('')}</ul>
    <div class="income-badge">💰 Potential: ${cat.income}</div>
  </div>`).join('');
}

// ===== STUDENT NOTES =====
const notesData={
  agronomy:[
    {title:'Definition & Scope of Agronomy',content:'Agronomy is the science of producing and using plants for food, fuel, fiber, and land reclamation. It integrates plant physiology, soil science, ecology, crop management, and meteorology.',points:['Crop production = Genetic potential × Environment × Management (G × E × M)','Key factors: Tillage, water management, weed control, fertilization, cropping systems','Agronomic practices aim to maximize economic yield with minimum environmental impact','Agronomy vs. Horticulture: Agronomy covers field crops (cereals, oilseeds, fibers); Horticulture covers fruits, vegetables, flowers']},
    {title:'Cropping Systems & Classification',content:'Cropping systems define how crops are arranged in space and time. Key types: monoculture, mixed cropping, intercropping, relay cropping, crop rotation.',points:['Mixed cropping: Two crops mixed without defined row arrangement — e.g., Sorghum + Cowpea','Intercropping: Defined rows simultaneously — e.g., Maize:Cowpea 2:1; competition reduced','Crop rotation: Different crops in sequence — breaks pest/disease cycles, maintains fertility','Cropping intensity: (Total cropped area / Net sown area) × 100 — India average ~140%','Multiple cropping: 2+ crops in same year same area — Odisha coastal 2-3 crops/year']},
    {title:'Irrigation Methods & Water Use Efficiency',content:'Water is the most critical input. Drip most efficient (90-95%); flood least efficient (40-50%). Critical irrigation stages determine yield.',points:['Flood (furrow) irrigation: Cereals, cotton, sugarcane — low cost, 40-50% efficiency','Sprinkler: Wheat, groundnut, vegetables — 65-75% efficiency, prevents erosion','Drip: Horticulture, cotton — 90-95% efficiency; enables fertigation (fertilizer through water)','Critical stages: Paddy — tillering + flowering; Wheat — CRI + jointing + heading + milk filling','Consumptive use: Total water used by crop including transpiration and soil evaporation']},
    {title:'Weed Science & Management',content:'Weeds cause 30-40% yield loss if uncontrolled. Critical Period of Crop-Weed Competition (CPWC): first 3-4 weeks after planting when intervention saves maximum yield.',points:['Parasitic weeds: Striga (witchweed) in sorghum, maize; Orobanche in legumes — serious threat','Aquatic weeds: Echinochloa (Barnyard grass) in paddy — most problematic sedge weed','Pre-emergence herbicides: Apply before weed germination — e.g., Butachlor in paddy','Post-emergence: After weeds emerge — Bispyribac Sodium in paddy; 2,4-D in wheat','IWM: Cultural + mechanical + chemical + biological — most cost-effective approach']},
  ],
  pathology:[
    {title:'Classification of Plant Diseases',content:'Plant diseases classified by causal organism. Fungal most common (80%), followed by bacterial, viral, phytoplasmal, and nematodal. Abiotic disorders also cause significant losses.',points:['Obligate parasites: Cannot survive without living host — rust, powdery mildew, downy mildew','Facultative saprophytes: Can grow on dead matter — Fusarium, Alternaria, Rhizoctonia','Disease Triangle: Host (susceptible) + Pathogen (virulent) + Environment (favorable) = Disease','Koch\'s Postulates: 4 steps — Isolate → Culture → Inoculate → Re-isolate and identify','Epidemiology: Study of disease development, spread and management at population level']},
    {title:'Paddy Blast — Most Destructive Disease',content:'Blast (Magnaporthe oryzae) most important rice disease worldwide. Two critical phases: Leaf blast (vegetative) and Neck/Panicle blast (reproductive). 100% loss possible in neck blast.',points:['Symptoms: Diamond-shaped grey lesions with brown border on leaves; "eye" shape','Neck blast: Brown lesion at panicle base — grain fails to fill, white ear, "false smut" confusion','Favorable: Cool nights (25°C), humid, dense crop, excess nitrogen application','Management: Tricyclazole 75 WP @ 6g/15L; Propiconazole alternative; resistant varieties','Resistant: MTU-7029 (Swarna), Swarna Sub1, CR Dhan 310, Naveen']},
    {title:'Important Disease Symptoms — Exam Terminology',content:'Key diagnostic terms for disease identification. Each term describes specific visible symptom pattern.',points:['Necrosis: Death of tissue — brown, black, scorching; most common symptom type','Chlorosis: Yellowing due to chlorophyll degradation — N deficiency vs. viral cause','Wilt: Loss of turgor pressure — vascular (Fusarium/Ralstonia) vs non-vascular cause','Blight: Rapid browning/killing of large leaf/stem area — bacterial or fungal','Mosaic: Irregular dark-light green/yellow pattern on leaves — always viral cause','Canker: Dead sunken area on woody stem/bark — citrus canker (Xanthomonas)','Damping off: Pre-emergence (seed rot) or post-emergence (seedling collapse) — Pythium']},
    {title:'Fungicide Classes & Resistance Management',content:'Fungicides classified by mobility in plant, chemical group, and mode of action (MOA). Resistance management requires rotating fungicide groups.',points:['Contact/Protectant: Mancozeb, Copper oxychloride, Chlorothalonil — preventive only','Systemic/Curative: Propiconazole, Tebuconazole, Carbendazim — move inside plant tissue','Specific action: Tricyclazole (blast only), Metalaxyl (water moulds Phytophthora only)','FRAC code: Fungicide Resistance Action Committee MOA classification — use for rotation','Resistance: Never use same FRAC group repeatedly; rotate contact + systemic alternately']},
  ],
  entomology:[
    {title:'Insect Classification for Agriculture',content:'Class Insecta, Phylum Arthropoda. 1 million+ species. Agricultural pests cause 30-35% crop losses. Key pest orders in agriculture.',points:['Lepidoptera: Moths/butterflies — caterpillar larvae cause most damage (stem borer, DBM, FAW)','Coleoptera: Beetles — larvae and adults feed (groundnut beetle, paddy hispa, boll weevil)','Hemiptera: True bugs — sucking pests (BPH, whitefly, aphids, mealybug, scale insects)','Diptera: Flies — stem fly, fruit fly, paddy gall midge, agromyzid leaf miners','Thysanoptera: Thrips — rasping-sucking; virus vectors in chilli, onion, cotton','Orthoptera: Locusts, grasshoppers, crickets — periodic outbreak damage']},
    {title:'Fall Armyworm (FAW) — Invasive Pest',content:'Spodoptera frugiperda — reached India in 2018 from Africa/Americas. Most important invasive insect threat to maize. Rapid spread, insecticide resistance evolving.',points:['Identification: Inverted Y on head capsule; 4 dark spots in square on 8th abdominal segment','Damage: Ragged holes in whorls; frass in whorls; tunneling into cobs; massive defoliation','Economic Threshold: 5% damaged plants OR 1 larva/plant in whorls — treat immediately','Management: Chlorantraniliprole 18.5 SC @ 0.3ml/L directly into whorls; early morning','Biological control: Trichogramma chilonis egg parasitoid; SNPV virus spray 250 LE/ha']},
    {title:'Brown Plant Hopper (BPH) — Rice Enemy #1',content:'Nilaparvata lugens — most destructive rice pest in Asia. Causes hopper burn (circular patches dying rapidly). Resurgence after broad-spectrum insecticide use.',points:['Identification: Brown coloured, 2-4mm, lives at base of plant in water; produces honeydew','Damage: Hopperburn — circular patches die suddenly; entire field can die in 2-3 days','Resurgence: Killing natural enemies (spiders, predators) with broad-spectrum insecticides causes BPH explosion','Management: Drain field 3 days; spray Imidacloprid 17.8 SL @ 0.3ml/L or Buprofezin 25 SC','Resistant varieties: Ratna, Jaya, PTB-33 carry BPH resistance genes']},
    {title:'Integrated Pest Management (IPM) Principles',content:'IPM uses multiple compatible strategies to reduce pest populations below economic threshold with minimum environmental impact. Government of India and FAO standard approach.',points:['Cultural control: Resistant varieties, adjusted sowing date, crop rotation, field sanitation','Biological control: Predators (ladybird, lacewing), parasitoids (Trichogramma), Bt spray','Mechanical: Yellow/blue sticky traps, pheromone traps, light traps, mechanical collection','Chemical: Last resort — selective, short PHI pesticides at economic threshold only','Monitoring: Regular field scouting + Economic Threshold Level (ETL) decision making']},
  ],
  soil:[
    {title:'Soil Formation & Indian Soil Types',content:'Soil forms from parent material through physical, chemical and biological weathering. Takes 200-1000 years to form 1 cm of topsoil. India has 8 major soil types by ICAR.',points:['Alluvial soils: Most fertile — Ganga-Brahmaputra plain; coastal deltas of Odisha/AP; best for paddy','Black cotton (Vertisols): Self-ploughing; moisture retentive; Deccan plateau, Kurnool/Guntur AP','Red laterite soils: 60% Odisha; Jharkhand, WB; acidic, low fertility, high leaching','Laterite: Odisha hills; low N, P, K; good drainage; cashew, mango, rubber suited','Forest soils: Koraput, Kandhamal; rich organic matter; tribal farming area; pH 4.5-5.5']},
    {title:'Soil pH & Nutrient Availability',content:'Soil pH (1-14 scale) critically affects nutrient availability to plants. Most crops optimum pH 6-7. Odisha soils commonly acidic (pH 5-6.5). Correction is essential.',points:['pH < 5.5: Aluminum/manganese toxicity; phosphorus fixation — unavailable to plants','pH 6-7: Optimal — all 17 nutrients maximally available to crop root system','pH > 8.0: Iron, zinc, manganese deficiency; calcareous soil — common in arid northwest India','Liming: Agricultural lime (CaCO3) raises pH — apply 500-2000 kg/ha for Odisha acid soils','Gypsum (CaSO4): Improves sodic/alkaline soils; provides Ca + S without raising pH further']},
    {title:'Essential Plant Nutrients — Deficiency Diagnosis',content:'Plants require 17 essential nutrients. Mobile nutrients show deficiency on older leaves first; immobile nutrients on younger leaves. Critical for field diagnosis.',points:['N deficiency: Uniform yellowing old leaves upward; thin pale plant; most common globally','P deficiency: Purple-red color stems/leaves (anthocyanin accumulation); delayed maturity','K deficiency: Marginal leaf scorch from tip down — "tip burn"; weak stems; poor grain fill','Zn deficiency: Khaira in paddy (brown spots, stunting); white bud in maize; khairain in wheat','Fe deficiency: Interveinal chlorosis young leaves — yellow between green veins (high pH soils)','Ca deficiency: Tip burn in cabbage, blossom end rot tomato, blackheart celery']},
  ],
  horticulture:[
    {title:'Scope & Importance of Horticulture',content:'India: World\'s 2nd largest fruits & vegetables producer. Horticulture = 14% cultivated area → 33% agricultural GDP. High employment (450 person-days/ha vs 150 in cereals).',points:['Fruits: Mango, Banana, Coconut, Citrus, Guava — India top 5 fruit crops','Vegetables: Onion, Potato, Tomato, Brinjal, Okra — major vegetable crops','AP horticulture: Mango Banginapalli (GI), Chilli Guntur (GI), Banana, Grapes world-class','Odisha horticulture: Pineapple, Cashew (Paralakhemundi GI), Coconut, Kandhamal Turmeric (GI)','Export: Mango, pomegranate, grapes, banana, onion major foreign exchange earners']},
    {title:'Vegetative Propagation Methods',content:'Asexual propagation maintains genetic identity of superior mother plant. Essential for commercial horticulture where uniformity and known characteristics are required.',points:['Hardwood cutting: Guava, grapes, rose, fig — wood from mature branches','Softwood cutting: Chrysanthemum, carnation — young actively growing shoots','T-budding: Citrus, rose, mango — most common budding method; stock + scion','Veneer grafting: Mango in India — July-August; high success rate','Air layering: Guava, mango, litchi — selected branch; high success; no special skill needed','Division: Banana suckers, turmeric rhizomes, ginger rhizome sets — vegetative splitting']},
    {title:'Post-Harvest Management & Value Addition',content:'Post-harvest losses India: 25-30% fruits/vegetables = ₹90,000 crore annually. Cold chain investment and value addition are key national priorities.',points:['Pre-cooling: Remove field heat within 2 hours of harvest — extends shelf life 3-5x','Cold storage: 0-5°C most temperate fruits; 8-13°C tropical fruits (banana chilling injury <12°C)','Maturity indices: Refractometer for sugar (grapes, mango); color change (banana, tomato)','Waxing: Reduces moisture loss 30-40% for citrus, mango, apple — extends shelf life','Value addition: Pulp, jam, ketchup, pickles, dried products — converts surplus to ₹₹₹']},
  ],
  genetics:[
    {title:'Plant Breeding Methods',content:'Plant breeding improves varieties for higher yield, quality, disease resistance. Methods depend on pollination type (self/cross pollinated).',points:['Pure line selection: Self-pollinated crops (wheat, rice, soybean) — isolate superior pure lines','Mass selection: Heterogeneous population → select superior phenotypes each generation','Hybridization: Cross two parents → F1 hybrid with heterosis (hybrid vigor) 20-50% yield gain','Mutation breeding: X-ray/gamma rays/chemical mutagenesis → novel traits not in existing gene pool','Molecular breeding: Marker-assisted selection (MAS) — selects genes without growing full crop']},
    {title:'Hybrid Seed Production',content:'Hybrid seeds produced by controlled crossing of two inbred lines. F1 shows heterosis. Farmer cannot save seeds — must buy fresh every season.',points:['Three-line system in rice: Male sterile A × Restorer R → Hybrid (maintained by B line)','CMS: Cytoplasmic Male Sterility — used in rice, sorghum, sunflower, cotton hybrid seed production','OPV (Open Pollinated Variety): Can save seeds; lower yield but cheaper; e.g., Swarna paddy','Hybrid advantage: 20-50% higher yield; better uniformity and quality; disease resistance','NBPGR: National Bureau of Plant Genetic Resources — conserves 4.5 lakh crop variety accessions']},
  ],
  economics:[
    {title:'Farm Economics — Basic Concepts',content:'Farm economics applies economic principles to maximize profit from limited farm resources. Key to decision-making for crop selection, input use, market timing.',points:['Total cost: Fixed cost (land, machinery depreciation) + Variable cost (seeds, fertilizer, labor)','Break-even price: Minimum price to cover all costs — basis for MSP demand justification','Benefit-Cost Ratio (BCR): Total benefits / Total costs — BCR > 1 means profitable enterprise','Net Return = Gross Return – Total Cost of Cultivation (inclusive all inputs + family labor)','Opportunity cost: Return from best alternative use — helps in crop selection decision']},
    {title:'MSP (Minimum Support Price) 2025-26',content:'MSP is government guaranteed floor price. Announced before sowing season for 23 crops. Implemented by NAFED, FCI, State Procurement agencies through mandis.',points:['MSP Kharif 2025-26: Paddy ₹2,183 | Maize ₹2,225 | Soybean ₹4,892 | Groundnut ₹6,783/qtl','MSP Rabi 2025-26: Wheat ₹2,275 | Mustard ₹5,950 | Chickpea ₹5,650 | Lentil ₹6,700/qtl','CACP: Commission for Agricultural Costs and Prices recommends MSP to Government of India','Procurement: NAFED procures oilseeds/pulses; FCI procures wheat and rice at MSP','Price deficiency payment: Madhya Pradesh\'s Bhavantar scheme — pays if market price < MSP']},
    {title:'Agricultural Marketing & Trade',content:'Efficient agricultural marketing ensures farmers get better price and reduces consumer cost. Marketing channels from farm to consumer involve multiple layers.',points:['APMC (Agricultural Produce Market Committee): Regulated mandi system — 7,000+ mandis India','eNAM: Electronic National Agriculture Market — online transparent price discovery + payment','FPO (Farmer Producer Organizations): Collective marketing — better bargaining power for small farmers','Minimum Support Price: Price floor — government procurement at or above MSP if market falls below','Value chain: Farm → Collection center → Processing → Wholesaler → Retailer → Consumer']},
  ],
};
function showSubject(subject,btn){
  const data=notesData[subject];if(!data)return;
  const cont=document.getElementById('notesContent');
  cont.innerHTML=data.map(note=>`<div class="notes-card">
    <h3>📖 ${note.title}</h3>
    <p>${note.content}</p>
    <h4>📌 Key Points for Exam:</h4>
    <ul>${note.points.map(p=>`<li>${p}</li>`).join('')}</ul>
  </div>`).join('');
  document.querySelectorAll('.subject-tab').forEach(t=>t.classList.remove('active'));
  if(btn)btn.classList.add('active');
}

// ===== FARMING CALENDAR =====
const calendarData=[
  {month:'January',season:'rabi',label:'❄️ Rabi Peak',items:['Wheat: 2nd irrigation at jointing (45 days)','Potato: earthing up; spray Mancozeb for late blight every 7 days','Rabi vegetables: harvest cauliflower, carrot, radish, spinach','Mustard: aphid monitoring — spray Imidacloprid if >25 aphids/shoot','Sunflower: sowing in South India for March harvest']},
  {ifbtn:'February',season:'rabi',label:'❄️ Rabi Harvest Prep',items:['Wheat: flag leaf stage — watch for yellow rust urgently','Mango: flower protection from hoppers (spray Imidacloprid)','Sugarcane: ratoon management, nitrogen top-dress','Summer vegetable nursery: tomato, chilli, brinjal raising','Rabi pulses: pod fill stage — no irrigation stress allowed']},
  {month:'March',season:'zaid',label:'☀️ Zaid Beginning',items:['Turmeric & ginger: land preparation for April planting','Summer vegetables: cucumber, ridge gourd, bitter gourd sowing','Wheat harvest begins North India — combine harvesting season','Kharif planning: seed procurement, soil test samples','Paddy: long-duration nursery in coastal AP begins']},
  {month:'April',season:'zaid',label:'☀️ Zaid Active',items:['Turmeric & ginger: planting time — Beejamrutha treated rhizomes','Paddy nursery: upland varieties in Odisha (Apr 15+)','Mango harvest begins in AP (Banginapalli, Totapuri varieties)','Watermelon: summer peak harvest and marketing','Drip irrigation: install before summer vegetable planting']},
  {month:'May',season:'zaid',label:'☀️ Pre-Kharif',items:['Paddy nursery: main sowing across Odisha (May 15 – June 15)','Land preparation: deep summer plowing to kill soil pests and pathogens','Mango harvest peak (Alphonso Maharashtra; Dashehari UP)','Groundnut: kharif sowing starts in AP (Chittoor, Kurnool, Anantapur)','Summer vegetables: okra, cowpea; harvest ridge gourd, cucumber']},
  {month:'June',season:'kharif',label:'🌧️ Kharif Start',items:['Paddy: transplanting 25-30 days old seedlings — main Kharif season','Soybean, maize: sow with first reliable monsoon rain','Cotton: sowing in Guntur, Kurnool, Prakasam AP','Green manure (Dhaincha): sow before paddy transplanting','Chilli, tomato: nursery raising for July-August transplant']},
  {month:'July',season:'kharif',label:'🌧️ Kharif Peak',items:['Paddy: tillering — top-dress 50% nitrogen (urea) urgently','Paddy blast monitoring: humid cool nights = high risk; spray Tricyclazole','Maize: knee-high stage — side-dress urea; FAW scouting in whorls','Chilli & tomato AP: transplanting from June nursery','Cotton: square formation — start bollworm monitoring + pheromone traps']},
  {month:'August',season:'kharif',label:'🌧️ Kharif Management',items:['Paddy: panicle initiation — critical irrigation, do not allow drought stress','Neck blast protection: spray Tricyclazole proactively if weather humid','Maize: tasseling & silking stage — FAW peak damage period; treat whorls','Soybean: pod development — watch for pod borer and aphids','Ginger & turmeric: earthing up and mulching if not done']},
  {month:'September',season:'kharif',label:'🌧️ Kharif Harvest',items:['Early paddy (115-120 days): harvest begins — thresh at 20% moisture','Maize: harvest in North India (Kharif crop) — dry to 14%','Soybean: harvest when 80% pods brown, leaves shed','Kharif groundnut: pod maturity test — check sample plants','Rabi land preparation: deep plowing immediately after paddy harvest']},
  {month:'October',season:'rabi',label:'❄️ Rabi Begin',items:['Rabi paddy: transplanting in Odisha/AP coastal areas (Oct 15+)','Wheat sowing: North India — Oct 25 to Nov 15 window is optimal','Potato: sowing in UP, WB (Agra varieties; Oct 15+ for main crop)','Mustard: sowing Oct-Nov in Rajasthan, Haryana, MP','Rabi vegetable transplanting: tomato, cabbage, cauliflower, onion']},
  {month:'November',season:'rabi',label:'❄️ Rabi Active',items:['Wheat: crown root irrigation CRI at 21 days — most critical irrigation','Rabi paddy: active management in Odisha/AP coastal belt','Chilli: Rabi crop transplanting in Guntur AP — major season','Ginger & turmeric: harvest timing (8-9 months from April planting)','Onion: nursery raising for rabi transplant (Nov nursery → Jan transplant)']},
  {month:'December',season:'rabi',label:'❄️ Rabi Growth',items:['Wheat: 2nd irrigation at tillering (45 days); yellow rust scouting','Late paddy harvest in coastal Odisha (Rabi paddy Dec-Jan)','Ginger & turmeric commercial harvest — market timing is key','Mango: stop irrigation Nov-Dec to induce flowering (stress trigger)','Rabi harvest: carrot, radish, spinach, methi, early cabbage']},
];
function renderCalendar(){
  const grid=document.getElementById('calendarGrid');if(!grid)return;
  grid.innerHTML=calendarData.map(m=>`<div class="cal-card">
    <div class="cal-month">${m.month} <span class="cal-season ${m.season}">${m.label}</span></div>
    ${m.items.map(i=>`<div class="cal-item">${i}</div>`).join('')}
  </div>`).join('');
    }

 // ===== GLOSSARY DATA (100+ terms) =====
const glossaryTerms=[
  {term:'Agronomy',def:'Science and practice of crop production and field management — integrates soil, climate, genetics, and management.'},
  {term:'Allelopathy',def:'Release of chemicals by one plant that inhibits growth of another — e.g., sorghum inhibits weeds; used in weed management.'},
  {term:'Apiculture',def:'Science of beekeeping for honey, wax, and crop pollination. Apis mellifera (European honeybee) most commercial species.'},
  {term:'Aquaculture',def:'Farming of fish, prawns, shrimp, and other aquatic organisms in controlled water environments. AP is India\'s largest aquaculture state.'},
  {term:'Azospirillum',def:'Free-living nitrogen-fixing bacteria applied as bio-fertilizer. Fixes 20-25 kg N/ha for cereal crops. Applied as seed treatment or soil drench.'},
  {term:'Basal dose',def:'Fertilizer applied at time of sowing/planting before or at time of transplanting. Usually all P, K and part of N.'},
  {term:'Bio-fertilizer',def:'Living microorganisms that when applied to seeds, soil, or plant surface colonize the rhizosphere and promote growth. Examples: Rhizobium, Azospirillum, PSB.'},
  {term:'Blast disease',def:'Most destructive fungal disease of rice worldwide, caused by Magnaporthe oryzae. Two types: Leaf blast and neck/panicle blast.'},
  {term:'Bt cotton',def:'Genetically modified cotton variety expressing Bacillus thuringiensis toxin that kills bollworm caterpillars. Adopted by 90%+ of cotton farmers in India.'},
  {term:'CRI stage',def:'Crown Root Initiation stage in wheat — occurs at 20-25 days after sowing. Most critical irrigation stage; determines final tiller number and yield.'},
  {term:'Critical period',def:'Period of crop development when yield is most sensitive to stress (water, nutrient, weed competition). Management during this period gives maximum benefit.'},
  {term:'Crop rotation',def:'Growing different crops in sequence on the same land. Breaks pest/disease cycles, improves soil fertility, reduces weed pressure.'},
  {term:'Drip irrigation',def:'Micro-irrigation delivering water directly to root zone through emitters. 90-95% water use efficiency. Enables fertigation.'},
  {term:'DAP',def:'Di-Ammonium Phosphate — 18% N + 46% P₂O₅. Most widely used P fertilizer in India. Applied as basal dose before sowing.'},
  {term:'EIL',def:'Economic Injury Level — pest density at which crop damage equals cost of control. Basis for pesticide spray decision — do not spray below EIL.'},
  {term:'ETL',def:'Economic Threshold Level — pest density at which control action should be taken to prevent reaching EIL. Slightly below EIL.'},
  {term:'Fertigation',def:'Application of fertilizers through irrigation water (drip/sprinkler system). 30-50% more efficient than soil application.'},
  {term:'FYM',def:'Farm Yard Manure — mixture of cattle dung, urine, and plant residue. Contains NPK 0.5:0.25:0.5%. Improves soil organic matter.'},
  {term:'GI tag',def:'Geographical Indication tag — certifies unique product from specific region. Kandhamal Turmeric, Guntur Chilli, Banginapalli Mango have GI tags.'},
  {term:'Grafting',def:'Joining a shoot (scion) of desired variety to a rooted stem (rootstock) of another plant. Used for mango, citrus, tomato, grape propagation.'},
  {term:'Hopper burn',def:'Sudden circular patches of wilted rice plants caused by Brown Plant Hopper (BPH) feeding at stem base. Can destroy entire field rapidly.'},
  {term:'Hybrid vigor',def:'Heterosis — superior performance of F1 hybrid over both parents in yield, growth, and stress tolerance. 20-50% yield advantage over OPV.'},
  {term:'HYV',def:'High Yielding Variety — improved crop varieties developed through plant breeding. E.g., IR-8 "miracle rice"; HD-2967 wheat.'},
  {term:'IPM',def:'Integrated Pest Management — combining cultural, biological, mechanical, and chemical methods to manage pests below economic threshold.'},
  {term:'Intercropping',def:'Growing two or more crops simultaneously on the same piece of land in a defined spatial arrangement. Increases land use efficiency (LER > 1).'},
  {term:'Jeevamrutha',def:'ZBNF bio-stimulant: cow dung + cow urine + jaggery + pulse flour fermented 48 hrs. Applied 200L/acre. Activates soil microbes.'},
  {term:'Kharif season',def:'Summer crop season in India — sown at monsoon onset (June-July), harvested after monsoon ends (Oct-Nov). Major crops: paddy, maize, soybean, cotton.'},
  {term:'KVK',def:'Krishi Vigyan Kendra — Farm Science Centre established by ICAR for technology demonstration, training and consultation. One per district in India.'},
  {term:'Land Equivalent Ratio (LER)',def:'Total land needed under monoculture to produce same yield as intercropping. LER > 1.0 means intercropping is more efficient.'},
  {term:'Lodging',def:'Falling over of cereal crops due to weak stems — caused by excess nitrogen, waterlogging, wind. Reduces harvest efficiency and yield.'},
  {term:'Meloidogyne',def:'Root-knot nematode genus — forms galls on roots of tomato, brinjal, banana. Most economically important nematode pest in tropical horticulture.'},
  {term:'MSP',def:'Minimum Support Price — government guaranteed floor price for 23 crops. Announced before each season by Cabinet Committee on Economic Affairs.'},
  {term:'Mulching',def:'Covering soil with organic (straw, leaves) or plastic material. Conserves moisture, regulates temperature, suppresses weeds, improves yield.'},
  {term:'Mycorrhiza (VAM)',def:'Vesicular-Arbuscular Mycorrhiza — soil fungi that extend plant root system. Improves phosphorus uptake by 30-50%. Reduces P fertilizer need.'},
  {term:'Necrosis',def:'Death of plant tissue resulting in discoloration (brown, black, tan). Most common visible symptom of both fungal diseases and nutrient deficiency.'},
  {term:'OPV',def:'Open Pollinated Variety — traditional or improved variety where farmers can save seeds for next season. Lower yield than hybrid but lower seed cost.'},
  {term:'Panicle initiation',def:'Stage in paddy when rice plant shifts from vegetative to reproductive growth. Critical for blast management and the 3rd urea application timing.'},
  {term:'PHI',def:'Pre-Harvest Interval — minimum days between last pesticide application and harvest. Critical for food safety. E.g., Imidacloprid PHI for vegetables = 7-14 days.'},
  {term:'Phytoplasma',def:'Insect-transmitted prokaryote (no cell wall) causing little leaf disease of brinjal, grassy shoot of sugarcane. No effective chemical control.'},
  {term:'PSB',def:'Phosphate Solubilizing Bacteria — Bacillus, Pseudomonas species that solubilize fixed phosphorus in soil. Applied as bio-fertilizer, reduces P need by 25%.'},
  {term:'Rabi season',def:'Cool season winter crop — sown Nov-Dec, harvested Feb-Apr. Major crops: wheat, mustard, chickpea, potato, onion. Relies on stored soil moisture.'},
  {term:'Ratoon',def:'Crop regrowth from stubble after first harvest. Common in sugarcane, banana. Ratoon crop requires less input; ready earlier than planted crop.'},
  {term:'Rhizobium',def:'Nitrogen-fixing bacteria in root nodules of legumes. Fixes 50-200 kg N/ha. Seed treatment with Rhizobium culture saves ₹2,000-4,000/ha in urea cost.'},
  {term:'Sericulture',def:'Rearing of silkworms for raw silk production. Odisha produces mulberry and tasar (vanya) silk. Supported by state silk development programs.'},
  {term:'SHG',def:'Self-Help Group — informal group of 10-20 rural women for savings, credit and livelihoods. NABARD SHG-Bank Linkage is world\'s largest microfinance program.'},
  {term:'Soil Health Card',def:'Government-issued card after free soil testing showing nutrient status (N, P, K, S, Zn, Fe, Mn, Cu, B, pH, EC, OC) with crop-wise fertilizer recommendations.'},
  {term:'Submergence tolerance',def:'Ability of paddy varieties to survive flooding. Swarna Sub1 survives 14 days submerged due to Sub1 gene — critical for flood-prone Odisha delta areas.'},
  {term:'Tillage',def:'Mechanical soil manipulation for seedbed preparation. Deep tillage: subsoil tillage once every 3 years to break hardpan. Conservation tillage reduces erosion.'},
  {term:'Transpiration',def:'Water loss from plant through leaf stomata — accounts for 70-90% of crop water use. Drip irrigation reduces water lost to evaporation but not transpiration.'},
  {term:'Tricyclazole',def:'Systemic fungicide specific for paddy blast (Magnaporthe oryzae). Rate 6g/15L. Inhibits melanin biosynthesis in spore germination tube.'},
  {term:'Urea',def:'Most common N fertilizer — 46% N. Converted to ammonium (NH4+) and nitrate (NO3-) in soil. Apply in 3 splits to prevent volatilization and leaching.'},
  {term:'Vermicompost',def:'Compost produced by earthworms (Eisenia fetida). N:P:K = 1.5-2.5:0.8-1.5:1-2%. Rich in micronutrients, growth hormones, beneficial bacteria.'},
  {term:'Water Use Efficiency (WUE)',def:'Crop yield produced per unit of water consumed. Drip irrigation has highest WUE; flood irrigation lowest. Improved varieties have better WUE.'},
  {term:'Wilt disease',def:'Vascular disease causing plant to wilt — Fusarium oxysporum (fungal) blocks xylem; Ralstonia solanacearum (bacterial) blocks water flow. No chemical cure.'},
  {term:'Zaid season',def:'Short summer season crops (March-June) grown with irrigation. Crops: muskmelon, watermelon, cucumber, cowpea, summer maize, moong bean.'},
  {term:'ZBNF',def:'Zero Budget Natural Farming — farming system using cow-based inputs (Jeevamrutha, Beejamrutha), mulching, no external purchased inputs. Andhra Pradesh state policy.'},
];
let allGlossaryTerms=[...glossaryTerms];
function renderGlossary(filter=''){
  const grid=document.getElementById('glossaryGrid');if(!grid)return;
  const data=filter?glossaryTerms.filter(t=>t.term.toLowerCase().includes(filter.toLowerCase())||t.def.toLowerCase().includes(filter.toLowerCase())):glossaryTerms;
  grid.innerHTML=data.map(t=>`<div class="gloss-card"><div class="gloss-term">${t.term}</div><div class="gloss-def">${t.def}</div></div>`).join('');
}
function filterGlossary(val){renderGlossary(val);}

// ===== FAQ DATA =====
const faqData=[
  {q:'What is the best crop for Odisha in Kharif season?',a:'Paddy (rice) is the dominant Kharif crop in Odisha covering 4.5 million ha. MTU-7029 (Swarna) is most popular. For upland areas: maize, groundnut, pigeon pea. For tribal areas: ragi, maize, turmeric. Coastal areas: paddy + coconut. Koraput & Kandhamal: organic turmeric and ginger are high-value alternatives.'},
  {q:'How do I control paddy blast disease?',a:'Paddy blast (Magnaporthe oryzae) management: 1) Treat seeds with Tricyclazole 75 WP @ 2g/kg before sowing. 2) Avoid excess urea application. 3) Spray Tricyclazole 75 WP @ 6g/15L at first sign of leaf blast OR preventively at boot leaf stage. 4) Repeat after 10 days if weather is cool and humid. Resistant varieties: MTU-7029, Swarna Sub1, Naveen (Odisha), IR-64.'},
  {q:'When should I apply urea for paddy?',a:'Split urea application in 3 doses gives 20-25% better nitrogen use efficiency: 1st dose: At transplanting (basal) — 25% of total urea. 2nd dose: At active tillering (21-25 days after transplanting) — 50% of total urea. 3rd dose: At panicle initiation (45-50 days) — 25% of total urea. Total urea for paddy: 130-150 kg/ha (for HYV irrigated). Do NOT apply urea during drought, waterlogging, or after 60 days.'},
  {q:'What is PM-KISAN scheme and how to apply?',a:'PM-KISAN gives ₹6,000/year in 3 installments of ₹2,000 each (April, August, December) directly to all landholding farmer families. Eligibility: All farmer families with cultivable land. How to apply: 1) Visit pmkisan.gov.in 2) Click "Farmers Corner → New Farmer Registration" 3) Enter Aadhaar number and land details 4) Verify with OTP 5) Alternatively: Visit nearest Common Service Centre (CSC) for assisted registration.'},
  {q:'What is KALIA scheme for Odisha farmers?',a:'KALIA (Krushak Assistance for Livelihood and Income Augmentation) provides: 1) ₹25,000 per family over 5 seasons (₹5,000 per season) for crop cultivation. 2) ₹12,500 for livestock/fishery activities. 3) Life insurance cover under PMJJBY and PMSBY. 4) Special support for landless agricultural households. Check eligibility and status at kalia.odisha.gov.in or nearest Agriculture Department office.'},
  {q:'What is YSR Rythu Bharosa in Andhra Pradesh?',a:'YSR Rythu Bharosa provides ₹13,500/year per agricultural family in Andhra Pradesh — in 3 installments of ₹4,500 each. Eligible: All farmer families including landowners, tenant farmers AND sharecroppers (unlike PM-KISAN). Apply through Rythu Seva Kendra or nearest agriculture department. Check status at apagrisnet.gov.in.'},
  {q:'How to start mushroom farming at home?',a:'Oyster mushroom is easiest to start: 1) Substrate: Paddy straw (free in Odisha/AP). Sterilize with hot water (80°C, 30 min) or 2% lime solution. 2) Spawn (seed): Order from nearest KVK or ICAR center — ₹60-100/kg. 3) Fill polythene bags (500g straw + 50g spawn) and tie. 4) Keep in dark room at 25-30°C, 85-90% humidity for 15-20 days (spawn run). 5) Move to harvesting room — mushrooms appear in 5-7 days. Yield: 700-900g per 1 kg dry straw. Contact KVK for free training.'},
  {q:'What is Zero Budget Natural Farming (ZBNF)?',a:'ZBNF is a farming system using cow-based inputs with zero external purchased inputs. Key practices: 1) Jeevamrutha: Cow dung+urine+jaggery+pulse flour fermented 48hrs — applied 200L/acre as bio-stimulant. 2) Beejamrutha: Cow dung+urine+lime seed treatment before sowing. 3) Mulching: Soil should always be covered with organic matter. 4) Whapasa: Maintaining air-water balance in soil. AP government provides free ZBNF training — contact your local RySS office.'},
  {q:'How to get Soil Health Card for my farm?',a:'Soil Health Cards are provided free by the government: 1) Visit your nearest Krishi Vigyan Kendra (KVK) or Block Agriculture Office. 2) Carry your land record (Patta/Khasra number). 3) Soil samples are collected from your field (if not already done). 4) Testing covers: N, P, K, S, Zn, Fe, Mn, Cu, B, pH, EC, organic carbon. 5) Card provided within 3-4 weeks with crop-wise fertilizer recommendations. Use these recommendations to save ₹2,000-5,000/acre on fertilizers.'},
  {q:'How to apply for Kisan Credit Card (KCC)?',a:'KCC provides short-term crop loans up to ₹3 lakh at 4% interest (7% base, 3% interest subvention). Process: 1) Visit any nationalized bank (SBI, PNB, Bank of Baroda etc). 2) Carry: Land records, ID proof (Aadhaar), Passport photo, Bank account details. 3) Fill KCC application form. 4) Bank sanctioned within 2 weeks after verification. 5) Revolving credit — withdraw and repay multiple times. Special: Pradhan Mantri Mudra Yojana for non-farm activities.'},
  {q:'What is the best fertilizer schedule for tomato?',a:'Tomato fertilizer schedule (per hectare): Basal: FYM 25 t/ha + DAP 200 kg + MOP 100 kg at transplanting. 2 weeks after transplanting: Urea 60 kg/ha top-dress. Flowering stage (30-35 days): Urea 60 kg + MOP 50 kg. Fruit set (50-55 days): Urea 60 kg + MOP 50 kg. Foliar spray: 0.5% ZnSO4 + 0.2% borax at flowering for better fruit set. Fertigation (if drip): 19:19:19 NPK 4 kg/1000L water applied 2x/week.'},
  {q:'How can women start a small agriculture business?',a:'Best low-investment women agri businesses: 1) Oyster mushroom farming: ₹30,000-50,000 investment → ₹80,000-1,20,000/year income. 2) Kitchen garden + surplus sales: Zero investment → ₹500-2,000/month. 3) Flower gardening (marigold/jasmine): 0.5 acre → ₹2-5 lakh/year. 4) Food processing (pickles, powders) through SHG: ₹3-8 lakh/year for 10-member SHG. 5) Plant nursery (seedlings): ₹50,000-1 lakh → ₹2-5 lakh/year. Contact nearest NABARD office or Mission Shakti (Odisha) / DWCRA (AP) for free training and credit support.'},
  {q:'What is the drip irrigation subsidy available?',a:'PM-KUSUM and PMKSY (Pradhan Mantri Krishi Sinchayee Yojana) provide drip irrigation subsidies: Central subsidy: 40-55% of cost. State subsidy (AP/Odisha): Additional 20-25%. Total: 60-70% subsidy for small/marginal farmers. How to apply: Visit your District Agriculture Office or apply online at PMKSY portal. Drip cost: ₹40,000-80,000/acre (before subsidy). After 60-70% subsidy: Farmer pays only ₹12,000-24,000/acre. Also check PM-KUSUM for solar pump subsidy (60% off).'},
];
function renderFAQ(){
  const list=document.getElementById('faqList');if(!list)return;
  list.innerHTML=faqData.map((faq,i)=>`<div class="faq-card">
    <div class="faq-q" onclick="toggleFAQ(${i},this)">${faq.q} <span>▾</span></div>
    <div class="faq-a" id="faq-a-${i}">${faq.a}</div>
  </div>`).join('');
}
function toggleFAQ(i,el){
  const ans=document.getElementById('faq-a-'+i);
  ans.classList.toggle('show');
  el.classList.toggle('open');
  el.querySelector('span').textContent=ans.classList.contains('show')?'▴':'▾';
}

// ===== PAGE NAVIGATION (extended) =====
function showPage(id){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  const pg=document.getElementById(id);if(pg)pg.classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  window.scrollTo(0,0);
  if(id==='mandi')loadMandiNew('odisha');
  if(id==='district-guide')showDistricts('odisha',document.querySelector('.state-tab'));
  if(id==='crop-guide')renderCropGuide('all');
  if(id==='fruits-veg')renderFV('all');
  if(id==='fertilizers')renderFert('all');
  if(id==='organic-farming')renderOrganic();
  if(id==='special-farming')renderSpecial();
  if(id==='seed-varieties')renderSeeds('all');
  if(id==='women-agri')renderWomen();
  if(id==='student-notes')showSubject('agronomy',document.querySelector('.subject-tab'));
  if(id==='calendar')renderCalendar();
  if(id==='glossary')renderGlossary();
  if(id==='faq')renderFAQ();
  if(id==='schemes'){loadSchemes();} 
  if(id==='seasonal')showSeason('kharif',document.querySelector('.season-tab'));
  if(id==='diseases')renderDiseaseCropGrid();
  if(id==='ai-chat'){setTimeout(()=>{const ci=document.getElementById('chatInput');if(ci)ci.focus();},300);}
}


document.addEventListener('DOMContentLoaded', () => {
  renderHomeCropGrid();
  renderDiseaseCropGrid();
  renderSuggestions();
  renderQuickQuestions();
  renderAssistantExamples();
  loadMandi(); // original mandi for home preview
  loadMandiNew('odisha'); // new expanded mandi
  loadSchemes();
  showSeason('kharif', document.querySelector('.season-tab'));
  renderNewsTicker();
  renderCalendar();
  renderOrganic();
  renderSpecial();
  renderSeeds('all');
  renderWomen();
  renderGlossary();
  renderFAQ();
  renderCropGuide('all');
  renderFV('all');
  renderFert('all');
  showSubject('agronomy', document.querySelector('.subject-tab'));
  showDistricts('odisha', document.querySelector('.state-tab'));
  loadWeather();

});
