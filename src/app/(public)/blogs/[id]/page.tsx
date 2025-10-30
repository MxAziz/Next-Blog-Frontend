/* eslint-disable @typescript-eslint/no-explicit-any */
import BlogDetailsCard from '@/components/modules/Blogs/BlogDetailsCard';
import React from 'react';

const BlogDetailsPage = async (context : any) => {
    const { id } = context.params;

    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`)
    const blog = await res.json();

    return (
        <div>
            <BlogDetailsCard blog={blog}/>
        </div>
    );
};

export default BlogDetailsPage;