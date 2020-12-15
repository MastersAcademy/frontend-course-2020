export interface Image {
  id: string;
  description: string | null;
  urls: ImageUrls;
  links: ImageLinks;
  likes: number;
}
export interface ImageUrls {
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

export interface ImageLinks {
  self: string;
  html: string;
  download: string;
  download_location: string;
}
