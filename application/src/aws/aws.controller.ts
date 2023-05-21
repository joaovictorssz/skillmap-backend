import { Controller, Post,Get, UseInterceptors, UploadedFile, Param } from "@nestjs/common";
import { FileInterceptor } from "@nestjs/platform-express";
import { AWSService } from './aws.service';

@Controller("storage")
export class AWSController {

    constructor(private readonly awsService: AWSService){}

    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    async uploadFile(@UploadedFile() file:  Express.Multer.File){
         await this.awsService.upload(file.originalname, file.buffer)
    }

}