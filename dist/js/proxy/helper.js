import { Local as loc } from './localStorage.js';
const API_URL = 'https://www.maqsood.com.sd/api/v1';

// token if exists in localStorage
const token = loc('get', 'token');

// GET Request
export const get = (
  url,
  auth = false,
  type = 'application/json',
  providedToken = token,
) => {
  return axios({
    method: 'GET',
    url: API_URL + '/' + url,
    headers: {
      'Content-Type': type,
      Authorization: auth ? `Bearer ${providedToken}` : null,
    },
  })
    .then((res) => {

        return res.data;

    })
    .catch((err) => {
     

      return err.response.data;

    });
};

// POST Request
export const post = (
  url,
  formData,
  auth = false,
  type = 'application/json',
  providedToken = token,
) => {
  return axios({
    method: 'POST',
    url: API_URL + '/' + url,
    data: formData,
    headers: {
      'Content-Type': type,
      Authorization: auth ? `Bearer ${providedToken}` : null,
    },
  })
    .then((res) => {
      console.log(res.data);
     
      return res;
    })
    .catch((err) => {
   
      console.log(err);
      return err.response.data;
    } 
    );
};

export const userInfo = () => {
  get('admin/settings',
    auth = true,
    type = 'application/json',
    providedToken = token).then((res)=>console.log(res)).catch(err => console.log(err.response.data));
  }
