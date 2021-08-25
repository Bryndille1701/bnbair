import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/user.entity';
import { Connection } from 'typeorm';
import { UserModule } from './user/user.module';
import { PlaceModule } from './place/place.module';
import { CityModule } from './city/city.module';
import { BookingService } from './booking/booking.service';
import { BookingModule } from './booking/booking.module';
@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 8889,
      username: 'root',
      password: 'root',
      database: 'bnbair',
      synchronize: true,
      autoLoadEntities: true,
    }),
    UserModule,
    PlaceModule,
    CityModule,
    BookingModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
