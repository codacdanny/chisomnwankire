import { ParallaxBackdrop, ScrollProgress } from "@/components/site/motion-primitives";
import { SiteNav } from "@/components/site/nav";
import { Hero } from "@/components/site/hero";
import { Clients } from "@/components/site/clients";
import { Platforms } from "@/components/site/platforms";
import { Results } from "@/components/site/results";
import { Services } from "@/components/site/services";
import { Process } from "@/components/site/process";
import { About } from "@/components/site/about";
import { Testimonials } from "@/components/site/testimonials";
import { Offers } from "@/components/site/offers";
import { Faq } from "@/components/site/faq";
import { FinalCta } from "@/components/site/final-cta";
import { SiteFooter } from "@/components/site/footer";

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="bg-primary text-primary-foreground focus:ring-ring sr-only rounded-md px-5 text-sm font-medium focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-100 focus:inline-flex focus:min-h-11 focus:items-center focus:ring-2"
      >
        Skip to content
      </a>

      <ParallaxBackdrop />
      <ScrollProgress />
      <SiteNav />

      <main id="main" className="flex-1">
        <Hero />
        <Clients />
        <Results />
        <Platforms />
        <Services />
        <Testimonials />
        <Process />
        <Offers />
        <About />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </>
  );
}
