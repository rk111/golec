/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import {  useQuery } from "react-query";
import { Get } from "../../utils/axiosUtils";
import {Tab,Nav} from "react-bootstrap";

export const ModalWindow=({setShow})=> {
    const [key, setKey] = useState("1");

    const handleSelect = (eventKey) => setKey(eventKey);

    const { data } = useQuery(
        ["qualification"],() => Get("data/level1.json"),
        {         
            retry: false,
            refetchOnWindowFocus: false        
        }
        );
        const { data:level_1_data } = useQuery(
            ["qualification"],() => Get("data/level2.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );

        const { data:level_2_data } = useQuery(
            ["qualification"],() => Get("data/level2.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );
        
        const { data:level_3_data } = useQuery(
            ["qualification"],() => Get("data/level3.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );
        
        const { data:level_4_data } = useQuery(
            ["qualification"],() => Get("data/level4.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );

        const { data:level_5_data } = useQuery(
            ["qualification"],() => Get("data/level5.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );

        const { data:level_6_data } = useQuery(
            ["qualification"],() => Get("data/level6.json"),
            {         
                retry: false,
                refetchOnWindowFocus: false        
            }
        );
        
 return (
   
       <>
            <div className="modal-header">
                <div className="row">
                    <div className="col-md-12">
                        <div className="blue-title">
                            <h6>Qualification</h6>
                        </div>
                    </div>
                </div>
                {/* <div className="gray-divider mt-4 mb-4"></div> */}
                <button type="button" className="close" onClick={()=>setShow(false)}>&times;</button>
            </div>

            <div className="modal-body">
                <div className="qualification-table">
                    <div className="table-responsive">
                    <Tab.Container  defaultActiveKey="1">
                    <Nav onSelect={handleSelect}>
                     <table className="tab-table custom-tabs">
                        <tbody className="tab-body">
                            <tr>
                            <tr>
                            <td style={{width: "13.1%"}}>&nbsp;</td>
                            <td className={`tablinks ${key === "1" ? 'active':''}`}>
                            <Nav.Item>
                                    <Nav.Link eventKey="1">level 1  Student</Nav.Link>
                                </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "2" ? 'active':''}`}>
                            <Nav.Item>
                                    <Nav.Link eventKey="2">level 2 intern</Nav.Link>
                                </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "3" ? 'active':''}`}>
                                    <Nav.Item>
                                    <Nav.Link eventKey="3">level 3  Jobs</Nav.Link>
                                </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "4" ? 'active':''}`}>
                                <Nav.Item>
                                <Nav.Link eventKey="4">level 4  Manager</Nav.Link>
                                </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "5" ? 'active':''}`}>
                                <Nav.Item>
                                <Nav.Link eventKey="5">level 5  GManager</Nav.Link>
                                </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "6" ? 'active':''}`}>
                              <Nav.Item>
                            <Nav.Link eventKey="6">level 6  CEO</Nav.Link>
                            </Nav.Item>
                                </td>
                                <td className={`tablinks ${key === "7" ? 'active':''}`}>
                              <Nav.Item>
                                <Nav.Link eventKey="7">level 7  CFO</Nav.Link>
                                </Nav.Item>
                            </td>
                            </tr>
                            </tr>
                                </tbody>
                            </table>   
                            </Nav>      
                           
                      
                        <div className="tab-content-container">
                        <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <div  className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {data && data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                       
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                            <div  className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_1_data && level_1_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                            <div id="3" className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_2_data && level_2_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                            <div id="4" className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_3_data && level_3_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5">
                            <div id="5" className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_4_data && level_4_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="6">
                            <div id="6" className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_5_data && level_5_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="7">
                            <div id="7" className="tabcontent table-content">
                                <table className="qualification">
                                    <tbody className="qualification-tbody">
                                    {level_6_data && level_6_data["data"].map((item, i) => {    
                                       return( 
                                        <tr>
                                                <td>{item.name}</td>
                                                <td>{item.level1}</td>
                                                <td>{item.level2}</td>
                                                <td>{item.level3}</td>
                                                <td>{item.level4}</td>
                                                <td>{item.level5}</td>
                                                <td>{item.level6}</td>
                                                <td>{item.level7}</td>
                                            </tr>
                                      );
                                    })}
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            </Tab.Content>
                        </div>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            </>
      
)

}