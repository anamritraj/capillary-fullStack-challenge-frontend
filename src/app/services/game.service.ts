import { Injectable } from '@angular/core';
import { Http} from '@angular/http';
import 'rxjs/add/operator/map';
import { GlobalConfig } from '../shared/config.model'

@Injectable()

export class GameService {
  _url: string;
  constructor( private http: Http, ) {
    this._url = GlobalConfig.BASE_API_URL;
  }

  getGames(){
    return this.http.get(this._url +'games')
      .map(res => res.json());
  }
}
