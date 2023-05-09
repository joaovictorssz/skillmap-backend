import { Connection } from "mongoose";
import { topicsSchema } from "./schemas/topics.schema";

export const topicsProvider = [{
    provide: "TOPICS_MODEL",
    useFactory: (connection: Connection) => connection.model('Topics', topicsSchema),
    inject: ['DATABASE_CONNECTION']
}]