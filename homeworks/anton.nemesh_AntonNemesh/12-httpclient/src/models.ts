export interface IUserModel{
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface IUsersAPISupportModel{
  url: string;
  text: string;
}

export interface IUsersAPIModel{
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: IUserModel[];
  support: IUsersAPISupportModel;
}
