# DigiByte Price Decoder
Every 15min digiassetX inc stores price conversion on DigiByte chain.
Each of these values are the number of sats needed to make 1 unit of the listed type.

## Installation
``` bash
npm install digibyte-price-decoder
```

## Usage
lookup op_return data in most recent transaction sent by the addresses listed in publishers then feed it in to the function

```javascript
const priceDecoder=require('digibyte-price-decoder');
const rates=priceDecoder(
    'dgb1qunxh378eltj2jrwza5sj9grvu5xud43vqvudwh',  //fiat address
    'fc976aa6db1dd241da8be5b2ade3d6419ad335760113db410a22275a6562df41d3c0ac0e1e40d141a834ed4513fd6a41074201bf0515ac412e31e46506f3a6417f14a4051b48b0417202047ee74bd841' //value found in txid:  7154052d35c9c90beefe7b9c7150438a042a58765b045e43122cc1cb59ca3116
);
```

keep in mind the header value of '6a4c50' may be infront of the data depending where you source it from
- 6a=op_return
- 4c=next byte contains length
- 50=80 bytes long

if new addresses are added with shorter payloads 4c maybe replaced with the data length