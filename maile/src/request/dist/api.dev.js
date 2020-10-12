"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Login = exports.GetOneProduct = exports.GetProduct = exports.GetSwippers = void 0;

var _http = require("./http");

var GetSwippers = function GetSwippers(num) {
  return (0, _http.get)('/api/Swippers', num);
};

exports.GetSwippers = GetSwippers;

var GetProduct = function GetProduct(id) {
  return (0, _http.get)("/api/P1/", id);
};

exports.GetProduct = GetProduct;

var GetOneProduct = function GetOneProduct(id) {
  return (0, _http.get)("/api/P1/".concat(id));
}; // export const GetProductOne = id => get('/api/P1/${id}');


exports.GetOneProduct = GetOneProduct;

var Login = function Login(Users) {
  return (0, _http.post)('/api/login', Users);
};

exports.Login = Login;