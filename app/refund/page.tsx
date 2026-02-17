import Script from 'next/script'
import { Footer } from "../../components/footer";
import { Navigation } from "../../components/navigation";
export default function RefundPolicyPage() {
  return (
    <div className="bg-[#191414] text-white min-h-screen flex flex-col">
      <Navigation />
      <br />
      <br />
    <main className="bg-[#191414] text-white py-20 px-6 sm:px-10 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center text-[#1DB954]">Refund Policy</h1>
        <p className="mb-4 text-center text-sm text-gray-400">Last Updated: February 17, 2026</p>

        <section className="mb-8">
          <p className="mb-4">
            PlaylistPlus aims for satisfaction. Refunds assessed case-by-case.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Eligible Refunds (Within 3 Days):</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Pre-launch: 100% if no ad spend (setup fees deducted 20%).</li>
            <li>Post-launch: Partial (50% max) if campaign fails due to our error (e.g., targeting mistake)—Spotify ad credits non-refundable.</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">No refunds for:</h2>
          <p className="mb-4">
            Poor performance, Spotify policy changes, user content issues.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Process:</h2>
          <ul className="list-disc list-inside mb-4 ml-4">
            <li>Email playlistplusofficial@gmail.com with order ID/SS.</li>
            <li>Review within 48 hours; Spotify dashboard proof required.</li>
            <li>Processed via original method (7-10 days).</li>
          </ul>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Non-Refundable:</h2>
            <p className="mb-4">
                Ad budgets spent, custom services
            </p>
        </section>

        <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Disputes:</h2>
            <p className="mb-4">
                Final via arbitration in Delhi.
            </p>
        </section>
      </div>
    </main>
    <Footer />
    </div>
  );
}
