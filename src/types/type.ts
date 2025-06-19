export type Categorytype = {
  id: number;
  name: string;
  image: string;
  menu: {
    label: string;
    href: string;
  }[];
};

export type Teamtype = {
  id: number;
  name: string;
  image: string;
  role: string;
};

type SubPage = {
  image: string;
  title: string;
  slug: string;
  description: string;
  gallerySections: {
    galleryTitle: string;
    images: string[];
  }[];
};

export type PageCategoryType = {
  id: number;
  img: string; // was: Categoryimg
  name: string;
  slug: string; // was: Categoryslug
  subpages: SubPage[];
};
