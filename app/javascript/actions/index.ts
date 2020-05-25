import axios from 'axios';

import {
  HOSTNAME,
} from '../constants';

const generateRequest = (params: object) => {
  console.log('Generating Request');
  const server_params = {
    ...params,
    headers: {
      Authorization: `Bearer ${window.sessionStorage.getItem('jwt')}`
    }
  }
  return server_params;
}

export const serverPost = (callback: any, path: string, params: object) => {
  const request_params = generateRequest(params)
  axios.post(`${HOSTNAME}${path}`, request_params)
    .then((response: any) => {
      callback(response);
    })
    .catch((reason: any) => {
      console.log(reason)
      callback({reason: reason});
    })
}

export const serverGet = (callback: any, path: string, params: object) => {
  const request_params = generateRequest(params)
  axios.get(`${HOSTNAME}${path}`, request_params)
    .then((response: any) => {
      callback(response);
    })
    .catch((reason: any) => {
      console.log(reason)
      callback({reason: reason});
    })
}

export const serverDelete = (callback: any, path: string, params: object) => {
  const request_params = generateRequest(params)
  axios.delete(`${HOSTNAME}${path}`, request_params)
    .then((response: any) => {
      callback(response);
    })
    .catch((reason: any) => {
      console.log(reason)
      callback({reason: reason});
    })
}

export default {
  serverPost,
  serverGet,
  serverDelete
}