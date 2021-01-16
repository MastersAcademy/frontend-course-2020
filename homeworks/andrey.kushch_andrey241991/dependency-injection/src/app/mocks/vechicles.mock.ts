import * as faker from 'faker';
import { Vehicle } from '../models/vechicle';

function getFakeVehicle(): Vehicle {
  return {
    color: faker.vehicle.color(),
    fuel: faker.vehicle.fuel(),
    manufacturer: faker.vehicle.manufacturer(),
    model: faker.vehicle.model(),
    type: faker.vehicle.type(),
    vehicle: faker.vehicle.vehicle(),
    vin: faker.vehicle.vin(),

    post: {
      slug: faker.helpers.slugify(faker.name.title()),
      protocol: faker.internet.protocol(),
    },

    cost: {
      account: faker.finance.account(),
      accountName: faker.finance.accountName(),
      amount: faker.finance.amount(),
      currencyCode: faker.finance.currencyCode(),
    },
  };
}

export const MOCK_VEHICLES = new Array(20).fill(0).map(() => getFakeVehicle());
