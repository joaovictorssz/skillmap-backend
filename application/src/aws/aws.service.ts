import { S3Client , PutObjectCommand } from '@aws-sdk/client-s3';
import { Injectable, Inject } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AWSService {

    private readonly s3Client = new S3Client({region:  this.configService.getOrThrow('AWS_S3_REGION'), })

    constructor(private readonly configService: ConfigService){}

    async upload(filename: string, file: Buffer){
        await this.s3Client.send(
            new PutObjectCommand({
                Bucket: 'skillmap-image-storage',
                Key: filename,
                Body: file,
                ContentType: 'image/jpg',
                
            })
        )
        
    }


}
