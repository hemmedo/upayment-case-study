import { Category, Product } from './models';

export function toCategory(m: Record<string, any>): Category {
  return {
    name: m.name,
    id: m.id,
    createdAt: m.createdAt,
  };
}

export function toProduct(m: Record<string, any>): Product {
  return {
    id: m.id,
    name: m.name,
    createdAt: m.createdAt,
    avatar: m.avatar,
    price: m.price,
    description: m.description,
    developerEmail: m.developerEmail,
    category: m.category,
  };
}
