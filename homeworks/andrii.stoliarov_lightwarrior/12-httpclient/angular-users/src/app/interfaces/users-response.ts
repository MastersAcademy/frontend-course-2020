import { User } from './user';
import { SupportReqres } from './support-reqres'

export interface UsersResponse {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: SupportReqres;
}
