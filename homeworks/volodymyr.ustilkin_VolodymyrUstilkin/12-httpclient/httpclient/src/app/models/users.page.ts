import {User} from "./user";

export class UsersPage {
  page: number;
  per_page: number;
  total_pages: number;
  data: User[];
}
