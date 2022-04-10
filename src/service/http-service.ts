import { toCategory, toProduct } from './mapper';
import { Product, Category, ProductRequest } from './models';
import { map } from 'rambdax';
import { BASE_URL, CATEGORIES, PRODUCTS } from '../utils/constants';
import { create as createAxios } from 'apisauce';

const create = (baseURL = BASE_URL) => {
  const api = createAxios({ baseURL });

  const getCategories = () =>
    api
      .get(CATEGORIES)
      .then(response => response.data)
      .then(json => map(toCategory, json as Category[]));

  const getProducts = (categoryName: string) =>
    api
      .get(PRODUCTS, { category: categoryName })
      .then(response => response.data)
      .then(json => map(toProduct, json as Product[]));

  const addProduct = (product: ProductRequest) =>
    api
      .post(PRODUCTS, product)
      .then(response => response.data)
      .then(json => toProduct(json as Product));

  const deleteProduct = (productId: string) => {
    api
      .delete(`${PRODUCTS}/${productId}`)
      .then(response => response.data)
      .then(json => toProduct(json as Product));
  };

  return {
    getCategories,
    getProducts,
    addProduct,
    deleteProduct,
  };
};

const api = create();

export default api;
