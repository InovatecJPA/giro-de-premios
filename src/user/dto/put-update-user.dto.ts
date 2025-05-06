import { CreateUserDTO } from "./create-user.dto";
import { OmitType } from "@nestjs/mapped-types";

export class PutUpdateUser extends OmitType(CreateUserDTO, ['credentials']) {

}