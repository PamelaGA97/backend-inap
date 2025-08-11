import { PartialType } from "@nestjs/swagger";
import { CreateUserDto } from "./create-user.dto";

export class UpdateUserDto extends PartialType(CreateUserDto) {
    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: 'Armando'})
    // firstName?: string;

    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: 'Paredes Rojas'})
    // secondName: string;

    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: '77885648'})
    // phone: string;

    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: '44896722'})
    // ci: string;

    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: 'ArmandoParedes@testnest.com'})
    // email: string;

    // @IsOptional()
    // @IsString()
    // @ApiProperty({example: '1234567890'})
    // password: string;

    // @IsOptional()
    // @IsNumber()
    // @ApiProperty({example: 4000.00})
    // salary: number;
    
    // @IsOptional()
    // @IsDateString()
    // @ApiProperty({example: '2025-01-01'})
    // initialDate: Date;

    // @IsOptional()
    // @IsDateString()
    // @ApiProperty({example: '2030-01-01'})
    // finishDate: Date;
}