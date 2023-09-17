import { Injectable, ForbiddenException } from '@nestjs/common';
import { ManagementDto } from './dto/ManagementDto';
import { PrismaService } from '../prisma/prisma.service';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { CategoryDto } from './dto/CategoryDto';
import { VideosDto } from './dto/VideoDto';

@Injectable()
export class ManagementService {
  constructor(private readonly prismaService: PrismaService) {}

  // product services

  async addProduct(dto: ManagementDto) {
    console.log('functnio is running');

    const product = await this.prismaService.products.create({
      data: {
        title: dto.title,
        price: Number(dto.price),
        type: dto.type,
        brand: dto.brand,
        design: dto.design,
        category: dto.category,
        description: dto.type,
      },
    });
    return { product: product };
  }

  async getProducts() {
    const products = await this.prismaService.products.findMany({});
    return { products: products };
  }

  async updateProduct(dto: ManagementDto) {
    const product = await this.prismaService.products.updateMany({
      where: {
        id: Number(dto.productId),
      },
      data: {
        title: dto.title,
        price: dto.price,
        description: dto.description,
        brand: dto.brand,
        type: dto.type,
        design: dto.design,
      },
    });

    return { updatedProduct: product };
  }

  async storeImage(file: any, body: any) {
    const image = await this.prismaService.productImages.create({
      data: {
        filename: file.originalname,
        buffer: file.buffer.toString('base64'),
        product_id: Number(body.productId),
      },
    });

    return { data: image };
  }

  // category services

  async getCategories() {
    const categories = await this.prismaService.categories.findMany({});
    return { categories: categories };
  }

  async addCategory(dto: CategoryDto) {
    const category = await this.prismaService.categories.create({
      data: {
        title: dto.title,
      },
    });
    return { msg: 'کاتاگوی با موفقیت اضافه شد' };
  }

  // video services functions

  async addVideo(file: any, dto: VideosDto) {
    const video = await this.prismaService.videos.create({
      file: file,
      title: dto.title,
      description: dto.description,
      price: dto.price,
      trainer: dto.trainer,
    });
  }
}
