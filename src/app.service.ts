import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World11~~';
  }

  getWhj(): string {
    return 'Hello Whj~';
  }
}
