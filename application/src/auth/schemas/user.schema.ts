import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps: true
})
export class User {
    @Prop()
     name: string;

     @Prop()
     last_name: string;

     @Prop({unique: [true, 'Duplicated email!']})
     email: string;

     @Prop()
     phone_number: string;

     @Prop()
     birth_date: string;

     @Prop()
     password: string;
}

export const UserSchema = SchemaFactory.createForClass(User)