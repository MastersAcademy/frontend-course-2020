import { Journey } from './models/journey.model';

export const journeys: Journey[] = [
  {
    message: 'User tends to home',
    journey: ['/home', '/account', '/home']
  },
  {
    message: 'User tends to account',
    journey: ['/account', '/home', '/account']
  },
  {
    message: 'User loves journeys',
    journey: ['/home', '/account', '/accessories']
  }
]
