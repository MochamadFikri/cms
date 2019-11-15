var express = require('express');
var path    = require('path');

// Init App

var app = express();

// View Engine Setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine','ejs');

// Set Public Folder

app.set(express.static(path.join(__dirname, 'public')));

// Start The Server

