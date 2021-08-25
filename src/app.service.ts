import { Injectable } from '@nestjs/common';
import { getConnection } from 'typeorm';

@Injectable()
export class AppService {
  getHello(): { message: string } {
    return {
      message: 'Hello, World!',
    };
  }
}
