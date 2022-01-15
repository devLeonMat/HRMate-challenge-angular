import {Injectable} from "@angular/core";


@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  public formatDate(date: Date = new Date()) {
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    return day + '-' + month + '-' + year;
  }

}
