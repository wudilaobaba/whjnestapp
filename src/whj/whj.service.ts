import { Injectable } from '@nestjs/common';

// service可以用在所有controller中
@Injectable()
export class WhjService {
  getWhj(query: any): string {
    return JSON.stringify(query);
  }
}
