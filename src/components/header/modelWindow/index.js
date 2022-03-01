/* eslint-disable jsx-a11y/anchor-is-valid */
import {useState} from 'react';
import {Tabs, Tab,Nav, Row, Col} from "react-bootstrap";

export const ModalWindow=({setShow})=> {
    const [key, setKey] = useState("1");

    const handleSelect = (eventKey) => setKey(eventKey);

 return (
   
       <>
            <div class="modal-header">
                <div class="row">
                    <div class="col-md-12">
                        <div class="blue-title">
                            <h6>Qualification</h6>
                        </div>
                    </div>
                </div>
                {/* <div class="gray-divider mt-4 mb-4"></div> */}
                <button type="button" class="close" onClick={()=>setShow(false)}>&times;</button>
            </div>

            <div class="modal-body">
                <div class="qualification-table">
                    <div class="table-responsive">
                    <Tab.Container  defaultActiveKey="1">
                    <Nav onSelect={handleSelect}>
                     <table class="tab-table custom-tabs">
                        <tbody class="tab-body">
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
                           
                      
                        <div class="tab-content-container">
                        <Tab.Content>
                        <Tab.Pane eventKey="1">
                            <div  class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager1</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="2">
                            <div  class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="3">
                            <div id="3" class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="4">
                            <div id="4" class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="5">
                            <div id="5" class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="6">
                            <div id="6" class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                            </Tab.Pane>
                            <Tab.Pane eventKey="7">
                            <div id="7" class="tabcontent table-content">
                                <table class="qualification">
                                    <tbody class="qualification-tbody">
                                        <tr>
                                            <td>Referrals</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Manager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>5</td>
                                            <td>7</td>
                                            <td>10</td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>Gmanager</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>cIO,CTO,CFC</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                            <td></td>
                                        </tr>
                                        <tr>
                                            <td>CEO</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>4</td>
                                            <td>3</td>
                                            <td>2</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Business
                                                Ownership</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>1</td>
                                            <td>*</td>
                                        </tr>
                                        <tr>
                                            <td>Creation of
                                                new biz</td>
                                            <td></td>
                                            <td></td>
                                            <td></td>
                                            <td>1</td>
                                            <td>2</td>
                                            <td>3</td>
                                            <td>5</td>
                                        </tr>
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