import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('w')
  getWhj(): string {
    return this.appService.getWhj();
  }

  @Get('news/current_new')
  getX(): string {
    return '新闻～～～';
  }
}
