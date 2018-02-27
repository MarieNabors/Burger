var express = require('express');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var expressHandlebars = require('express-handlebars');

var app = express();
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.urlencoded({
    extended: false
}))

app.use(methodOverride('_method'));
app.engine('handlebars', expressHandlebars({
    defaultLayout: 'main'
}))
app.set('view engine', 'handlebars');

var port = 3000
app.listen(port);