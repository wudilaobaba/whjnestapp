import {
  Controller,
  Get,
  Post,
  Query,
  Request,
  Response,
  Body,
  Param,
} from '@nestjs/common';
import { WhjService } from './whj.service';

@Controller('whj')
export class WhjController {
  constructor(private readonly whjService: WhjService) {}

  @Get('t*t') // 模糊匹配：  以t开头 以t结尾 的路由
  tt(): string {
    return '模糊匹配';
  }

  @Get('tr') // http://localhost:9999/whj/tr?name=1&age=23
  tr(@Query() query): string {
    // 获取路由参数
    return this.whjService.getWhj(query);
  }

  @Get('ws') // http://localhost:9999/whj/ws?id=23&age=222
  ws(@Query('id') id): string {
    // 只返回参数为id的值
    return id;
  }

  @Get('pt')
  pt(@Request() req): string {
    // 获取路由参数: req.query
    console.log(req.query);
    return req.query;
  }

  @Post('pp')
  pp(@Body() body): string {
    // 获取body数据
    return body;
  }

  // 动态路由传值
  @Get('gg/:id') // /whj/gg/123
  gg(@Param() param): string {
    return param; // {id: 123}
  }

  @Get('cookie')
  cookie(@Response() res): any {
    // maxAge 设置该cookie的过期时间
    // httpOnly: true, 只有后端能访问，前端没法访问
    res.cookie('userName', '我是cookie', {
      maxAge: 10 * 1000,
      httpOnly: true,
      signed: true, // 这里设置为需要给cookie进行加密
    });
    // 使用了@Response就不能用return了
    res.json({ msg: 'okokokoi~~~' });
  }
}
