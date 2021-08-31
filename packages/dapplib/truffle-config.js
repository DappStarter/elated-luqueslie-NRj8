require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace glide fringe skull drift renew still concert grace opinion bottom ski'; 
let testAccounts = [
"0x02f1a07723cd026dd3d28c80d8930f03065d26d8d347d5c0b68df30d6cacae43",
"0x01f92d337f98be60865a6350e16eca639927ac047033da228e7672255a1e162d",
"0x46435ef7e90d1e65f6a36a3534d766e65e8816b19d5d46679f0e6f01d96b1490",
"0x473917fe9a85eb4bcbc453324ac79cddf8c08079b00fd94bd67521ced5350ab4",
"0x0c0987e242a62941a670a47083826725dd27867263905322598ee4dc8d3306a7",
"0xcb12674580a73a464a7c8336bf3be939df0264071c2f56ee12dfcc130e96efa8",
"0x82a431ceb96700d018d4d4a30d3a8953cf232e9b846fe1997dfb93d857deabdb",
"0xa6a090120db5b2f795bbe0005efda295a7dafb92f19fdce5f428ee8053748cff",
"0xd3890b79ed874e4ab6883ca142f50921d01e52a9ddea8f7ec49bd78bae4300d2",
"0xaaf321cf34f29f315d725576fc468a8eec7330cf9220a6476165df549c967169"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

