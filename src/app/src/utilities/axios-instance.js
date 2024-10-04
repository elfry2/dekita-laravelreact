import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosInstance.interceptors.request.use((config) => {
  const authenticatedUser = JSON.parse(localStorage.getItem('authenticatedUser'));

  if(authenticatedUser) {
    config.headers.Authorization = `Bearer ${authenticatedUser.token}`;
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
        localStorage.removeItem('ACCESS_TOKEN');
      }
    }

    catch(err) {
      console.log(err);
    }

    throw error;
  }
)

export default axiosInstance;
