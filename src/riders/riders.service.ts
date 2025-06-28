import { Injectable } from '@nestjs/common';
import { Rider } from './entities/rider.entity';

@Injectable()
export class RidersService {
    private riders: Rider[] = [
        { id: 'rider1', name: 'Juan', available: true },
        { id: 'rider2', name: 'Richard', available: true },
        { id: 'rider3', name: 'Pedro', available: false },
    ];

    findAvailable() {
        return this.riders.find((r) => r.available);
    }

    markBusy(riderId: string) {
        const rider = this.riders.find((r) => r.id === riderId);
        if (rider) rider.available = false;
    }

    markAvailable(riderId: string) {
        const rider = this.riders.find((r) => r.id === riderId);
        if (rider) rider.available = true;
    }

    findById(riderId: string) {
        return this.riders.find((r) => r.id === riderId);
    }

}
