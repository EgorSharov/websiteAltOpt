import { HeroSplit } from "@/components/HeroSplit";
import { StatsTicker } from "@/components/StatsTicker";
import { BenefitsGrid } from "@/components/BenefitsGrid";
import { Geography } from "@/components/Geography";

export default function Home() {
  return (
    <>
      <HeroSplit />
      <StatsTicker />
      <BenefitsGrid />
      <Geography />
    </>
  );
}