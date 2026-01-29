'use client';

export function CaseStudies() {
  const studies = [
    {
      title: 'Global Music Festival Campaign',
      icon: '🎵',
      metrics: { value: '2.5M', label: 'Total Impressions' },
      description: 'Promoted international music festival across 5 regions, achieving 45% higher engagement than industry average.',
      tags: ['Multi-Region', 'Festival', 'Music'],
      featured: false,
    },
    {
      title: 'Premium Headphone Launch',
      icon: '🎧',
      metrics: { value: '320K', label: 'Conversions' },
      description: 'Audio equipment brand reached premium audience segments, resulting in 180% ROI and strong brand recall.',
      tags: ['Premium', 'Electronics', 'Launch'],
      featured: true,
    },
    {
      title: 'Energy Drink Market Expansion',
      icon: '⚡',
      metrics: { value: '4.2M', label: 'Engaged Listeners' },
      description: 'Successfully launched brand in 8 new markets with culturally targeted campaigns across diverse genres.',
      tags: ['Expansion', 'Beverage', 'Multi-Market'],
      featured: false,
    },
    {
      title: 'Artist Album Release Campaign',
      icon: '🎤',
      metrics: { value: '5.8M', label: 'Streams Driven' },
      description: 'Record label promoted album release to right audience segments, driving substantial first-week streams.',
      tags: ['Music', 'Release', 'Streaming'],
      featured: false,
    },
    {
      title: 'Gaming Platform User Acquisition',
      icon: '🎮',
      metrics: { value: '156K', label: 'New Users' },
      description: 'Gaming platform achieved lowest cost per user acquisition through targeted audio advertising.',
      tags: ['Gaming', 'User Acquisition', 'Performance'],
      featured: false,
    },
    {
      title: 'Fashion Brand Awareness',
      icon: '👗',
      metrics: { value: '68%', label: 'Brand Lift' },
      description: 'Luxury fashion brand built awareness among affluent audiences with premium playlist placements.',
      tags: ['Fashion', 'Awareness', 'Premium'],
      featured: false,
    },
  ];

  return (
    <section id="case-studies" className="px-10 py-20 bg-white text-[#191414]">
      <div className="mb-16 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight">
          Proven <span className="text-[#1DB954]">Success Stories</span>
        </h2>
        <p className="text-lg text-[rgba(25,20,20,0.6)] max-w-[500px] mx-auto">
          Real brands achieving real results with our platform
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        {studies.map((study, index) => (
          <div
            key={index}
            className={`bg-white border-2 rounded-2xl overflow-hidden transition-all duration-300 flex flex-col ${
              study.featured
                ? 'border-[#1DB954] border-[3px] scale-[1.02]'
                : 'border-[#E0E0E0] hover:border-[#1DB954] hover:shadow-[0_20px_60px_rgba(29,185,84,0.15)] hover:translate-y-[-8px]'
            }`}
          >
            <div className="bg-gradient-to-br from-[rgba(29,185,84,0.08)] to-[rgba(29,185,84,0.02)] px-8 py-12 flex flex-col items-center justify-center border-b border-[#E0E0E0]">
              <div className="text-5xl mb-3">{study.icon}</div>
              <h3 className="text-base font-semibold text-[#191414] text-center">{study.title.split(' ').slice(0, 2).join(' ')}</h3>
            </div>

            <div className="p-8 flex flex-col flex-grow">
              <h4 className="text-xl font-bold text-[#191414] mb-5">{study.title}</h4>

              <div className="mb-6 pb-6 border-b-2 border-[#E0E0E0]">
                <div className="text-4xl font-black text-[#1DB954] leading-none mb-1">{study.metrics.value}</div>
                <div className="text-sm text-[rgba(25,20,20,0.6)] font-medium uppercase tracking-wide">{study.metrics.label}</div>
              </div>

              <p className="text-sm text-[rgba(25,20,20,0.7)] leading-relaxed mb-6 flex-grow">
                {study.description}
              </p>

              <div className="flex gap-2 flex-wrap">
                {study.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="inline-block bg-[#F0F0F0] text-[#191414] px-3.5 py-1.5 rounded-full text-xs font-semibold border border-[#E0E0E0] group-hover:bg-[#1DB954] group-hover:text-white group-hover:border-[#1DB954]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
