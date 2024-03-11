import { Injectable } from '@nestjs/common';

@Injectable()
export class StaticService {
  presentation(): string {
    return "Bonjour je m'appelle Bastien, voici mon projet nest-js"
  }
}