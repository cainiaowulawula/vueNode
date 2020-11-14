var express = require('express')
var http = require('http')
const app = express()
var mysql = require('mysql')
console.log(http)
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root123456',
  database: 'world',
  port: '3306',
});

connection.query('select * from userinfo', function (error, results, fields) {
  console.log('the solution is:', error, results, fields)
})
