import { ethers } from "ethers";

const ethereumButton = document.getElementById("enableEthereumButton");
const showAccount = document.getElementById("showAccount");
const provider = new ethers.providers.Web3Provider((window as any).ethereum);

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
    // .then(() => console.log("hi"))
    .catch(() => console.log("err"));
  //   console.log(accounts);
  if (accounts) {
    showAccount.innerHTML = "Connect as wallet " + accounts[0] + "";
    return accounts[0];
  }
  return null;
}
async function changeNetwork(account) {
  console.log("change network");
  console.log(account);
  const resp = provider
    .send("wallet_addEthereumChain", [params, account])
    .catch(() => console.log("exit2"));
  console.log("Resp", await resp);
}
