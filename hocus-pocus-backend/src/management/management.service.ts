/* eslint-disable prettier/prettier */
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

  async removeProductImage(id: string) {
    const image = await this.prismaService.productImages.delete({
      where: {
        id: Number(id),
      },
    });
    return { msg: 'image remove' };
  }

  async removeProduct(id: string) {
    const product = await this.prismaService.products.delete({
      where: {
        id: Number(id),
      },
    });

    return { msg: 'محصول حذف شد' };
  }

  // order functions

  async getOrders() {
    const orders = await this.prismaService.orders.findMany({});

    return { orders: orders };
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

  async addVideo(file: any, body: any) {
    console.log(file);
    const video = await this.prismaService.courses.create({
      data: {
        title: body.title,
        file: file.buffer,
        description: body.description,
        price: body.price,
        trainer: body.trainer,
      },
    });
    return { video };
  }

  async storeCourseImage(file: any, body: any) {
    console.log(file.buffer);
    const image = await this.prismaService.coursesImages.create({
      data: {
        filename: file.originalname,
        buffer: file.buffer.toString('base64'),
        course_id: Number(body.courseId),
      },
    });

    return { data: 'عکس اضافه شد' };
  }
}
