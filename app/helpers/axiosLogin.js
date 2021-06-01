import axiosInstance from './axiosInterceptors';

export default({email, password, username, firstName: first_name, lastName: last_name,

}) => {
    axiosInstance.post('api/auth/login/', {email, password, username, first_name, last_name
    }). then(res => {

    }).catch( err => {
        
    });
}