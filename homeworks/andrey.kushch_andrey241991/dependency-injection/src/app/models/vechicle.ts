interface post {
    slug: string;
    protocol: string;
}

interface cost {
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
    post: post
    cost: cost
}
