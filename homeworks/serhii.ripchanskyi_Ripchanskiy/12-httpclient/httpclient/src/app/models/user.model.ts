import { Page } from "./page.model";

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
}

export interface UsersPage extends Page {
  data: User[];
}
