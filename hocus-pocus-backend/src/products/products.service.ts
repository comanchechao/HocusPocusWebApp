import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  getAllProducts() {
    const products = [
      {
        title: 'deck',
        price: 20000,
      },
      {
        title: 'deck 2',
        price: 20000,
      },
      {
        title: 'deck 3 ',
        price: 20000,
      },
      {
        title: 'deck 4 ',
        price: 20000,
      },
    ];

    return products;
  }
}
