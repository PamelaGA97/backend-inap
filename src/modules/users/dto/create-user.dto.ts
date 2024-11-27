import { IsAlphanumeric, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { UserRolEnum } from "../enum/user-rol.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    secondName: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @ApiProperty()
    ci: string;

    @IsNumber()
    @ApiProperty()
    cellphone: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty()
    rol: UserRolEnum;
}