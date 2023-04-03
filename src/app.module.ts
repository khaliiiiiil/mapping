import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MapController } from './app.controller';
import { MapService } from './app.service';
import { Map, MapSchema } from './database/schemas/Map.schema';


@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://k14512415:khalil1451@cluster0.qej0gup.mongodb.net/test'),
    MongooseModule.forFeature([{ name: Map.name, schema: MapSchema }]),
  ],
  controllers: [MapController],
  providers: [MapService],
})
export class MapModule {}