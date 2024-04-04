import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { EditDto } from './dto/EditsDto';

@Injectable()
export class EditsService {
  constructor(private readonly prismaService: PrismaService) {}

  async updateProduct(dto: EditDto) {
    const product = await this.prismaService.products.updateMany({
      where: {
        id: Number(dto.id),
      },
      data: {
        title: dto.title,
        price: Number(dto.price),
        description: dto.description,
        brand: dto.brand,
        category: dto.category,
        quantity: dto.quantity,
        type: dto.type,
        design: dto.design,
      },
    });

    return { updatedProduct: product };
  }
}
