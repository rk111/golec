import {  useQuery } from "react-query";
import { Get } from "../utils/axiosUtils";

export const History=()=>{

    const { data } = useQuery(
        ["history"],() => Get("data/history.json"),
        {         
          retry: false,
          refetchOnWindowFocus: false        
        }
      );


  return (
    <div class="current-stack-box">
    <div class="row">
        <div class="col-md-12">
            <div class="blue-title">
                <h6>History </h6>
            </div>
        </div>
    </div>
    <div class="gray-divider mt-4 mb-4"></div>

    <div class="table-responsive max-htable">
        <table class="table">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>description</th>
                    <th>AMount</th>
                </tr>
            </thead>
            <tbody>
            {data && data["data"].map((item, i) => { 
              return (
                <tr class="table-row" key={i}>
                    <td>{item.date}</td>
                    <td class="td-des">{item.description}</td>
                    <td>{item.amount}</td>
                </tr>               
               );
             })}
                
            </tbody>
        </table>
    </div>
</div>
);
}