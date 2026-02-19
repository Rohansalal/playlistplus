// app/blog/page.tsx
import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";

export default function Blog() {
  return (
    <div>
      <Navigation />
      <div className="pt-24">
        <h1 className="text-4xl font-bold text-center">Blog</h1>
        <p className="text-center text-lg mt-4">Coming soon...</p>
      </div>
      <Footer />
    </div>
  );
}
