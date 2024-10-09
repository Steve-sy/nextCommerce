import React from "react";
import { Image } from "@nextui-org/image";
import { IoChevronBackCircle } from "react-icons/io5";

export default async function ProductPage({
  params
}: {
  params: { slug: string };
}) {
  const productID = String(params.slug).split("-")[0];
  const res = await fetch(`https://dummyjson.com/products/${productID}`);
  const product = await res.json();

  return (
    <>
      <div className="max-w-full mx-auto pb-5">
        <div>
          <a
            className="group flex font-semibold text-sm leading-6 text-slate-700 hover:text-slate-900 dark:text-slate-200 dark:hover:text-white"
            href="/products"
          >
            <IoChevronBackCircle className="mr-2" size={24} />
            Go back
          </a>
        </div>
      </div>
      <div className="pb-8">
        <p className="text-sm text-slate-700 dark:text-slate-400 pb-4">
          Category: {product.category}
        </p>
        <h1 className="pb-2 text-2xl font-extrabold tracking-tight text-slate-900 dark:text-slate-200 md:text-3xl ">
          {product.title}
        </h1>
        <p>{product.brand}</p>
        <div className="flex flex-col mt-4 pb-4 prose prose-slate dark:prose-dark gap-5 leading-7">
          <Image
            alt={product.title}
            className="max-w-xl"
            radius="lg"
            src={product.thumbnail}
            width="100%"
          />
          {product.description}
        </div>
        <div className="flex flex-row items-center gap-5">
          {product.images.map((image: string, index: number) => (
            <Image
              key={index}
              isBlurred
              isZoomed
              alt="images"
              radius="lg"
              src={image}
              width={300}
            />
          ))}
        </div>
      </div>
    </>
  );
}
