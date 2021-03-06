import { ethers } from "ethers";
import * as data from "./abi.json";
import * as abc from "./mockabi.json";
import * as cons from "./contract.json";
import * as abiOri from "./abiOriginal.json";

var Web3 = require("web3");

let web3 = new Web3(
  Web3.givenProvider || "https://smartbch.regtest.actorforth.org"
);

// const web3 = new Web3(window.ethereum);

const ethereumButton = document.getElementById("enableEthereumButton");
const showAccount = document.getElementById("showAccount");
const provider = new ethers.providers.Web3Provider((window as any).ethereum);

// const signTransactionButton = document.getElementById("signTransaction");
const sendTransactionButton = document.getElementById("sendTransaction");

const transactionobj = {
  from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2",
  to: "0xe00BCef53DD14AE43963cfdd824e78c1858Ea3a8",
  value: "1000000000000000000",
};
sendTransactionButton.addEventListener("click", async function (params) {
  console.log("send transaction clicked");
  const result = await web3.eth.sendTransaction(transactionobj);
  console.log(result);
});

const buyerToQoutaUsed = document.getElementById("abi");
buyerToQoutaUsed.addEventListener("click", async function () {
  const { abi } = data;
  let contract = new web3.eth.Contract(
    abi,
    "0x22D126A4C30BeB08F569172073116cf1EF6814B8"
  );
  console.log("********************************");
  console.log("availible", contract.methods);
  console.log("*****************************`");
  const result = await contract.methods
    .buyerToQuotaUsed("0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2")
    .call();
  console.log("result", result);
});

const approveButton = document.getElementById("approve");
approveButton.addEventListener("click", async function () {
  const { abi } = cons;
  let erc = new web3.eth.Contract(
    abi,
    "0xAEC9A7740aaaB7a3318570C86912dbcaD828F6D9"
  );
  console.log("hi", erc);
  console.log("availible", erc.methods);
  const result = await erc.methods
    .approve("0xAEC9A7740aaaB7a3318570C86912dbcaD828F6D9", 10000)
    .send({
      from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2",
      gas: 210000,
      gasPrice: web3.utils.toHex(web3.utils.toWei("100", "gwei")),
    });

  console.log("ie", result);
});

const allowanceButtonn = document.getElementById("allowance");
allowanceButtonn.addEventListener("click", async function () {
  const { abi } = cons;
  let erc = new web3.eth.Contract(
    abi,
    "0xAEC9A7740aaaB7a3318570C86912dbcaD828F6D9"
  );
  console.log("hi", erc);
  console.log("availible", erc.methods);
  const result = await erc.methods
    .balanceOf("0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2")
    .call();
  console.log(result);

  const symbol = await erc.methods.symbol().call();
  console.log("sym", symbol);
});

const constructorButton = document.getElementById("constructor");
constructorButton.addEventListener("click", async function () {
  const { abi } = data;
  let erc = new web3.eth.Contract(
    abi,
    "0x8858fab3668f6e0143159325790aFaADbCd8141a"
  );
  console.log("hi", erc);
  console.log("availible", erc.methods);
  const result = await erc.methods
    .DOMAIN_SEPARATOR()
    .send({ from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2" });
  console.log(result);
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
  // let parsed = JSON.parse(
  //   '[{"wallet" : "0x294201c4aFb976824cEF3428564FE750ba07EAF8", "quantity":1},\
  //   {"wallet":"0x3c9247aa807884d1E363359989398B987746F676","quantity":1},\
  //   {"wallet":"0x8862397D117B42E43F7dB223F3408FB13EE89f60","quantity":1}]'
  // );
  // const wallet = "0x8862397D117B42E43F7dB223F3408FB13EE89f60";
  // console.log("parsed", parsed);
  // var a = [];
  // for (var i = 0; i < parsed.length; i++) {
  //   var person = [parsed[i].wallet, parsed[i].quantity];
  //   a.push(person);
  // }
  // console.log("A", a);
  // console.log(
  //   typeof [
  //     ["0x294201c4aFb976824cEF3428564FE750ba07EAF8", 1],
  //     ["0x3c9247aa807884d1E363359989398B987746F676", 1],
  //     ["0x8862397D117B42E43F7dB223F3408FB13EE89f60", 1],
  //   ]
  // );
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

  /*
    (sellers,  # _seller_address
        token_contract_ERC20,  # _seller_erc20_address
        [
            (token_contract_ERC721_1, 5, 1),
            (token_contract_ERC721_2, 10, 5),
            (token_contract_ERC721_3, 15, 10),
        ]   # _seller_erc721_addresses(ERC721address, price, weight) per tier
    0xE9f1DA7aab119365EB37fe4614ec014547C4F641    
    0x94Ac3ed3b60C3262EFD35498D98b39402B317912


     ["0x294201c4aFb976824cEF3428564FE750ba07EAF8", 5, 1],
          ["0x3c9247aa807884d1E363359989398B987746F676", 10, 0],
          ["0x8862397D117B42E43F7dB223F3408FB13EE89f60", 15, 0],
  */
  let contract = new web3.eth.Contract(
    abi,
    "0x8858fab3668f6e0143159325790aFaADbCd8141a"
  );
  console.log(contract);
  console.log("********************************");
  console.log("availible", contract.methods);
  console.log("*****************************`");
  console.log(abi);
  console.log(contract);
  const result = await contract.methods
    .transactNFT(
      "0x016128a",
      "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2",
      [
        "0xe00BCef53DD14AE43963cfdd824e78c1858Ea3a8",
        "0xAEC9A7740aaaB7a3318570C86912dbcaD828F6D9",
        [
          ["0xcb9079fc6a8E3020d1b51e29E34d6846c9103427", 5, 1],
          ["0x016128aA42BbbA55151645D98a69bEE571c318f8", 10, 5],
          ["0x4a84A9675170DDbC265c2ef7AA18B64a6197229E", 15, 10],
        ],
        1644388771,
        1649999999,
      ],
      "0x016128a",
      [
        ["0xcb9079fc6a8E3020d1b51e29E34d6846c9103427", 1],
        ["0x016128aA42BbbA55151645D98a69bEE571c318f8", 2],
        ["0x4a84A9675170DDbC265c2ef7AA18B64a6197229E", 3],
      ],
      50,
      41,
      70,
      1649999999
    )
    .send({
      from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2",
      gasPrice: web3.utils.toHex(web3.utils.toWei("100", "gwei")),
    });
  console.log("result", result);
});

const mocktranButton = document.getElementById("mocktran");
mocktranButton.addEventListener("click", async function () {
  const { abi } = abc;
  let contract = new web3.eth.Contract(
    abi,
    "0x39df1a1e095b8a79199494143a5885842593ed23"
  );
  const result = await contract.methods
    .giveRightToVote([
      [55, false],
      [55, false],
      [55, false],
    ])
    .send({ from: "0x41e86fc092be02aa39B5644FA78255Cac7E2Aed2" });
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
