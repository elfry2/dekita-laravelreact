import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_BASE_URL}/api`
});

axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('ACCESS_TOKEN');
  config.headers.Authorization = `Bearer ${token}`;

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

    catch(error) {
      console.log(error);
    }

    throw error;
  }
)

export default axiosInstance;
