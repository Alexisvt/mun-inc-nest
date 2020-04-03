import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunModule } from './mun/mun.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://mongo:27017/mun'), MunModule],
  // imports: [
  //   MongooseModule.forRoot('mongodb://localhost:27017/mun'),
  //   CatsModule,
  // ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
