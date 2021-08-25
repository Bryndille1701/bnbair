import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { City } from './city.entity';

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private citiesRepository: Repository<City>,
  ) {}

  findAll(): Promise<City[]> {
    return this.citiesRepository.find();
  }

  findOne(id: string): Promise<City> {
    return this.citiesRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.citiesRepository.delete(id);
  }
}
