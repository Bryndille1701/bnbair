import { Booking } from 'src/booking/booking.entity';
import { City } from 'src/city/city.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  OneToMany,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Place {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => City, (city) => city.places)
  city: City;

  @ManyToOne(() => User, (user) => user.places)
  user: User;

  @Column()
  name: string;

  @Column()
  description: string;

  @Column()
  rooms: number;

  @Column()
  bathrooms: number;

  @Column()
  maxguests: number;

  @Column()
  price_by_night: number;

  @Column()
  available: boolean;

  @OneToMany(() => Booking, (booking) => booking.place)
  bookings: Booking[];
}
