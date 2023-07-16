import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { WhjController } from './whj/whj.controller';
import { WhjService } from './whj/whj.service';
import { CookieController } from './cookie/cookie.controller';
import { CookieService } from './cookie/cookie.service';

@Module({
  imports: [],
  controllers: [AppController, WhjController, CookieController], // 多个controllers
  providers: [AppService, WhjService, CookieService], // 多个service
})
export class AppModule {}
