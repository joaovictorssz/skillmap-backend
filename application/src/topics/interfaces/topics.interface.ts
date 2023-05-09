import { Document } from "mongoose";

export class Topics extends Document{
    readonly category: String
    readonly name: String
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
            readonly step_name: String,
            readonly step_details: String,
            readonly substeps: [{
                readonly substep_name: String,
                readonly substep_details: String
            }]
        }]
    }
}