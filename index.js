const publishers={
    dgb1qunxh378eltj2jrwza5sj9grvu5xud43vqvudwh:    ["CAD","USD","EUR","GBP","AUD","JPY","CNY","TRY","BRL","CHF"],
    dgb1qlk3hldeynl3prqw259u8gv0jh7w5nwppxlvt3v:    ["BTC","ETH","LTC","DCR","ZIL","RVN","XVG","RDD","NXS","POT"]
}
const ieee754 = require('ieee754');

module.exports=(address,hex)=>{
    if (publishers[address]===undefined) return false;
    let buf=Buffer.from(hex,'hex');
    let decode= {};
    let count=buf.length/8;
    for (let i=0;i<count;i++) {
        decode[publishers[address][i]]=ieee754.read(buf, i*8, true, 52, 8);
    }
    return decode;
}
