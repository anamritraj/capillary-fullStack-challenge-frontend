import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalConfig } from '../shared/config.model'

@Injectable()

export class UserService {
  _url: string;
  constructor( private http: Http, ) {
    this._url = GlobalConfig.BASE_API_URL;
  }

  login(user){
    return this.http.post(this._url +'login', user)
      .map(res => res.json());
  }

  register(user){
    return this.http.post(this._url +'register', user)
      .map(res => res.json());
  }
}
