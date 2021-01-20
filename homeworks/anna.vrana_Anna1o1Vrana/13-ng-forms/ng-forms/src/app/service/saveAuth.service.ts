import {Injectable} from "@angular/core";

@Injectable()

export class SaveAuthService {

  saveData(data) {
    console.log('saved')
    console.log(data)
    let auth = btoa(JSON.stringify(data))
    console.log(auth)
    localStorage.setItem('data', auth)
  }

  checkLocalStorage() {
    if (localStorage.getItem('data')) {
      return JSON.parse(atob(localStorage.getItem('data')))
    }
  }

}
