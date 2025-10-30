import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`,{next:{revalidate: 30}});
  const {data: blogs} = await res.json();

  return (
    <div>
      {/* hero section */}
      <Hero />
      {/* featured posts section */}
      <h2 className="text-center my-12 text-5xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 px-8 my-16">
        {blogs.slice(0, 3).map((blog: IPost) => (
          <BlogCard key={blog.id} post={blog} />
        ))}
      </div>
    </div>
  );
}
