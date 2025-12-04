import { ApiProperty } from "@nestjs/swagger";
import { IsBoolean, IsEnum, IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";
import { UserRolEnum } from "../enums/user-rol-enum";
import { TurnsJob } from "src/modules/base/enums/turns-job.enum";
import { Faculty } from "src/modules/faculties/entities/faculty.entity";
import { Degree } from "src/modules/degree/entities/degrees.entity";

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

    // @IsNotEmpty()
    // @IsEnum(UserEnum)
    // @ApiProperty({example: UserEnum.PROFESSOR})
    // user_type: UserEnum;

    @IsNotEmpty()
    @IsEnum(UserRolEnum)
    @ApiProperty({example: UserRolEnum.PROFESSOR})
    rol: UserRolEnum;

    @IsBoolean()
    @ApiProperty({example: true})
    isAvaible: boolean;

    @IsString()
    @ApiProperty({example: '1234567890'})
    password: string;

    @IsOptional()
    @IsNumber()
    @ApiProperty({example: 4000.00})
    salary: number

    // optionals for type user
    // professor

    // @IsOptional()
    // @IsDateString()
    // @ApiProperty({example: '2025-01-01'})
    // initialDate: Date;

    // @IsOptional()
    // @IsDateString()
    // @ApiProperty({example: '2025-01-01'})
    // finishDate: Date;

    // secretary
    @IsOptional()
    @IsString()
    @ApiProperty({example: 'TARDE'})
    turn: TurnsJob;

    @IsOptional()
    @IsString()
    @ApiProperty({example: 'Magdalena'})
    highschool: string

    @IsOptional()
    @IsString()
    @ApiProperty({example: '2023'})
    graduationYear: string

    @ApiProperty({
        oneOf: [
            { type: 'string', example: 'uuid-de-facultad' },
            { type: 'object', example: { id: 'uuid-de-facultad' } }
        ]
    })
    faculty: string | Faculty;

    @ApiProperty({
        oneOf: [
            { type: 'string', example: 'uuid-de-facultad' },
            { type: 'object', example: { id: 'uuid-de-facultad' } }
        ]
    })
    degree: string | Degree;
}
