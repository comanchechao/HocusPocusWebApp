/* eslint-disable prettier/prettier */
import {
  Controller,
  UseInterceptors,
  Get,
  Body,
  Post,
  UseGuards,
  Param,
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
import { AuthenticatedGuard } from 'src/auth/authGuards/authenticated.guards';
import { orderItemDto } from './dto/orderItemDto';
import { OrderStatusDto } from './dto/orderStatus';
import { ProductStatusDto } from './dto/productStatus';
import { MembershipItemDto } from './dto/MembershipItemDto';

@Controller('management')
export class ManagementController {
  constructor(private readonly managementService: ManagementService) {}

  // products requests

  @Get('/products')
  getProducts() {
    return this.managementService.getProducts();
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
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

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('upload')
  @UseInterceptors(FileInterceptor('file'))
  uploadFile(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg||png||webp',
        })
        .addMaxSizeValidator({
          maxSize: 5000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    const { filename, path } = file;
    return this.managementService.storeImage(file, body);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/removeproductimage/:id')
  removeProductImage(@Param('id') id: string) {
    return this.managementService.removeProductImage(id);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/updateproductstatus')
  updateProductStatus(@Body() dto: ProductStatusDto) {
    return this.managementService.updateProductStatus(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/updateweekselection')
  updateProductWeekSelection(@Body() dto: ProductStatusDto) {
    return this.managementService.updateWeekSelection(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/deupdateproductstatus')
  deupdateProductStatus(@Body() dto: ProductStatusDto) {
    return this.managementService.deupdateProductStatus(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/deupdateweekselection')
  deupdateProductWeekSelection(@Body() dto: ProductStatusDto) {
    return this.managementService.deupdateWeekSelection(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/removeproduct/:id')
  removeProduct(@Param('id') id: string) {
    return this.managementService.removeProduct(id);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/setdiscount/:id')
  setDiscount(@Param('id') id: string, @Body() dto: ProductStatusDto) {
    return this.managementService.setDiscount(id, dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/enablemode')
  enableMode() {
    return this.managementService.enableMode();
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/deablemode')
  deableMode() {
    return this.managementService.deableMode();
  }

  // orders requests

  @Get('/orders')
  getOrders() {
    return this.managementService.getOrders();
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/orderitems')
  getOrderItems(@Body() dto: orderItemDto) {
    return this.managementService.getOrderItems(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  // @Roles('ADMIN')
  // @UseGuards(LocalAuthGuard, RolesGuard)
  @Post('/updateorderstatus')
  updateOrderState(@Body() dto: OrderStatusDto) {
    return this.managementService.updateOrderStatus(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Roles('ADMIN')
  @UseGuards(LocalAuthGuard, RolesGuard)
  @Get('info')
  gettingDesiredInfo() {
    return { msg: 'return desired info from database' };
  }

  // membership requests

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Get('/memberships')
  getMemberships() {
    return this.managementService.getMemberships();
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/membershipitems')
  getMembershipItems(@Body() dto: MembershipItemDto) {
    return this.managementService.getMembershipItems(dto);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/updatemembershipstat')
  updateMembershipStatus(@Body() dto: OrderStatusDto) {
    return this.managementService.updateMembershipStatus(dto);
  }

  // videos and training section requests

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Get('/courses')
  getAll() {
    return this.managementService.getAllCourses();
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
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

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('courseimageupload')
  @UseInterceptors(FileInterceptor('file'))
  uploadCourseImage(
    @UploadedFile(
      new ParseFilePipeBuilder()
        .addFileTypeValidator({
          fileType: 'jpeg||png||webp',
        })
        .addMaxSizeValidator({
          maxSize: 5000000,
        })
        .build({
          errorHttpStatusCode: HttpStatus.UNPROCESSABLE_ENTITY,
        }),
    )
    file: Express.Multer.File,
    @Body() body: any,
  ) {
    const { filename, path } = file;
    return this.managementService.storeCourseImage(file, body);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/removecourseimage/:id')
  removeCourseImage(@Param('id') id: string) {
    return this.managementService.removeCourseImage(id);
  }

  @Post('ischeck')
  @Roles('ADMIN') // Only admin role allowed
  @UseGuards(AuthenticatedGuard, RolesGuard)
  @Post('/removecourse/:id')
  removeCourse(@Param('id') id: string) {
    return this.managementService.removeCourse(id);
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

  // comment requests

  @Post('/removecomment/:id')
  removeComment(@Param('id') id: string) {
    return this.managementService.removeComment(id);
  }

  @Post('/removevideocomment/:id')
  removeCourseComment(@Param('id') id: string) {
    return this.managementService.removeCourseComment(id);
  }
}
