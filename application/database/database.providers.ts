import * as mongoose from 'mongoose'

const uri= 'mongodb+srv://skillmap_app:1234@cluster0.1qs8bli.mongodb.net/?retryWrites=true&w=majority'
//const uri= 'mongodb://0.0.0.0:27017/skillmap'


export const  databaseProviders  = [{
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(uri)
}]