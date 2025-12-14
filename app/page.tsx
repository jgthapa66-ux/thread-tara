import { fabrics } from '@/lib/fabrics';
import FabricCard from '@/components/FabricCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-6">
        {/* Updated to use your new script font */}
        <div className="text-4xl font-heading font-bold text-fabric-dark">
          Thread Tara
        </div>
        <a href="#contact" className="rounded-full border border-fabric-dark px-6 py-2 transition hover:bg-fabric-dark hover:text-white">
          Contact Shop
        </a>
      </nav>

      {/* Hero Section */}
      <section className="px-6 py-20 text-center md:py-32">
        <h1 className="mb-6 animate-breathe font-serif text-5xl text-fabric-dark md:text-7xl">
          Premium Textiles <br /> For Every Vision
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-gray-600">
          Explore our curated collection of silks, linens, and velvets. 
          Visit our showroom to feel the difference.
        </p>
      </section>

      {/* --- RESTORED: Product Showcase Section --- */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex items-end justify-between">
            <h2 className="text-3xl font-light text-gray-800">Our Collection</h2>
            <span className="hidden text-sm italic text-gray-400 md:block">
              {fabrics.length} premium fabrics available
            </span>
          </div>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric) => (
              <FabricCard key={fabric.id} fabric={fabric} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section (Footer) */}
      <section id="contact" className="bg-fabric-dark px-6 py-24 text-fabric-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
            
            {/* Column 1: Brand Identity */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
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

            {/* Column 2: Location (Address) */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
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

            {/* Column 3: Contact Details */}
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
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
          {/* Footer Bottom */}
          <div className="py-5 border-t bg-fabric-dark border-white/10 text-center text-[14px] text-gray-200">
            <p>© {new Date().getFullYear()} Thread Tara. All rights reserved.</p>
          </div>
        
      
    </main>
  );
}