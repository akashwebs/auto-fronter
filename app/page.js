import Consultation from "@/src/components/homePage/Consultation";
import HeroBanner from "@/src/components/homePage/Hero/HeroBanner";
import Category from "@/src/components/homePage/category/Category";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <HeroBanner />
      <Category />
      <Consultation />
    </main>
  );
}
