export interface IVehicleCost {
  amount: string;
  accountName: string;
  currencyCode: string;
  account: string
}

export interface IVehiclePost {
  protocol: string;
  slug: string
}

export interface IVehicle {
  cost: IVehicleCost;
  color: string;
  post: IVehiclePost;
  fuel: string;
  model: string;
  vin: string;
  type: string;
  manufacturer: string;
  vehicle: string
}
