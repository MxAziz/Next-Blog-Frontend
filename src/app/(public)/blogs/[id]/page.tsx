import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import { IPost } from '@/types';
import React from 'react';

// function name atai hote hobe .
export const generateStaticParams = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/posts`);
    const { data: blogs } = await res.json();

    return blogs.slice(0, 3).map((blog: IPost) => ({id: blog.id.toString()}));
}

export const generateMetadata = async ({ params }: { params: Promise<{ id:string}>}) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`)
    const blog = await res.json();

    return {
        title: `${blog.title} | Next Blog`
    }
}

const BlogDetailsPage = async ({params}: {params: Promise<{id: string}>}) => {
    const { id } = await params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`)
    const blog = await res.json();

    return (
        <div>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;