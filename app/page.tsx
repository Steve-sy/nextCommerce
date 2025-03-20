import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import Link from "next/link";
import { FaShoppingCart } from "react-icons/fa";

export default function Home() {
  const isDev = process.env.DEV_MODE === "true";

  return (
    <section className="container md:columns-2 py-8 md:py-10">
      <div className="flex flex-col gap-5 py-5">
        <h1 className="text-7xl bg-gradient-to-b from-purple-400 to-purple-800 bg-clip-text text-transparent">
          {isDev ? "(DEV BRANCH)" : ""} Your one-step ecommerce website!
        </h1>
        <p className="text-2xl">
          Discover now a world of endless shopping possibilities at our online
          store. Browse, choose, and order your favourite products from the
          comfort of your home.
        </p>
        <Button
          as={Link}
          className="flex items-center gap-2 max-w-min"
          color="secondary"
          href="/"
        >
          <FaShoppingCart className="w-6 h-5" />
          Shop Now!
        </Button>
      </div>
      <div>
        <Image className="object-contain" src="images/hero.svg" width={700} />
      </div>
    </section>
  );
}
