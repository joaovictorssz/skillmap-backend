import { Injectable, Inject } from '@nestjs/common';
import { Model } from 'mongoose';
import { Questionary } from './interfaces/questionaries.interface';
import { CreateQustionaryDto } from './dtos/create-questioary';

@Injectable()
export class QuestionariesService {

    constructor(
        @Inject("QUESTIONARIES_MODEL")
        private questionariesModel: Model<Questionary>
    ){}
    

    async listQuestionaries(): Promise<Questionary[]>{

        const  questionaries  = await this.questionariesModel.find()
        return questionaries

    }

    async addQuestionary(createQuestionaryDto: CreateQustionaryDto){
        const questionary = new this.questionariesModel(createQuestionaryDto)
        return questionary.save()
    }

}
