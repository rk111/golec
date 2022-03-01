/* eslint-disable jsx-a11y/alt-text */
import { useState } from 'react';
import {  useQuery } from "react-query";
import { Get } from "../utils/axiosUtils";

import { ModalPop } from '../core/modal';
import { ModalWindow } from './modelWindow';

export const Header=()=>{    
    
const [show, setShow] = useState(false);

const handleShow = () => setShow(true);

const { data } = useQuery(
    ["profile"],() => Get("data/user.json"),
    {         
        retry: false,
        refetchOnWindowFocus: false        
    }
    );

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
                     <h4>{data?.data[0].name}</h4>
                     <p>{data?.data[0].level}</p>
                 </li>
                 <li>
                     <div className="pro-img-box view-profile-btn">
                         <div className="pro-img" onClick={handleShow}>
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
