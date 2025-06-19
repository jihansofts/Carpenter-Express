import { PageCategoryType, Teamtype } from "@/types/type";

export const TeamData: Teamtype[] = [
  {
    id: 1,
    name: "Lehel",
    image: "/images/team1.jpg",
    role: "Owner",
  },
  {
    id: 2,
    name: "John Doe",
    image: "/images/team2.jpg",
    role: "CEO",
  },
  {
    id: 3,
    name: "John Doe",
    image: "/images/team3.jpg",
    role: "CEO",
  },
  {
    id: 4,
    name: "Alex doe",
    image: "/images/team4.jpg",
    role: "CEO",
  },
  {
    id: 5,
    name: "John Doe",
    image: "/images/team5.jpg",
    role: "CEO",
  },
  {
    id: 6,
    name: "John Doe",
    image: "/images/team6.jpg",
    role: "CEO",
  },
  {
    id: 7,
    name: "John Doe",
    image: "/images/team7.jpg",
    role: "CEO",
  },
  {
    id: 8,
    name: "John Doe",
    image: "/images/team8.jpg",
    role: "CEO",
  },
  {
    id: 9,
    name: "John Doe",
    image: "/images/team9.jpg",
    role: "CEO",
  },
  {
    id: 10,
    name: "John Doe",
    image: "/images/team10.jpg",
    role: "CEO",
  },
];

export const CategoryData: PageCategoryType[] = [
  {
    id: 1,
    name: "ROOF CONSTRUCTION",
    img: "/images/category1.jpg",
    slug: "roof-construction",
    subpages: [
      {
        image: "/images/bgroof.jpg",
        title: "Traditional Carpentry",
        slug: "traditional-carpentry",
        description:
          "We can say that besides our vast professional experience, our attachment and commitment to wood are natural, after half a century.",
        gallerySections: [
          {
            galleryTitle: "Timber Roof Frames",
            images: [
              "/images/lukacs-wood-garage-01.jpg",
              "/images/lukacs-wood-garage-02.jpg",
              "/images/lukacs-wood-garage-03.jpg",
              "/images/lukacs-wood-garage-04.jpg",
              "/images/lukacs-wood-garage-05.jpg",
              "/images/lukacs-wood-garage-06.jpg",
            ],
          },
          {
            galleryTitle: "Sloped Roofing Projects",
            images: [
              "/images/lukacs-water-tower-01.jpg",
              "/images/lukacs-water-tower-02.jpg",
              "/images/lukacs-water-tower-03.jpg",
              "/images/lukacs-water-tower-04.jpg",
              "/images/lukacs-water-tower-05.jpg",
            ],
          },
        ],
      },
      {
        image: "/images/bgnail.jpg",
        title: "Nail Plate Trusses",
        slug: "nail-plate-trusses",
        description:
          "We can say that besides our vast professional experience, our attachment and commitment to wood are natural, after half a century.",
        gallerySections: [
          {
            galleryTitle: "Roof Trusses",
            images: [
              "/images/lukacs-roof-01.jpg",
              "/images/lukacs-roof-02.jpg",
              "/images/lukacs-roof-03.jpg",
              "/images/lukacs-roof-04.jpg",
              "/images/lukacs-roof-05.jpg",
              "/images/lukacs-roof-06.jpg",
              "/images/lukacs-roof-07.jpg",
              "/images/lukacs-roof-08.jpg",
              "/images/lukacs-roof-09.jpg",
              "/images/lukacs-roof-10.jpg",
              "/images/lukacs-roof-11.jpg",
              "/images/lukacs-roof-12.jpg",
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "STRUCTURAL CONSTRUCTION",
    img: "/images/category2.jpg",
    slug: "structural-construction",
    subpages: [
      {
        image: "/images/bgnail.jpg",
        title: "Nail Plate Trusses",
        slug: "nail-plate-trusses",
        description:
          "We can say that besides our vast professional experience, our attachment and commitment to wood are natural, after half a century.",
        gallerySections: [
          {
            galleryTitle: "Roof Trusses",
            images: [
              "/images/lukacs-roof-01.jpg",
              "/images/lukacs-roof-02.jpg",
              "/images/lukacs-roof-03.jpg",
              "/images/lukacs-roof-04.jpg",
              "/images/lukacs-roof-05.jpg",
              "/images/lukacs-roof-06.jpg",
              "/images/lukacs-roof-07.jpg",
              "/images/lukacs-roof-08.jpg",
              "/images/lukacs-roof-09.jpg",
              "/images/lukacs-roof-10.jpg",
              "/images/lukacs-roof-11.jpg",
              "/images/lukacs-roof-12.jpg",
            ],
          },
        ],
      },
    ],
  },
];
