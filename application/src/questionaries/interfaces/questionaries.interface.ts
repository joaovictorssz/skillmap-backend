import { Document } from "mongoose";

export class Questionary extends Document{
    readonly category: String
    readonly name: String
    readonly difficult:  String
    readonly questions: [{
        readonly description: String,
        readonly alternatives: [{
            readonly title: String
        }],
        readonly answer: String
    }]
}