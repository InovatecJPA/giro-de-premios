// guards/owns-raffle-edition.guard.ts
import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { RaffleEditionService } from '../raffle/raffle-edition/raffle-edition.service';

@Injectable()
export class OwnsRaffleEditionGuard implements CanActivate {
    constructor(
        private readonly raffleEditionService: RaffleEditionService,
        private readonly reflector: Reflector,
    ) { }

    async canActivate(context: ExecutionContext): Promise<boolean> {
        const request = context.switchToHttp().getRequest();
        const user = request.user;
        const raffleEditionId = request.params.id;

        if (!user || !raffleEditionId) {
            throw new ForbiddenException('Usuário ou ID da edição não encontrados');
        }

        const raffleEdition = await this.raffleEditionService.findById(raffleEditionId);

        if (!raffleEdition) {
            throw new ForbiddenException('Edição não encontrada');
        }

        if (user.profile === 'admin' || user.profile === 'suporte') {
            return true;
        }

        if (raffleEdition.user_id !== user.sub) {
            throw new ForbiddenException('Você não tem permissão para editar essa edição');
        }

        return true;
    }
}
