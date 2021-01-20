import {Injectable} from "@angular/core";
import {DataModel} from "../models/data.model";

@Injectable()

export class SaveAuthService {

saveData(data) {
  let auth=btoa(JSON.stringify(data))
  localStorage.setItem('data', auth)
}

}
