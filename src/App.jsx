import React, { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { GiCoffeeCup, GiWheat, GiCow } from 'react-icons/gi';
import { FaLeaf, FaRecycle, FaExclamationTriangle, FaPlane, FaCoffee, FaGlassWhiskey } from 'react-icons/fa';
import cup from './assets/cup.svg';
import logo from './assets/logo.svg';

export default function App() {
  const { scrollY } = useScroll();
  // Rotate the central glass based on scroll position
  const cupRotation = useTransform(scrollY, [0, 1000], [0, 360]);

  // Mock Form Handling State
  const [submitStatus, setSubmitStatus] = useState(''); // 'sending', 'success'

  const handleMockSubmit = (e) => {
    e.preventDefault();
    setSubmitStatus('sending');

    // Simulate network request delay (1.5 seconds)
    setTimeout(() => {
      console.log('Mock form submitted successfully!');
      setSubmitStatus('success');
      e.target.reset(); // Clear the form fields
      
      // Clear the success message after 5 seconds
      setTimeout(() => setSubmitStatus(''), 5000);
    }, 1500);
  };

  // Enable smooth scrolling on the entire document
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <div className="font-sans overflow-x-hidden bg-[#fdfdfd] text-gray-800">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#fdfdfd]/95 backdrop-blur-md shadow-sm z-50 p-4 border-b border-[#6b8e4e]/20">
        <div className="max-w-6xl mx-auto flex justify-between items-center text-[#3b5c3b]">
          <div className="flex items-center gap-2 font-black text-2xl tracking-tighter cursor-pointer" onClick={() => window.scrollTo(0, 0)}>
            <img src={logo} alt="FamCups Logo" className="w-10 h-10" />
            FAM CUPS
          </div>
          <div className="hidden md:flex gap-6 font-semibold">
            <a href="#problem" className="hover:text-[#6b8e4e] transition">The Problem</a>
            <a href="#solution" className="hover:text-[#6b8e4e] transition">Ingredients</a>
            <a href="#details" className="hover:text-[#6b8e4e] transition">Market & Nutrition</a>
            <a href="#lifecycle" className="hover:text-[#6b8e4e] transition">Zero Waste</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex flex-col justify-center items-center text-center p-6 bg-[#f4f7f4] pt-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl z-10 flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-[#3b5c3b] mb-4 leading-tight">
            Good for you. <br className="md:hidden" /><span className="text-[#6b8e4e]">Great for the globe.</span>
          </h1>
          
          <div className="relative my-8 h-64 w-64 flex justify-center items-center">
            <div className="absolute inset-0 bg-[#6b8e4e]/10 rounded-full blur-3xl animate-pulse"></div>
            <motion.div 
              style={{ rotate: cupRotation }}
              className="text-[#b57b49] drop-shadow-2xl z-20"
            >
              <img src={cup} alt="FamCup" className="w-48 h-48 object-contain" />
            </motion.div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 mb-6 font-medium max-w-2xl">
            Say goodbye to plastic cups with our 100% natural, fully edible alternative.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 items-center mb-8">
            <a href="#solution" className="bg-[#3b5c3b] text-[#fdfdfd] px-8 py-4 rounded-full font-bold text-lg hover:bg-[#6b8e4e] transition shadow-lg hover:shadow-xl transform hover:-translate-y-1">
              Join the Movement
            </a>
          </div>

          <div className="inline-flex items-center gap-3 bg-white px-5 py-2.5 rounded-full border border-[#b57b49]/30 shadow-sm text-[#b57b49] font-bold">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#b57b49] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#b57b49]"></span>
            </span>
            Coming soon for large-scale commercial adoption
          </div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-20 px-6 bg-[#fdfdfd] relative z-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#3b5c3b] mb-4">The Plastic Cup Crisis</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              500 billion cups are used globally per year. Most take 500+ years to decompose.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#f4f7f4] p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <FaExclamationTriangle className="text-[#b57b49] text-5xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-[#3b5c3b]">Microplastics</h3>
              <p className="text-gray-600">Paper cups leach microplastics and fluoride ions into hot water at 85–90°C within just 15 minutes.</p>
            </div>
            <div className="bg-[#f4f7f4] p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <FaRecycle className="text-[#b57b49] text-5xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-[#3b5c3b]">Cannot Be Recycled</h3>
              <p className="text-gray-600">Single-use cups are plastic-lined, rarely recovered or reprocessed.</p>
            </div>
            <div className="bg-[#f4f7f4] p-8 rounded-2xl text-center shadow-sm border border-gray-100">
              <FaLeaf className="text-[#6b8e4e] text-5xl mx-auto mb-4" />
              <h3 className="font-bold text-xl mb-2 text-[#3b5c3b]">Wildlife Threat</h3>
              <p className="text-gray-600">Plastic debris threatens marine and land animals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-20 px-6 bg-[#3b5c3b] text-[#fdfdfd] relative z-10">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
            <motion.div 
              whileInView={{ scale: [0.8, 1], opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="bg-[#fdfdfd] p-10 rounded-full aspect-square flex items-center justify-center shadow-2xl border-8 border-[#6b8e4e]"
            >
              <div className="text-center text-[#3b5c3b]">
                <GiWheat size={120} className="mx-auto mb-4 text-[#b57b49]" />
                <h3 className="font-black text-3xl">100% Natural</h3>
              </div>
            </motion.div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold mb-6">Ingredients & Proportions</h2>
            <ul className="grid grid-cols-2 gap-6 text-lg text-gray-200">
              <li className="flex items-center gap-3">
                <span className="bg-[#6b8e4e] text-white p-2 rounded-full"><FaLeaf size={14}/></span>
                <div><strong className="text-white">Wheat Flour:</strong> 55%</div>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#6b8e4e] text-white p-2 rounded-full"><FaLeaf size={14}/></span>
                <div><strong className="text-white">Jaggery Powder:</strong> 22.5%</div>
              </li>
              <li className="flex items-center gap-3">
                <span className="bg-[#6b8e4e] text-white p-2 rounded-full"><FaLeaf size={14}/></span>
                <div><strong className="text-white">Ghee:</strong> 22.5%</div>
              </li>
            </ul>
            <div className="mt-8 inline-block bg-[#6b8e4e] text-white font-bold py-3 px-6 rounded-lg shadow-md">
              100% Food-Grade • No Preservatives • Zero Chemicals
            </div>
          </div>
        </div>
      </section>

      {/* Nutrition & Market Applications */}
      <section id="details" className="py-20 px-6 bg-[#fdfdfd] relative z-10 border-t border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
          
          {/* Nutrition */}
          <div className="w-full md:w-1/2 bg-[#3b5c3b] p-8 rounded-2xl shadow-lg text-white flex flex-col justify-center">
            <h3 className="text-3xl font-bold mb-6">Nutrition Facts <span className="text-sm font-normal opacity-80">(per cup)</span></h3>
            <div className="text-5xl font-black mb-6">130 <span className="text-xl font-medium">Calories</span></div>
            <ul className="space-y-4 text-gray-200">
              <li className="flex justify-between border-b border-white/20 pb-2"><span>Total Fat</span> <span className="font-bold">5g (6% DV)</span></li>
              <li className="flex justify-between border-b border-white/20 pb-2"><span>Total Carbohydrate</span> <span className="font-bold">19g (7% DV)</span></li>
              <li className="flex justify-between border-b border-white/20 pb-2 pl-4 text-sm opacity-90"><span>Sugars</span> <span className="font-bold">11g</span></li>
              <li className="flex justify-between pt-2"><span>Protein</span> <span className="font-bold">2g</span></li>
            </ul>
          </div>

          {/* Applications */}
          <div className="w-full md:w-1/2 bg-white p-8 rounded-2xl border-t-4 border-[#6b8e4e] shadow-lg flex flex-col justify-center">
            <h3 className="text-3xl font-bold text-[#3b5c3b] mb-6">Commercial Applications</h3>
            <div className="grid grid-cols-2 gap-6 text-gray-700">
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[#f4f7f4] p-4 rounded-full text-[#b57b49] text-2xl"><FaCoffee /></div>
                <span className="text-sm font-semibold">Cafes & Restaurants</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[#f4f7f4] p-4 rounded-full text-[#6b8e4e] text-2xl"><FaLeaf /></div>
                <span className="text-sm font-semibold">Events & Festivals</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[#f4f7f4] p-4 rounded-full text-[#b57b49] text-2xl"><GiCoffeeCup /></div>
                <span className="text-sm font-semibold">Ice Cream Parlors</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <div className="bg-[#f4f7f4] p-4 rounded-full text-[#3b5c3b] text-2xl"><FaPlane /></div>
                <span className="text-sm font-semibold">Airlines & Railways</span>
              </div>
            </div>
            <div className="mt-6 p-4 bg-[#f4f7f4] rounded-lg border border-[#6b8e4e]/20 text-center">
              <p className="text-sm text-[#3b5c3b] font-bold mb-1">Innovative & Marketable</p>
              <p className="text-sm text-gray-600">Combining sustainability with a unique concept that has strong commercial appeal.</p>
            </div>
          </div>

        </div>
      </section>

      {/* Zero Waste Cycle Section */}
      <section id="lifecycle" className="py-20 px-6 bg-[#f4f7f4] text-center relative z-10 border-t border-gray-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-[#3b5c3b] mb-4">The Zero Waste Cycle</h2>
          <p className="text-lg text-gray-600 mb-16">A sustainable lifecycle with 0 kg waste sent to landfill.</p>

          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-8">
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-40">
              <div className="bg-[#fdfdfd] w-24 h-24 rounded-full flex items-center justify-center text-[#b57b49] text-4xl mb-4 shadow-md border border-[#6b8e4e]/20">
                <FaGlassWhiskey />
              </div>
              <h3 className="font-bold text-lg text-[#3b5c3b]">1. CUP USE</h3>
            </motion.div>
            
            <div className="text-[#6b8e4e] text-2xl hidden md:block">➔</div>
            
            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-40">
              <div className="bg-[#fdfdfd] w-24 h-24 rounded-full flex items-center justify-center text-[#b57b49] text-4xl mb-4 shadow-md border border-[#6b8e4e]/20">
                <GiWheat />
              </div>
              <h3 className="font-bold text-lg text-[#3b5c3b]">2. CRUMBLE</h3>
            </motion.div>

            <div className="text-[#6b8e4e] text-2xl hidden md:block">➔</div>

            <motion.div whileHover={{ scale: 1.05 }} className="flex flex-col items-center w-40">
              <div className="bg-[#fdfdfd] w-24 h-24 rounded-full flex items-center justify-center text-[#6b8e4e] text-4xl mb-4 shadow-md border border-[#6b8e4e]/20">
                <GiCow />
              </div>
              <h3 className="font-bold text-lg text-[#3b5c3b]">3. ANIMAL FEED</h3>
            </motion.div>
          </div>
          
          <p className="mt-12 text-gray-500 italic">Used cups crumbled into nutritious biscuits for dogs, cattle & livestock. 100% consumed.</p>
        </div>
      </section>

      {/* Footer with Feedback Form */}
      <footer id="feedback" className="bg-[#3b5c3b] text-[#fdfdfd] pt-16 pb-8 relative z-10 border-t-4 border-[#6b8e4e]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-start text-left">
          
          {/* Brand & Team Info */}
          <div>
            <div className="flex items-center gap-3 font-black text-3xl mb-6 text-[#fdfdfd]">
              <img src={logo} alt="FamCups Logo" className="w-12 h-12 bg-white rounded-full p-1" />
              FAM CUPS
            </div>
            <p className="text-base opacity-90 mb-3">A Student Startup Innovation. Global Impact Initiative.</p>
            <p className="text-base font-semibold text-[#a3c983] mb-6">Team: Harshit, Rahul, Yash, Sumit, Mahima</p>
            
            <div className="space-y-2 opacity-80 text-sm max-w-sm">
              <p>📍 Guided by: Professor Sumer Singh</p>
              <p>📧 Email: contact@famcups.com</p>
            </div>
          </div>

          {/* Feedback Form */}
          <div className="bg-[#fdfdfd] p-8 rounded-2xl shadow-xl text-gray-800">
            <h4 className="text-2xl font-bold text-[#3b5c3b] mb-2">We'd love your feedback!</h4>
            <p className="text-gray-500 mb-6 text-sm">Have suggestions or want to pre-order? Let us know.</p>
            
            {/* Google Form Link */}
            <a 
              href="https://docs.google.com/forms/d/e/1FAIpQLSdDURZaJogu5GoQEkpRtpIpLTDxFnhSpsn6PGTGfi9JJjvQMA/viewform?usp=publish-editor" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center w-full mb-6 bg-[#6b8e4e]/10 text-[#3b5c3b] border border-[#6b8e4e]/30 font-bold py-3 rounded-lg hover:bg-[#6b8e4e]/20 transition duration-300"
            >
              Fill out our Google Form
            </a>

            <div className="flex items-center gap-4 mb-6">
              <hr className="flex-1 border-gray-200" />
              <span className="text-xs text-gray-400 uppercase font-bold tracking-wider">Or use this form</span>
              <hr className="flex-1 border-gray-200" />
            </div>
            
            {/* Local Mock Form */}
            <form onSubmit={handleMockSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input 
                  type="text" 
                  name="user_firstname"
                  placeholder="First Name" 
                  required 
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6b8e4e] focus:bg-white transition" 
                />
                <input 
                  type="text" 
                  name="user_lastname"
                  placeholder="Last Name" 
                  className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6b8e4e] focus:bg-white transition" 
                />
              </div>
              <input 
                type="email" 
                name="user_email"
                placeholder="Email Address" 
                required 
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6b8e4e] focus:bg-white transition" 
              />
              <textarea 
                name="message"
                placeholder="Your Feedback or Inquiry..." 
                rows="3" 
                required 
                className="w-full p-3 bg-gray-50 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#6b8e4e] focus:bg-white transition resize-none"
              ></textarea>
              
              <button 
                type="submit" 
                disabled={submitStatus === 'sending'}
                className="w-full bg-[#3b5c3b] text-[#fdfdfd] font-bold py-3 rounded-lg hover:bg-[#6b8e4e] transition duration-300 shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center gap-2"
              >
                {submitStatus === 'sending' ? (
                  <>
                    <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Sending...
                  </>
                ) : 'Submit Feedback'}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <p className="text-green-600 text-sm mt-2 text-center font-medium bg-green-50 p-2 rounded">
                  Thank you! Your feedback has been sent.
                </p>
              )}
            </form>
          </div>

        </div>
        
        {/* Copyright */}
        <div className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t border-[#6b8e4e]/50 text-center text-sm opacity-70 flex flex-col md:flex-row justify-between items-center gap-4">
           <span>© 2026 FamCups. All rights reserved.</span>
           <div className="space-x-4">
             <a href="#" className="hover:text-white transition">Privacy Policy</a>
             <a href="#" className="hover:text-white transition">Terms of Service</a>
           </div>
        </div>
      </footer>
    </div>
  );
}