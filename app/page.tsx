import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-primary text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          {/* Background pattern or image would go here. Using a gradient for now */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-black"></div>
        </div>

        <div className="container mx-auto px-4 relative z-10 text-center md:text-left">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
              Equipping Your Workforce <br />
              <span className="text-secondary">With Safety & Style.</span>
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl">
              Zibusisozande is your premier B2B partner for high-quality Personal Protective Equipment (PPE) and corporate uniforms.
              Reliable supply. Compliant standards.
            </p>
            <div className="flex flex-col md:flex-row gap-4">
              <Link href="/products" className="bg-secondary text-dark font-bold px-8 py-4 rounded hover:bg-white transition text-center">
                View Catalog
              </Link>
              <Link href="/contact" className="border-2 border-white text-white font-bold px-8 py-4 rounded hover:bg-white hover:text-primary transition text-center">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals / Value Prop */}
      <section className="py-12 bg-gray-50 border-b">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="p-4">
            <div className="text-4xl mb-2">🛡️</div>
            <h3 className="font-bold text-dark">SABS Approved</h3>
            <p className="text-sm text-gray-600">Compliant Safety Gear</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🚚</div>
            <h3 className="font-bold text-dark">Reliable Delivery</h3>
            <p className="text-sm text-gray-600">Nationwide Supply</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🧵</div>
            <h3 className="font-bold text-dark">Custom Branding</h3>
            <p className="text-sm text-gray-600">Embroidery & Printing</p>
          </div>
          <div className="p-4">
            <div className="text-4xl mb-2">🤝</div>
            <h3 className="font-bold text-dark">B2B Specialists</h3>
            <p className="text-sm text-gray-600">Bulk Order Support</p>
          </div>
        </div>
      </section>

      {/* Featured Categories (Placeholder Images - will need real ones) */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-dark mb-4">Our Core Categories</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">We supply a comprehensive range of safety wear and uniforms tailored to your industry needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Category 1: Safety Footwear */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg h-80">
              <div className="absolute inset-0 bg-gray-800">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Image: Safety Boots
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Safety Footwear</h3>
                <Link href="/products" className="text-secondary font-semibold hover:underline">Browse Boots &rarr;</Link>
              </div>
            </div>

            {/* Category 2: Protective Clothing */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg h-80">
              <div className="absolute inset-0 bg-gray-800">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Image: Overalls
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">PPE & Workwear</h3>
                <Link href="/products" className="text-secondary font-semibold hover:underline">Browse Overalls &rarr;</Link>
              </div>
            </div>

            {/* Category 3: Corporate Uniforms */}
            <div className="group relative rounded-xl overflow-hidden shadow-lg h-80">
              <div className="absolute inset-0 bg-gray-800">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">
                  Image: Uniforms
                </div>
              </div>
              <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition"></div>
              <div className="absolute bottom-0 left-0 p-8 text-white">
                <h3 className="text-2xl font-bold mb-2">Corporate Uniforms</h3>
                <Link href="/products" className="text-secondary font-semibold hover:underline">Browse Uniforms &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Need a Custom Quote for Your Team?</h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            We offer competitive pricing for bulk orders and full branding services.
            Get in touch with our sales team today.
          </p>
          <Link href="/contact" className="inline-block bg-secondary text-dark font-bold px-8 py-3 rounded-full hover:bg-white transition hover:shadow-lg transform hover:-translate-y-1">
            Contact Sales Team
          </Link>
        </div>
      </section>
    </div>
  );
}
