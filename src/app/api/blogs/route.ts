import { NextResponse } from "next/server";

export const runtime = "edge";

export const blogs = [
    { id: 1, title: "first blog with nextjs" },
    { id: 2, title: "second blog with nextjs" },
    { id: 3, title: "third blog with nextjs" }
]

export async function GET() {
  return NextResponse.json(blogs);
}

export async function POST(req: Request) {
    const blog = await req.json();
    blogs.push(blog);
    return NextResponse.json({ message: "Blog added successfully", blog: blog });
}