import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/user-create.dto';
import { Repository } from 'typeorm';
import { User } from './entity/use.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  getUsers(): Promise<User[]> {
    return this.userRepository.find();
  }

  createUser(user: any): Promise<User> {
    return this.userRepository.save(user);
  }

  updateUser(user: CreateUserDto, userId: number) {
    return this.userRepository.update(userId, user);
  }

  deleteUser(id: number) {
    return this.userRepository.delete(id);
  }

  getUserByEmail(email: string): Promise<User> {
    return this.userRepository.findOne({ where: { email } });
  }
}
