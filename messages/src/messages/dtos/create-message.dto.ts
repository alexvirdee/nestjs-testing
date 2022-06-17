import { IsString } from 'class-validator';

/**
  Note: DTO Stands for (Data Transfer Object)
 This class is created in order to describe the different properties that the request body should have
 */
export class CreateMessageDto {
    @IsString()
    content: string;
}