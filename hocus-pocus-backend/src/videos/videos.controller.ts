import { Controller, Get } from '@nestjs/common';
import { VideosService } from './videos.service';

@Controller('videos')
export class VideosController {
  constructor(private readonly videoServices: VideosService) {}

  @Get('')
  getAll() {
    return this.videoServices.getAllCourses();
  }

  @Get('latest')
  getLatest() {
    return this.videoServices.getLatestCourse();
  }

  @Get('lastfour')
  getLastFour() {
    return this.videoServices.getFourBeforeOne();
  }
}
