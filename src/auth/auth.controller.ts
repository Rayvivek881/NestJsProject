import { Body, Controller, Post, Request, UseGuards } from "@nestjs/common";
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authServices: AuthService) {}

  @UseGuards(AuthGuard('local'))
  @Post('/login')
  login(@Request() req: any) {
    return this.authServices.login(req.user);
  }
}
