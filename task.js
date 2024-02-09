let stocks = [
    {  symbol : 'alfa', price : 1500, sector : 'banking'},
    {  symbol : 'VW', price : 1433.42,sector : 'Auto' },
    {  symbol : 'delta',  price : 1800,sector : 'military'},
    {  symbol: 'TSLA', price: 1894.23, sector: 'Auto'},
    {  symbol: 'NFLX', price: 1503.48, sector: 'Movie'}
]


setInterval( function () {
    console.log('current situation in world market : \n' , stocks);

    stocks[0].price = stocks[0].price * (1 + Math.random());
    stocks[1].price = stocks[1].price * (1 - Math.random());
    stocks[2].price = stocks[2].price * (1 - Math.random());
    stocks[3].price = stocks[3].price * (1 - Math.random());
    stocks[4].price = stocks[4].price * (1 + Math.random());

    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].price < 1) {
            console.log('the stock',stocks[i].symbol ,'devaluated so much,revaulation applied');
            stocks[i].symbol = 'Government took over';
            stocks[i].price = stocks[i].price * 1.5;
        }
    }
},1500);


//filtering stocks
const autoStock = stocks.filter(stock => stock.sector == 'Auto');
console.log('automative industry brands:' ,autoStock );


//alert system
setInterval( function () {
    for (let i = 0; i < stocks.length; i++) {
        if (stocks[i].price > 30000 || stocks[i].price < 1000) {
            console.log('Alert!!! Warning!!!  the stock of ',stocks[i].symbol ,'with value' , stocks[i].price ,'needs attention \n');
        }
    }
}, 2000);