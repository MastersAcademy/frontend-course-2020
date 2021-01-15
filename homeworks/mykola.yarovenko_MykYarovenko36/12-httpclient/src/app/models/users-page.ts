import { User } from './user';

export interface DefaultUsersPage {
  data: User[],
  page: number,
  per_page: number,
  support: {
     text: string,
     url: string,
  }
  total: number,
  total_pages: number,
}
