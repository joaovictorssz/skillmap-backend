import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { CreateQustionaryDto } from "src/questionaries/dtos/create-questioary";
import { CreateTopicDto } from "src/topics/dtos/create-topic.dto";

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

     @Prop()
     topics_saved: [{topic_id: string, title: string}];

     @Prop()
     questionaries_saved: [{questionary_id: string}];

     @Prop()
     history: [{
        readonly title: string
        readonly questionary_id: string,
        readonly pontuation: number 
    }]
}

export const UserSchema = SchemaFactory.createForClass(User)