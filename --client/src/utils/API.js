import axios from 'axios';

export default {
  // sample
  getSample: function () {
   // return axios.get('/api/sample');
    return axios.get("/api/sample");
  },
  // getSamples: () => axios.get('/api/sample/'),
  // getSample: id => axios.get(`/api/sample/${id}`),
};
