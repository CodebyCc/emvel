import Image from "next/image";
import Link from "next/link";

function Card({ product }) {
  const { name, price, image, description } = product;
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg">
      <div className="relative aspect-square -z-30">
        <Image
          src={image}
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>
      <Link href="/">
        <div className="px-6 py-4 cursor-pointer">
          <div className="font-bold text-xl mb-2">
            <p>{name}</p>
          </div>
          <p className="text-gray-700 text-base">{description}</p>
          {/* <p className="text-gray-700 text-base">{price}</p> */}
          {/* {landSize && <p className="text-gray-700 text-base">Size :</p>} */}
        </div>
      </Link>
    </div>
  );
}

export default Card;
