"use client";

import React from "react";
import { Card, CardHeader, CardFooter, Image, Button } from "@nextui-org/react";
import Link from "next/link";

export default function CardPost({
  post
}: {
  post: {
    id: string;
    title: string;
    author: string;
    date_published: Date;
    content: string;
  };
}) {
  return (
    <>
      <Card
        key={post.id}
        isFooterBlurred
        className="col-span-12 sm:col-span-4 min-h-[280px]" // Adjusted for 3 columns
      >
        <CardHeader className="absolute z-10 top-1 flex-col !items-start">
          <p className="text-tiny text-white/60 uppercase font-bold drop-shadow">
            {post.title}
          </p>
          <h4 className="text-white font-medium text-large">
            by {post.author}
          </h4>
        </CardHeader>
        <Image
          removeWrapper
          alt="Card background"
          className="z-0 w-full h-full object-cover"
          src={`https://picsum.photos/1000/1000.jpg?random=${post.id}`}
        />
        <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
          <div className="flex flex-grow gap-2 items-center">
            <div className="flex flex-col">
              <p className="text-tiny text-white/60">
                Published on: {new Date(post.date_published).toDateString()}
              </p>
              <p className="text-tiny text-white/60">
                {post.content.substring(0, 100)}...
              </p>
            </div>
          </div>
          <Button
            as={Link}
            href={`blog/${post.id}-${post.title.replace(/\s+/g, "-").toLowerCase()}`}
            radius="full"
            size="md"
          >
            Read More..
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
