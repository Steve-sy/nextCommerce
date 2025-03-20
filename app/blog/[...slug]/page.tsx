import { Image } from "@heroui/image";
import { IoChevronBackCircle } from "react-icons/io5";

async function fetchPost(postID: string) {
  const res = await fetch(`https://dummyjson.com/posts/${postID}`);

  return res.json();
}

// Generate metadata before rendering the component (No double fetches)
export async function generateMetadata({
  params
}: {
  params: { slug: string };
}) {
  const postID = String(params.slug).split("-")[0];
  const post = await fetchPost(postID);

  return { title: post.title, description: post.body.substring(0, 150) };
}

export default async function BlogPage({
  params
}: {
  params: { slug: string };
}) {
  const postID = String(params.slug).split("-")[0];

  // Fetch post data for rendering
  const post = await fetchPost(postID);

  return (
    <>
      <div className="max-w-full mx-auto pb-5">
        <div>
          <a
            className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            href="/blog"
          >
            <IoChevronBackCircle className="mr-2" size={24} />
            Go back
          </a>
        </div>
      </div>
      <article className="pb-8">
        <p className="text-sm text-slate-700 dark:text-slate-400 pb-4">
          Published on: {new Date(post.date_published).toDateString()}
        </p>
        <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
          {post.title}
        </h1>
        <div className="mt-6">
          <ul className="flex flex-wrap text-sm leading-6 -mt-6 -mx-5">
            <li className="flex items-center font-medium whitespace-nowrap px-5 mt-6">
              <Image
                alt="Author"
                className="mr-3 w-9 h-9 rounded-full bg-slate-50 dark:bg-slate-800"
                decoding="async"
                src="https://i.pravatar.cc/300/jpg"
              />
              <div className="text-sm leading-4">
                <div className="text-slate-900 dark:text-slate-200">
                  {post.author}
                </div>
                <div className="mt-1">
                  <a
                    className="text-sky-500 hover:text-sky-600 dark:text-sky-400"
                    href="https://twitter.com/"
                  >
                    @{post.author}
                  </a>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="flex flex-col mt-12 prose prose-slate dark:prose-dark gap-5 leading-7">
          <Image src="https://picsum.photos/1000/1000.jpg?random" />
          {post.body}
        </div>
      </article>
    </>
  );
}
