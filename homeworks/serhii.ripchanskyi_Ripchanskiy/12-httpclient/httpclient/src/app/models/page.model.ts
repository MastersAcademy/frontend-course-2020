export interface Page {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  support: {
    url: string;
    text: string;
  };
}

export interface PageRequestParams {
  params : {
    'page': string,
    'per_page': string
  }
}
