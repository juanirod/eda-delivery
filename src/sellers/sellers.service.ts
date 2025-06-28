import { Injectable } from '@nestjs/common';
import { Seller } from './entities/seller.entity';

@Injectable()
export class SellersService {
    private sellers: Seller[] = [
        { id: '1', name: 'Mc Donalds PE', address: 'Sonia Torres 100' },
        { id: '2', name: 'Di Pale', address: 'Estrada 400' },
        { id: '3', name: 'Heisenberg', address: 'Chacabuco 1060' },
    ]


    findAll(): Seller[] {
        return this.sellers;
    }

    findById(id: string): Seller | undefined {
        return this.sellers.find(seller => seller.id === id);
    }
}
