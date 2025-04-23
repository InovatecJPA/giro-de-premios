import { Exclude } from "class-transformer";
import { CreateUserDTO } from "./create-user.dto";
import { IsOptional, Validate } from "class-validator";
import { BadRequestException } from "@nestjs/common";
import { OmitType } from "@nestjs/mapped-types";

export class PutUpdateUser extends OmitType(CreateUserDTO, ['credentials']) {

}