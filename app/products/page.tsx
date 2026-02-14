import ProductCard from '@/components/ProductCard';

export default function Products() {
    return (
        <div className="py-16 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-dark mb-4">Our Product Catalog</h1>
                    <p className="text-gray-600">Browse our range of safety wear and uniforms. Click 'Enquire' to request a quote.</p>
                </div>

                {/* Filters (Placeholder) */}
                <div className="flex justify-center gap-4 mb-12 flex-wrap">
                    <button className="px-5 py-2 bg-primary text-white rounded-full font-bold shadow-md transition transform hover:scale-105">All Products</button>
                    <button className="px-5 py-2 bg-white border border-gray-200 hover:border-primary hover:bg-gray-50 rounded-full font-medium transition">Footwear</button>
                    <button className="px-5 py-2 bg-white border border-gray-200 hover:border-primary hover:bg-gray-50 rounded-full font-medium transition">PPE & Workwear</button>
                    <button className="px-5 py-2 bg-white border border-gray-200 hover:border-primary hover:bg-gray-50 rounded-full font-medium transition">Cleaning & Hygiene</button>
                    <button className="px-5 py-2 bg-white border border-gray-200 hover:border-primary hover:bg-gray-50 rounded-full font-medium transition">Welding Material</button>
                </div>

                {/* Product Grid - Placeholder Data */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    <ProductCard title="Bova Neogrip Boot" category="Footwear" imageSrc="/images/products/terrapod/TERRAPOD CHELSEA BOOT.webp" />
                    <ProductCard title="Lemaitre Maxeco Boot" category="Footwear" imageSrc="/images/products/terrapod/TERRAPOD CHELSEA BOOT.webp" />
                    <ProductCard title="Rebel Safety Gear" category="Footwear" imageSrc="/images/products/terrapod/TERRAPOD CHELSEA BOOT.webp" />
                    <ProductCard title="2-Tone Reflective Vest" category="PPE" imageSrc="/images/products/dustcoatsandreflectivewearhnx/V014-O2_MESH BIB ORANGE.webp" />
                    <ProductCard title="D59 Conti Suit" category="Workwear" imageSrc="/images/products/contiandboilersuits/D59-Conti-Suit1_700x.webp" />
                    <ProductCard title="Industrial Detergents" category="Cleaning" imageSrc="/images/products/dustcoatsandreflectivewearhnx/V014-O2_MESH BIB ORANGE.webp" />
                    <ProductCard title="Bulk Toilet Paper" category="Hygiene" imageSrc="/images/products/dustcoatsandreflectivewearhnx/V014-O2_MESH BIB ORANGE.webp" />
                    <ProductCard title="Welding Electrodes" category="Welding" imageSrc="/images/products/weldingmasks/DRAEGER-FULL-FACE-MASK.jpg" />
                </div>
            </div>
        </div>
    );
}
