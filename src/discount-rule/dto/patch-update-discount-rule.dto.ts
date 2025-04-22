import { PartialType } from '@nestjs/mapped-types';
import { CreateDiscountRuleDto } from './create-discount-rule.dto';

export class PatchUpdateDiscountRuleDto extends PartialType(CreateDiscountRuleDto) {}
