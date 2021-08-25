import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Booking } from './booking.entity';

@Injectable()
export class BookingService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepository: Repository<Booking>,
  ) {}

  findAll(): Promise<Booking[]> {
    return this.bookingsRepository.find();
  }

  findOne(id: string): Promise<Booking> {
    return this.bookingsRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.bookingsRepository.delete(id);
  }
}
