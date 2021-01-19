import {Injectable} from "@angular/core";
import {DataModel} from "../models/data.model";

@Injectable()

export class SaveAuthService {

saveData(data) {
  let auth=`${data}`
  console.log({auth})
  localStorage.setItem('data', auth)
  console.log(localStorage.getItem(auth))
}

}
