import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  addNumbers(a: number, b: number): number {
    return a + b;
  }
}