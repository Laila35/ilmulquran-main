import { getAllBlogData } from "@/lib/blog-helpers";
import dynamic from "next/dynamic";

export const revalidate = 60;

export const metadata = {
  title: "All Blog Posts - IlmulQuran",
  description:
    "Browse all our blog posts on Quran learning, Islamic studies, and educational resources.",
  openGraph: {
    title: "All Blog Posts - IlmulQuran",
    description:
      "Browse all our blog posts on Quran learning, Islamic studies, and educational resources.",
    type: "website",
  },
};

// Dynamically import the client component to avoid SSR issues
const BlogPageClient = dynamic(
  () => import("../components/BlogPageClient"),
  { ssr: false }
);

export default async function AllPostsPage() {
  const { categories, posts } = await getAllBlogData();

  return (
    <div className="min-h-screen py-10 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#054d3b]">
          All Blog Posts
        </h1>

        {posts.length === 0 ? (
          <p className="text-center text-gray-600 text-lg">
            No posts available at the moment.
          </p>
        ) : (
          <BlogPageClient categories={categories} posts={posts} />
        )}
      </div>
    </div>
  );
}
