import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { Home } from './components/';
const { ethers } = require("ethers");

function App() {
  const [account, setAccount] = useState(null);

  const connectWallet = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    const account = await provider.send("eth_requestAccounts", []);
    setAccount(account[0]);
  }

  useEffect(() => {
    if(window.ethereum){
      window.ethereum.on('accountsChanged', async function (accounts) {
        setAccount(accounts[0]);
      });
    }
  }, []);

  const shortenAddress = (address) => {
    if (!address) return "";
    return address.slice(0, 6) + '...' + address.slice(-2);
  }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div className='nav-container'>
          <a href="#home" className='nav-link'>Home</a>
          <a href="#about" className='nav-link'>About</a>
          <a href="#features" className='nav-link'>Features</a>
        </div>
      </header>
      <button className='wallet' onClick={connectWallet}>
        {account ? `Connected: ${shortenAddress(account)}` : 'Connect Wallet'}
      </button>
    </div>
  );
}

export default App;
