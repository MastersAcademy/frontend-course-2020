import {VehiclePost} from "./vehicle-post.model";
import {VehicleCost} from "./vehicle-cost.model";

export interface Vehicle {
    color: string;
    fuel: string;
    manufacturer: string;
    model: string;
    type: string;
    vehicle: string;
    vin: string;
    post: VehiclePost;
    cost: VehicleCost;
}
