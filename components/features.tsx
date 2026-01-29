'use client';

export function Features() {
  const features = [
    {
      title: 'Precision Targeting',
      description: 'Reach your ideal audience based on music taste, demographics, and listening behavior.',
    },
    {
      title: 'Real-Time Analytics',
      description: 'Monitor campaign performance with live dashboards and detailed conversion tracking.',
    },
    {
      title: 'Creative Management',
      description: 'Upload, manage, and optimize multiple ad creatives with built-in A/B testing.',
    },
    {
      title: 'Global Reach',
      description: 'Access premium placements across 180+ countries with local market expertise.',
    },
    {
      title: 'Smart Bidding',
      description: 'Automatic bid optimization to maximize ROI and minimize cost per acquisition.',
    },
    {
      title: 'Brand Safety',
      description: 'Advanced controls to ensure your ads appear alongside brand-safe content.',
    },
  ];

  return (
    <section id="features" className="px-10 py-20 bg-gradient-to-b from-[#282828] to-[#191414]">
      <h2 className="text-4xl md:text-5xl font-black mb-16 text-center">Powerful Features</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-[1200px] mx-auto">
        {features.map((feature, index) => (
          <div key={index} className="text-center">
            <div className="w-[70px] h-[70px] bg-[rgba(29,185,84,0.12)] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 stroke-[#1DB954] stroke-[1.5px]" fill="none" viewBox="0 0 24 24">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>

            <h3 className="text-lg font-bold mb-3 text-[#1DB954]">{feature.title}</h3>
            <p className="text-[#B3B3B3] text-sm leading-relaxed">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
