import { Req } from '@nestjs/common';
import { Injectable } from '@nestjs/common';
import { Request } from 'express';

@Injectable()
export class AppService {
  async getHello(@Req() req: Request): Promise<string> {
    return 'Hello World!';
  }
}
