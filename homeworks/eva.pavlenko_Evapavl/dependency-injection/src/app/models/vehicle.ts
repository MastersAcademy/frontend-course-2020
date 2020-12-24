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

export interface Post {
  slug: string;
  protocol: string;
}

export interface Cost {
  account: string;
  accountName: string;
  amount: string;
  currencyCode: string;
}
