import React from "react";

function page() {
  return (
    <div className="bg-gray-900 text-white py-6 px-4">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col justify-center mt-16">
        <h1 className="text-4xl font-bold mb-4">About Us</h1>
        <p className="text-lg leading-relaxed mb-6">
          Welcome to{" "}
          <span className="text-green-400">Emvel Royal Company </span>. Emvel
          Royal Company Limited was founded in the year 2015 when as a
          Nsturopath wanted to deliver the best of Haircare, Skincare and Health
          products to the community. the positive results that came out of our
          small works made the need for expansion to serve the entire nation and
          beyond with Emvel products.
          <span className="text-green-400"> 𝐓𝐇𝐄 BEST HEALTHCARE PRODUCTS</span>
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
          <p className="">
            It is our vision to reach every household with our exquiste products
            and to also take this vision beyond
            <span className="text-green-400"> Ghana.</span>
          </p>
        </div>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
          <p className="">
            Creating quality Healthcare, Skincare and Haircare products in
            <span className="text-green-400"> Ghana.</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default page;
