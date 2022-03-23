import { ethers } from "ethers";
import * as data from "./abi.json";

var Web3 = require("web3");

let web3 = new Web3(
  Web3.givenProvider || "https://smartbch.regtest.actorforth.org"
);

// const web3 = new Web3(window.ethereum);

const ethereumButton = document.getElementById("enableEthereumButton");
const showAccount = document.getElementById("showAccount");
const provider = new ethers.providers.Web3Provider((window as any).ethereum);

// const signTransactionButton = document.getElementById("signTransaction");
// const sendTransactionButton = document.getElementById("sendTransaction");

// const transactionobj = {
//   from: "0x7B3387305E11a10f62eE6c095B220EDEE4960439",
//   to: "0x7B3387305E11a10f62eE6c095B220EDEE4960439",
//   value: "1000000000000000",
// };
// sendTransactionButton.addEventListener("click", async function (params) {
//   console.log("send transaction clicked");
//   const result = await web3.eth.sendTransaction(transactionobj);
//   console.log(result);
// });

const buyerToQoutaUsed = document.getElementById("abi");
buyerToQoutaUsed.addEventListener("click", async function () {
  const { abi } = data;
  let contract = new web3.eth.Contract(
    abi,
    "0x22D126A4C30BeB08F569172073116cf1EF6814B8"
  );
  // console.log("abi", abi);
  // console.log("contract", contract);
  console.log("********************************");
  console.log("availible", contract.methods);
  console.log("*****************************`");
  const result = await contract.methods
    .buyerToQoutaUsed("0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2")
    .call();
  console.log("result", result);

  // .send({ from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2" });
  // console.log("result", result);
});

/*
(\
      0x3c9247aa807884d1E363359989398B987746F676,\
      0x294201c4aFb976824cEF3428564FE750ba07EAF8,\
      [\
        (0x94Ac3ed3b60C3262EFD35498D98b39402B317912,5,2),\
        (0x94Ac3ed3b60C3262EFD35498D98b39402B317912,10,2),\
        (0x94Ac3ed3b60C3262EFD35498D98b39402B317912,15,2)\
      ]\
      )


      //        { "name": "_buy_orders", "type": "(address,uint256)[3]" },
      
      {
          "components": [
            { "name": "addr", "type": "address" },
            { "name": "erc20_address", "type": "address" },
            {
              "name": "erc721_addresses",
              "type": "(address,uint256,uint256)[3]"
            }
          ],
          "name": "_seller_info",
          "type": "tuple"
        },



*/

const transactionNFT = document.getElementById("transactionNft");
transactionNFT.addEventListener("click", async function () {
  const { abi } = data;
  let contract = new web3.eth.Contract(
    abi,
    "0x22D126A4C30BeB08F569172073116cf1EF6814B8"
  );
  console.log("********************************");
  console.log("availible", contract.methods);
  console.log("*****************************`");
  let parsed = JSON.parse(
    '[{"wallet" : "0x294201c4aFb976824cEF3428564FE750ba07EAF8", "quantity":1},\
    {"wallet":"0x3c9247aa807884d1E363359989398B987746F676","quantity":1},\
    {"wallet":"0x8862397D117B42E43F7dB223F3408FB13EE89f60","quantity":1}]'
  );
  const wallet = "0x8862397D117B42E43F7dB223F3408FB13EE89f60";
  console.log("parsed", parsed);
  var a = [];
  for (var i = 0; i < parsed.length; i++) {
    var person = [parsed[i].wallet, parsed[i].quantity];
    a.push(person);
  }
  const myparam = "";
  console.log("A", a);
  console.log(
    typeof [
      ["0x294201c4aFb976824cEF3428564FE750ba07EAF8", 1],
      ["0x3c9247aa807884d1E363359989398B987746F676", 1],
      ["0x8862397D117B42E43F7dB223F3408FB13EE89f60", 1],
    ]
  );
  // {
  //   "components": [
  //     { "name": "addr", "type": "address" },
  //     { "name": "erc20_address", "type": "address" },
  //     {
  //       "name": "erc721_addresses",
  //       "type": "(address,uint256,uint256)[3]"
  //     }
  //   ],
  //   "name": "_seller_info",
  //   "type": "tuple"
  // },
  // { "name": "_seller_signature", "type": "bytes" },
  // { "name": "_buy_orders", "type": "(address,uint256)[3]" },

  const result = await contract.methods
    .transactNFT(
      "TBD",
      "0x94Ac3ed3b60C3262EFD35498D98b39402B317912",
      // "(0x94Ac3ed3b60C3262EFD35498D98b39402B317912,2,3)",
      // [
      //   "0x3c9247aa807884d1E363359989398B987746F676",
      //   "0x294201c4aFb976824cEF3428564FE750ba07EAF8",
      //   [
      //     ["0x94Ac3ed3b60C3262EFD35498D98b39402B317912", 5, 2],
      //     ["0x94Ac3ed3b60C3262EFD35498D98b39402B317912", 10, 2],
      //     ["0x94Ac3ed3b60C3262EFD35498D98b39402B317912", 15, 2],
      //   ],
      // ],
      // "seller signature",
      // [
      //   ["0x294201c4aFb976824cEF3428564FE750ba07EAF8", 1],
      //   ["0x3c9247aa807884d1E363359989398B987746F676", 1],
      //   ["0x8862397D117B42E43F7dB223F3408FB13EE89f60", 1],
      // ],
      50,
      30,
      1644388771,
      1649999999,
      70
    )
    .send({ from: "0x94Ac3ed3b60C3262EFD35498D98b39402B317912" });
  console.log("result", result);
});

let params = {
  chainId: "0x2711",
  chainName: "Scorpion2",
  nativeCurrency: {
    name: "Scorpion2",
    symbol: "SBCH",
    decimals: 18,
  },
  rpcUrls: ["https://smartbch.regtest.actorforth.org/"],
  iconUrls: [],
};

ethereumButton.addEventListener("click", async () => {
  const temp = await getAccount();
  if (temp) {
    changeNetwork(temp);
  } else {
    console.log("don't change network bc not have acc");
  }
});

async function getAccount() {
  const accounts = await provider
    .send("eth_requestAccounts", [])
    .catch(() => console.log("err"));
  if (accounts) {
    showAccount.innerHTML = "Connect as wallet " + accounts[0] + "";
    return accounts[0];
  }
  return null;
}
let temp;
const a = web3.eth.getAccounts();
// let v = null;
let wallet = web3.eth.getAccounts().then(function (walletAddr) {
  return walletAddr;
});
wallet.then(function (wallet) {
  console.log(wallet);
});
// console.log("temp", temp);
// console.log("v", wallet);
async function changeNetwork(account) {
  console.log("change network");
  console.log(account);
  const resp = provider
    .send("wallet_addEthereumChain", [params, account])
    .catch(() => console.log("exit2"));
  console.log("Resp", await resp);
}

// provider._handleDisconnect
// provider.on("disconnect", function () {
//   console.log("disconnected");
// });
provider.on("accountsChanged", function () {
  console.log("changed");
});
// console.log( provider.getBalance("0x7B3387305E11a10f62eE6c095B220EDEE4960439"));
