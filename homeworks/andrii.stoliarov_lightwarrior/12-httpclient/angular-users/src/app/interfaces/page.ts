import { User } from "./user";

export interface Page {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
  support: {
      url: string;
      text: string;
  };
}
