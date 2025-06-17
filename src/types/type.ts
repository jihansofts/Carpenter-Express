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
