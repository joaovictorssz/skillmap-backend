import * as mongoose from 'mongoose'

export const topicsSchema = new mongoose.Schema({
    category: String,
    name: String,
    overview: {
        creators: String,
        creation_date: String,
        price: String,
        resume: String,
        use: String,
        links: String
    },
    roadmap: {
        steps: [{
            step_name: String,
            step_details: String,
            substeps: [{
                substep_name: String,
                substep_details: String
            }]
        }]
    }

})