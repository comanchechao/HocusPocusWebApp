import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCourses() {
    const courses = await this.prismaService.courses.findMany({});
    return { courses: courses };
  }
}
