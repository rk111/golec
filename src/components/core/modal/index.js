import {useState} from "react";
import Modal from 'react-bootstrap/Modal'

export const ModalPop=({show ,setShow, children})=>{
    //const [show, setShow] = useState(false);

    return ( 
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="xl"
  >
   {children}
  </Modal>);

}