import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { SchemaTypes, Types } from 'mongoose';

export type MapDocument = Map & Document;

@Schema()
export class Map{
    @Prop({ type: SchemaTypes.ObjectId })
    _id: Types.ObjectId;
  
    @Prop()
    name: String;

    @Prop()
    company: String;

    @Prop()
    targetKWH: number;

    @Prop()
    targetKVA: number;

    @Prop()
    targetRunTime: number;

    @Prop()
    targetOEE: number;

    @Prop()
    surface: number;
}


export const MapSchema = SchemaFactory.createForClass(Map);