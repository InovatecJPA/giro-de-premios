import { Injectable } from "@nestjs/common";
import { PaginationOptions } from "src/utils/types/pagination.types";

@Injectable()
export class RaffleEditionService {
    constructor(

    ) {}

    async findAll(pagination: PaginationOptions) {}
    async findById(id: string) {}
    async create(data: any) {}
    async update(id: string, data: any) {}
    async delete(id: string) {}
    async exists(id: string) {
        // if (await this.findById(id)) {
    //       return true;
    //     }
    
    //     return false;
      }
}