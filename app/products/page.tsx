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
                    <button className="px-4 py-2 bg-primary text-white rounded-full">All Products</button>
                    <button className="px-4 py-2 bg-white border hover:bg-gray-100 rounded-full">Footwear</button>
                    <button className="px-4 py-2 bg-white border hover:bg-gray-100 rounded-full">PPE & Workwear</button>
                    <button className="px-4 py-2 bg-white border hover:bg-gray-100 rounded-full">Corporate</button>
                </div>

                {/* Product Grid - Placeholder Data */}
                <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {/* We will map real products here later. For now, static placeholders */}
                    <ProductCard title="Safety Boot X1" category="Footwear" imageSrc="/images/products/terrapod/TERRAPOD CHELSEA BOOT.webp" />
                    <ProductCard title="Reflective Vest 2-Tone" category="PPE" imageSrc="/images/products/dustcoatsandreflectivewearhnx/refelctive jacket 2 tone orange navy.jpg" />
                    <ProductCard title="Conti Suit Royal Blue" category="Workwear" imageSrc="/images/products/contiandboilersuits/royal blue conti suit.jpg" />
                    <ProductCard title="Welding Helmet" category="PPE" imageSrc="/images/products/weldingmasks/DRAEGER-FULL-FACE-MASK.jpg" />
                </div>
            </div>
        </div>
    );
}
