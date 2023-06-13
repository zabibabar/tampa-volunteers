import Causes from "@/app/sections/Causes";
import Events from "@/app/sections/Events";
import Hero from "@/app/sections/Hero";
import Organizations from "@/app/sections/Organizations";
import About from "@/app/sections/About";
import Testimonials from "@/app/sections/Testimonials";
import WhyJoin from "@/app/sections/WhyJoin";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <About></About>
      <WhyJoin></WhyJoin>
      <Testimonials></Testimonials>
      <Causes></Causes>
      <Events></Events>
      <Organizations></Organizations>
    </>
  );
}
