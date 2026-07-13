import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Differentials } from "@/components/sections/Differentials";
import { Supporters } from "@/components/sections/Supporters";
import { FAQSection } from "@/components/sections/FAQSection";
import { CTASection } from "@/components/sections/CTASection";
import { homeFaqs } from "@/lib/faqs";

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Differentials />
      <Supporters />
      <FAQSection items={homeFaqs} className="bg-ink-900 noise" />
      <CTASection />
    </>
  );
}
