'use client';

import React from "react"

import { useState } from 'react';

export function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowModal(false);
    setFormData({ name: '', email: '', company: '', message: '' });
  };

  return (
    <>
      <section className="px-10 py-20 bg-gradient-to-r from-[rgba(29,185,84,0.15)] to-[rgba(29,185,84,0.05)] text-center">
        <h2 className="text-4xl md:text-5xl font-black mb-5">Ready to Launch?</h2>
        <p className="text-lg text-[#B3B3B3] mb-10 max-w-[600px] mx-auto">
          Join thousands of brands already reaching millions of listeners. Get started in minutes.
        </p>

        <a href="#pricing" className="px-8 py-3.5 rounded-full border-none font-bold cursor-pointer transition-all duration-300 text-base bg-[#1DB954] text-[#191414] hover:bg-[#1ed760] hover:scale-105">
          Get Started Now
        </a>
      </section>

      {showModal && (
        <div className="fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.8)] z-[2000] flex justify-center items-center">
          <div className="bg-[#282828] p-10 rounded-3xl w-11/12 max-w-[500px] border border-[rgba(29,185,84,0.3)]">
            <div className="flex justify-between items-center mb-8">
              <h2 className="text-2xl font-bold">Get Started with PlaylistPlus+</h2>
              <button
                onClick={() => setShowModal(false)}
                className="bg-none border-none text-[#B3B3B3] text-2xl cursor-pointer transition-colors duration-300 hover:text-[#1DB954]"
              >
                ✕
              </button>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="mb-5">
                <label className="block mb-2 text-[#B3B3B3] text-sm font-medium">Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-[#191414] border border-[#404040] rounded-2xl text-white placeholder-[#B3B3B3] font-inherit transition-colors duration-300 focus:outline-none focus:border-[#1DB954]"
                  placeholder="John Doe"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-[#B3B3B3] text-sm font-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full p-3 bg-[#191414] border border-[#404040] rounded-2xl text-white placeholder-[#B3B3B3] font-inherit transition-colors duration-300 focus:outline-none focus:border-[#1DB954]"
                  placeholder="you@example.com"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-[#B3B3B3] text-sm font-medium">Company</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#191414] border border-[#404040] rounded-2xl text-white placeholder-[#B3B3B3] font-inherit transition-colors duration-300 focus:outline-none focus:border-[#1DB954]"
                  placeholder="Your Company"
                />
              </div>

              <div className="mb-5">
                <label className="block mb-2 text-[#B3B3B3] text-sm font-medium">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full p-3 bg-[#191414] border border-[#404040] rounded-2xl text-white placeholder-[#B3B3B3] font-inherit transition-colors duration-300 focus:outline-none focus:border-[#1DB954] resize-vertical min-h-[100px]"
                  placeholder="Tell us about your campaign..."
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#1DB954] text-[#191414] border-none rounded-full font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#1ed760] hover:scale-105"
              >
                Start Your Campaign
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
