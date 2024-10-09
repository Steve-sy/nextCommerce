import React from "react";

import ProductCard from "@/components/ProductCard";

export default async function Products() {
  let products = [];
  let error = null;

  try {
    const res = await fetch("https://dummyjson.com/products");

    if (!res.ok) {
      throw new Error("Failed to fetch products");
    }
    const data = await res.json();

    products = data.products;
  } catch (err: any) {
    error = err.message; // Capture the error message
  }

  return (
    <>
      <h1 className="text-2xl pb-4">Products</h1>
      {products.length > 0 ? (
        <div className="gap-4 grid grid-cols-3 sm:grid-cols-3">
          {products.map((product: any) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <p>No products!</p>
      )}
    </>
  );
}
