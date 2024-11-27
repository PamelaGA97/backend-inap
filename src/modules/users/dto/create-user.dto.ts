import { IsAlphanumeric, IsNotEmpty, IsNumber, IsPhoneNumber, IsString } from "class-validator";
import { UserRolEnum } from "../enum/user-rol.enum";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Ana Maria' })
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'Medrano' })
    secondName: string;

    @IsAlphanumeric()
    @IsNotEmpty()
    @ApiProperty({ example: '873498231' })
    ci: string;

    @IsNumber()
    @ApiProperty({ example: '77883421' })
    cellphone: number;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({ example: 'ADMINISTRADOR' })
    rol: UserRolEnum;
}