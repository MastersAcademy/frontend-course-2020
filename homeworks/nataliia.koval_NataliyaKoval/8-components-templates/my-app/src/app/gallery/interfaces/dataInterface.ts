import { UrlsInterface } from './urlsInterface';
import { LinksInterface } from './linksInterface';

export interface DataInterface {
  id: string;
  description: string | null;
  urls: UrlsInterface;
  links: LinksInterface;
  likes: number;
}