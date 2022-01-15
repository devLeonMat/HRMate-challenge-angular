import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BycicleService {

  constructor(private httpClient: HttpClient) {
  }

  getAllBycicles(): Observable<any> {
    return this.httpClient.get('http://localhost:8080/availability');
  }

  getByciclesWithParams(resquest: any): Observable<any> {
    console.log(resquest);
    let params = new HttpParams();
    params = params.append('_page', 1);

    params = params.append('search_location', resquest.address)
    if (resquest.type == '1') {
      if (resquest.date != '') {
        params = params.append('date', resquest.date)
      }
    } else {
      if (resquest.dateStart != '' && resquest.dateEnd != '') {
        params = params.append('date_start', resquest.dateStart)
        params = params.append('date_end', resquest.dateEnd)
      }
    }
    console.log(params);
    return this.httpClient.get('http://localhost:8080/availability', {params: params});
  }


}
