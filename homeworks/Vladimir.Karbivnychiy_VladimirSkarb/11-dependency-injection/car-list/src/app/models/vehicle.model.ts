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

export interface VehiclePost {
  slug: string;
  protocol: string;
}

export interface VehicleCost {
  account: string;
  accountName: string;
  amount: string;
  currencyCode: string;
}
