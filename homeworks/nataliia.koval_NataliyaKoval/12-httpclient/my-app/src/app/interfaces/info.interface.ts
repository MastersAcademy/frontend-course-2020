import { User } from "./user.interface";
import { Support } from "./support.interface";

export interface Info {
    data: User[];
    page: number;
    total: number;
    per_page: number;
    total_pages: number;
    support: Support;
}