/**
 * Get stock data somehow
 */
const source = getAsyncStockData();

const subscription = source
    .filter(quote => quote.price > 30)
    .map(quote => quote.price)
    .forEach(price => console.log(`Prices higher than $30: ${price}`));

/**
 * Now what if this data were to come as some sort of event, for example a stream, such as a WebSoket? 
 * 
 * Get stock data somehow
 */
const source1 = getAsyncStockData();

const subscription1 = source1
    .filter(quote => quote.price > 30)
    .map(quote => quote.price)
    .subscribe(
        price => console.log(`Price higher then $30: ${price}`),
        err => console.log(`Something went wrong : ${err.message}`)
    );
/**
 * when we're done
 */
subscription.dispose();