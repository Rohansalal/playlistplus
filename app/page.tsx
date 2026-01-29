import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { Markets } from '@/components/markets';
import { Pricing } from '@/components/pricing';
import { Features } from '@/components/features';
import { CaseStudies } from '@/components/case-studies';
import { ROI } from '@/components/roi';
import { CTA } from '@/components/cta';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <main className="bg-[#191414] text-white overflow-x-hidden">
      <Navigation />
      <Hero />
      <Markets />
      <Pricing />
      <Features />
      <CaseStudies />
      <ROI />
      <CTA />
      <Footer />
    </main>
  );
}
