// import { Eye, Rocket, Target, Users } from 'lucide-react';

// export default function AboutUsPage() {
//   return (
//     <main className="bg-[#191414] text-white py-20 px-6 sm:px-10 min-h-screen">
//       <div className="max-w-4xl mx-auto">
//         <h1 className="text-4xl font-bold mb-8 text-center text-[#1DB954]">About PlaylistPlus</h1>

//         {/* Our Mission Section */}
//         <section className="mb-12 text-center">
//           <div className="flex justify-center mb-4">
//             <Target className="w-12 h-12 text-[#1DB954]" />
//           </div>
//           <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
//           <p className="text-lg text-gray-400">
//             Our mission is to empower artists and labels by providing cutting-edge promotional tools that connect their music with engaged Spotify listeners. We strive to create a transparent and effective platform for organic growth.
//           </p>
//         </section>

//         {/* Our Vision Section */}
//         <section className="mb-12 text-center">
//           <div className="flex justify-center mb-4">
//             <Eye className="w-12 h-12 text-[#1DB954]" />
//           </div>
//           <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
//           <p className="text-lg text-gray-400">
//             We envision a music industry where every artist has the opportunity to be heard. By leveraging data and technology, we aim to be the leading force in Spotify promotion, fostering a vibrant and diverse musical ecosystem.
//           </p>
//         </section>

//         {/* Why Choose PlaylistPlus Section */}
//         <section className="mb-16">
//           <h2 className="text-3xl font-semibold mb-8 text-center">Why Choose PlaylistPlus?</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="flex flex-col items-center text-center">
//               <div className="flex justify-center mb-4">
//                 <Rocket className="w-10 h-10 text-[#1DB954]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Targeted Reach</h3>
//               <p className="text-gray-400">
//                 We use advanced algorithms to place your music in front of the right audience, maximizing engagement and ROI.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <div className="flex justify-center mb-4">
//                 <Users className="w-10 h-10 text-[#1DB954]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Organic Growth</h3>
//               <p className="text-gray-400">
//                 Our methods are designed to foster genuine fan connections, leading to sustainable growth for your music.
//               </p>
//             </div>
//             <div className="flex flex-col items-center text-center">
//               <div className="flex justify-center mb-4">
//                  <Target className="w-10 h-10 text-[#1DB954]" />
//               </div>
//               <h3 className="text-xl font-bold mb-2">Transparent Analytics</h3>
//               <p className="text-gray-400">
//                 Track your campaign's performance with our detailed and easy-to-understand analytics dashboard.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* CTA Section */}
//         <section className="text-center">
//           <h2 className="text-3xl font-semibold mb-4">Ready to Amplify Your Music?</h2>
//           <p className="text-lg text-gray-400 mb-8">
//             Join the hundreds of artists who have successfully grown their fanbase with PlaylistPlus.
//           </p>
//           <a
//             href="#pricing"
//             className="bg-[#1DB954] text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-[#1ed760] transition-colors"
//           >
//             See Our Plans
//           </a>
//         </section>
//       </div>
//     </main>
//   );
// }

import { Footer } from '@/components/footer';
import {Navigation} from '@/components/navigation';

export default function AboutPage() {
  return (
    <div className="bg-[#191414] text-white min-h-screen flex flex-col">
      <Navigation />
     <br />
     <br />
      {/* Main Content */}
      <main className="flex-grow py-20 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-20">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-[#1DB954]">PlaylistPlus About US</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              PlaylistPlus Pvt Ltd stands as a global leader in digital audio solutions, empowering independent artists, labels, and brands with cutting-edge Spotify ad campaigns and the largest UGC playlists on Spotify and Apple Music.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <div className="bg-gradient-to-br from-[#1DB954] to-[#0f8f3f] p-[1px] rounded-2xl">
              <div className="bg-[#191414] rounded-2xl p-8 md:p-12">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-[#1DB954]">Our Mission</h2>
                <p className="text-lg md:text-xl text-gray-200 leading-relaxed">
                  At PlaylistPlus, our mission is to democratize music promotion by delivering targeted digital audio solutions that connect creators with the right audiences worldwide, fostering sustainable growth through innovative Spotify ads and organic playlist curation.
                </p>
              </div>
            </div>
          </div>

          {/* Results Highlight */}
          <div className="mb-20">
            <div className="relative overflow-hidden rounded-2xl bg-[#1DB954] p-8 md:p-12">
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-black rounded-full filter blur-3xl"></div>
              </div>
              <div className="relative z-10">
                <h2 className="text-3xl md:text-4xl font-semibold mb-4 text-white">Industry-Leading Results</h2>
                <p className="text-lg md:text-xl text-white/80 leading-relaxed max-w-5xl">
                  We've driven millions of royalty-eligible streams for partners like <span className="font-bold">Sony Music India</span> and <span className="font-bold">Warner Music</span>, achieving top-tier algorithmic boosts and measurable fan engagement for independent artists across genres.
                </p>
              </div>
            </div>
          </div>

          {/* Why Us - Three Pillars */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#1DB954]">Why PlaylistPlus Stands Out</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-[#282828] p-8 rounded-xl border border-[#3E3E3E] hover:border-[#1DB954] transition-colors">
                <div className="w-12 h-12 bg-[#1DB954] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">Precision Geo-Targeting</h3>
                <p className="text-gray-400 leading-relaxed">Advanced geotargeting capabilities reaching audiences in Delhi, Mumbai, and beyond.</p>
              </div>
              <div className="bg-[#282828] p-8 rounded-xl border border-[#3E3E3E] hover:border-[#1DB954] transition-colors">
                <div className="w-12 h-12 bg-[#1DB954] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">Data-Driven Optimization</h3>
                <p className="text-gray-400 leading-relaxed">Real-time campaign adjustments based on performance metrics and listener behavior.</p>
              </div>
              <div className="bg-[#282828] p-8 rounded-xl border border-[#3E3E3E] hover:border-[#1DB954] transition-colors">
                <div className="w-12 h-12 bg-[#1DB954] rounded-lg mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1DB954]">Largest UGC Playlists</h3>
                <p className="text-gray-400 leading-relaxed">Unmatched organic reach through the biggest user-generated playlists on Spotify and Apple Music.</p>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div className="mb-20">
            <h2 className="text-3xl md:text-4xl font-semibold mb-10 text-center text-[#1DB954]">Our Core Values</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { title: 'Innovation', desc: 'Pioneering Spotify ad strategies and playlist solutions' },
                { title: 'Integrity', desc: 'Ensuring transparent, royalty-focused growth' },
                { title: 'Excellence', desc: 'Delivering results through strategic label partnerships' },
                { title: 'Artist-Centric', desc: 'Empowering independents to reach engaged listeners' }
              ].map((value, idx) => (
                <div key={idx} className="bg-[#282828] p-6 rounded-xl border border-[#3E3E3E]">
                  <h3 className="text-xl font-bold mb-2 text-[#1DB954]">{value.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Core Services & Partnerships */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            <div className="bg-[#282828] p-8 rounded-xl border border-[#3E3E3E]">
              <h2 className="text-2xl font-bold mb-4 text-[#1DB954]">Core Services</h2>
              <p className="text-gray-300 leading-relaxed">
                PlaylistPlus delivers targeted digital audio solutions that help independent artists and brands connect with the right audiences worldwide. Our Spotify ad platform drives real algorithmic streams, ensuring royalty-eligible plays and sustainable growth for music releases. We also manage extensive UGC playlists, amplifying reach through organic listener engagement on major streaming services.
              </p>
            </div>
            <div className="bg-[#282828] p-8 rounded-xl border border-[#3E3E3E]">
              <h2 className="text-2xl font-bold mb-4 text-[#1DB954]">Strategic Partnerships</h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                The company teams up with major labels like <span className="text-[#1DB954] font-semibold">Sony Music India</span> and <span className="text-[#1DB954] font-semibold">Warner Music</span>, providing tailored promotion strategies. These collaborations enable precise geotargeting and ad optimization, helping partners scale campaigns effectively.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 bg-[#1DB954] text-black rounded-full text-sm font-semibold">Sony Music India</span>
                <span className="px-4 py-2 bg-[#1DB954] text-black rounded-full text-sm font-semibold">Warner Music</span>
                <span className="px-4 py-2 bg-[#1DB954] text-black rounded-full text-sm font-semibold">Independent Artists</span>
              </div>
            </div>
          </div>

          {/* Impact Stats */}
          <div className="mb-20">
            <div className="bg-gradient-to-r from-[#1DB954] to-[#14883e] rounded-2xl p-8 md:p-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">Impact on Artists</h2>
              <p className="text-lg text-white/80 text-center max-w-3xl mx-auto mb-12">
                Independent artists benefit from PlaylistPlus's platform through boosted visibility on Spotify and Apple Music's top UGC playlists. With expertise in ad growth and playlist curation, the company has supported thousands of creators in achieving measurable streams and fan followings.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">10K+</div>
                  <div className="text-white/70 text-lg">Artists Supported</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">50M+</div>
                  <div className="text-white/70 text-lg">Streams Generated</div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-bold text-white mb-2">100+</div>
                  <div className="text-white/70 text-lg">Global Partners</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer
      <footer className="border-t border-gray-800 py-12 px-6 sm:px-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <svg className="w-8 h-8 text-[#1DB954]" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.68.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
                </svg>
                <span className="text-xl font-bold text-[#1DB954]">PlaylistPlus</span>
              </div>
              <p className="text-gray-400 text-sm">© 2026 PlaylistPlus Pvt Ltd. All rights reserved.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="/about" className="hover:text-[#1DB954] transition-colors">About</a></li>
                <li><a href="/privacy" className="hover:text-[#1DB954] transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-[#1DB954] transition-colors">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:playlistplusofficial@gmail.com" className="hover:text-[#1DB954] transition-colors">playlistplusofficial@gmail.com</a>
                </li>
                <li className="flex items-center space-x-2">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918140774326" className="hover:text-[#1DB954] transition-colors">+91 8140774326</a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-3">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#1DB954] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879v-6.99h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.99C18.343 21.128 22 16.991 22 12z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1DB954] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 18.82 6.03 19.5 8.28 19.5c9.94 0 15.38-8.23 15.38-15.38 0-.23 0-.46-.02-.69.85-.62 1.6-1.4 2.18-2.28z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#1DB954] transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.405a1.44 1.44 0 112.881.001 1.44 1.44 0 01-2.881-.001z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="text-center text-gray-500 text-sm pt-8 border-t border-gray-800">
            Made with ❤️ for independent artists worldwide
          </div>
        </div>
      </footer> */}
      <Footer />
    </div>
  );
}