/* eslint-disable prettier/prettier */
import {
  Controller,
  UseInterceptors,
  Get,
  Body,
  Post,
  UseGuards,
  UploadedFile,
  ParseFilePipeBuilder,
  HttpStatus,
} from '@nestjs/common';
import { Roles } from 'src/auth/common/decorators/Role.decorator';
import { LocalAuthGuard } from 'src/auth/common/guards/local.guard';
import { RolesGuard } from 'src/auth/common/guards/roleBased.guard';
import { ManagementService } from './management.service';
import { ManagementDto } from './dto/ManagementDto';
import { CategoryDto } from './dto/CategoryDto';
import { FileInterceptor } from '@nestjs/platform-express';
import { Express } from 'express';
import { VideosDto } from './dto/VideoDto';

@Controller('management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  // products requests

  @Get('/products')
  getProducts() {
    return this.managementService.getProducts();
  }

  @Post('/addproduct')
  addProduct(@Body() dto: ManagementDto) {
    return this.managementService.addProduct(dto);
  }

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/updateProduct')
  updateProduct() {
    return { msg: 'here we will update some things' };
  }

  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg||png||webp',
        })
        .addMaxSizeValidator({
          maxSize: 500000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    const { filename, path } = file;
    console.log(file.buffer.toString('base64'));
    console.log(file);
    return this.managementService.storeImage(file, body);
  }

  // orders requests

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('/orders')
  getOrders() {
    return { msg: 'see all orders' };
  }

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/updateOrderState')
  updateOrderState() {
    return { msg: 'update order state sent or delivered or canceled' };
  }

  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('info')
  gettingDesiredInfo() {
    return { msg: 'return desired info from database' };
  }

  // videos and training section requests

  @Post('/addvideo')
  @UseInterceptors(FileInterceptor('file'))
  uploadVideo(
    @UploadedFile(
      new ParseFilePipeBuilder().build({
        errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
      }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    return this.managementService.addVideo(file, body);
  }

  // category requests

  @Post('/addcategory')
  addCategory(@Body() dto: CategoryDto) {
    return this.managementService.addCategory(dto);
  }

  @Get('/categories')
  getCategories() {
    return this.managementService.getCategories();
  }
}
