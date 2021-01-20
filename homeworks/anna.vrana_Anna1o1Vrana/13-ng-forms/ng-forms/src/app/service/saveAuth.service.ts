import {Injectable} from "@angular/core";

@Injectable()

export class SaveAuthService {

  saveData(data) {
    console.log('saved')
    let auth = btoa(JSON.stringify(data))
    console.log(auth)
    localStorage.setItem('data', auth)
  }

  checkLocalStorage(form) {
    if (localStorage.getItem('data')) {
      console.log(localStorage.getItem('data'))
      const dataEncode = JSON.parse(atob(localStorage.getItem('data')))
      form.setValue({
        'email': dataEncode.email,
        'password': dataEncode.password,
        'rememberMe': false
      })
    }
  }

}
