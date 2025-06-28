import { Injectable } from '@nestjs/common';
import { Rider } from './entities/rider.entity';

@Injectable()
export class RidersService {
    private riders:Rider[] = [
        { id: 'rider1', name: 'Rider 1', available: true },
        { id: 'rider2', name: 'Rider 2', available: true },
        { id: 'rider3', name: 'Rider 3', available: false },
    ];

    findAvailable() {
        return this.riders.find((r) => r.available);
    }

    markBusy(riderId: string) {
        const rider = this.riders.find((r) => r.id === riderId);
        if (rider) rider.available = false;
      }
}
