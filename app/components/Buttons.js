import Link from "next/link";

function Buttons() {
  return (
    <div className="">
      <Link
        href="/products"
        className="bg-green-700 px-12 rounded-2xl py-3 mr-1 text-white text-sm font-semibold hover:bg-green-400 transition-all"
      >
        Explore Products
      </Link>
    </div>
  );
}

export default Buttons;
