import Causes from "@/app/sections/Causes";
import Events from "@/app/sections/Events";
import Hero from "@/app/sections/Hero";
import Organizations from "@/app/sections/Organizations";
import Stats from "@/app/sections/Stats";
import WhyJoin from "@/app/sections/WhyJoin";

export default function Home() {
  return (
    <>
      <Hero></Hero>
      <Stats></Stats>
      <WhyJoin></WhyJoin>
      <Causes></Causes>
      <Organizations></Organizations>
      <Events></Events>
    </>
  );
}
