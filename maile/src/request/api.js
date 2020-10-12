import {get, post, del } from './http'


export const GetSwippers = num => get('/api/Swippers', num);
export const GetProduct = id => get(`/api/P1/`, id);
export const GetOneProduct = id => get(`/api/P1/${id}`);
// export const GetProductOne = id => get('/api/P1/${id}');
export const Login = Users => post('/api/login', Users);