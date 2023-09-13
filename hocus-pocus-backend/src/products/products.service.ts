import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class ProductsService {
  constructor(private readonly prismaService: PrismaService) {}
  async getAllProducts() {
    const products = await this.prismaService.products.findMany({
      select: {
        id: true,
        title: true,
        price: true,
        brand: true,
        type: true,
        design: true,
        ProductImages: true,
      },
    });
    return { products: products };
  }

  async getProductById(id: string) {
    const product = await this.prismaService.products.findUnique({
      where: {
        id: Number(id),
      },
      select: {
        id: true,
        title: true,
        price: true,
        brand: true,
        type: true,
        design: true,
        ProductImages: true,
      },
    });

    return { product: product };
  }

  async getImageById(id: string) {
    const image = await this.prismaService.productImages.findUnique({
      where: {
        product_id: id,
      },
    });

    const imageDataURL = `data:image/jpeg;base64,${image.buffer}`;
    return { image: imageDataURL };
  }
}
