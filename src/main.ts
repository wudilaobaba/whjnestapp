import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
// 配置静态资源用的：
import type { NestExpressApplication } from '@nestjs/platform-express';
import { resolve } from 'path'; // 竟然要这样引用！！！
import * as cookieParser from 'cookie-parser';
import * as session from 'express-session';
async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  // 静态资源地址配置: path.join(path.resolve(), 'public');
  const staticPath = resolve('public');
  app.useStaticAssets(staticPath, { prefix: '/static' }); // prefix是虚拟目录
  // 配置cookie中间件 123456789是作为加密解密的密钥
  app.use(cookieParser('123456789'));
  app.use(
    session({
      secret: 'session key',
      // session在前端的存储时间
      // cookie的配置与设置cookie的参数是一样的
      cookie: { maxAge: 10 * 1000 },
    }),
  );
  await app.listen(9999);
}
bootstrap().then();

const aaa = () => {
  const arr = `
     
  `;
  console.log(arr);
};
