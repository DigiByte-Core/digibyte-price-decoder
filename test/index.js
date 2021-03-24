require('nodeunit');
const BitIO = require('../index'),
    events = require('events');
const decoder=require('../index');


module.exports = {
    'test first input': function (test) {
        let a=decoder('dgb1qunxh378eltj2jrwza5sj9grvu5xud43vqvudwh','fc976aa6db1dd241da8be5b2ade3d6419ad335760113db410a22275a6562df41d3c0ac0e1e40d141a834ed4513fd6a41074201bf0515ac412e31e46506f3a6417f14a4051b48b0417202047ee74bd841');
        test.equal(a.CAD,1215786649.6655264);
        test.equal(a.USD,1536079563.5866609);
        test.equal(a.EUR,1816921560.8410401);
        test.equal(a.GBP,2106168680.6114526);
        test.equal(a.AUD,1157658682.699269);
        test.equal(a.JPY,14149786.185205773);
        test.equal(a.CNY,235569887.50245687);
        test.equal(a.TRY,192512818.9456877);
        test.equal(a.BRL,273160965.64093775);
        test.equal(a.CHF,1630510584.0626493);
        let b=decoder('dgb1qlk3hldeynl3prqw259u8gv0jh7w5nwppxlvt3v','49361d8c4212d3420d61ecfbceb68242ba5a3fd5bcb05042bd90310a14a94b42c547dd8e06b3ae413407c5d5fce3b14142cb359e95dd8641584d6be61bdf62411a075b5362a0dd4146b7e08bced82044')
        test.equal(b.BTC,83876587271385.14);
        test.equal(b.ETH,2572045745548.1313);
        test.equal(b.LTC,286738568445.4176);
        test.equal(b.DCR,237601559651.13077);
        test.equal(b.ZIL,257524551.43218818);
        test.equal(b.RVN,300154069.76964116);
        test.equal(b.XVG,47952563.77626659);
        test.equal(b.RDD,9894111.200598404);
        test.equal(b.NXS,1988200781.4223084);
        test.equal(b.POT,155385241567005700000);

        test.done();
    }
}






