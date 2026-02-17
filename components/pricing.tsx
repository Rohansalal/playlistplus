export function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '$499',
      period: 'per month',
      description: 'Perfect for small campaigns and testing',
      featured: false,
      features: [
        'Up to 1M impressions',
        'Single market targeting',
        'Basic analytics dashboard',
        'Email support',
        'Standard reporting',
      ],
    },
    {
      name: 'Professional',
      price: '$1,999',
      period: 'per month',
      description: 'Ideal for growing brands',
      featured: true,
      badge: 'POPULAR',
      features: [
        'Up to 10M impressions',
        'Multi-market targeting',
        'Advanced analytics',
        'Priority support',
        'Custom reporting',
        'A/B testing tools',
      ],
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'contact sales',
      description: 'For large-scale campaigns',
      featured: false,
      features: [
        'Unlimited impressions',
        'Global targeting',
        'Dedicated account manager',
        '24/7 support',
        'Custom integrations',
        'Real-time optimization',
      ],
    },
  ];

  return (
    <section id="pricing" className="px-10 py-20 bg-[#191414]">
      <h2 className="text-4xl md:text-5xl font-black mb-5 text-center">Simple Pricing</h2>
      <p className="text-center text-[#B3B3B3] mb-16 text-base">Choose the plan that fits your needs</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`bg-[#282828] p-10 rounded-2xl border-2 transition-all duration-300 relative ${
              plan.featured
                ? 'border-[#1DB954] scale-[1.08]'
                : 'border-[#404040] hover:border-[#1DB954] hover:scale-105 hover:shadow-[0_20px_60px_rgba(29,185,84,0.3)]'
            }`}
          >
            {plan.badge && (
              <div className="absolute top-[-15px] right-5 bg-[#1DB954] text-[#191414] px-4 py-2 rounded-full font-bold text-xs">
                {plan.badge}
              </div>
            )}

            <h3 className="text-2xl font-bold mb-2 text-[#1DB954]">{plan.name}</h3>
            <div className="text-4xl font-black mb-1">{plan.price}</div>
            <div className="text-[#B3B3B3] text-sm mb-4">{plan.period}</div>
            <p className="text-[#B3B3B3] text-sm mb-6 leading-relaxed">{plan.description}</p>

            <ul className="list-none mb-8">
              {plan.features.map((feature, idx) => (
                <li
                  key={idx}
                  className="py-2.5 text-[#B3B3B3] text-sm border-b border-[rgba(29,185,84,0.1)] flex items-center"
                >
                  <span className="text-[#1DB954] font-bold mr-3 text-base">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            <a href={"https://wa.me/918140774326?text=" + encodeURIComponent("I want " + plan.name + " plan")} target="_blank" rel="noopener noreferrer">
            <button className="w-full py-3.5 bg-[#1DB954] text-[#191414] border-none rounded-full font-bold text-sm cursor-pointer transition-all duration-300 hover:bg-[#1ed760] hover:scale-105">
              Get Started
            </button>
            </a>

            <div className="flex gap-2 justify-center mt-4 flex-wrap">
              <span className="text-xs px-2.5 py-1 bg-[rgba(29,185,84,0.15)] border border-[rgba(29,185,84,0.3)] rounded-full text-[#1DB954] font-bold">
                Flexible
              </span>
              <span className="text-xs px-2.5 py-1 bg-[rgba(29,185,84,0.15)] border border-[rgba(29,185,84,0.3)] rounded-full text-[#1DB954] font-bold">
                No Setup Fee
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
