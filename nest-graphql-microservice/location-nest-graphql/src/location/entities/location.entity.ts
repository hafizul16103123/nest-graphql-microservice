import { ObjectType, Field, Int, Directive, ID } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Directive('@key(fields: "id")')
@Schema()
export class Location {
  @Field((type) => ID)
  id: string;

  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => String)
  @Prop()
  latlang: string;
}

export const LocationSchema = SchemaFactory.createForClass(Location);
