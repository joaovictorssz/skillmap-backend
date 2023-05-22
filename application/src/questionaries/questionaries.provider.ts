import { Connection } from "mongoose";
import { questionarySchema } from "./schemas/questionary.schema";


export const questionariesProvider = [{
    provide: "QUESTIONARIES_MODEL",
    useFactory: (connection: Connection) => connection.model('Questionaries', questionarySchema),
    inject: ['DATABASE_CONNECTION']
}]