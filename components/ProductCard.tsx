"use client";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Image
} from "@nextui-org/react";
import Link from "next/link";
import React from "react";

export default function ProductCard({
  product
}: {
  product: {
    id: string;
    title: string;
    category: string;
    price: number;
    thumbnail: string;
  };
}) {
  return (
    <>
      <Card
        key={product.id}
        isPressable
        as={Link}
        href={`products/${product.id}-${product.title.replace(/\s+/g, "-").toLowerCase()}`}
        shadow="sm"
      >
        <CardHeader className="absolute z-50 flex-col !items-start bg-black/20 px-2 py-2 ">
          <p className="text-xs text-white uppercase font-bold">
            {product.category}
          </p>
          <h4 className="text-white font-medium text-large">
            Stream the Acme event
          </h4>
        </CardHeader>
        <CardBody className="overflow-visible p-0">
          <Image
            alt={product.title}
            className="w-full object-cover h-[240px]"
            radius="lg"
            shadow="sm"
            src={product.thumbnail}
            width="100%"
          />
        </CardBody>
        <CardFooter className="text-small justify-between">
          <b>{product.title}</b>
          <p className="text-default-500">$ {product.price}</p>
        </CardFooter>
      </Card>
    </>
  );
}
