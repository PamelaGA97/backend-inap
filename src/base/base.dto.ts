import { IsDate } from "class-validator";

export class BaseDto {
    @IsDate()
    createdAt: Date;

    @IsDate()
    updatedAt: Date;

    @IsDate()
    deletedAt: Date;
}