import CardPost from "./CardPost";

import { title } from "@/components/primitives";

// Fetch posts directly inside the component
export default async function BlogPage() {
  let posts = [];
  let error = null;

  try {
    const res = await fetch("https://dummyjson.com/posts");

    if (!res.ok) {
      throw new Error("Failed to fetch posts");
    }

    posts = (await res.json()).posts;
  } catch (err: any) {
    error = err.message; // Capture the error message
  }

  return (
    <>
      <h1 className={`${title()}`}>Blog</h1>

      {error ? ( // Show error message if there's an error
        <p>Error: {error}</p>
      ) : posts.length > 0 ? (
        <div className="py-10 max-w-full gap-2 grid grid-cols-12 px-8">
          {posts.map((post: any) => (
            <CardPost key={post.id} post={post} />
          ))}
        </div>
      ) : (
        <p>No posts available.</p>
      )}
    </>
  );
}
