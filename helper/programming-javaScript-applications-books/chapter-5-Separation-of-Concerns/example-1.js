// Step - 1;
var app = require('tinyapp');
var view = require('./view');
var data;
var load = function load() {
    var url = 'http://api.bandsintown.com/artists/' + 'Skrillex.json?api_version=2.0&amp;app_id=YOUR_APP_ID';
    whenLoaded = app.get(url);
    whenLoaded.done( function(response){
        data = response;
    });
    return whenLoaded.promise();
};
var render = function render() {
    view.render(data);
};

app.register({
    load: load,
    render: render
});

module.exports = api;


// step - 2;
