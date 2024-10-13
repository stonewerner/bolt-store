import Image from 'next/image';
import { Button } from "@/components/ui/button"

export default function Hero() {
  return (
    <section className="relative h-[600px] flex items-center justify-center">
      <Image
        src="https://images.unsplash.com/photo-1533228705496-072ca298b122?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
        alt="Hawaiian beach"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 z-10"></div>
      <div className="relative z-20 text-center text-white">
        <h1 className="text-5xl font-bold mb-4">Aloha Glow</h1>
        <p className="text-xl mb-8">Experience the magic of Hawaii with our handmade organic luxury face cream</p>
        <Button size="lg">
          Shop Now
        </Button>
      </div>
    </section>
  );
}