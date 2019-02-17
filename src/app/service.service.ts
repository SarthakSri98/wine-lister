import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})


export class ServiceService {
  public _base_url = 'https://7a217566.ngrok.io/data';

  constructor(private _http:HttpClient) { }

  getData()
  {
    return this._http.get(this._base_url);
  }
  sortData()
  {
    return this._http.get(this._base_url+"?ordering=points");
  }
}
