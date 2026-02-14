export default function Services() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-dark mb-12 text-center">Our Services</h1>

                <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                    {/* Service 1 */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-4">Branding & Embroidery</h2>
                        <p className="text-gray-600 mb-6">
                            Make your workforce stand out with our professional branding services.
                            We offer high-quality embroidery and screen printing for all uniforms and workwear.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>✅ Company Logos on Conti Suits</li>
                            <li>✅ Embroidery on Caps & Shirts</li>
                            <li>✅ Durable Screen Printing for Vests</li>
                        </ul>
                    </div>

                    {/* Service 2 */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100">
                        <h2 className="text-2xl font-bold text-primary mb-4">Bulk Supply & Logistics</h2>
                        <p className="text-gray-600 mb-6">
                            We specialize in large-volume orders for mines, factories, and construction sites.
                            Our logistics network ensures your gear arrives on time, every time.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700">
                            <li>✅ Wholesale Pricing</li>
                            <li>✅ Scheduled Deliveries</li>
                            <li>✅ Inventory Management Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
