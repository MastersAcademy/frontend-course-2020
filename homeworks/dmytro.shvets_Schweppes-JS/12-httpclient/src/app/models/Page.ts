import { from } from "rxjs";
import { User } from './User';

export interface Page {
  page: string,
  per_page: string,
  total: number,
  total_pages: number,
  data: User[]
}

