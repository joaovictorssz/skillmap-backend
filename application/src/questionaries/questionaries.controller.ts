import { Controller, Get, Post, Body } from '@nestjs/common';
import { QuestionariesService } from './questionaries.service';
import { CreateQustionaryDto } from './dtos/create-questioary';

@Controller('questionaries')
export class QuestionariesController {

    constructor(private readonly questionariesService: QuestionariesService){}


    @Get('list_all')
    async getQuestionaries(){
        return await this.questionariesService.listQuestionaries()
    }

    @Post('create')
    async createQuestionary(@Body() createQuestionaryDto: CreateQustionaryDto){

        const newQuestionary = await this.questionariesService.addQuestionary(createQuestionaryDto)

        if(!newQuestionary){
            return ("Questionary not created")
        }

        return {
            msg: "Questionary created sucessfully",
            data: newQuestionary
        }


    }
}
