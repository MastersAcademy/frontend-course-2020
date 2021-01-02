export interface Vehicle {
  fuel: string;
  manufacturer: string;
  model: string;
  post: Post;
  cost: Cost;
}

export interface Post {
  protocol: string;
}

export interface Cost {
  amount: string;
  currencyCode: string;
}
