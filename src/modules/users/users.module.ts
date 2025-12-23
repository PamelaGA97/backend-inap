import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Faculty } from '../faculties/entities/faculty.entity';
import { Degree } from '../degree/entities/degrees.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Faculty, Degree])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
