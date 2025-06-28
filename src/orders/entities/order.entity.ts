export type OrderStatus =
    | 'created'
    | 'confirmed'
    | 'assigned'
    | 'picked_up'
    | 'delivered';

export class Order {
    id: string;
    customerId: string;
    sellerId: string;
    riderId?: string;
    status: OrderStatus;
    confirmationCode?: string; 
    createdAt: Date;
}