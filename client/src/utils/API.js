import axios from 'axios';

export default {
  // sample
  getSamples: () => axios.get('/api/sample/'),
  getSample: id => axios.get(`/api/sample/${id}`),

}