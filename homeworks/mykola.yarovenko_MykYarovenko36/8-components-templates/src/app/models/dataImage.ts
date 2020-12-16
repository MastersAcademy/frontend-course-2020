export interface dataGallary {
  id: string,
  description: null | string,
  urls: {
    raw: string,
    full: string,
    regular: string,
    small: string,
    thumb: string
  },
  links: {
    self: string,
    html: string,
    download: string,
    download_location: string
  },
  likes: number
}

export interface dataImage {
  id: string,
  urls: {
    [key: string]: string
  },
}
