/* eslint-disable jsx-a11y/alt-text */
import { useState,useEffect } from 'react';
import {  useQuery } from "react-query";
import { Dropdown,NavDropdown} from 'react-bootstrap';

import { Get } from "../utils/axiosUtils";

import { ModalPop } from '../core/modal';
import { ModalWindow } from './modelWindow';

export const Header=()=>{    
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [myMessage, setMyMessage] = useState(<h3> LOADING.. </h3>);
  const [myDetails, setMyDetails] = useState({
    name: 'none',
    address: 'none',
    balance: 0,
    frozenBalance: 0,
    network: 'none',
    link: 'false',
  });

  
const [show, setShow] = useState(false);

const handleShow = () => setShow(true);

const toggle = () => setDropdownOpen(prevState => !prevState);


const { data } = useQuery(
    ["profile"],() => Get("data/user.json"),
    {         
        retry: false,
        refetchOnWindowFocus: false        
    }
    );


    const getBalance = async () => {
        //if wallet installed and logged , getting TRX token balance
        if (window.tronWeb && window.tronWeb.ready) {
          let walletBalances = await window.tronWeb.trx.getAccount(
            window.tronWeb.defaultAddress.base58
          );
          return walletBalances;
        } else {
          return 0;
        }
      };
    


  const getWalletDetails = async () => {
    if (window.tronWeb) {
      //checking if wallet injected
      if (window.tronWeb.ready) {
        let tempBalance = await getBalance();
        let tempFrozenBalance = 0;

        if (!tempBalance.balance) {
          tempBalance.balance = 0;
        }

        //checking if any frozen balance exists
        // if (
        //   !tempBalance.frozen &&
        //   !tempBalance.account_resource.frozen_balance_for_energy
        // ) {
        //   tempFrozenBalance = 0;
        // } else {
        //   if (
        //     tempBalance.frozen &&
        //     tempBalance.account_resource.frozen_balance_for_energy
        //   ) {
        //     tempFrozenBalance =
        //       tempBalance.frozen[0].frozen_balance +
        //       tempBalance.account_resource.frozen_balance_for_energy
        //         .frozen_balance;
        //   }
        //   if (
        //     tempBalance.frozen &&
        //     !tempBalance.account_resource.frozen_balance_for_energy
        //   ) {
        //     tempFrozenBalance = tempBalance.frozen[0].frozen_balance;
        //   }
        //   if (
        //     !tempBalance.frozen &&
        //     tempBalance.account_resource.frozen_balance_for_energy
        //   ) {
        //     tempFrozenBalance =
        //       tempBalance.account_resource.frozen_balance_for_energy
        //         .frozen_balance;
        //   }
        // }

        //we have wallet and we are logged in
        setMyMessage(<h3>WALLET CONNECTED</h3>);
        setMyDetails({
          name: window.tronWeb.defaultAddress.name,
          address: window.tronWeb.defaultAddress.base58,
          balance: tempBalance.balance / 1000000,
          frozenBalance: tempFrozenBalance / 1000000,
          network: window.tronWeb.fullNode.host,
          link: 'true',
        });
      } else {
        //we have wallet but not logged in
        setMyMessage(<h3>WALLET DETECTED PLEASE LOGIN</h3>);
        setMyDetails({
          name: 'none',
          address: 'none',
          balance: 0,
          frozenBalance: 0,
          network: 'none',
          link: 'false',
        });
      }
    } else {
      //wallet is not detected at all
      setMyMessage(<h3>WALLET NOT DETECTED</h3>);
    }
  };


  useEffect(() => {
    const interval = setInterval(async () => {
      getWalletDetails();
      //wallet checking interval 2sec
    }, 5000);
    return () => {
      clearInterval(interval);
    };
  });

// console.log(myDetails)
 return (
 <header className="header">
 <div className="container-fluid">
     <div className="header-content-container">
         <div className="header-logo">
             <a href="index.html">
                 <img src="images/logo.svg"/>
             </a>
         </div>
         <div className="header-right">
             <ul>
                 <li id="counter">
                     <h4>{myDetails.name}</h4> 
                     <p>{data?.data[0].level}</p>
                 </li>
                 <li> 
                     
                 <NavDropdown
                  id="profile-header"
                  title={
                    <div className="pro-img-box view-profile-btn">
                      <div className="pro-img">
                          <img src={data?.data[0].pic}/>
                      </div>
                      <div className="progress-holder">
                          <div className="progress green">
                              <span className="progress-left">
                                  <span className="progress-bar"></span>
                              </span>
                              <span className="progress-right">
                                  <span className="progress-bar"></span>
                              </span>
                              <div className="progress-value">90%</div>
                          </div>
                      </div>
                  </div>
                  } 
          
               >
          <NavDropdown.Item>Balance: {myDetails.balance} TRX (Frozen:{' '}
            {myDetails.frozenBalance} TRX)</NavDropdown.Item>
          {/* <NavDropdown.Item>Network Selected: {myDetails.network}</NavDropdown.Item> */}
          <NavDropdown.Item>Link Established: {myDetails.link}</NavDropdown.Item>
          <NavDropdown.Divider />
          {/* <NavDropdown.Item>Separated link</NavDropdown.Item> */}
        </NavDropdown>
                  
                 </li>
             </ul>
         </div>
     </div>
 </div>
 <ModalPop show={show} setShow={setShow}>
   <ModalWindow  show={show} setShow={setShow}/>
 </ModalPop>
</header>
);
}
