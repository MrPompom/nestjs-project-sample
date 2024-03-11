import { Controller, Get, Query, ParseIntPipe } from '@nestjs/common';
import { DynamicService } from './dynamic.service';

@Controller('dynamic')
export class DynamicController {
  constructor(private readonly dynamicService: DynamicService) {}

  @Get('message')
  generateMessage(
    @Query('name') name: string,
    @Query('age', ParseIntPipe) age: number,
  ): string {
    return this.dynamicService.generateMessage(name, age);
  }

  @Get('add')
  addNumbers(@Query('a') a: number, @Query('b') b: number): number {
    return this.dynamicService.addNumbers(a, b);
  }

  @Get('less')
  substractNumbers(@Query('a') a: number, @Query('b') b: number): number {
    return this.dynamicService.substractNumbers(a, b);
  }
}