const SKM2Faucet  = require("./skm2-faucet");


 var options = {
     web3Url:"https://testnet-skm2.skrumble.network:8545", //  Provider 
     fromAddress:"0xa9....9", // coin token holder address
     privateKey: Buffer.from(
         '99c3122....901b',
         'hex',
     ), // coin holder privateKey
     gasLimit:80000,
     gasPrice:"1"  // gwei
 };


 var  faucet = new SKM2Faucet(options);


 faucet.balanceOf("0xa.....08").then(x=>{
     console.log("before", x)
     return faucet.transfer("0xeB.....ec", "1");  // transfer  1 coin to 0xcB...ec
 }).then(()=>{
     return faucet.balanceOf("0xv61.....9");   // get balance return wei not ether
 }).then(x=>console.log("after", x)); 