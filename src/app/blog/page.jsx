import { getAllBlogData } from "@/lib/blog-helpers";
import BlogPageClient from "./components/BlogPageClient";
import './singleBlog.css';

export const revalidate = 60;

export const metadata = {
  title: "Our Blog - IlmulQuran",
  description:
    "Explore our latest articles on Quran learning, Islamic studies, and educational resources for students of all ages.",
  openGraph: {
    title: "Our Blog - IlmulQuran",
    description:
      "Explore our latest articles on Quran learning, Islamic studies, and educational resources.",
    type: "website",
  },
};

export default async function BlogPage() {
  const { categories, posts } = await getAllBlogData();

  if (posts.length === 0) {
    return (
      <div className="min-h-screen py-10 bg-[#f5f5f5]">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold text-[#054d3b] mb-4">Our Blog</h1>
          <p className="text-gray-600 text-lg">
            No blog posts available at the moment. Please check back later.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-10 bg-[#f5f5f5]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8 text-[#054d3b]">
          Our Blog
        </h1>
        <BlogPageClient categories={categories} posts={posts} />
      </div>
    </div>
  );
}
