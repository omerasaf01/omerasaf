'use strict';
(() => {
const dictionary = {
  "BAĞLANTI KUR": [
    "BAĞLANTI KUR",
    "GET IN TOUCH"
  ],
  "Görünmeyeni": [
    "Görünmeyeni",
    "Building the"
  ],
  "inşa ediyorum.": [
    "inşa ediyorum.",
    "unseen."
  ],
  "Backend, makine öğrenmesi ve girişimcilik.": [
    "Backend, makine öğrenmesi ve girişimcilik.",
    "Backend, machine learning and entrepreneurship."
  ],
  "Her şeyin kesiştiği yerde.": [
    "Her şeyin kesiştiği yerde.",
    "Where it all comes together."
  ],
  "EVRENİ KEŞFET": [
    "EVRENİ KEŞFET",
    "EXPLORE THE UNIVERSE"
  ],
  "Bir fikir. Sonsuz olasılık.": [
    "Bir fikir. Sonsuz olasılık.",
    "One idea. Endless possibilities."
  ],
  "PORTFOLYO / 2026": [
    "PORTFOLYO / 2026",
    "PORTFOLIO / 2026"
  ],
  "Karmaşıklığın": [
    "Karmaşıklığın",
    "Finding order"
  ],
  "içindeki": [
    "içindeki",
    "in"
  ],
  "düzen.": [
    "düzen.",
    "complexity."
  ],
  "Görünür deneyimlerin arkasında": [
    "Görünür deneyimlerin arkasında",
    "Behind every visible experience"
  ],
  "görünmeyen sistemler var.": [
    "görünmeyen sistemler var.",
    "are invisible systems."
  ],
  "Benim çalışma alanım tam da burası.": [
    "Benim çalışma alanım tam da burası.",
    "That is where I work."
  ],
  "SİSTEMLER": [
    "SİSTEMLER",
    "SYSTEMS"
  ],
  "MİMARİ": [
    "MİMARİ",
    "ARCHITECTURE"
  ],
  "ALANI İNCELE": [
    "ALANI İNCELE",
    "EXPLORE THIS FIELD"
  ],
  "Parçalar birleşir. Sistem oluşur.": [
    "Parçalar birleşir. Sistem oluşur.",
    "Parts connect. A system emerges."
  ],
  "Verinin ötesinde": [
    "Verinin ötesinde",
    "Beyond data,"
  ],
  "bir": [
    "bir",
    "a new"
  ],
  "olasılık.": [
    "olasılık.",
    "possibility."
  ],
  "Noktalar arasında bağlantılar.": [
    "Noktalar arasında bağlantılar.",
    "Connections between points."
  ],
  "Bağlantıların içinde örüntüler.": [
    "Bağlantıların içinde örüntüler.",
    "Patterns within connections."
  ],
  "Makine öğrenmesine açılan bir pencere.": [
    "Makine öğrenmesine açılan bir pencere.",
    "A window into machine learning."
  ],
  "VERİ": [
    "VERİ",
    "DATA"
  ],
  "MODELLER": [
    "MODELLER",
    "MODELS"
  ],
  "ÖĞRENME": [
    "ÖĞRENME",
    "LEARNING"
  ],
  "Her bağlantı yeni bir ihtimal.": [
    "Her bağlantı yeni bir ihtimal.",
    "Every connection, a new possibility."
  ],
  "Niafix Ltd. kurucu ortağı.": [
    "Niafix Ltd. kurucu ortağı.",
    "Co-founder of Niafix Ltd."
  ],
  "Ankara merkezli Backend & ML Developer ve Niafix kurucu ortağıyım. Dokuz Eylül Üniversitesi’nde Bilgisayar Programcılığı öğrenimime devam ediyorum.": [
    "Ankara merkezli Backend & ML Developer ve Niafix kurucu ortağıyım. Dokuz Eylül Üniversitesi’nde Bilgisayar Programcılığı öğrenimime devam ediyorum.",
    "I am a Backend & ML Developer based in Ankara and co-founder of Niafix. I am studying Computer Programming at Dokuz Eylül University."
  ],
  "NIAFIX / KURUCU ORTAK": [
    "NIAFIX / KURUCU ORTAK",
    "NIAFIX / CO-FOUNDER"
  ],
  "DENEYİM & EĞİTİM": [
    "DENEYİM & EĞİTİM",
    "EXPERIENCE & EDUCATION"
  ],
  "Üç eksen. Tek bakış açısı.": [
    "Üç eksen. Tek bakış açısı.",
    "Three axes. One perspective."
  ],
  "DENEYİM / EĞİTİM": [
    "DENEYİM / EĞİTİM",
    "EXPERIENCE / EDUCATION"
  ],
  "Yolculuğun": [
    "Yolculuğun",
    "Along the"
  ],
  "izleri.": [
    "izleri.",
    "journey."
  ],
  "Deneyim ↘": [
    "Deneyim ↘",
    "Experience ↘"
  ],
  "Eğitim ↘": [
    "Eğitim ↘",
    "Education ↘"
  ],
  "Deneyim": [
    "Deneyim",
    "Experience"
  ],
  "Eğitim": [
    "Eğitim",
    "Education"
  ],
  "Kasım 2025 — Günümüz": [
    "Kasım 2025 — Günümüz",
    "November 2025 — Present"
  ],
  "Ortak Kurucu": [
    "Ortak Kurucu",
    "Co-founder"
  ],
  "Devam ediyor": [
    "Devam ediyor",
    "Ongoing"
  ],
  "Eylül 2026 — Günümüz": [
    "Eylül 2026 — Günümüz",
    "September 2026 — Present"
  ],
  "Satış Danışmanı": [
    "Satış Danışmanı",
    "Sales Advisor"
  ],
  "Ankara, Türkiye": [
    "Ankara, Türkiye",
    "Ankara, Türkiye"
  ],
  "Eylül 2024 — Haziran 2025": [
    "Eylül 2024 — Haziran 2025",
    "September 2024 — June 2025"
  ],
  "BT Stajyeri": [
    "BT Stajyeri",
    "IT Intern"
  ],
  "Şubat 2024 — Ağustos 2024": [
    "Şubat 2024 — Ağustos 2024",
    "February 2024 — August 2024"
  ],
  "İstanbul, Türkiye": [
    "İstanbul, Türkiye",
    "Istanbul, Türkiye"
  ],
  "Aralık 2022 — Ağustos 2024": [
    "Aralık 2022 — Ağustos 2024",
    "December 2022 — August 2024"
  ],
  "Aralık 2022 — Aralık 2023": [
    "Aralık 2022 — Aralık 2023",
    "December 2022 — December 2023"
  ],
  "Ağustos 2026 — Devam ediyor": [
    "Ağustos 2026 — Devam ediyor",
    "August 2026 — Ongoing"
  ],
  "Dokuz Eylül Üniversitesi": [
    "Dokuz Eylül Üniversitesi",
    "Dokuz Eylül University"
  ],
  "Bilgisayar Programcılığı · Önlisans": [
    "Bilgisayar Programcılığı · Önlisans",
    "Computer Programming · Associate Degree"
  ],
  "Beklenen mezuniyet: Haziran 2028": [
    "Beklenen mezuniyet: Haziran 2028",
    "Expected graduation: June 2028"
  ],
  "Eylül 2021 — Haziran 2025": [
    "Eylül 2021 — Haziran 2025",
    "September 2021 — June 2025"
  ],
  "Yamantürk Mesleki ve Teknik Anadolu Lisesi": [
    "Yamantürk Mesleki ve Teknik Anadolu Lisesi",
    "Yamantürk Vocational and Technical Anatolian High School"
  ],
  "Bilişim Teknolojileri": [
    "Bilişim Teknolojileri",
    "Information Technologies"
  ],
  "Yetkinlikler": [
    "Yetkinlikler",
    "Skills"
  ],
  "Yazılım Tasarımı": [
    "Yazılım Tasarımı",
    "Software Design"
  ],
  "Mühendislik": [
    "Mühendislik",
    "Engineering"
  ],
  "Yazılım Sektörü": [
    "Yazılım Sektörü",
    "Software Industry"
  ],
  "İngilizce": [
    "İngilizce",
    "English"
  ],
  "Profesyonel çalışma yetkinliği": [
    "Profesyonel çalışma yetkinliği",
    "Professional working proficiency"
  ],
  "Bir sonraki": [
    "Bir sonraki",
    "The next"
  ],
  "bağlantı.": [
    "bağlantı.",
    "connection."
  ],
  "Yeni bir fikir, farklı bir problem": [
    "Yeni bir fikir, farklı bir problem",
    "A new idea, a different challenge"
  ],
  "ya da sadece bir merhaba.": [
    "ya da sadece bir merhaba.",
    "or just a hello."
  ],
  "Konuşalım": [
    "Konuşalım",
    "Let’s talk"
  ],
  "Bölümler": [
    "Bölümler",
    "Sections"
  ],
  "Başlangıç": [
    "Başlangıç",
    "Home"
  ],
  "Makine öğrenmesi": [
    "Makine öğrenmesi",
    "Machine learning"
  ],
  "Hakkımda": [
    "Hakkımda",
    "About me"
  ],
  "İletişim": [
    "İletişim",
    "Contact"
  ],
  "BAŞLANGIÇ": [
    "BAŞLANGIÇ",
    "HOME"
  ],
  "HAKKIMDA": [
    "HAKKIMDA",
    "ABOUT"
  ],
  "İLETİŞİM": [
    "İLETİŞİM",
    "CONTACT"
  ],
  "SAHNEDE SÜRÜKLE": [
    "SAHNEDE SÜRÜKLE",
    "DRAG TO ROTATE"
  ],
  "Parçacıkları dağıt": [
    "Parçacıkları dağıt",
    "Scatter particles"
  ],
  "DAĞIT": [
    "DAĞIT",
    "SCATTER"
  ],
  "TOPLA": [
    "TOPLA",
    "GATHER"
  ],
  "Animasyonu duraklat": [
    "Animasyonu duraklat",
    "Pause animation"
  ],
  "Animasyonu başlat": [
    "Animasyonu başlat",
    "Play animation"
  ],
  "Kapat": [
    "Kapat",
    "Close"
  ],
  "SAHNEYE DÖN": [
    "SAHNEYE DÖN",
    "BACK TO THE SCENE"
  ],
  "Ömer Asaf Karasu — başlangıç": [
    "Ömer Asaf Karasu — başlangıç",
    "Ömer Asaf Karasu — home"
  ],
  "SAHNE BAŞLATILAMADI": [
    "SAHNE BAŞLATILAMADI",
    "SCENE UNAVAILABLE"
  ],
  "Görünmeyen mimari.": [
    "Görünmeyen mimari.",
    "Invisible architecture."
  ],
  "Full-stack geliştirme deneyimim Lojipark ve Newky’deki görevlerimi kapsıyor. AYESAŞ’ta Eylül 2024–Haziran 2025 arasında BT stajyeri olarak çalıştım. Backend & ML Developer olarak yazılım geliştirmeye odaklanıyorum.": [
    "Full-stack geliştirme deneyimim Lojipark ve Newky’deki görevlerimi kapsıyor. AYESAŞ’ta Eylül 2024–Haziran 2025 arasında BT stajyeri olarak çalıştım. Backend & ML Developer olarak yazılım geliştirmeye odaklanıyorum.",
    "My full-stack development experience includes roles at Lojipark and Newky. I worked as an IT intern at AYESAŞ from September 2024 to June 2025. My focus is software development as a Backend & ML Developer."
  ],
  "Lojipark: Aralık 2022–Aralık 2023 · Newky: Şubat 2024–Ağustos 2024.": [
    "Lojipark: Aralık 2022–Aralık 2023 · Newky: Şubat 2024–Ağustos 2024.",
    "Lojipark: December 2022–December 2023 · Newky: February 2024–August 2024."
  ],
  "Noktaları birleştirmek.": [
    "Noktaları birleştirmek.",
    "Connecting the dots."
  ],
  "Backend & ML Developer olarak makine öğrenmesi alanında çalışıyorum. Bu bölüm, model geliştirme süreçleri ve veriyle yapılan çalışmalar için ayrıldı.": [
    "Backend & ML Developer olarak makine öğrenmesi alanında çalışıyorum. Bu bölüm, model geliştirme süreçleri ve veriyle yapılan çalışmalar için ayrıldı.",
    "I work in machine learning as a Backend & ML Developer. This section is reserved for model development and data-driven work."
  ],
  "Proje, kullanılan modeller ve değerlendirme sonuçları henüz eklenmedi. Görsel sinir ağı, bu çalışma alanının sanatsal bir temsilidir.": [
    "Proje, kullanılan modeller ve değerlendirme sonuçları henüz eklenmedi. Görsel sinir ağı, bu çalışma alanının sanatsal bir temsilidir.",
    "Project details, models and evaluation results have not been added yet. The neural network visualization is an artistic representation of this field."
  ],
  "Kurucu ortak.": [
    "Kurucu ortak.",
    "Co-founder."
  ],
  "Kasım 2025’ten bu yana Niafix’te ortak kurucuyum. Backend & ML Developer olarak yazılım geliştirme ve makine öğrenmesi alanlarında çalışıyorum.": [
    "Kasım 2025’ten bu yana Niafix’te ortak kurucuyum. Backend & ML Developer olarak yazılım geliştirme ve makine öğrenmesi alanlarında çalışıyorum.",
    "I have been a co-founder at Niafix since November 2025. I work in software development and machine learning as a Backend & ML Developer."
  ],
  "Ankara, Türkiye · Kasım 2025 — Günümüz": [
    "Ankara, Türkiye · Kasım 2025 — Günümüz",
    "Ankara, Türkiye · November 2025 — Present"
  ],
  "BACKEND & ML DEVELOPER": [
    "BACKEND & ML GELİŞTİRİCİ",
    "BACKEND & ML DEVELOPER"
  ],
  "CO FOUNDER @ NIAFIX LTD.": [
    "KURUCU ORTAK @ NIAFIX LTD.",
    "CO-FOUNDER @ NIAFIX LTD."
  ],
  "INDEPENDENT MIND. CONNECTED SYSTEMS.": [
    "BAĞIMSIZ DÜŞÜNCE. BAĞLANTILI SİSTEMLER.",
    "INDEPENDENT MIND. CONNECTED SYSTEMS."
  ],
  "BEYOND": [
    "KODUN",
    "BEYOND"
  ],
  "THE CODE.": [
    "ÖTESİNDE.",
    "THE CODE."
  ],
  "THE SINGULARITY": [
    "TEKİLLİK",
    "THE SINGULARITY"
  ],
  "SCROLL TO TRANSFORM": [
    "DÖNÜŞÜM İÇİN KAYDIR",
    "SCROLL TO TRANSFORM"
  ],
  "01 — BACKEND DEVELOPMENT": [
    "01 — BACKEND GELİŞTİRME",
    "01 — BACKEND DEVELOPMENT"
  ],
  "STRUCTURE / 01": [
    "YAPI / 01",
    "STRUCTURE / 01"
  ],
  "02 — MACHINE LEARNING": [
    "02 — MAKİNE ÖĞRENMESİ",
    "02 — MACHINE LEARNING"
  ],
  "NEURAL FIELD / 02": [
    "SİNİR AĞI / 02",
    "NEURAL FIELD / 02"
  ],
  "03 — THE HUMAN BEHIND THE SYSTEM": [
    "03 — SİSTEMİN ARKASINDAKİ İNSAN",
    "03 — THE HUMAN BEHIND THE SYSTEM"
  ],
  "INTERSECTION / 03": [
    "KESİŞİM / 03",
    "INTERSECTION / 03"
  ],
  "04 — NEXT CONNECTION": [
    "04 — SIRADAKİ BAĞLANTI",
    "04 — NEXT CONNECTION"
  ],
  "BACKEND & ML DEVELOPER / NIAFIX LTD.": [
    "BACKEND & ML GELİŞTİRİCİ / NIAFIX LTD.",
    "BACKEND & ML DEVELOPER / NIAFIX LTD."
  ],
  "01 / BACKEND DEVELOPMENT": [
    "01 / BACKEND GELİŞTİRME",
    "01 / BACKEND DEVELOPMENT"
  ],
  "02 / MACHINE LEARNING": [
    "02 / MAKİNE ÖĞRENMESİ",
    "02 / MACHINE LEARNING"
  ]
};
let language = 'tr';
try { const saved=localStorage.getItem('portfolio-language'); if(saved==='en'||saved==='tr')language=saved; } catch {}
const sourceNodes=[];const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT);
while(walker.nextNode()){
 const node=walker.currentNode;
 if(node.parentElement.closest('script,style,noscript,[data-language]'))continue;
 const text=node.nodeValue.trim();if(dictionary[text])sourceNodes.push({node,original:node.nodeValue,key:text});
}
const sourceAttrs=[];
document.querySelectorAll('[aria-label],[title]').forEach(el=>['aria-label','title'].forEach(attr=>{const original=el.getAttribute(attr);if(dictionary[original])sourceAttrs.push({el,attr,original});}));
const t=text=>dictionary[text]?.[language==='en'?1:0] ?? text;
function setLanguage(value){
 if(value!=='en'&&value!=='tr')return;
 language=value;document.documentElement.lang=value;
 sourceNodes.forEach(({node,original,key})=>node.nodeValue=original.replace(key,t(key)));
 sourceAttrs.forEach(({el,attr,original})=>el.setAttribute(attr,t(original)));
 document.querySelectorAll('[data-language]').forEach(button=>{const selected=button.dataset.language===value;button.setAttribute('aria-pressed',String(selected));button.classList.toggle('selected',selected);});
 document.querySelector('.language-switch').setAttribute('aria-label',value==='en'?'Language':'Dil');
 document.title=value==='en'?'Ömer Asaf Karasu — Backend & ML Developer':'Ömer Asaf Karasu — Backend & ML Geliştirici';
 document.querySelector('meta[name="description"]').setAttribute('content',value==='en'?'Ömer Asaf Karasu — Niafix co-founder, Backend & ML Developer. Explore my experience, education and interactive portfolio.':'Ömer Asaf Karasu — Niafix kurucu ortağı, Backend & ML Developer. Deneyim, eğitim ve etkileşimli portfolyo.');
 try { localStorage.setItem('portfolio-language',value); } catch {}
 window.dispatchEvent(new Event('portfolio-languagechange'));
}
window.PortfolioI18n={t,get language(){return language;},setLanguage};
document.querySelectorAll('[data-language]').forEach(button=>button.addEventListener('click',()=>setLanguage(button.dataset.language)));
setLanguage(language);
})();
