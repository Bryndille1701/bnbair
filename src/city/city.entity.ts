import { Place } from 'src/place/place.entity';
import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';

@Entity()
export class City {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  lat: number;

  @Column()
  lng: number;

  @ManyToOne(() => Place, (place) => place.city)
  places: Place[];
}
