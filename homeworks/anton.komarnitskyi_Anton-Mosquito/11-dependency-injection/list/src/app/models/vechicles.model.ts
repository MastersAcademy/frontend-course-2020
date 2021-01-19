export interface VechiclesPost {
  slug: string;
  protocol: string;
}

export interface VechiclesCost {
  account: string;
  accountName: string;
  amount: string;
  currencyCode: string;
}

export interface Vechicles {
  color: string;
  fuel: string;
  manufacturer: string;
  model: string;
  type: string;
  vehicle: string;
  vin: string;
  post: VechiclesPost;
  cost: VechiclesCost;
}
