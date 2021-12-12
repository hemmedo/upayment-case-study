export interface Category {
  name: string;
  imageUrl: string;
  subCategories: SubCategory[];
}

export interface SubCategory {
  name: string;
  id: string;
  productIds: number[];
}

export interface Brand {
  name: string;
}

export interface Product {
  id: number;
  name: string;
  brand: Brand;
  imageUrl: string;
  price: number;
}
