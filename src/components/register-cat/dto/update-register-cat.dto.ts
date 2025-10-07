import { PartialType } from '@nestjs/swagger';
import { CreateRegisterCatDto } from './create-register-cat.dto';

export class UpdateRegisterCatDto extends PartialType(CreateRegisterCatDto) {}
