export interface Category {
  createdAt: string;
  name: string;
  id: string;
}
export interface Product {
  createdAt: string;
  name: string;
  avatar: string;
  id: string;
  price: number;
  category: string;
  description: string;
  developerEmail: string;
}
export interface ProductRequest {
  name: string;
  avatar: string;
  price: number;
  category: string;
  description: string;
  developerEmail: string;
}
