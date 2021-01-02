export interface Car {
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
  };

  cost: {
    account: string;
    accountName: string;
    amount: string;
    currencyCode: string;
  };

};
