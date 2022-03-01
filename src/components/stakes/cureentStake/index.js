import {  useQuery } from "react-query";
import { Get } from "../../utils/axiosUtils";

export const CurrentStake=()=>{
 
    const { data } = useQuery(
        ["currentstake"],() => Get("data/currentstack.json"),
        {         
          retry: false,
          refetchOnWindowFocus: false        
        }
      );
    

 return (
    <div class="current-stack-box">
    <div class="row">
        <div class="col-md-6 col-sm-6 col-6 ">
            <div class="blue-title">
                <h6>Current Stakes</h6>
            </div>
        </div>
        <div class="col-md-6 col-sm-6 col-6">
            <div class="blue-title">
                <h6>Total stake</h6>
            </div>
        </div>
    </div>
    <div class="gray-divider mt-4 mb-4"></div>

    <div class="table-responsive max-htable ">

        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>stake</th>
                    <th>rewards</th>
                    <th>tenure</th>
                    <th>expiry</th>
                </tr>
            </thead>
            <tbody>
               
            {data && data["data"].map((item, i) => {      

               return (
               <tr class="table-row" key={i}>
                    <td>{item.date}</td>
                    <td class="td-title">{item.title}</td>
                    <td>{item.stake}</td>
                    <td>{item.reward}</td>
                    <td>{item.tenure}</td>
                    <td>{item.expiry}</td>
                    <td><a href="#" class="extend">extend</a></td>
                    <td><a href="#" class="upgrade">upgrade</a></td>
                </tr>
                );
                })}
               
            </tbody>
        </table>
    </div>
</div>
);
}