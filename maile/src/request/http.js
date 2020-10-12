/**axios封装
 * 请求拦截、相应拦截、错误统一处理
 */
import axios from 'axios'
// import { Toast } from 'vant';




/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios.get(url, {
            params: params
        }).then(res => {
            resolve(res.data);
        }).catch(err => {
            reject(err.response)
        })
    });
}


/** 
 * post方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} data [请求时携带的参数] 
 */
export function post(url, data) {
    return new Promise((resolve, reject) => {
        axios.post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err)
            })
    });
}
/** 
 * delete方法，对应post请求 
 * @param {String} url [请求的url地址] 
 * @param {Object} data [请求时携带的参数] 
 */


export function del(url, data) {
    return new Promise((resolve, reject) => {
        axios.delete(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err.data)
            })
    });
}

export default axios;