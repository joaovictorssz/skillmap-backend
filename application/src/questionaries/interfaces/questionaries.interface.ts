import { Document } from "mongoose";

export class Questionary extends Document{
     category: String
     name: String
     difficult:  String
     questions: [{
         description: String,
         alternatives: [{
             title: String
        }],
         answer: String
    }]
 
}