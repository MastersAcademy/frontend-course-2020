import { Post } from './post.interface';
import { Cost } from './cost.interface';

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