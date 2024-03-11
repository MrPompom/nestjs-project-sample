import { Injectable } from '@nestjs/common';

@Injectable()
export class DynamicService {
  generateMessage(name: string, age: number): string {
    return `Salut, ${name}! Tu as ${age} ans.`;
  }
  addNumbers(a: any, b: any): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA + numB;
    } else {
      return NaN;
    }
  }

  substractNumbers(a: any, b: any): number {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    if (!isNaN(numA) && !isNaN(numB)) {
      return numA - numB;
    } else {
      return NaN;
    }
  }
}