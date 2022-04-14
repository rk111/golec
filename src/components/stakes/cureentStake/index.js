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
    <div className="current-stack-box">
    <div className="row">
        <div className="col-md-6 col-sm-6 col-6 ">
            <div className="blue-title">
                <h6>Current Stakes</h6>
            </div>
        </div>
        <div className="col-md-6 col-sm-6 col-6">
            <div className="blue-title">
                <h6>Total stake</h6>
            </div>
        </div>
    </div>
    <div className="gray-divider mt-4 mb-4"></div>

    <div className="table-responsive max-htable ">

        <table className="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Title</th>
                    <th>Stake</th>
                    <th>Rewards</th>
                    <th>Tenure</th>
                    <th>Expiry</th>
                </tr>
            </thead>
            <tbody>
               
            {data && data["data"].map((item, i) => {      

               return (
               <tr className="table-row" key={i}>
                    <td>{item.date}</td>
                    <td className="td-title">{item.title}</td>
                    <td>{item.stake}</td>
                    <td>{item.reward}</td>
                    <td>{item.tenure}</td>
                    <td>{item.expiry}</td>
                    <td><a href="#" className="extend">extend</a></td>
                    <td><a href="#" className="upgrade">upgrade</a></td>
                </tr>
                );
                })}
               
            </tbody>
        </table>
    </div>
</div>
);
}