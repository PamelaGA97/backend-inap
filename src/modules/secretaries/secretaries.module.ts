import { Module } from '@nestjs/common';
import { SecretariesService } from './secretaries.service';
import { SecretariesController } from './secretaries.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Secretary } from './secretary.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Secretary, User])],
  providers: [SecretariesService],
  controllers: [SecretariesController]
})
export class SecretariesModule {}
