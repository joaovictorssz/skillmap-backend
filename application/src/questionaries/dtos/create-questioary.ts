export interface CreateQustionaryDto{
    name: string,
    difficult: string,
    category: string,
    questions: [{
        description: string,
        alternatives: [{
            title: string
        }],
        answer: string
    }],
    _id?: string
}