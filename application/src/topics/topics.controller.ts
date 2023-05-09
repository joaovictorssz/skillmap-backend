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

    @Get(':category')
    async listByCategory(@Param() params: string){
        const topics = await this.topicsService.listByCategory(params)
        return topics
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
