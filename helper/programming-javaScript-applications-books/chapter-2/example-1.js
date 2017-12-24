test('order with unintentional side effect.', function() {

    var cartProto = {
            items: [],
            addItem: function addItem(item) {
                this.items.push(item);

            }
        },
        createCart = function(items) {
            var cart = Object.create(cartProto);
            cart.items = items;
            return cart;
        },
        // load cart with stored items.

        savedCart = createCart(["apple", "pear", "orange"]),
        session = {
            get: function get() {
                return this.cart;
            },
            // Grab the saved cart.
            cart: createCart(savedCart.items)
        };

    // additem gets triggered by an event handler somewhere
    session.cart.addItem('grapfruti');
    ok(session.cart.intes.indexOf('grapefruti') !== -1, "passes: session cart has grapfruit");
    ok(savedCart.items.indexOf('grapefruit') === -1)
})