import Buttons from "./components/Buttons";

export default function Home() {
  return (
    <div className="py-6 px-4">
      <div className="max-w-4xl mx-auto px-6 py-12 text-center flex flex-col justify-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to
          <span className="text-green-400"> Emvel Royal Company</span>
        </h1>
        <p className="text-2xl leading-relaxed mb-6">
          Your No1 Stop for quality and affordable Healthcare,Skincare and
          Haircare Products
          <span className="text-green-400"> 𝐓𝐇𝐄 BEST HEALTHCARE</span>
        </p>
        <Buttons />
      </div>
    </div>
  );
}
