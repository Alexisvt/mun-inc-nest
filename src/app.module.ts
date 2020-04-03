import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MunModule } from './mun/mun.module';

if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config();
}

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGO_CONNECTION), MunModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
