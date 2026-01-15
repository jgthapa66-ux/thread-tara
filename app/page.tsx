import Image from 'next/image'; // Import Image component
import { fabrics } from '@/lib/fabrics';
import FabricCard from '@/components/FabricCard';
import { threadTaraFont } from '@/lib/font';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar - Kept clean to contrast with the rich hero below */}
<nav className="flex items-center justify-end px-8 py-6 z-50 absolute top-0 w-full bg-transparent">
  
    {/* Thread Tara title removed */}
    
    {/* Contact Button remains on the right side */}
    <a href="#contact" className="rounded-full border-2 border-fabric-cream px-6 py-2 text-sm font-bold text-fabric-cream transition hover:bg-fabric-gold hover:text-fabric-dark hover:border-fabric-gold shadow-lg">
        Contact Shop
    </a>
</nav>

      <section className="relative flex h-[85vh] items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image 
            src="/bg.jpg" 
            alt="Rich Indian Silk Background"
            fill
            className="object-cover animate-pan" // Added slow pan animation for dynamism
            priority // Loads this image first
          />
          {/* Dark/Gold gradient overlay for luxurious feel and readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-fabric-dark/70 to-black/80" />
          {/* Optional subtle pattern overlay */}

        </div>

        {/* 2. Hero Content */}
        <div className="relative z-10 px-6 text-center">
          {/* Small pre-title */}
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-fabric-gold/90">
            The Essence of Tradition
          </p>
          
          {/* Main fancy title using the script font */}
          <h1 className="mb-6 animate-breathe font-heading text-7xl text-fabric-cream md:text-9xl drop-shadow-2xl">
            Thread Tara
          </h1>
          
          {/* Subtitle */}
          <h2 className="mb-8 font-serif text-3xl text-white md:text-5xl font-light leading-tight">
            Premium Textiles For <br /> Every Vision
          </h2>
          
          <div className="mx-auto h-1 w-24 bg-fabric-gold mb-8 rounded-full"></div>

          <p className="mx-auto max-w-2xl text-lg text-gray-200 leading-relaxed">
            Explore our curated collection of exquisite silks, artisanal linens, and royal velvets. 
            Visit our showroom to experience the touch of luxury.
          </p>
        </div>
      </section>

      <section className="bg-fabric-cream/30 px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center">
             <h2 className="font-heading text-5xl text-fabric-dark mb-4">Our Collection</h2>
             <p className="text-gray-600 font-serif text-xl max-w-2xl mx-auto">Handpicked fabrics defining elegance and heritage.</p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric) => (
              <FabricCard key={fabric.id} fabric={fabric} />
            ))}
          </div>
        </div>
      </section>
      <section id="contact" className="bg-fabric-dark px-6 py-24 text-fabric-cream relative overflow-hidden">
         <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3 text-center md:text-left">
            <div className="flex flex-col items-center md:items-start">
              <h2 className="mb-2 font-heading text-5xl text-fabric-gold">
                Thread Tara
              </h2>
              <p className="mb-6 text-sm font-light tracking-[0.2em] uppercase text-white/80">
                Be Your Own Designer
              </p>
              
              <div className="space-y-1 text-sm font-medium text-gray-400">
                <p>Fabrics • Apparels • Accessories</p>
                <p>Mens • Women • Kids</p>
              </div>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">
                Visit Our Showroom
              </h3>
              <address className="not-italic leading-relaxed text-gray-300">
                <p>A-20 Lajpat Nagar Part-II</p>
                <p>Opposite Lajpat Nagar Metro Station</p>
                <p>Gate No.2</p>
                <p className="mt-2 font-semibold text-white">New Delhi - 110024</p>
              </address>
              
              <a 
                href="https://www.google.com/maps/search/?api=1&query=A-20+Lajpat+Nagar+Part-II+New+Delhi" 
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-block border-b border-fabric-gold pb-0.5 text-sm text-fabric-gold transition hover:text-white hover:border-white"
              >
                Get Directions →
              </a>
            </div>
            <div className="flex flex-col items-center md:items-start">
              <h3 className="mb-6 text-lg font-bold uppercase tracking-wider text-fabric-gold">
                Contact Us
              </h3>
              
              <div className="space-y-6">
                <div>
                  <p className="mb-1 text-xs text-gray-500 uppercase">Phone / WhatsApp</p>
                  <a href="tel:+918750503536" className="block text-lg transition hover:text-fabric-gold">
                    +91 8750503536
                  </a>
                  <a href="tel:+919999056556" className="block text-lg transition hover:text-fabric-gold">
                    +91 9999056556
                  </a>
                </div>

                <div>
                  <p className="mb-1 text-xs text-gray-500 uppercase">Email Inquiry</p>
                  <a href="mailto:threadtara2025@gmail.com" className="text-lg transition hover:text-fabric-gold">
                    threadtara2025@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
          <div className="py-6 bg-[#111] text-center text-[13px] text-gray-400 tracking-wider">
            <p>© {new Date().getFullYear()} Thread Tara. All rights reserved.</p>
          </div>
        
      
    </main>
  );
}