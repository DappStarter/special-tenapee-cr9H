require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth spice punch gesture lobster flock gesture'; 
let testAccounts = [
"0x90356cb157b628f8ed79b3363a66d0df7c3b9d5048acd0dfa0b42c7f8110c059",
"0x3a35e081104c1a7c766e06b064e53c1e8d48226c2f29c0e41a6b024bdbafc168",
"0x284ac6f7c5f9704757e4e55e0c2e0013c1ecfa404a3b1c6e87f496e9aeaedad0",
"0x7dbbaf7e3923ee4a7ae50b597bc47201f79e88089e2819489d7d21041393ccec",
"0x1f7c93fc418eb56e8b6bfc5c9830a92247358e22e5336ca2a86fc0fa923b8e8b",
"0x24dd7c5d61e4b328defaa25e8f9ec56fb374e56b4c5c1bde2cbf460cdbc22201",
"0x11b3c10f725912c8169db7d40b26edea50abe8cea98651dae3550b0f72ea3c1d",
"0x2edb451b158373c735cfc5b8177a7a8ab28de5ac6782a2f7e43e544769e09de6",
"0xa98e6657b190e9e32f16a0a4b788c696170bb606241fd6e6d665900546af452d",
"0x4759a9e958f67ba440ced8a0a20f52363e13d23cc3e0662a0e51b841f37a3517"
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

