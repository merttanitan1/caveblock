import React from 'react'
import wallet from './Vector.svg';
import statics from './Statics.svg';
import token from './Token.svg';
import { useState } from 'react';
import './home.css'
const { ethers } = require("ethers");

const Home = () => {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    setAccount(account[0]);
  }

  const shortenAddress = (address) => {
    if (!address) return "";
    return address.slice(0, 6) + '...' + address.slice(-2);
  }
  return (
    <div className="home">
      <div className="mainText">
        All Features that you need in one DApp.
      </div>
      <button className='wallet-home' onClick={connectWallet}>
        {account ? shortenAddress(account) : 'Connect'}
      </button>
      <button className="learn-more">
        Learn More
      </button>
      <div className="box-container">
        <div className="box">
          <img src={wallet} className="wallet-logo" alt="wallet" />
          <div className="text">
            <p>Deposit & Withdraw <br /> CBT Token</p>
          </div>
        </div>
        <div className="box">
          <img src={statics} className="statics-logo" alt="statics" />
          <div className="text">
            <p>Buy & Sell <br /> NFTs</p>
          </div>
        </div>
        <div className="box">
          <img src={token} className="token-logo" alt="token" />
          <div className="text">
            <p>Transfer Your <br /> CryptoCave Tokens</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home