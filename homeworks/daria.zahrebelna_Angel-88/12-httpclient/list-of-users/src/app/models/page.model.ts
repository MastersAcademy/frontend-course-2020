import {PageUser} from "./page-user.model";
import {PageSupport} from "./page-support.model";

export interface Page{
    page: number;
    perPage: number;
    total: number;
    total_pages: number;
    data: PageUser[];
    support: PageSupport;
}
