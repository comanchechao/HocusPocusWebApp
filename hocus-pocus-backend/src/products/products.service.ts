import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllProducts() {
    const products = await this.prismaService.products.findMany({});
    return { products: products };
  }

  async getProductById(id: string) {
    const product = await this.prismaService.products.findUnique({
      where: {
        id: Number(id),
      },
    });

    return { product: product };
  }
}
