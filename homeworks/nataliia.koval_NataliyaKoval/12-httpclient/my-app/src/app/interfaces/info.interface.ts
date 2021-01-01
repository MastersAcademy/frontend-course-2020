import { UserInterface } from "./user.interface";
import { SupportInterface } from "./support.interface";

export interface InfoInterface {
    data: UserInterface;
    page: number;
    total: number;
    per_page: number;
    total_pages: number;
    support: SupportInterface;
}