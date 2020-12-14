import { from } from 'rxjs';
import { Urls } from './urls-image'
import { Links } from './links-image'

export interface Image {
    id: string,
    description: string | null,
    urls: Urls,
    links: Links,
    likes: number
}
