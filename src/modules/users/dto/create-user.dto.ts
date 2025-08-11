import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { UserEnum } from "../enums/user.enum";
import { UserRolEnum } from "../enums/user-rol-enum";

export class CreateUserDto {
    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Armando'})
    firstName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Paredes Rojas'})
    secondName: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: '77885641'})
    phone: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: '6687495'})
    ci: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'armandoParedes@testnest.com'})
    email: string;

    @IsNotEmpty()
    @ApiProperty({example: UserEnum.PROFESSOR})
    type: UserEnum;

    @IsNotEmpty()
    @ApiProperty({example: UserRolEnum.PROFESSOR})
    rol: UserRolEnum;

    @IsBoolean()
    @ApiProperty({example: true})
    isAvaible: boolean;

    @IsString()
    @ApiProperty({example: '1234567890'})
    password: string;

    @IsNumber()
    @ApiProperty({example: 4000.00})
    salary: number

    // optionals for type user
    // professor

    @IsDateString()
    @ApiProperty({example: '2025-01-01'})
    initialDate: Date;

    @IsDateString()
    @ApiProperty({example: '2025-01-01'})
    finishDate: Date;

    // secretary

    @IsString()
    @ApiProperty({example: 'Av. ecologina entre Av. catarina y rocabado'})
    address: string;
}