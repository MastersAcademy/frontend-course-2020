import { Post } from "./post";
import { Cost } from "./cost";

export interface Vehicle {
  color: string;
  fuel: string;
  manufacturer: string;
  model: string;
  type: string;
  vehicle: string;
  vin: string;
  post: Post;
  cost: Cost
}


