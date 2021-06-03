import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'


const axiosInstance = axios.create({
    baseURL: 'https://cfgi-db-api.herokuapp.com/',
});

axiosInstance.interceptors.request.use(
    async (config) => {
        const token = await AsyncStorage.getItem('token');
        if(token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    }, 
    (error) => {
        return Promise.reject(error);
    },
);

export default axiosInstance;