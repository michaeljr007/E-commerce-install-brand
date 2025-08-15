import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="overflow-x-hidden">
        <Hero />
        <Categories />
      </div>
    </>
  );
}
