
import { environment } from '../../environments/environment';

export const GlobalConfig = {
  BASE_API_URL: getBaseAPIUrl(),
};

function getBaseAPIUrl(){
  if(environment.production) {
    return "http://production-url/api/";
  }else{
    return "http://localhost:3000/api/";
  }
}
