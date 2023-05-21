import { Document } from "mongoose";

export class Topics extends Document{
    readonly category: String
    readonly name: String
    readonly img: String
    readonly overview: {
        readonly creators: String,
        readonly creation_date: String,
        readonly price: String,
        readonly resume: String,
        readonly use: String,
        readonly links: String
    };
    readonly roadmap: {
        readonly steps: [{
            readonly name: String,
        }]
    }
}