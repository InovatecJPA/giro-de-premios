import { Controller } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { privateDecrypt } from "crypto";

@Controller('auth')
export class AuthController {

    constructor(
        private authService: AuthService
    ) { }


}