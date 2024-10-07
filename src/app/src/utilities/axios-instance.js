import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosInstance.interceptors.request.use((config) => {
  const authenticationToken
    = localStorage.getItem('authenticationToken');

  if(authenticationToken) {
    config.headers.Authorization = `Bearer ${authenticationToken}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },

  (error) => {
    try {
      const {response} = error;

      if(response.status == 401) {
        localStorage.removeItem('authenticationToken');
      }
    }

    catch(err) {
      console.log(err);
    }

    throw error;
  }
)

export default axiosInstance;
