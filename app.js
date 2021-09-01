//app
const { getEthPrice } = require( "./uniswapV2SubGraph");
const { getUSDPrice } = require( "./cryptoCompareApi");
const { getToken } = require( "./findToken");
const { getBlocks } = require( "./fbBlocks");
const { getReceipts } = require( "./trxReceipts");

getEthPrice(true);
getUSDPrice('DAI',true);

getToken('0xa10d2e55f0f87756d6f99960176120c512eb3e15',true);
getBlocks({},true);
getReceipts({ transaction_hash:'0x06383356c3c3e9217fd9fc9634b45e6d9ae03beecc695c7ba2f00d8c0a92a312'}, true);

// module.exports app;