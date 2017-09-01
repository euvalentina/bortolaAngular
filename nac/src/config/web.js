var express         = require('express'),
    app             = express(),
    routes          = require('./config/routes');

routes.draw(app);