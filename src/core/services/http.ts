import axios from 'axios';

export default {
  headers: {},

  get({ path = '', params = {} }) {
    axios.defaults.withCredentials = true;
    return axios.get(path, {
      headers: this.headers,
      params,
    })
  },

  delete({ path = '', params = {} }) {
    return axios.delete(path, {
      params,
    })
  }
};