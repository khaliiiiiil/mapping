import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import {  FilterQuery, Model, Types, UpdateQuery } from "mongoose";
import { CreateMapDto } from "./database/dtos/create-Map.dto";
import { Map, MapDocument } from "./database/schemas/Map.schema";

@Injectable()
 export class MapService {
    constructor(@InjectModel(Map.name) protected readonly MapModel : Model<MapDocument>) {}

    async create (createMapDto : CreateMapDto) : Promise<Map>{
        const createdMap = new this.MapModel({
            _id: new Types.ObjectId(),
            ...createMapDto
        });
        return createdMap.save();
    }

    async find() : Promise<Map[]> {
        const query = this.MapModel.find().select('-location -dashboardPriotiy -placement -equipNumber -device');
        return query.exec();
    }

    async findOne(entityFilterQuery : FilterQuery<MapDocument>) : Promise<Map>{
        return this.MapModel.findById(entityFilterQuery).exec();
    }

    async findOneAndUpdate (entityFilterQuery : FilterQuery<MapDocument>, updatedMap : UpdateQuery<MapDocument>) : Promise<Map>{
        return this.MapModel.findOneAndUpdate(
            entityFilterQuery, 
            updatedMap, {new : true}
        ).exec();
    }

    async delete(entityFilterQuery : FilterQuery<MapDocument>) : Promise<Map>{
        return this.MapModel.findByIdAndRemove(entityFilterQuery)
    }
}
