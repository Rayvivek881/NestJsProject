import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  Req,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { CreateUserDto } from './dto/user-create.dto';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/getUsers')
  getUsers(): any {
    return this.userService.getUsers(); // nvm
  }

  @Post('/createUser')
  createUser(@Req() req: Request): any {
    return this.userService.createUser(req.body);
  }

  @Patch('/updateUser/:id')
  updateUser(
    @Body() user: CreateUserDto,
    @Param('id', ParseIntPipe) id: number,
  ): any {
    return this.userService.updateUser(user, id);
  }

  @Delete('/deleteUser/:id')
  deleteUser(@Param('id', ParseIntPipe) id: number): any {
    return this.userService.deleteUser(id);
  }

  @Get('/getUserByEmail')
  getUserByEmail(@Query() query: { email: string }): any {
    return this.userService.getUserByEmail(query.email);
  }
}
