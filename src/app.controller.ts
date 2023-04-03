import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { Types, UpdateQuery } from 'mongoose';
import { MapService } from './app.service';
import { Map, MapDocument } from './database/schemas/Map.schema';
import {CreateMapDto} from './database/dtos/create-Map.dto'
import { Delete } from '@nestjs/common/decorators';


@Controller('Maps')
export class MapController {
  constructor(private readonly MapService: MapService) {}

  @Post()
  async creatMap(@Body() createMapDto : CreateMapDto) : Promise<Map>{
      return this.MapService.create(createMapDto)
  }

  @Get()
  async getMaps() : Promise<Map[]>{
      return this.MapService.find();
  }

  @Get(':id')
  async getMap(@Param('id') id : Types.ObjectId) : Promise<Map>{
      return this.MapService.findOne(id);
  }

  @Patch(':id')
  async updateMap(@Param('id') id : Types.ObjectId, @Body() update : UpdateQuery<MapDocument>) : Promise<Map>{
      return this.MapService.findOneAndUpdate(id , update);
  }

  @Delete(':id')
  async deleteMap(@Param('id') id : Types.ObjectId) : Promise<Map>{
    return this.MapService.delete(id);
  }
}


