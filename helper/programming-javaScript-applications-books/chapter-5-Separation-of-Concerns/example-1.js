/* --------------- 1. Module Management ----------- */
// 26-02-2018

var app = require('tinyapp');
app.init({
    environment: environment,
    pageData: pageData,
    beforeRender: [promise1, promise2, ]
});


// 1. Require Tinyapp
var app = require('tinyapp');
// 2. provide an API
var app = require('tinyapp');
var hello = function hello(param) {
    return 'Hello, world';
}
var api = {
    hello: hello
};

// 3. Export your module: 
var app = require('tinyapp');
var hello = function hello(param) {
    return "Hello , world";
};
var api = {
    hello: hello
};

module.exports = api;

// or 
// Since it's only exporting a single function 
module.exports = function hello(param) {
    return "Hello, world";
}



// Step - 1;
var app = require('tinyapp');
var view = require('./view');
var data;
var load = function load() {
    var url = 'http://api.bandsintown.com/artists/' + 'Skrillex.json?api_version=2.0&amp;app_id=YOUR_APP_ID';
    whenLoaded = app.get(url);
    whenLoaded.done(function (response) {
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
// aggregators
// set up an aggregator on your app object.
var app = {
    bus: _.extend({}, Backbone.Events)
};
// in your module , log all invites in the app.
app.bus.on('invite', function handle(inviteData) {
    console.log(inviteData)
});
// Trigger an event when a user invites a friend.
app.bus.trigger('invite', {
    user: 'userId',
    friend: 'friend.email@example.com'
});