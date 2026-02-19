// app/blog/[id]/page.tsx
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

export default async function PostPage({ params }: { params: { id: string } }) {
  const post = await getPost(params.id);

  return (
    <div>
      <Navigation />
      <div className="pt-24 px-10">
        <Link href="/blog" className="px-4 py-2 bg-gray-500 text-white rounded-md mb-4 inline-block">
            Go Back
            </Link>
        <h1 className="text-4xl font-bold">{post.title}</h1>
        <p className="mt-4">{post.body}</p>
      </div>
      <Footer />
    </div>
  );
}
