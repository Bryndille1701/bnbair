import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Place } from './place.entity';

@Injectable()
export class PlaceService {
  constructor(
    @InjectRepository(Place)
    private placesRepository: Repository<Place>,
  ) {}

  findAll(): Promise<Place[]> {
    return this.placesRepository.find();
  }

  findOne(id: string): Promise<Place> {
    return this.placesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.placesRepository.delete(id);
  }
}
