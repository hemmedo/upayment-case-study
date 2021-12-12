import {Server, Model, Factory} from 'miragejs';

import {
  CategoryDetail,
  BodyWashProducts,
  HandWashProducts,
  ShampooProducts,
  ToothPasteProducts,
  FragranceProducts,
  FaceCleanserProducts,
} from './data';

export function makeServer() {
  let server = new Server({
    routes() {
      this.get(
        '/category/cat-id=personal-care',
        () => {
          return CategoryDetail;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=hand-wash',
        () => {
          return HandWashProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=body-wash',
        () => {
          return BodyWashProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=shampo--o',
        () => {
          return ShampooProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=tooth-paste',
        () => {
          return ToothPasteProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=frag-rance',
        () => {
          return FragranceProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=facial-cleanser',
        () => {
          return FaceCleanserProducts;
        },
        {timing: 250},
      );
      this.get(
        '/product/sub-categoryid=all-products',
        () => {
          return [
            ...FaceCleanserProducts,
            ...FragranceProducts,
            ...ToothPasteProducts,
            ...ShampooProducts,
            ...BodyWashProducts,
            ...HandWashProducts,
          ];
        },
        {timing: 500},
      );
    },
  });

  return server;
}
