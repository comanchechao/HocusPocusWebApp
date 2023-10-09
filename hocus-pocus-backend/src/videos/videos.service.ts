import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class VideosService {
  constructor(private readonly prismaService: PrismaService) {}

  async getAllCourses() {
    const courses = await this.prismaService.courses.findMany({
      select: {
        created_at: true,
        title: true,
        preview: true,
        price: true,
        description: true,
        trainer: true,
        CoursesImages: true,
      },
    });
    return { courses: courses };
  }

  async getLatestCourse() {
    const course = await this.prismaService.courses.findMany({
      orderBy: {
        created_at: 'desc',
      },
      take: 1,
      select: {
        created_at: true,
        title: true,
        preview: true,
        price: true,
        description: true,
        trainer: true,
        CoursesImages: true,
      },
    });

    return { course: course };
  }

  async getFourBeforeOne() {
    const courses = await this.prismaService.courses.findMany({
      orderBy: {
        created_at: 'desc',
      },
      skip: 1,
      take: 4,
      select: {
        created_at: true,
        title: true,
        preview: true,
        price: true,
        description: true,
        trainer: true,
        CoursesImages: true,
      },
    });
    return { courses: courses };
  }
}
