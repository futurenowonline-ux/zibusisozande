import Image from 'next/image';

const brands = [
    { name: 'Bova', src: '/images/brands/bova.png' },
    { name: 'Bata', src: '/images/brands/bata.png' },
    { name: 'CAT', src: '/images/brands/cat.png' },
    { name: 'DOT', src: '/images/brands/dot.jpg' },
    { name: 'EURO', src: '/images/brands/euro.png' },
];

export default function BrandCarousel() {
    return (
        <div className="w-full overflow-hidden bg-white/10 backdrop-blur-sm py-8 border-y border-white/20">
            <div className="flex whitespace-nowrap animate-marquee">
                {[...brands, ...brands].map((brand, index) => (
                    <div key={index} className="inline-block mx-12 transition transform hover:scale-110 h-10 md:h-12 w-24 md:w-32 relative">
                        <Image
                            src={brand.src}
                            alt={brand.name}
                            fill
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
}
