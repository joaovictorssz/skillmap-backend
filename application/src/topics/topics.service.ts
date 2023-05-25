import { CreateTopicDto } from './dtos/create-topic.dto';
import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Topics } from './interfaces/topics.interface';

@Injectable()
export class TopicsService {

    constructor(
        @Inject("TOPICS_MODEL")
        private topicsModel: Model<Topics>
    ){}

    async createTopic(createTopicDto: CreateTopicDto){
        const topic = new this.topicsModel(createTopicDto)
        return topic.save()
    }

    async listAll(): Promise<Topics[]>{
        return this.topicsModel.find().exec()
    }

    async listByCategory(params: String): Promise<Topics[]>{
        return this.topicsModel.find(params)
    }

    async listByCategoryAndQuantity(category: String, qtd: number): Promise<Topics[]>{
        const topics =  this.topicsModel.find({category: category}).limit(qtd).exec()
        return topics
    }

    async getTopic(id: String): Promise<Topics>{
        const topic =  this.topicsModel.findOne({_id: id})
        return topic
    }

}
