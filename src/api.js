import axios from "axios";
export const API_URL ='http://localhost:8002'
export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Accept": "application/json",
  }
});
export default class ApiService{
  static saveStripeInfo(data={}){
    return api.post(`${API_URL}/api/v1/payments/save-stripe-info/`, data)
  }
}