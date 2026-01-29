export function Markets() {
  const markets = [
    { title: 'North America', description: 'Reach 150M+ listeners across the US and Canada with precision targeting.' },
    { title: 'Europe', description: 'Access the fastest-growing music markets in the UK, Germany, France, and more.' },
    { title: 'Latin America', description: 'Connect with 80M+ passionate listeners in Brazil, Mexico, and Argentina.' },
    { title: 'Asia-Pacific', description: 'Tap into emerging markets with high engagement rates in India and Southeast Asia.' },
    { title: 'Middle East & Africa', description: 'Reach growing audiences in the fastest-expanding regions.' },
    { title: 'Global Campaigns', description: 'Launch coordinated campaigns across all regions simultaneously.' },
  ];

  return (
    <section id="markets" className="px-10 py-16 bg-[#282828]">
      <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Global Markets</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {markets.map((market, index) => (
          <div
            key={index}
            className="bg-[#404040] p-8 rounded-2xl border border-[rgba(29,185,84,0.2)] transition-all duration-300 hover:border-[#1DB954] hover:translate-y-[-10px] hover:shadow-[0_20px_40px_rgba(29,185,84,0.2)]"
          >
            <h3 className="text-xl font-bold mb-4 text-[#1DB954]">{market.title}</h3>
            <p className="text-[#B3B3B3] text-sm">{market.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
