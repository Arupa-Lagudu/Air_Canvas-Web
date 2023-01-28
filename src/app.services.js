import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:5000/";

class ApiService {

  airCanvas(){
    return axios.get();
  }

}

export default new ApiService();