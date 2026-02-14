import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
    title: string;
    imageSrc: string;
    category: string;
}

export default function ProductCard({ title, imageSrc, category }: ProductCardProps) {
    const message = encodeURIComponent(`Hi, I am interested in the ${title} from the ${category} category.`);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition group border border-gray-100">
            <div className="relative h-64 w-full bg-gray-100">
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    className="object-contain p-4 group-hover:scale-105 transition duration-300"
                />
            </div>
            <div className="p-4">
                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{category}</span>
                <h3 className="text-lg font-bold text-dark mt-1 mb-3">{title}</h3>
                <Link
                    href={`https://wa.me/27645195375?text=${message}`}
                    target="_blank"
                    className="block w-full text-center bg-light text-dark font-medium py-2 rounded hover:bg-secondary hover:text-dark transition"
                >
                    Enquire Now
                </Link>
            </div>
        </div>
    );
}
