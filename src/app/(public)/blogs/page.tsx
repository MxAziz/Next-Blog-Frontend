import BlogCard from "@/components/modules/Blogs/BlogCard";
import { IPost } from "@/types";

const AllBlogsPage = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const { data: blogs } = await res.json();
  return (
    <div className="py-30 px-4 max-w-7xl mx-auto">
      <h2 className="text-center text-4xl">All Blogs</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 px-8 mt-16">
        {
          blogs.map((blog: IPost)=><BlogCard key={blog.id} post={blog} />)
        }
      </div>
    </div>
  );
};

export default AllBlogsPage;
