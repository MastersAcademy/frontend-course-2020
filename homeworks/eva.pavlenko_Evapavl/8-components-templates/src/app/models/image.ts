export interface Image {
  id: string;
  description: null | string;
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  };
  links: {
    self: string,
    html: string,
    download: string,
    download_location: string
  };
  likes: number
}
