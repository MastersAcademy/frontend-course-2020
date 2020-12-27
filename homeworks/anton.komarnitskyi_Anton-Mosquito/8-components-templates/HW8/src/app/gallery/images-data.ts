interface URL{
  raw: string;
  full: string;
  regular: string;
  small: string;
  thumb: string;
}

interface Links{
  self: string;
  html: string;
  download: string;
  download_location: string;
}

export interface ImagesData {
  id: string;
  description: string;
  urls: URL;
  links: Links;
  likes: number;
  }
