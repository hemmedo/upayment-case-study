import {toCategory, toProduct} from './mapper';
import {Product} from './models';
import {map} from 'rambdax';

export const fetchCategory = (categoryId: string) =>
  fetch(`/category/cat-id=${categoryId}`)
    .then(res => res.json())
    .then(json => toCategory(json));

export const fetchProducts = (subCategoryId: string) =>
  fetch(`/product/sub-categoryid=${subCategoryId}`)
    .then(res => res.json())
    .then(json => map(toProduct, json as Product[]));
