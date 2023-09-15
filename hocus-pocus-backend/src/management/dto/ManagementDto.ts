/* eslint-disable prettier/prettier */

import { IsNotEmpty } from 'class-validator';

export class ManagementDto {
  @IsNotEmpty({ message: 'نام کالا را وارد کنید' })
  title: string;

  @IsNotEmpty({ message: 'قیمت کالا را وارد کنید' })
  price: number;

  description: string;

  @IsNotEmpty({ message: 'برند کالا را وارد کنید' })
  brand: string;

  @IsNotEmpty({ message: 'نوع کالا را وارد کنید' })
  type: string;

  @IsNotEmpty({ message: 'کتگوری کالا را وارد کنید' })
  category: string;

  @IsNotEmpty({ message: 'طرح کالا را وارد کنید' })
  design: string;

  @IsNotEmpty({ message: 'کمیت کالا را وارد کنید' })
  rarity: string;

  @IsNotEmpty({ message: 'موجودی کالا را وارد کنید' })
  inStock: boolean;

  productId: string;
}
