import Image from "next/image";
import { notFound } from "next/navigation";

import { CategoryData } from "@/lib/data";

export default function CategoryPage({ params }) {
  const category = CategoryData.find((item) => item.slug === params.slug);

  if (!category) return notFound();

  return (
    <section className="container mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-4">{category.name}</h1>
      {category.galleryTitle && (
        <h2 className="text-lg text-center text-gray-600 mb-8">
          {category.galleryTitle}
        </h2>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {category.galleryImages.map((src, idx) => (
          <Image
            key={idx}
            src={src}
            alt={`Gallery Image ${idx + 1}`}
            width={300}
            height={300}
            className="w-full h-auto object-cover rounded shadow"
          />
        ))}
      </div>
    </section>
  );
}
