import Hero from '@/components/Hero';
import ProductShowcase from '@/components/ProductShowcase';
import About from '@/components/About';
import Testimonials from '@/components/Testimonials';

export default function Home() {
  return (
    <div className="container mx-auto px-4">
      <Hero />
      <ProductShowcase />
      <About />
      <Testimonials />
    </div>
  );
}