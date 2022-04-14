import {MainImageContainer} from "../mainImageBox";
import { CurrentStake } from "../stakes/cureentStake";
import { Network } from "../network";
import { History } from "../history";
import { Card } from "../core/card";
import { BusinessSlider } from "../business/NewBusinessSlider";

export const Home=()=>{

  const ConentBox=()=>{
    return (     
     <div class="cafe-box">
        <h2>Café Bussiness </h2>
        <p>Starting Stake : <span>100 GOLE</span></p>
        <p>Reward :<span>20 GOLE/wk</span></p>
        <a href="#">Select</a>
      </div>    
    )   
  }
  
  const ConentBox1=()=> {

  return <div class="swiper-container swiper-container-initialized swiper-container-horizontal swiper-container-free-mode">
    <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide-prev" style={{width: "222px", marginRight: "15px"}}>
            <div class="cafe-box purple">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
        </div>


        <div class="swiper-slide swiper-slide-active" style={{width: "222px", marginRight: "15px"}}>
            <div class="cafe-box orange">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
        </div>

        <div class="swiper-slide swiper-slide-next" style={{width: "222px", marginRight: "15px"}}>
            <div class="cafe-box purple">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
        </div>

        <div class="swiper-slide" style={{width: "222px", marginRight: "15px"}}>
            <div class="cafe-box pink">
                <h2>Café Bussiness </h2>
                <p>Starting Stake : <span>100 GOLE</span></p>
                <p>Reward :<span>20 GOLE/wk</span></p>
                <a href="#">Select</a>
            </div>
        </div>
    </div>
    <div class="swiper-pagination swiper-pagination-progressbar">
      <span class="swiper-pagination-progressbar-fill" 
      ></span></div>
   <span class="swiper-notification" aria-live="assertive" aria-atomic="true"></span></div>
  }
  return (
      <div className="container-fluid">
        <MainImageContainer />
        <div class="clearfix"></div>
        <div className="row mt-4">
          <div className="col-lg-5 col-sm-12 col-12 wow fadeInUp">
            <CurrentStake />
          </div>
          <div className="col-lg-3 col-sm-12 col-12 wow fadeInUp">
           <Network />
          </div>
          <div className="col-lg-4 col-sm-12 col-12  wow fadeInUp">
           <History />
          </div>
        </div>
        <div className="row mt-4 mb-4">
          <div className="col-md-3 wow fadeInUp">
            <Card title="Create New Business">
            <div class="cafe-box-container">
              <ConentBox />
              <ConentBox />
              </div>
            </Card>
          </div>
          <div className="col-md-6 wow fadeInUp">
           <Card title="Create New Business">
             <BusinessSlider /> 
            </Card>
        </div>
        <div className="col-md-3 wow fadeInUp">
          <Card title="Create New Business">
            <div class="cafe-box-container">
             <ConentBox1 />                   
              </div>
              <div class="view-profile-btn" data-toggle="modal" data-target="#myModal">
                <a href="javascript:void(0)">View Profile</a>
               </div>   
            </Card>

          </div>      
        </div>        
      </div>
  );
}