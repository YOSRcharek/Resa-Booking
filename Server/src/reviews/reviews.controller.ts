import { Controller, Post, Get, Param, Body, Put, Delete } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post('/api')
  async create(@Body() createReviewDto: CreateReviewDto) {
    return this.reviewsService.create(createReviewDto);
  }

  @Get('/api')
  async findAll() {
    return this.reviewsService.findAll();
  }

  @Get('/api/:id')
  async findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  @Put('/api/:id')
  async update(@Param('id') id: string, @Body() updateReviewDto: CreateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  @Delete('/api/:id')
  async remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
