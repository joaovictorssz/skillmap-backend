import { CreateQustionaryDto } from "src/questionaries/dtos/create-questioary";
import { CreateTopicDto } from "src/topics/dtos/create-topic.dto";

export interface CreateUserDto {
    name: string,
    last_name: string,
    email: string,
    phone_number: string,
    birth_date: string,
    password: string,
    admin: string,
    topics_saved: [{
        topic_id: string,
        title: string
    }],
    questionaries_saved: [
    {
      questionary_id: string
    }
  ]
    history: [{
        questionary_id: string,
        pontuation: number,
        title: string
    }]
}