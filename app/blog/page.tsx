import { Footer } from "@/components/footer";
import { Navigation } from "@/components/navigation";
import Link from "next/link";

async function getPosts() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=10');
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
}

export default async function Blog() {
  const posts = await getPosts();

  return (
    <div className="bg-[#191414] min-h-screen text-white">
      <Navigation />
      <div className="pt-32 pb-20 px-10 max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-10 text-[#1DB954]">Our Blog</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post: any) => (
            <Link key={post.id} href={`/blog/${post.id}`} className="group">
              <div className="bg-[#282828] p-6 rounded-lg border border-[#404040] hover:border-[#1DB954] transition-all duration-300 h-full">
                <h2 className="text-xl font-bold mb-3 group-hover:text-[#1DB954] transition-colors">{post.title}</h2>
                <p className="text-[#B3B3B3] line-clamp-3">{post.body}</p>
                <div className="mt-4 text-[#1DB954] font-medium">Read more →</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}
