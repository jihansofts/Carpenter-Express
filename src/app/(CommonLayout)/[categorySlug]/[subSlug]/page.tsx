import { use } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { CategoryData } from "@/lib/data";
import SubCategoryGallery from "@/common/SubGalleryImage";
import SectionTitle from "@/common/SectionTitle";
import ServiceInfo from "@/common/ServiceInfo";
import WorkingRangeTable from "@/common/WorkingRangeTable";

const leftTable = [
  { load: "1300 kg", projection: "5,00 m", height: "16 m" },
  { load: "1000 kg", projection: "7,20 m", height: "17 m" },
  { load: "810 kg", projection: "8,00 m", height: "22 m" },
];

const rightTable = [
  { load: "600 kg", projection: "9,70 m", height: "21 m" },
  { load: "300 kg", projection: "17,40 m", height: "19 m" },
  { load: "250 kg", projection: "19,00 m", height: "18 m" },
];
export default function SubCategoryPage(props: {
  params: Promise<{ categorySlug: string; subSlug: string }>;
}) {
  const { categorySlug, subSlug } = use(props.params);

  const category = CategoryData.find((cat) => cat.slug === categorySlug);
  if (!category) return notFound();

  const subpage = category.subpages.find((sub) => sub.slug === subSlug);
  if (!subpage) return notFound();

  return (
    <section className=" mx-auto py-10">
      <div className="container mx-auto">
        <Image
          src={`${subpage.image}`}
          alt={category.name}
          width={1200}
          height={400}
          className="w-full h-auto object-cover rounded-lg shadow-lg mb-6"
        />
      </div>
      {/* <h1 className="text-3xl font-bold text-center mb-4">{category.name}</h1> */}

      <div className="container mx-auto flex lg:flex-row md:flex-col text-center sm:flex-col flex-col justify-center gap-4 mb-6 border-b">
        {category.subpages.map((sub) => (
          <Link
            key={sub.slug}
            href={`/${category.slug}/${sub.slug}`}
            className={`px-4 py-2 text-sm font-medium ${
              sub.slug === subSlug
                ? "border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}>
            {sub.title.toUpperCase()}
          </Link>
        ))}
      </div>
      <SectionTitle borderSize="border-2 text-border" title={subpage.title} />
      <div className="container mx-auto px-4 md:px-0">
        <p className="text-[16px] text-center text-secondary mb-6">
          {subpage.description}
        </p>
        {categorySlug === "services" &&
          subSlug === "thermofloc-cellulose-insulation" && <ServiceInfo />}
        <SubCategoryGallery subpage={subpage} />
        {categorySlug === "services" && subSlug === "crane-service" && (
          <WorkingRangeTable leftTable={leftTable} rightTable={rightTable} />
        )}
      </div>
    </section>
  );
}
