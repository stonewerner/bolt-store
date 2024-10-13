import Image from 'next/image';

export default function About() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">About Aloha Glow</h1>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-8 md:mb-0">
          <Image
            src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80"
            alt="Hawaiian landscape"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="md:w-1/2 md:pl-12">
          <p className="text-lg mb-4">
            Aloha Glow was born from a passion for natural skincare and the breathtaking beauty of Hawaii. Our founder, inspired by the island's rich botanical treasures, set out to create a face cream that captures the essence of paradise.
          </p>
          <p className="text-lg mb-4">
            We handcraft our products in small batches, using only the finest organic ingredients sourced from local Hawaiian farms. Our commitment to sustainability means that every jar of Aloha Glow not only nourishes your skin but also supports our island's ecosystem.
          </p>
          <p className="text-lg">
            Experience the magic of Hawaii with every application, and let your skin radiate with the natural glow of the islands.
          </p>
        </div>
      </div>
    </div>
  );
}