import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

async function getPost(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}

export async function generateStaticParams() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  const posts = await res.json();
  
  return posts.map((post: any) => ({
    id: post.id.toString(),
  }));
}

export default async function PostPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const post = await getPost(id);

  return (
    <div className="bg-[#191414] min-h-screen text-white">
      <Navigation />
      <div className="pt-32 pb-20 px-10 max-w-3xl mx-auto">
        <Link href="/blog" className="text-[#1DB954] hover:underline mb-8 inline-block">
          ← Back to Blog
        </Link>
        <article>
          <h1 className="text-5xl font-bold mb-6 text-[#1DB954]">{post.title}</h1>
          <div className="prose prose-invert max-w-none text-[#B3B3B3] text-lg leading-relaxed">
            {post.body}
          </div>
        </article>
      </div>
      <Footer />
    </div>
  );
}
