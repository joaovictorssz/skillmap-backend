import * as mongoose from 'mongoose'

const uri= 'mongodb+srv://skillmap_app:1234@cluster0.1qs8bli.mongodb.net/?retryWrites=true&w=majority'

export const  databaseProviders  = [{
    provide: "DATABASE_CONNECTION",
    useFactory: (): Promise<typeof mongoose> => mongoose.connect(uri)
}]