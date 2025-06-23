import Image from "next/image";

interface GallerySection {
  galleryTitle: string;
  images: string[];
}

interface Subpage {
  title: string;
  description: string[];
  gallerySections: GallerySection[];
}

export default function SubCategoryGallery({ subpage }: { subpage: Subpage }) {
  return (
    <section className="space-y-10">
      {/* <h1 className="text-3xl font-bold text-center mb-6">{subpage.title}</h1> */}

      {subpage.gallerySections.map((section, index) => (
        <div key={index}>
          <h2 className="text-xl font-semibold mb-4 text-center">
            {section.galleryTitle || ""}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 md:grid-cols-4 gap-4">
            {section.images.map((img, i) => (
              <Image
                key={i}
                src={img}
                alt={`Gallery ${i + 1}`}
                width={300}
                height={300}
                className="w-full h-auto object-cover rounded shadow"
              />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
