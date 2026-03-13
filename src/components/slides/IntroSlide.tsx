import { ExternalLink, Send, Shield } from "lucide-react";

export const IntroSlide = () => (
  <div className="slide-inner min-h-screen flex items-center">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full max-w-6xl mx-auto items-center">
      
      {/* Left: Chatbot Preview */}
      <div className="order-2">
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200 max-w-sm mx-auto">
          {/* Chat Header - White bar like the app */}
          <div className="bg-white px-3 py-2 flex items-center justify-between border-b border-gray-100">
            <div className="flex items-center gap-2">
              <img src="/images/emoji.png" alt="Rafikey" className="w-6 h-6" />
              <span className="text-gray-900 font-semibold text-sm">Rafikey</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-gray-400" />
              <span className="text-gray-500 text-[10px]">Privacy mode</span>
            </div>
          </div>
          
          {/* Chat Messages Area - Light teal background */}
          <div className="bg-[#d4f0f0] h-[280px] sm:h-[320px] md:h-[350px] overflow-y-auto p-3 space-y-3">
            {/* Bot Message */}
            <div className="flex gap-2">
              <img src="/images/emoji.png" alt="Rafikey" className="w-6 h-6 rounded-full flex-shrink-0" />
              <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 max-w-[180px] sm:max-w-[200px] shadow-sm">
                <p className="text-gray-800 text-xs sm:text-sm">Hi there! I'm Rafikey, your youth health companion. How can I help you today?</p>
              </div>
            </div>
            
            {/* User Message - Pink bubble */}
            <div className="flex gap-2 flex-row-reverse">
              <div className="w-6 h-6 rounded-full bg-[#ec4899] flex items-center justify-center flex-shrink-0">
                <span className="text-white text-[10px]">👤</span>
              </div>
              <div className="bg-[#ec4899] rounded-2xl rounded-tr-none px-3 py-2 max-w-[180px] sm:max-w-[200px]">
                <p className="text-white text-xs sm:text-sm">What is emergency contraception?</p>
              </div>
            </div>
            
            {/* Bot Response */}
            <div className="flex gap-2">
              <img src="/images/emoji.png" alt="Rafikey" className="w-6 h-6 rounded-full flex-shrink-0" />
              <div className="bg-white rounded-2xl rounded-tl-none px-3 py-2 max-w-[180px] sm:max-w-[200px] shadow-sm">
                <p className="text-gray-800 text-xs sm:text-sm">Emergency contraception can prevent pregnancy after unprotected sex. In Kenya, options include:</p>
                <ul className="mt-1.5 space-y-1 text-gray-700 text-xs">
                  <li className="flex items-start gap-1">
                    <span className="text-[#ec4899] mt-0.5">●</span>
                    <span><span className="font-medium">Levonorgestrel pills</span> - 72-120 hrs</span>
                  </li>
                  <li className="flex items-start gap-1">
                    <span className="text-[#ec4899] mt-0.5">●</span>
                    <span><span className="font-medium">Copper IUD</span> - up to 5 days</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          {/* Chat Input - Light gray bar */}
          <div className="bg-[#f0f2f5] p-2">
            <div className="flex items-center gap-2 bg-white rounded-xl px-3 py-2 shadow-sm">
              <input 
                type="text" 
                placeholder="Message Rafikey..." 
                className="flex-1 bg-transparent border-none focus:outline-none text-xs sm:text-sm text-gray-800 placeholder-gray-400"
              />
              <button className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#ec4899] flex items-center justify-center">
                <Send className="w-3 h-3 text-white" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Content */}
      <div className="order-1 flex flex-col justify-center text-center lg:text-left">
        <div className="mb-4 sm:mb-6">
          <img src="/images/rafikey-mascot-hero-section-DxYB9F-U.svg" alt="Rafikey Mascot" className="w-32 sm:w-40 md:w-48 h-auto mx-auto" />
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight mb-4 max-w-3xl">
          AskRafikey
        </h1>
        <p className="text-foreground/90 text-base sm:text-lg md:text-xl font-light max-w-2xl mb-2">
          Kenya's first AI-powered SRHR chatbot for young people.
        </p>
        <p className="text-foreground/80 text-sm max-w-xl mb-8">
          A product case study — from research to live launch.
        </p>
        <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start mb-8 sm:mb-10">
          {["Product Management", "AI/LLM", "User Research", "Coalition Building"].map(tag => (
            <span key={tag} className="font-mono text-[0.65rem] sm:text-[0.75rem] uppercase tracking-wider px-2 sm:px-3 py-1 sm:py-1.5 rounded-full border border-input text-foreground/90">
              {tag}
            </span>
          ))}
        </div>
        <a
          href="https://askrafikey.com"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 sm:px-6 py-2.5 sm:py-3 rounded-full text-sm font-semibold hover:bg-primary/90 transition-colors w-fit mx-auto lg:mx-0"
        >
          <ExternalLink className="w-3.5 h-3.5" />
          Visit askrafikey.com
        </a>
      </div>
    </div>
  </div>
);