import { Post } from './postInterface';
import { Cost } from './costInterface';

export interface Vehicle {
    color: string;
    fuel: string;
    manufacturer: string;
    model: string;
    type: string;
    vehicle: string
    vin: string;
    post: Post;
    cost: Cost;
}