import { fabrics } from '@/lib/fabrics';
import FabricCard from '@/components/FabricCard';

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Navbar Placeholder */}
      <nav className="flex items-center justify-between px-8 py-6">
        <div className="text-2xl font-serif font-bold text-fabric-dark">Thread Tara</div>
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

      {/* Product Showcase */}
      <section className="bg-white px-6 py-20">
        <div className="mx-auto max-w-7xl">
          <h2 className="mb-12 text-3xl font-light text-gray-800">Our Collection</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {fabrics.map((fabric) => (
              <FabricCard key={fabric.id} fabric={fabric} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-fabric-dark px-6 py-20 text-fabric-cream">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-8 text-4xl font-serif">Visit Our Showroom</h2>
          <div className="flex flex-col items-center justify-center gap-8 md:flex-row">
            <div className="rounded-lg border border-white/20 p-8">
              <h3 className="mb-4 text-xl font-bold text-fabric-gold">Main Branch</h3>
              <p>123 Textile Avenue</p>
              <p>Fashion District, NY 10018</p>
              <p className="mt-4 font-mono">+1 (555) 123-4567</p>
            </div>
            <div className="rounded-lg border border-white/20 p-8">
              <h3 className="mb-4 text-xl font-bold text-fabric-gold">Business Hours</h3>
              <p>Mon - Fri: 9am - 6pm</p>
              <p>Saturday: 10am - 4pm</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </section>
      
      <footer className="py-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Fabric&Co. All rights reserved.
      </footer>
    </main>
  );
}