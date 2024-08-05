import { Controller, Post, Get, Param, Body, Put, Delete, NotFoundException } from '@nestjs/common';
import { AvailabilityService } from './availability.service';
import { CreateAvailabilityDto } from './dto/create-availability.dto';
import { Availability } from './schemas/availability.schema';

@Controller('availabilities')
export class AvailabilityController {
  constructor(private readonly availabilityService: AvailabilityService) {}

  @Post('/api')
  async create(@Body() createAvailabilityDto: CreateAvailabilityDto) {
    return this.availabilityService.create(createAvailabilityDto);
  }

  @Get('/api')
  async findAll() {
    return this.availabilityService.findAll();
  }

  @Get('/api/:id')
  async findOne(@Param('id') id: string) {
    return this.availabilityService.findOne(id);
  }
  @Get('/api/propertyById/:id')
  async getAvailabilityByPropertyId(@Param('id') propertyId: string): Promise<Availability[]> {
    try {
      return await this.availabilityService.getAvailabilityByPropertyId(propertyId);
    } catch (err) {
      throw new NotFoundException('Error fetching availability data');
    }
  }
  @Put('/api/:id')
  async update(@Param('id') id: string, @Body() updateAvailabilityDto: CreateAvailabilityDto) {
    return this.availabilityService.update(id, updateAvailabilityDto);
  }

  @Delete('/api/:id')
  async remove(@Param('id') id: string) {
    return this.availabilityService.remove(id);
  }
}
