import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Faculty } from '../faculties/entities/faculty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, Faculty])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
