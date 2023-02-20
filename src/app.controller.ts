import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller() //どういうルーティングをするのかの責任
export class AppController {
  constructor(private readonly appService: AppService) {} //serviceの導入

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}
