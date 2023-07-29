import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
  getOrders() {
    const orders = [
      {
        item: 'deck',
        totalPrice: 20000,
      },
      {
        item: 'deck',
        totalPrice: 20000,
      },
      {
        item: 'deck',
        totalPrice: 20000,
      },
      {
        item: 'deck',
        totalPrice: 20000,
      },
      {
        item: 'deck',
        totalPrice: 20000,
      },
    ];
    return orders;
  }

  updateProfile() {
    return { msg: 'profile update in detail' };
  }
}
