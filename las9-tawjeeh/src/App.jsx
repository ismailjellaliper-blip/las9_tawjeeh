import React, { useState, useEffect } from 'react';
import { CheckCircle2, Clock, ShieldCheck, GraduationCap, ChevronLeft, Send, Users, Star, Flame, Gift } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    branch: '',
    city: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // ZDEDNA HADI

  // Import Arabic Font for the Darija text
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Tajawal:wght@400;500;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => { // REDINNAHA ASYNC
    e.preventDefault();
    setIsLoading(true);

    // BDEL HAD L'URL B LIEN LI 3TAK GOOGLE APPS SCRIPT
    const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbxexwi0yZUO8fEk9mlIVwH9PgULG5cSDalx4knxlyvyP_pLHvuWP0bjED2-p7s8wg4f_w/exec';

    try {
      await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Muhim bach mytla3ch lik error d CORS f browser
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      // Mli kolchi ydoz mzyan:
      setIsSubmitted(true);
      setFormData({ name: '', phone: '', branch: '', city: '' });
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error("Erreur d'envoi:", error);
      alert("Oups, w9e3 mochkil. 3awd jereb!");
    } finally {
      setIsLoading(false);
    }
  };

  const scrollToForm = () => {
    document.getElementById('inscription-form').scrollIntoView({ behavior: 'smooth' });
  };

  const CustomLogo = () => (
    <svg viewBox="0 0 100 100" className="w-12 h-12 drop-shadow-md hover:scale-105 transition-transform duration-300">
      <polygon points="20,20 30,20 30,65 65,65 62,75 20,75" fill="#F24A00" />
      <polygon points="35,45 45,45 45,55 65,55 65,45 75,45 75,60 35,60" fill="#F24A00" />
      <rect x="44" y="32" width="9" height="9" fill="#F24A00" />
      <rect x="56" y="32" width="9" height="9" fill="#F24A00" />
      <path d="M54.5,15 L38,21 L54.5,27 L71,21 Z" fill="#000000" />
      <path d="M47,24 L47,30 A 7.5 3 0 0 0 62 30 L62,24 Z" fill="#000000" />
      <path d="M68,22 L68,31" stroke="#000000" strokeWidth="2" />
      <circle cx="68" cy="33" r="2.5" fill="#000000" />
    </svg>
  );

  return (
    <div 
      dir="rtl" 
      className="min-h-screen bg-[#FAFAFA] text-black selection:bg-[#F24A00] selection:text-white overflow-x-hidden pb-16 md:pb-0"
      style={{ fontFamily: "'Tajawal', sans-serif" }}
    >
      
      {/* Honest Banner */}
      <div className="bg-[#F24A00] text-white text-center py-2.5 font-bold text-sm md:text-base px-4 fixed w-full z-[60] top-0 shadow-sm">
        <span className="inline-block mr-2">💡</span> 
        ملاحظة: <span className="bg-white text-[#F24A00] px-2 py-0.5 rounded-md mx-1 font-black">Places Limitées</span> باش نقدرو نضمنو ليك <span dir="ltr">suivi 100% personnalisé</span>.
      </div>

      {/* Navbar */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-lg z-50 border-b border-gray-100 shadow-sm top-[40px] md:top-[44px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20 items-center">
            <div className="flex-shrink-0 flex items-center gap-3 cursor-pointer" dir="ltr">
              <CustomLogo />
              <span className="font-extrabold text-2xl md:text-3xl tracking-tight mt-1" style={{ fontFamily: "system-ui, sans-serif" }}>
                Las9<span className="text-[#F24A00]">Tawjeeh</span>
              </span>
            </div>
            <div>
              <button 
                onClick={scrollToForm}
                className="bg-black hover:bg-[#F24A00] text-white px-6 md:px-8 py-2.5 rounded-full font-bold text-base md:text-lg transition-all duration-300 shadow-lg hover:shadow-[#F24A00]/40"
              >
                Je m'inscris دابا
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-16 md:pt-48 md:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#F24A00] rounded-full blur-[120px] opacity-10 -z-10"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-black rounded-full blur-[120px] opacity-5 -z-10"></div>
        
        <div className="text-center max-w-4xl mx-auto relative z-10">
          <h1 className="text-5xl md:text-7xl font-black tracking-tight mb-6 leading-tight">
            نسى الـ Stress ديال l'Orientation.<br/>
            <span className="text-[#F24A00]">ركز فـ l'Bac ديالك!</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed font-medium">
            خلينا نتكلفو ليك بـ <strong className="text-black font-extrabold" dir="ltr">les inscriptions</strong> فكتر من 30 <strong className="text-black font-extrabold" dir="ltr">école d'ingénieurs & médecine</strong> فالمغرب. من A حتى لـ Z.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              onClick={scrollToForm}
              className="w-full sm:w-auto bg-[#F24A00] hover:bg-orange-700 text-white text-xl px-10 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-orange-500/30 flex items-center justify-center gap-3"
            >
              قاد ليا l'dossier ديالي <ChevronLeft size={26} strokeWidth={3} />
            </button>
          </div>
          <p className="mt-6 text-sm text-gray-500 font-bold flex items-center justify-center gap-2">
            <ShieldCheck size={18} className="text-[#F24A00]" /> Garantie 100% - بلا صداع الراس
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="border-y border-gray-100 bg-white py-10">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl font-black text-[#F24A00]">+30</div>
            <div className="text-gray-500 font-medium text-sm mt-1" dir="ltr">Écoles couvertes</div>
          </div>
          <div>
            <div className="text-3xl font-black text-black">100%</div>
            <div className="text-gray-500 font-medium text-sm mt-1">تتبع شخصي لكل طالب</div>
          </div>
          <div>
            <div className="text-3xl font-black text-[#F24A00]">0</div>
            <div className="text-gray-500 font-medium text-sm mt-1">روطار فالمواعيد</div>
          </div>
          <div>
            <div className="text-3xl font-black text-black">24/7</div>
            <div className="text-gray-500 font-medium text-sm mt-1" dir="ltr">Support WhatsApp</div>
          </div>
        </div>
      </section>

      {/* Problem & Agitation Section */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-lg bg-red-50 text-red-600 font-bold mb-6 text-sm border border-red-100">
                <Flame size={16} /> المشكل الحقيقي
              </div>
              <h2 className="text-3xl md:text-4xl font-black mb-8 leading-tight">
                l'Bac بحد داتو فيه stress... <br/>
                <span className="text-gray-400">علاش تزيد عليك صداع les concours؟</span>
              </h2>
              <ul className="space-y-8">
                <li className="flex gap-4">
                  <div className="mt-1 bg-red-50 border border-red-100 p-3 rounded-2xl text-red-500 h-fit shadow-sm">
                    <Clock size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Les délais كيزڭلو</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">كل école عندها <span dir="ltr">la date limite</span> ديالها. تقدر تزڭل مدرسة زوينة غير حيت نسيتي نهار التسجيل.</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="mt-1 bg-red-50 border border-red-100 p-3 rounded-2xl text-red-500 h-fit shadow-sm">
                    <Users size={28} />
                  </div>
                  <div>
                    <h3 className="font-bold text-2xl mb-2">Les serveurs كيطيحو</h3>
                    <p className="text-gray-600 text-lg leading-relaxed font-medium">مع الضغط دالتسجيل، <span dir="ltr">les sites</span> كيطيحو وكيبلوكاو فليام اللخرة. غتبقى سهران مع الـ PC وتعيش هاد الـ <span dir="ltr">stress</span> كامل غير باش تشد بلاصتك؟</p>
                  </div>
                </li>
              </ul>
            </div>
            
            <div className="bg-black text-white p-10 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-64 h-64 bg-[#F24A00] rounded-full blur-[100px] opacity-20"></div>
              <h3 className="text-3xl font-black mb-6 text-[#F24A00] flex items-center gap-3">
                <CustomLogo />
                الحل مع Las9 Tawjeeh
              </h3>
              <p className="text-xl mb-8 leading-relaxed text-gray-300 font-medium">
                حنا <span dir="ltr">des ingénieurs</span> دزنا من هادشي وعارفين البلان. غانشدو <span dir="ltr">le dossier</span> ديالك وغانصيفطوه لڭاع المدارس بلا ماتهز الهم، باش تركز غير فـ <span dir="ltr">la préparation</span> ديالك.
              </p>
              <ul className="space-y-5 font-bold text-lg" dir="ltr">
                <li className="flex items-center gap-3 justify-end"><CheckCircle2 className="text-[#F24A00]" size={24}/> ENSA, ENSAM, ENCG</li>
                <li className="flex items-center gap-3 justify-end"><CheckCircle2 className="text-[#F24A00]" size={24}/> FMP, FMD, ISPITS</li>
                <li className="flex items-center gap-3 justify-end"><CheckCircle2 className="text-[#F24A00]" size={24}/> IAV, APESA, CPGE</li>
                <li className="flex items-center gap-3 text-gray-500 italic justify-end">+ ڭاع المدارس لخرين...</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section (Ethical Price Anchoring) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto text-center bg-[#FAFAFA]">
        <h2 className="text-4xl md:text-5xl font-black mb-4">Investissement واحد، وتهنى!</h2>
        <p className="text-xl text-gray-500 mb-14 font-medium">تمن التسجيل فمدرسة وحدة فـ privé كيفوت هاد التمن.</p>
        
        <div className="max-w-md mx-auto bg-white border-4 border-[#F24A00] rounded-[2.5rem] p-10 relative shadow-2xl shadow-orange-500/20">
          <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-[#F24A00] text-white px-8 py-2 rounded-full font-black text-lg shadow-lg shadow-orange-500/40 w-max">
            Pack Orientation Complet
          </div>
          
          <div className="mt-8 flex flex-col justify-center items-center gap-1 mb-8">
            <span className="text-xl text-gray-400 line-through font-bold">Valeur réelle : 2500 Dhs</span>
            <div className="flex items-baseline gap-2">
              <span className="text-7xl font-black">2000</span>
              <span className="text-2xl font-bold text-gray-400" dir="ltr">Dhs</span>
            </div>
          </div>

          <ul className="space-y-4 text-right mb-8 font-bold text-lg">
            <li className="flex items-start gap-3"><CheckCircle2 className="text-[#F24A00] shrink-0 mt-1"/> <span><span dir="ltr">Inscription</span> فـ <strong>+30 école</strong> (Publique & Privée)</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-[#F24A00] shrink-0 mt-1"/> <span>نصايبو ليك <span dir="ltr">les adresses Email</span></span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-[#F24A00] shrink-0 mt-1"/> <span>نصيفطو ليك <span dir="ltr">les reçus</span> فـ WhatsApp</span></li>
            <li className="flex items-start gap-3"><CheckCircle2 className="text-[#F24A00] shrink-0 mt-1"/> <span><span dir="ltr">Suivi</span> مستمر حتى لنهار l'concours</span></li>
            
            <div className="bg-orange-50 p-4 rounded-xl mt-4 border border-orange-100">
               <li className="flex items-start gap-3 text-[#F24A00]"><Gift className="shrink-0 mt-1"/> <span><strong>Bonus Gratuit:</strong> <span dir="ltr">Drive</span> ففيه ڭاع <span dir="ltr">les anciens concours</span> للتحضير.</span></li>
            </div>
          </ul>
          
          <button 
            onClick={scrollToForm}
            className="w-full bg-black hover:bg-gray-800 text-white text-xl py-5 rounded-2xl font-black transition-colors shadow-lg"
          >
            Je commande mon pack
          </button>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="inscription-form" className="bg-[#0A0A0A] text-white py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[#F24A00] rounded-full blur-[200px] opacity-20 -translate-y-1/2"></div>
        <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#F24A00] rounded-full blur-[200px] opacity-10 -translate-y-1/2"></div>
        
        <div className="max-w-3xl mx-auto relative z-10 text-center">
          <div className="bg-[#F24A00]/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6 border border-[#F24A00]/20">
             <GraduationCap className="text-[#F24A00] w-12 h-12" />
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6">مبقاش الوقت، بلاصتك كتسناك!</h2>
          <p className="text-xl text-gray-400 mb-10 font-medium">
            عمر هاد <span dir="ltr">le formulaire</span>. واحد من <span dir="ltr">l'équipe</span> ديالنا غادي يتصل بيك باش نكونفيرميو معاك ونبداو الخدمة.
          </p>

          {isSubmitted ? (
            <div className="bg-[#F24A00]/20 border-2 border-[#F24A00] rounded-[2rem] p-10 text-center">
              <CheckCircle2 className="mx-auto text-[#F24A00] w-20 h-20 mb-6" />
              <h3 className="text-3xl font-black text-white mb-3">Félicitations! الدوسي ديالك وصلنا</h3>
              <p className="text-gray-300 text-xl font-medium">غانتاصلو بيك فـ WhatsApp فأقرب وقت.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 md:p-10 rounded-[2rem] text-right shadow-2xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-base font-bold text-gray-300 mb-3" dir="ltr">Nom & Prénom</label>
                  <input 
                    type="text" 
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    dir="ltr"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#F24A00] focus:ring-1 focus:ring-[#F24A00] transition-colors font-medium text-lg placeholder-gray-600 text-left"
                    placeholder="Ex: Yassine Alaoui"
                  />
                </div>
                <div>
                  <label className="block text-base font-bold text-gray-300 mb-3">نمرة التيلفون (WhatsApp)</label>
                  <input 
                    type="tel" 
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                    dir="ltr"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#F24A00] focus:ring-1 focus:ring-[#F24A00] transition-colors font-medium text-lg text-left placeholder-gray-600"
                    placeholder="06 XX XX XX XX"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div>
                  <label className="block text-base font-bold text-gray-300 mb-3" dir="ltr">Filière (Bac)</label>
                  <select 
                    name="branch"
                    required
                    value={formData.branch}
                    onChange={handleInputChange}
                    dir="ltr"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#F24A00] focus:ring-1 focus:ring-[#F24A00] transition-colors font-medium text-lg appearance-none text-left"
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 1rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em' }}
                  >
                    <option value="" className="bg-gray-900 text-gray-400">Sélectionnez...</option>
                    <option value="sc_maths_a" className="bg-gray-900 text-white">Sciences Maths A</option>
                    <option value="sc_maths_b" className="bg-gray-900 text-white">Sciences Maths B</option>
                    <option value="pc" className="bg-gray-900 text-white">Physique Chimie (PC)</option>
                    <option value="svt" className="bg-gray-900 text-white">SVT</option>
                    <option value="eco" className="bg-gray-900 text-white">Sciences Économiques</option>
                    <option value="autre" className="bg-gray-900 text-white">Autre</option>
                  </select>
                </div>
                <div>
                  <label className="block text-base font-bold text-gray-300 mb-3" dir="ltr">Ville</label>
                  <input 
                    type="text" 
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleInputChange}
                    dir="ltr"
                    className="w-full bg-black/50 border border-white/10 rounded-2xl px-5 py-4 text-white focus:outline-none focus:border-[#F24A00] focus:ring-1 focus:ring-[#F24A00] transition-colors font-medium text-lg placeholder-gray-600 text-left"
                    placeholder="Ex: Casablanca"
                  />
                </div>
              </div>

              <button 
                type="submit"
                disabled={isLoading}
                className={`w-full bg-[#F24A00] hover:bg-orange-700 text-white text-xl py-5 rounded-2xl font-black transition-all flex justify-center items-center gap-3 shadow-lg shadow-[#F24A00]/20 ${isLoading ? 'opacity-70 cursor-not-allowed' : ''}`}
              >
                {isLoading ? 'Kan sifto l\'dossier...' : 'Confirmer ma demande'} 
                {!isLoading && <Send size={24} className="rotate-180" />}
              </button>
              <div className="flex flex-col items-center justify-center mt-6 gap-2">
                <p className="text-gray-500 text-sm flex items-center gap-2 font-bold" dir="ltr">
                  <ShieldCheck size={18} className="text-[#F24A00]"/> Données 100% sécurisées
                </p>
              </div>
            </form>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 py-10 text-center text-gray-500 font-medium pb-24 md:pb-10">
        <div className="flex justify-center mb-4 opacity-50 grayscale hover:grayscale-0 transition-all">
           <CustomLogo />
        </div>
        <p dir="ltr">© 2026 Las9Tawjeeh. Tous droits réservés.</p>
      </footer>
    </div>
  );
}
