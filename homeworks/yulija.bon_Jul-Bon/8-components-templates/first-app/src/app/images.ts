export class Image {
  id: string;
  description: null | string;
  urls: any;
  links: object;
  likes: number;

  constructor() {
    this.id = "ID";
    this.description = "Image url";
    this.urls = {
      raw: '',
      full: '',
      regular: '',
      small: '',
      thumb: '',
    };
    this.links = {

    };
    this.likes = 1;
  }
}

