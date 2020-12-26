import {Post} from "./post";
import {Cost} from "./cost";

export interface Vehicle {
  color: string;
  fuel: string;
  manufacturer: string;
  model: string;
  type: string;
  vehicle: string;
  vin: string;
  post: {
    slug: string;
    protocol: string;
  }
  cost: {
    account: string;
    accountName: string;
    amount: string;
    currencyCode: string;
  }
}


