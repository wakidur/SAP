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
// aggregators
// set up an aggregator on your app object.
var app = {
    bus: _.extend({}, Backbone.Events )
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
