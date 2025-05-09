// self-only.guard.ts
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class SelfOnlyGuard implements CanActivate {
  constructor(private reflector: Reflector) { }

  canActivate(context: ExecutionContext): boolean {
    const selfOnly = this.reflector.getAllAndOverride<boolean>('self_only', [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!selfOnly) return true;

    const request = context.switchToHttp().getRequest();
    const user = request.user;
    const paramId = request.params?.id;

    if (user?.profile === 'influencer' && user.sub !== paramId) {
      throw new ForbiddenException('Influencers só podem acessar seus próprios dados.');
    }

    return true;
  }
}
