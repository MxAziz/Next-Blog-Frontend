import BlogCard from "@/components/modules/Blogs/BlogCard";
import Hero from "@/components/modules/Home/Hero";
import { IPost } from "@/types";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const {data: blogs} = await res.json();

  return (
    <div>
      <Hero />
      <h2 className="text-center my-12 text-5xl">Featured Posts</h2>
      <div className="grid grid-cols-3 gap-5 px-8 mb-8 mt-16">
        {
          blogs.map((blog: IPost) =><BlogCard key={blog.id} post={blog} />)
        }
      </div>
    </div>
  );
}
