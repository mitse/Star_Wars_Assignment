import axios from 'axios';
import log from './loggerService';

//handle Response Errors
axios.interceptors.response.use(null, error =>{
   if(error){
      log(error);
   }
   return Promise.reject(error);
});

export default {
    get: axios.get
};
