import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDateString, IsNotEmpty, IsString, ValidateNested } from "class-validator";
import { Branch } from "src/modules/base/enums/branch.enum";
import { TurnsJob } from "src/modules/base/enums/turns-job.enum";
import { CreateUserDto } from "src/modules/users/dto/create-user.dto";

export class CreateSecretaryDto {

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'TARDE'})
    turn: TurnsJob;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({example: 'Sucursal 2'})
    branch: Branch;

    @ApiProperty()
    @ValidateNested()
    @Type(() => CreateUserDto)
    user: CreateUserDto;
}
