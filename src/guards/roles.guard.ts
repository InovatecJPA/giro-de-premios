import { CanActivate, ExecutionContext, Injectable, ForbiddenException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { PERMISSIONS_KEY, ROLES_KEY } from '../decorators/roles-and-permissions.decorator';

@Injectable()
export class RolesGuard implements CanActivate {
    constructor(private readonly reflector: Reflector) { }

    canActivate(context: ExecutionContext): boolean {
        const requiredRoles = this.reflector.getAllAndOverride<string[]>(ROLES_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        const requiredPermissions = this.reflector.getAllAndOverride<string[]>(PERMISSIONS_KEY, [
            context.getHandler(),
            context.getClass(),
        ]);

        if (!requiredRoles && !requiredPermissions) {
            return true;
        }

        const request = context.switchToHttp().getRequest();
        const user = request.user;

        if (requiredRoles && !requiredRoles.some(role => user.profile === role)) {
            throw new ForbiddenException('Você não tem a permissão necessária para acessar esta rota.');
        }

        if (requiredPermissions && !requiredPermissions.every(permission => user.permissions?.includes(permission))) {
            throw new ForbiddenException('Você não tem as permissões necessárias para acessar esta rota.');
        }

        return true;
    }
}
