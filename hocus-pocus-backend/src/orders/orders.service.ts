import { Injectable } from '@nestjs/common';

@Injectable()
export class OrdersService {
  submitOrder() {
    return { msg: 'order is submited' };
  }

  submitDraft() {
    return { msg: 'drafted' };
  }
}
