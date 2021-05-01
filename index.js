const publishers={
    dgb1qunxh378eltj2jrwza5sj9grvu5xud43vqvudwh:    ["CAD","USD","EUR","GBP","AUD","JPY","CNY","TRY","BRL","CHF"],
    dgb1qlk3hldeynl3prqw259u8gv0jh7w5nwppxlvt3v:    ["BTC","ETH","LTC","DCR","ZIL","RVN","XVG","RDD","NXS","POT"]
}
const ieee754 = require('ieee754');

/**
 *
 * @param {string,string[]} addressOrCoinArray
 * @param hex
 * @return {{}|boolean}
 */
module.exports=(addressOrCoinArray,hex)=>{
    //get the coin array
    let coinArray;
    switch (typeof addressOrCoinArray) {
        case "string":
            coinArray=publishers[addressOrCoinArray];
            break;

        case "object":
            if (addressOrCoinArray.length<=10) coinArray=addressOrCoinArray;
    }
    if (coinArray===undefined) return false;

    //decode the op_return data
    let buf=Buffer.from(hex,'hex');
    let decode= {};
    let count=buf.length/8;
    for (let i=0;i<count;i++) {
        decode[coinArray[i]]=ieee754.read(buf, i*8, true, 52, 8);
    }
    return decode;
}
