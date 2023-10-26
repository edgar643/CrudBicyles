import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BicycleController } from './bicycle/bicycle.controller'
import { BicycleService } from './bicycle/bicycle.service'
import { PrismaService } from './prisma/prisma.service';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RouteService } from './route/route.service';
import { RouteController } from './route/route.controller';
import { RentalService } from './rental/rental.service';
import { RentalController } from './rental/rental.controller';
import { CoordinatesController } from './coordinates/coordinates.controller';

import { MongooseModule } from '@nestjs/mongoose';
import { CoordinatesService } from './coordinates/coordinates.service';
import { CoordinatesSchema } from './coordinates/coordinates.model';


@Module({
  imports: [
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([{ name: 'Coordinates', schema: CoordinatesSchema }]),
  ],
  controllers: [AppController, BicycleController, EventController, UserController, RouteController, RentalController, EventController, CoordinatesController],
  providers: [AppService, BicycleService, PrismaService, EventService, UserService, RouteService, RentalService, CoordinatesService],
})
export class AppModule { }
