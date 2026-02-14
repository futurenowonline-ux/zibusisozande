import Link from 'next/link';

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-dark text-light pt-10 pb-6">
            <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8 mb-8">

                {/* Brand & Mission */}
                <div>
                    <h3 className="text-xl font-bold text-white mb-4">Zibusisozande</h3>
                    <p className="text-sm opacity-80 leading-relaxed">
                        Your trusted partner for premium PPE, Safety Wear, and Corporate Uniforms.
                        Ensuring safety and style for the modern workforce.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-lg font-semibold text-secondary mb-4">Quick Links</h4>
                    <ul className="space-y-2 text-sm">
                        <li><Link href="/" className="hover:text-white hover:underline">Home</Link></li>
                        <li><Link href="/about" className="hover:text-white hover:underline">About Us</Link></li>
                        <li><Link href="/products" className="hover:text-white hover:underline">Product Catalog</Link></li>
                        <li><Link href="/services" className="hover:text-white hover:underline">Our Services</Link></li>
                        <li><Link href="/contact" className="hover:text-white hover:underline">Contact Us</Link></li>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 className="text-lg font-semibold text-secondary mb-4">Contact Us</h4>
                    <ul className="space-y-3 text-sm opacity-80">
                        <li className="flex items-start gap-2">
                            <span>📍</span>
                            <span>123 Business Park, Safety Street,<br />Richards Bay, KZN</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>📞</span>
                            <span>071 234 5678</span>
                        </li>
                        <li className="flex items-center gap-2">
                            <span>✉️</span>
                            <span>info@zibusisozande.co.za</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Copyright Bar */}
            <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs opacity-60">
                <p>&copy; {currentYear} Zibusisozande. All rights reserved.</p>
                <p className="mt-2">
                    Powered by <a href="https://www.enanidigitaltools.co.za" target="_blank" rel="noopener noreferrer" className="hover:text-secondary hover:underline transition">eNani Digital Tools</a>
                </p>
            </div>
        </footer>
    );
}
