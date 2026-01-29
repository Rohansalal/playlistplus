'use client';

import { useState } from 'react';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full bg-[rgba(25,20,20,0.95)] backdrop-blur-[10px] px-10 py-5 flex justify-between items-center z-[1000] border-b border-[#404040]">
      <div className="text-2xl font-black text-[#1DB954] tracking-tight">
        PlaylistPlus+
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

      <button className="hidden md:block px-7 py-2.5 rounded-full border-none font-bold cursor-pointer transition-all duration-300 text-sm bg-[#1DB954] text-[#191414] hover:bg-[#1ed760] hover:scale-105">
        Get Started
      </button>

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
        </ul>
      )}
    </nav>
  );
}
