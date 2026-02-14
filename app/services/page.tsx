export default function Services() {
    return (
        <div className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <h1 className="text-4xl font-bold text-dark mb-12 text-center">Our Services</h1>

                <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Service 1: PPE Supply */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-4">🛡️</div>
                        <h2 className="text-2xl font-bold text-primary mb-4">PPE & Workwear Supply</h2>
                        <p className="text-gray-600 mb-6">
                            Widest ranges of safety footwear and PPE in the country. We supply quality brands including Bova, Lemaitre, Rebel Safety gear, and Frams.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 font-medium">
                            <li>✅ Construction & Mining Gear</li>
                            <li>✅ Engineering & Industrial PPE</li>
                            <li>✅ Hospital & school uniforms</li>
                        </ul>
                    </div>

                    {/* Service 2: Cleaning & Hygiene */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-4">🧽</div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Cleaning & Hygiene</h2>
                        <p className="text-gray-600 mb-6">
                            Professional supply of cleaning detergents, equipment, and hygiene products including bulk toilet paper supply.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 font-medium">
                            <li>✅ Industrial Cleaning Material</li>
                            <li>✅ Commercial Hygiene Services</li>
                            <li>✅ Detergents & Toilet Paper Supply</li>
                        </ul>
                    </div>

                    {/* Service 3: Welding Materials */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-4">🔥</div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Welding Materials</h2>
                        <p className="text-gray-600 mb-6">
                            Specialized supply of welding material and equipment for industrial, residential, and commercial sectors.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 font-medium">
                            <li>✅ Industrial Welding Electrodes</li>
                            <li>✅ Protective Welding Gear</li>
                            <li>✅ Professional Equipment Supply</li>
                        </ul>
                    </div>

                    {/* Service 4: Bulk Supply */}
                    <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 shadow-sm">
                        <div className="text-3xl mb-4">📦</div>
                        <h2 className="text-2xl font-bold text-primary mb-4">Bulk Supply & Tenders</h2>
                        <p className="text-gray-600 mb-6">
                            Responding to advertised tenders and bidding for large-scale projects in both public and private sectors.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-700 font-medium">
                            <li>✅ Public Sector Bidding</li>
                            <li>✅ Private Sector Partnerships</li>
                            <li>✅ Provincial KZN Coverage</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
