import {Injectable} from "@angular/core";

@Injectable()

export class SaveAuthService {

  saveData(data) {
    let auth = btoa(JSON.stringify(data))
    localStorage.setItem('data', auth)
  }

}
