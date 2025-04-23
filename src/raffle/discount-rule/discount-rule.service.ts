import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { CreateDiscountRuleDto } from './dto/create-discount-rule.dto';
import { PatchUpdateDiscountRuleDto } from './dto/patch-update-discount-rule.dto';
import { PutUpdateDiscountRuleDto } from './dto/put-update-discount-rule.dto';
import { ResponseDiscountRuleDto } from './dto/response-discount-rule.dto';
import { plainToInstance } from 'class-transformer';
import { PaginationOptions } from '../../utils/types/pagination.types';

@Injectable()
export class DiscountRuleService {
  constructor(private readonly prisma: PrismaService) { }

  async findAll(
    pagination: PaginationOptions,
  ) {
    const { total, items, pages, skip, take } =
      await this.prisma.paginate(this.prisma.discountRule, {
        ...pagination,
        select: {
          id: true,
          min_tickets: true,
          discount_value: true,
          raffle_edition_id: true,
        },
      });

    const data = items.map(item =>
      plainToInstance(ResponseDiscountRuleDto, {
        ...item,
        discount_value: item.discount_value.toString(),
      }),
    );

    return { data, meta: { total, pages, skip, take } };
  }

  async findById(id: string) {
    const rule = await this.prisma.discountRule.findUnique({
      where: { id },
      select: {
        id: true,
        min_tickets: true,
        discount_value: true,
        raffle_edition_id: true,
      },
    });
    if (!rule) {
      throw new NotFoundException('Regra de desconto não encontrada');
    }
    return rule;
  }

  async findByHighestDiscountAvailableByTicketAmount(amount: number) {
    const rule = await this.prisma.discountRule.findFirst({
      where: { min_tickets: { lte: amount } },
      orderBy: { discount_value: 'desc' },
      select: {
        id: true,
        min_tickets: true,
        discount_value: true,
        raffle_edition_id: true,
      },
    });

    return rule;
  }

  async create(dto: CreateDiscountRuleDto) {
    const created = await this.prisma.discountRule.create({
      data: {
        min_tickets: dto.min_tickets,
        discount_value: dto.discount_value,
        raffle_edition_id: dto.raffle_edition_id,
      },
    });
    return created;
  }

  async update(
    id: string,
    data: PatchUpdateDiscountRuleDto | PutUpdateDiscountRuleDto,
  ) {
    await this.findById(id);


    const updated = await this.prisma.discountRule.update({
      where: { id },
      data,
    });

    return updated;
  }

  async remove(id: string): Promise<void> {
    if (!(await this.exists(id))) {
      throw new NotFoundException('Regra de desconto nao encontrada');
    }

    await this.prisma.discountRule.delete({ where: { id } });
  }

  async exists(id: string): Promise<boolean> {
    const rule = await this.findById(id);
    if (rule) {
      return true;
    }
    return false;
  }
}
