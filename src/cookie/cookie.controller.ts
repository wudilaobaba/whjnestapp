import { Controller, Get, Request, Response } from '@nestjs/common';
import { CookieService } from '../cookie/cookie.service';

@Controller('cookie')
export class CookieController {
  constructor(private readonly cookieService: CookieService) {}
  @Get()
  getCookie(@Request() req): any {
    console.log(req);
    // 未加密的获取方式： req.cookies
    // 已加密的获取方式： req.signedCookies
    return req.signedCookies?.userName ?? '没有cookies';
  }

  @Get('set_session')
  setSession(@Request() req): string {
    req.session.xxx = 'xxx_session';
    return 'session已设置！';
  }

  @Get('get_session')
  getSession(@Request() req): string {
    return req.session?.xxx ?? 'no session';
  }
}
