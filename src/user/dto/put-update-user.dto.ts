import { Exclude } from "class-transformer";
import { CreateUserDTO } from "./create-user.dto";
import { IsOptional, Validate } from "class-validator";
import { BadRequestException } from "@nestjs/common";

export class PutUpdateUser extends CreateUserDTO {
    @Exclude()
    @IsOptional()
    declare password: string
}