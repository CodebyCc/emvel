import { getProducts } from "@/lib/data-service";
import Image from "next/image";
import Link from "next/link";
import Card from "../components/Card";

export const metadata = {
  title: "Products",
};

export const revalidate = 0;

async function page() {
  const products = await getProducts();

  // console.log(products);
  return (
    <div className="flex justify-center items-center mt-8 mb-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product, index) => (
          <Card key={index} product={product} />
        ))}
      </div>
    </div>
  );
}

export default page;
