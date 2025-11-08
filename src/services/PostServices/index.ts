export const getBlogById = async (id: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_API}/post/${id}`);
    return await res.json();
}