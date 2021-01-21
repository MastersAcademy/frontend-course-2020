import {Injectable} from "@angular/core";
import {AuthorizationData} from "../models/authorizationData.interface";

@Injectable()

export class SaveAuthService {

  saveData(data: AuthorizationData): void {
    let auth = btoa(JSON.stringify(data))
    localStorage.setItem('data', auth)
  }

  getData(): AuthorizationData {
    if (localStorage.getItem('data')) {
      return JSON.parse(atob(localStorage.getItem('data')))
    } else {
      return {
        email: '',
        password: '',
        rememberMe: false
      }
    }
  }

}
