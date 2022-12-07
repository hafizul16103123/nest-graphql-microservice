import { ObjectType, Field } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@ObjectType()
@Schema()
export class Employee {
  @Field(() => String)
  @Prop()
  name: string;

  @Field(() => Number)
  @Prop()
  age: number;

  @Field(() => String)
  @Prop()
  projectId: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
