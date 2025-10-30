import Hero from "@/components/modules/Home/Hero";

export default async function HomePage() {

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post`);
  const featuredPosts = await res.json();
  console.log(featuredPosts);
  return (
    <div>
      <Hero />
      <h2 className="text-center my-5 text-4xl">Featured Posts</h2>
    </div>
  );
}
