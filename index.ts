import { ethers } from "ethers";
import { SiweMessage } from "siwe";

// const siwe = require("siwe");

const domain = window.location.host;
const origin = window.location.origin;
const provider = new ethers.providers.Web3Provider((window as any).ethereum);
const signer = provider.getSigner();

const BACKEND_ADDR = "http://localhost:3000";
async function createSiweMessage(address, statement) {
  const res = await fetch(`${BACKEND_ADDR}/nonce`, {
    credentials: "include",
  });
  const message = new SiweMessage({
    domain,
    address,
    statement,
    uri: origin,
    version: "1",
    chainId: 1,
    nonce: await res.text(),
  });
  return message.prepareMessage();
}

function connectWallet() {
  provider
    .send("eth_requestAccounts", [])
    .catch(() => console.log("user rejected request"));
}

// async function signInWithEthereum() {
//   const message = await createSiweMessage(
//     await signer.getAddress(),
//     "Sign in with Ethereum to the app."
//   );
//   const signature = await signer.signMessage(message);

//   const res = await fetch(`${BACKEND_ADDR}/verify`, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({ message, signature }),
//     credentials: "include",
//   });
//   console.log(await res.status);
//   console.log(await res.text());
// }

async function getInformation() {
  const res = await fetch(`${BACKEND_ADDR}/personal_information`, {
    credentials: "include",
  });
  console.log(await res.text());
}

const connectWalletBtn = document.getElementById("connectWalletBtn");
const siweBtn = document.getElementById("Siwebtn");
const infoBtn = document.getElementById("Info");
const verifyBtn = document.getElementById("verifyBtn");
connectWalletBtn.onclick = connectWallet;
siweBtn.onclick = signInWithEthereum;
infoBtn.onclick = getInformation;
verifyBtn.onclick = sendForVerification;
// const domain = window.location.host;
// const origin = window.location.origin;
// const provider = new ethers.providers.Web3Provider((window as any).ethereum);
// const signer = provider.getSigner();
// console.log(signer);
// const BACKEND_ADDR = "http://localhost:3000";

// async function createSiweMessage(address, statement) {
//   const res = await fetch(`${BACKEND_ADDR}/nonce`);
//   const message = new SiweMessage({
//     domain,
//     address,
//     statement,
//     uri: origin,
//     version: "1",
//     chainId: 1,
//     nonce: await res.text(),
//   });
//   return message.prepareMessage();
// }

// function connectWallet() {
//   provider
//     .send("eth_requestAccounts", [])
//     .catch(() => console.log("user rejected request"));
// }

let message = null;
let signature = null;

async function signInWithEthereum() {
  const message = await createSiweMessage(
    await signer.getAddress(),
    "Sign in with Ethereum to the app. 1231231231231231221"
  );
  const signature = await signer.signMessage("message");

  const res = await fetch(`${BACKEND_ADDR}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, signature }),
    credentials: "include",
  });
  console.log("at", JSON.stringify({ message, signature }));
  console.log(await res.text());
}
async function sendForVerification() {
  const res = await fetch(`${BACKEND_ADDR}/verify`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message, signature }),
  });
  console.log(await res.text());
}
// const connectWalletBtn = document.getElementById("connectWalletBtn");
// const siweBtn = document.getElementById("Siwebtn");
// const verifyBtn = document.getElementById("verifyBtn");

// connectWalletBtn.onclick = connectWallet;
// siweBtn.onclick = signInWithEthereum;
// verifyBtn.onclick = sendForVerification;
// async function getInformation() {
//   const res = await fetch(`${BACKEND_ADDR}/personal_information`, {
//     credentials: "include",
//   });
//   console.log(await res.text());
// }

// const info = document.getElementById("Info");
// info.onclick = getInformation;
// console.log(await getInformation());
// data.innerHTML(document.creawait getInformation());
