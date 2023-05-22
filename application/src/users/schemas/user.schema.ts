import * as mongoose from 'mongoose'


export const userSchema = new mongoose.Schema({
    name: String,
    last_name: String,
    email: String,
    phone_number: String,
    birth_date: String,
    password: String,
    admin: String

})