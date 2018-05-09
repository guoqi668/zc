import axios from 'axios';
import qs from 'qs';
//import 'es6-promise';
//import config from './httpUrls';
axios.defaults.baseURL = '';

/**
 * 
 * @param {func} method 
 * @param {string} url 
 * @param {object} params 
 */
function apiAxios(method, url, params) {
    method = method.toUpperCase();
    const dataType = method === 'POST' || method === 'PUT' || method === 'PATCH';
    //const Authorization = axios.defaults.headers.common['Authorization'];
    //if (Authorization) {
    return new Promise((resolve, reject) => {
        axios({
            method: method,
            url: url,
            data: dataType ? qs.stringify({
                ...params
            }) : null,
            params: !dataType ? params : null,
        }).then(
            res => resolve(res.data)
        ).catch(err => {
            reject(err)
            console.error("=============", err);
        })
    })
    //}
}

export default {
    ajax: function (method, url, params) {
        return apiAxios(method, url, params);
    }
}