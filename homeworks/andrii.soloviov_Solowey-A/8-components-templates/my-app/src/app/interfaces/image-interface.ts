export interface Image {
  id: string,
  description: string,
  urls: Urls,
  links: object,
  likes: number,
}

export interface Urls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}
