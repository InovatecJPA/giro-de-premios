import { OmitType, PartialType } from "@nestjs/mapped-types";
import { CreateUserDTO } from "./create-user.dto";

export class PatchUpdateUser extends PartialType(OmitType(CreateUserDTO, ['credentials'])) {

}