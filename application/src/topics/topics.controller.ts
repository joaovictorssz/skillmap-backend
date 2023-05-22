import { CreateTopicDto } from './dtos/create-topic.dto';
import { TopicsService } from './topics.service';
import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('topics')
export class TopicsController {

    constructor(private readonly topicsService: TopicsService){
        
    }

    @Get('list_all')
    async listAll(){
        const topics = await this.topicsService.listAll()
        return topics
    }

    @Get('category/:category')
    async listByCategory(@Param() params: string){
        const topics = await this.topicsService.listByCategory(params)
        return topics
    }

    @Get('list/:category/:qtd')
    async listByCategoryAndQuantity(@Param() params: {category:  string, qtd: number}){
        const topics = await this.topicsService.listByCategoryAndQuantity(params.category, params.qtd)
        return topics.slice(0, params.qtd)
    }

    @Get(':id')
    async getTopic(@Param() params: {id:  string}){
        const topic = await this.topicsService.getTopic(params.id)
        return topic
    }

    @Post('create')
    async create(@Body() createTopic: CreateTopicDto){
        const newTopic = await this.topicsService.createTopic(createTopic)

        if(!newTopic){
            return ("Topic not created")
        }

        return {
            msg: "Topic created sucessfully",
            data: newTopic
        }
    }

}
