import { Document } from 'mongoose';
import { CreateQustionaryDto } from 'src/questionaries/dtos/create-questioary';
import { CreateTopicDto } from 'src/topics/dtos/create-topic.dto';

export interface User extends Document {
  readonly name: string;
  readonly last_name: string;
  readonly email: string;
  readonly phone_number: string;
  readonly birth_date: string;
  readonly password: string;
  readonly admin: string;
  readonly topics_saved: [{
    readonly topic_id: string,
    readonly title: string
}],
  readonly questionaries_saved: [
    {
      readonly questionary_id:  string
    }
  ]
  readonly history: [{
        questionary_id: string,
        pontuation: number,
        title: string
    }]
}