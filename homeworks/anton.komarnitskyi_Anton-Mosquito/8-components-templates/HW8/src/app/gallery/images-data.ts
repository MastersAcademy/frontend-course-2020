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

export class ImagesData {
  id!: string;
  description!: string | null;
  urls!: URL;
  links!: Links;
  likes!: number;
  }
