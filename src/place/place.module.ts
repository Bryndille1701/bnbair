import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PlaceService } from './place.service';
import { Place } from './place.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Place])],
  providers: [PlaceService],
  controllers: [],
})
export class PlaceModule {}
