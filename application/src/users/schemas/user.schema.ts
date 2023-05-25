import * as mongoose from 'mongoose'
import { CreateTopicDto } from './../../topics/dtos/create-topic.dto';


export const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    phone_number: String,
    birth_date: String,
    password: String,
    admin: String,
    topics_saved:  [{
        topic_id: String,
        title: String
    }],
    questionaries_saved: [{
        questionary_id: String
    }],
    history: [{
        questionary_id: String,
        pontuation: Number,
        title: String
    }]
   

})