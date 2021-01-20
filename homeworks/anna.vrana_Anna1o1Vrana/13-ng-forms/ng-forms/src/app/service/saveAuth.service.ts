import {Injectable} from "@angular/core";

@Injectable()

export class SaveAuthService {

  saveData(data) {
    let auth = btoa(JSON.stringify(data))
    return localStorage.setItem('data', auth)
  }

  checkLocalStorage() {
    if (localStorage.getItem('data')) {
      return JSON.parse(atob(localStorage.getItem('data')))
    }
  }

}
