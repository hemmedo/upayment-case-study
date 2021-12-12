import {Category, Product} from './models';

export function toCategory(m: Record<string, any>): Category {
  return {
    name: m.name,
    imageUrl: m.imageUrl,
    subCategories: m.subCategories,
  };
}

export function toProduct(m: Record<string, any>): Product {
  return {
    id: m.id,
    name: m.name,
    brand: m.brand,
    imageUrl: m.imageUrl,
    price: m.price,
  };
}
