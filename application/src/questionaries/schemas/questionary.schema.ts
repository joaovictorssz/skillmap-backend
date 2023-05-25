import * as mongoose from 'mongoose'

export const questionarySchema = new mongoose.Schema({
    category: String,
    name: String,
    difficult:  String,
    questions: [
        {
            description: String,
            alternatives: [{
                title: String
            }],
            answer: String
        }
    ],
    
    
})