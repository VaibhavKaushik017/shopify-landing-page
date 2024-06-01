import { ProductScroll } from "@/components/Product";
import Reviews from "@/components/Reviews";
import WhyUs from "@/components/WhyUs";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full">
      <p className="w-full bg-green-400 text-white py-2 text-center font-semibold tracking-widest">Summer Sale! Enjoy a 50% Off</p>
      <div className="w-[85%] mx-auto">
        <h1 className="text-center text-5xl font-extrabold py-10">
          COOL GADGETS
        </h1>
        <ProductScroll />
        
        <WhyUs />
        <Reviews />
      </div>
    </main>
  );
}
