import { Controller, Get, Query } from '@nestjs/common';
import { StaticService } from './static.service';

@Controller('static')
export class StaticController {
  constructor(private readonly staticService: StaticService) {}

  @Get('presentation')
  presentation(): string {
    return this.staticService.presentation();
  }

}