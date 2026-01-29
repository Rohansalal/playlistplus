export function ROI() {
  return (
    <section className="px-10 py-20 bg-[#191414]">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
        <div>
          <h2 className="text-4xl md:text-5xl font-black mb-8">Maximize Your ROI</h2>

          <div className="mb-8 pb-8 border-b border-[rgba(29,185,84,0.2)]">
            <div className="text-4xl font-black text-[#1DB954] mb-2">3.5x</div>
            <div className="text-[#B3B3B3] text-sm">Average ROI on campaigns</div>
          </div>

          <div className="mb-8 pb-8 border-b border-[rgba(29,185,84,0.2)]">
            <div className="text-4xl font-black text-[#1DB954] mb-2">45%</div>
            <div className="text-[#B3B3B3] text-sm">Better conversion rates vs. display ads</div>
          </div>

          <div>
            <div className="text-4xl font-black text-[#1DB954] mb-2">2.1M+</div>
            <div className="text-[#B3B3B3] text-sm">Total conversions driven for clients</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-5">
          <div className="bg-[rgba(29,185,84,0.1)] p-5 rounded-2xl border border-[rgba(29,185,84,0.2)]">
            <div className="text-sm text-[#B3B3B3] font-medium">Average CTR</div>
            <div className="text-2xl font-black text-[#1DB954]">2.8%</div>
          </div>

          <div className="bg-[rgba(29,185,84,0.1)] p-5 rounded-2xl border border-[rgba(29,185,84,0.2)]">
            <div className="text-sm text-[#B3B3B3] font-medium">Cost Per Lead</div>
            <div className="text-2xl font-black text-[#1DB954]">$0.42</div>
          </div>

          <div className="bg-[rgba(29,185,84,0.1)] p-5 rounded-2xl border border-[rgba(29,185,84,0.2)]">
            <div className="text-sm text-[#B3B3B3] font-medium">Campaign Reach</div>
            <div className="text-2xl font-black text-[#1DB954]">180+</div>
          </div>

          <div className="bg-[rgba(29,185,84,0.1)] p-5 rounded-2xl border border-[rgba(29,185,84,0.2)]">
            <div className="text-sm text-[#B3B3B3] font-medium">Setup Time</div>
            <div className="text-2xl font-black text-[#1DB954]">24hrs</div>
          </div>
        </div>
      </div>
    </section>
  );
}
