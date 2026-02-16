export function Hero() {
  return (
    <section className="mt-20 px-10 py-20 bg-gradient-to-br from-[rgba(29,185,84,0.1)] to-[rgba(25,20,20,0)] text-center min-h-[600px] flex flex-col justify-center items-center">
      <h1 className="text-5xl md:text-6xl lg:text-7xl font-black mb-5 leading-tight">
        Reach Global <span className="text-[#1DB954]">Audiences</span>
      </h1>

      <p className="text-xl text-[#B3B3B3] max-w-[600px] mb-10">
        Amplify your brand's reach across Spotify with our advanced advertising platform. Connect with millions of engaged listeners worldwide.
      </p>

      <div className="flex gap-5 justify-center flex-wrap">
        <a href="#pricing" className="px-7 py-3 rounded-full border-none font-bold cursor-pointer transition-all duration-300 text-sm bg-[#1DB954] text-[#191414] hover:bg-[#1ed760] hover:scale-105">
          Start Your Campaign
        </a>
        <button className="px-7 py-3 rounded-full border-2 border-[#1DB954] bg-transparent text-white font-bold cursor-pointer transition-all duration-300 text-sm hover:bg-[#1DB954] hover:text-[#191414]">
          Learn More
        </button>
      </div>
    </section>
  );
}
