import { User } from './user.model';

export interface Page {
  page: string,
  per_page: string,
  total: number,
  total_pages: number,
  data: User[]
}

