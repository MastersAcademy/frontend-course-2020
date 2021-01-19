interface Post {
    slug: string;
    protocol: string;
}

interface Cost {
    account: string;
    accountName: string;
    amount: string;
    currencyCode: string;
}

export interface Vehicle {
    color: string;
    fuel: string;
    manufacturer: string;
    model: string;
    type: string;
    vehicle: string;
    vin: string;
    post: Post
    cost: Cost
}
