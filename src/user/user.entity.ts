import { Booking } from 'src/booking/booking.entity';
import { Place } from 'src/place/place.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  firstName: string;

  @Column()
  lastName: string;

  @Column()
  role: number;

  @OneToMany(() => Place, (place) => place.user)
  places: Place[];

  @OneToMany(() => Booking, (booking) => booking.user)
  bookings: Booking[];
}
