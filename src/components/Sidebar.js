import React from 'react';
import { PayPalButton } from "react-paypal-button-v2";

const Sidebar = ({close}) => {
  return <aside className='sidebar' >
   <div onClick={() => close()} >

     </div>
  <PayPalButton />
</aside>
}

export default Sidebar;