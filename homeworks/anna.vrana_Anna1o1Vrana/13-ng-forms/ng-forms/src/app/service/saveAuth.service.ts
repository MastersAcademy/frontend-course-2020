import { Injectable } from "@angular/core";
import { AuthorizationDataModel } from "../models/authorizationData.model";

@Injectable()

export class SaveAuthService {

  saveData(data: AuthorizationDataModel): void {
    console.log(typeof data)
    let auth = btoa(JSON.stringify(data))
    localStorage.setItem('data', auth)
  }

  getData(): AuthorizationDataModel {
    if (localStorage.getItem('data')) {
      return JSON.parse(atob(localStorage.getItem('data')))
    } else {
      return null
    }
  }

}
