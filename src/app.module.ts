import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Prisma } from '@prisma/client';
import {BicycleController} from './bicycle/bicycle.controller'
import {BicycleService} from './bicycle/bicycle.service'
import { PrismaService } from './prisma/prisma.service';

@Module({
  imports: [],
  controllers: [AppController,BicycleController],
  providers: [AppService,BicycleService, PrismaService],
})
export class AppModule {}
