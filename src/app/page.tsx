import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Locations from '@/components/sections/Locations';
import Testimonials from '@/components/sections/Testimonials';
import FAQ from '@/components/sections/FAQ';
import CTA from '@/components/sections/CTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Locations />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
