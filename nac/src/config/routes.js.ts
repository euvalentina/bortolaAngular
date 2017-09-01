var appRoutes   = require('app-routes')(__dirname),
    root        = appRoutes.root;
 
var routes = {
    draw: function (app) {
        root(app, 'home');
    }
};
 
module.exports = routes;