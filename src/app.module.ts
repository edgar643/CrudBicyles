import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {BicycleController} from './bicycle/bicycle.controller'
import {BicycleService} from './bicycle/bicycle.service'
import { PrismaService } from './prisma/prisma.service';
import { EventController } from './event/event.controller';
import { EventService } from './event/event.service';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { RouteService } from './route/route.service';
import { RouteController } from './route/route.controller';
import { RentalService } from './rental/rental.service';
import { RentalController } from './rental/rental.controller';


@Module({
  imports: [],
  controllers: [AppController,BicycleController, EventController, UserController, RouteController, RentalController, EventController],
  providers: [AppService,BicycleService, PrismaService, EventService, UserService, RouteService, RentalService],
})
export class AppModule {}
