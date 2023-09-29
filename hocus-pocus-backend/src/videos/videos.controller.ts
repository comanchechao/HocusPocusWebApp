import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoServices: VideosService) {}

  @Get('')
  getAll() {
    return this.videoServices.getAllCourses();
  }
}
