export interface Data {
    id: number
    email: string
    first_name: string
    last_name: string
    avatar: string
}

export interface Support {
    url: string
    text: string
}

export interface User {
    page: number;
    per_page: number;
    total: number;
    total_pages: number;
    data: Data[];
    support: Support;
}
