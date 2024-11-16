import React from 'react';
import ConnectButton from '../ConnectButton/ConnectButton';
import './Nav.css'

function Nav({ handleConnect, chainId, chainHex, chainName, rpcUrl }) {
  return (
    <header className="header">
      <nav className="nav">
        <div className="brand">
          <img src='./LPC.png' className="logo" />
          <h3>Linea Public Chat</h3>
        </div>

        <ul className='nav_link'>
          <li className='nav-text'><a href="/">Home</a></li>
          <li className='nav-text'><a href="https://linea.build/">Linea build</a></li>
          <li className='nav-text'><a href="https://lineascan.build/address/0x5f772155A53d47e2b59FF06564CC221ea712aaf8">Contract</a></li>
        </ul>
        <div className="button-container">
            <ConnectButton
              onConnect={handleConnect}
              chainId={chainId}
              chainHex={chainHex}
              chainName={chainName}
              rpcUrl={rpcUrl}
            />
        </div>
      </nav>
    </header>
  );
}

export default Nav;