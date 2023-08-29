import { Injectable, ForbiddenException } from '@nestjs/common';
import { ManagementDto } from './dto/ManagementDto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Injectable()
export class ManagementService {
  constructor(private readonly prismaService: PrismaService) {}
  async addProduct(dto: ManagementDto) {
    console.log('functnio is running');

    const product = await this.prismaService.products.create({
      data: {
        title: dto.title,
        price: Number(dto.price),
        type: dto.type,
        brand: dto.brand,
        design: dto.design,
        description: dto.type,
      },
    });
    console.log(product);
  }

  async getProducts() {
    const products = await this.prismaService.products.findMany({});
    return { products: products };
  }
}
