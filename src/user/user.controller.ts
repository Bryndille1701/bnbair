import { Controller, Delete, Get, Param } from '@nestjs/common';
import { User } from './user.entity';
import { UserService } from './user.service';

@Controller('api/users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('')
  findAll(): Promise<User[]> {
    return this.userService.findAll();
  }
  @Get(':id')
  findOne(@Param() params): Promise<User> {
    return this.userService.findOne(params.id);
  }
  @Delete(':id')
  remove(@Param() params): Promise<void> {
    return this.userService.remove(params.id);
  }
}
