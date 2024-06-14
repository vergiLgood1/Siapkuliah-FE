import Image from "next/image";
import { Hero } from "../../components/hero";
import MaxWidthWrapper from "@/components/max-width-wrapper";
import { Showcase } from "./_components/showcase";
import Tech from "./_components/tech";
import Univ from "./_components/univ";
import { Feature } from "./_components/feature";
import { Counselor } from "./_components/counselor";
import { CounselorCard } from "./_components/counselor-card";
import Community from "./_components/community";
import Testimoni from "./_components/testimoni";
import CtaSlider from "./_components/ctaslider";
import { FlipWord } from "./_components/flip-word";
import { Cta } from "./_components/cta";
import MarketingHero from "./_components/hero";


export default function MarketingPage() {
  return (
    <main>
      <MarketingHero/>
      <Showcase/>
      <Tech/>
      <Univ/>
      <Feature/>
      <Counselor/>
      <CounselorCard/>
      <Community/>
      <Testimoni/>
      <FlipWord/>
      <Cta/>
    </main>
  );
}
