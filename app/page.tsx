import CTA from '@/components/CTA';
import Features from '@/components/Features';
import Footer from '@/components/Footer';
import Heading from '@/components/Heading';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <div>
      <Heading />
      <Hero />
      <Features />
      <CTA />
      <Footer />
    </div>
  );
}
