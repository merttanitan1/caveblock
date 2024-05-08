import React from 'react'
import wallet from './Vector.svg';
import './home.css'


const Home = () => {
  return (
    <div className="home">
      <div className="mainText">
        All Features that you need in one DApp.
      </div>
      <div className="box">
        <img src={wallet} className="wallet-logo" alt="wallet" />
        test
      </div>
    </div>
  )
}

export default Home