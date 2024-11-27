import { CreateSecretaryDto } from "./create-secretary.dto";
import { PartialType } from '@nestjs/mapped-types';

export class UpdateSecretaryDto extends PartialType(CreateSecretaryDto) {}