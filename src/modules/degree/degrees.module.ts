import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Degree } from './entities/degrees.entity';
import { DegreesController } from './degrees.controller';
import { DegreesService } from './degrees.service';

@Module({
  imports: [TypeOrmModule.forFeature([Degree])],
  providers: [DegreesService],
  controllers: [DegreesController]
})
export class DegreesModule {}
