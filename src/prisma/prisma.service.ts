import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from 'src/prisma/generated/prisma/client';
import { PaginationOptions } from 'src/utils/types/pagination.types';
@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy {
  constructor() {
    super({
      log: process.env.NODE_ENV === 'test' ? [] : ['query', 'info', 'warn', 'error'],
      errorFormat: 'pretty',
    });
  }

  async onModuleInit() {
    await this.$connect();
  }

  async onModuleDestroy() {
    await this.$disconnect();
  }

  async paginate<T>(
    model: {
      count: (args: any) => Promise<number>;
      findMany: (args: any) => Promise<T[]>;
    },
    options: PaginationOptions & { where?: any; select?: any; orderBy?: any }
  ) {
    const skipCount = (options.skip - 1) * options.take;
    const take = options.take;

    const [total, items] = await this.$transaction(async () => {
      return Promise.all([
        model.count({ where: options.where }),
        model.findMany({ 
          where: options.where,
          select: options.select,
          orderBy: options.orderBy, 
          skip: skipCount, 
          take 
        }),
      ]);
    });

    return {
      total,
      items,
      pages: Math.ceil(total / take),
      skip: options.skip,
      take,
    };
  }

}

