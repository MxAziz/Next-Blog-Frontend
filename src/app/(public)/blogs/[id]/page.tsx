import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { getBlogById } from '@/services/PostServices';
import { IPost } from '@/types';

export const generateStaticParams = async () => {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const {data: blogs} = await res.json();

  return blogs?.slice(0, 2)?.map((blog: IPost) => ({ id: String(blog.id) }));
};

export const generateMetadata = async ({ params }: { params: Promise<{ id:string}>}) => {
    const { id } = await params;
    const blog = await getBlogById(Number(id));

    return {
        title: `${blog?.title} | Next Blog`
    }
}

const BlogDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
    const { id } = await params;
    const blog = await getBlogById(Number(id))

    return (
        <div>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;