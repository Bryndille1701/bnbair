import { Place } from 'src/place/place.entity';
import { User } from 'src/user/user.entity';
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Place, (place) => place.bookings)
  place: Place;

  @ManyToOne(() => User, (user) => user.bookings)
  user: User;

  @Column({ type: 'date' })
  check_in: number;

  @Column({ type: 'date' })
  check_out: number;
}
