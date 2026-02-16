'use client';

import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(25,20,20,0.95)] backdrop-blur-[10px] px-10 py-5 flex justify-between items-center z-[1000] border-b border-[#404040]">
      <div className="flex items-center">
        <img src="/logo.png" alt="PlaylistPlus+ Logo" className="h-10" /> 
      </div>

      <ul className="hidden md:flex gap-10 list-none">
        <li>
          <a
            href="#markets"
            className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
          >
            Markets
          </a>
        </li>
        <li>
          <a
            href="#pricing"
            className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
          >
            Pricing
          </a>
        </li>
        <li>
          <a
            href="#features"
            className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
          >
            Features
          </a>
        </li>
        <li>
          <a
            href="#case-studies"
            className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
          >
            Case Studies
          </a>
        </li>
      </ul>

      <div className="hidden md:flex gap-4">
        <a
          href="https://wa.me/918140774326?text=how%20can%20help%20you"
          target="_blank"
          rel="noopener noreferrer"
          className="px-7 py-2.5 rounded-full border-none font-bold cursor-pointer transition-all duration-300 text-sm bg-[#25D366] text-white hover:bg-[#1DA851] hover:scale-105 flex items-center gap-2"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
            <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
          </svg>
          WhatsApp
        </a>
        <button className="px-7 py-2.5 rounded-full border-none font-bold cursor-pointer transition-all duration-300 text-sm bg-[#1DB954] text-[#191414] hover:bg-[#1ed760] hover:scale-105">
          Get Started
        </button>
      </div>

      <button
        className="md:hidden flex flex-col gap-1.5 bg-none border-none cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-0.5 bg-[#1DB954]" />
        <div className="w-6 h-0.5 bg-[#1DB954]" />
        <div className="w-6 h-0.5 bg-[#1DB954]" />
      </button>

      {isOpen && (
        <ul className="absolute top-20 left-0 right-0 flex flex-col gap-4 list-none md:hidden bg-[#282828] p-5 border-b border-[#404040]">
          <li>
            <a
              href="#markets"
              className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
              onClick={() => setIsOpen(false)}
            >
              Markets
            </a>
          </li>
          <li>
            <a
              href="#pricing"
              className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
              onClick={() => setIsOpen(false)}
            >
              Features
            </a>
          </li>
          <li>
            <a
              href="#case-studies"
              className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954]"
              onClick={() => setIsOpen(false)}
            >
              Case Studies
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/918140774326?text=how%20can%20help%20you"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#B3B3B3] no-underline font-medium transition-colors duration-300 hover:text-[#1DB954] flex items-center gap-2"
              onClick={() => setIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                <path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326zM7.994 14.521a6.6 6.6 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.56 6.56 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592m3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.73.73 0 0 0-.529.247c-.182.198-.691.677-.691 1.654s.71 1.916.81 2.049c.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232"/>
              </svg>
              WhatsApp
            </a>
          </li>
        </ul>
      )}
    </nav>
  );
}
