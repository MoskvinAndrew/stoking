import React from "react";
import AIstyle from "./analogItem.module.scss"
// @ts-ignore
import Flag from 'react-world-flags'
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";




type AnalogItemPropsType = any


export const AnalogItem: React.FC<AnalogItemPropsType> = (props) => {
  return(
    <>
      <div className={AIstyle.container}>
        <div className={AIstyle.containerCell}><img src={'dfg'} alt="icon"/></div>
        <div className={AIstyle.containerCell}><span>{props.brand}</span></div>
        <div className={AIstyle.containerCell}><span>{props.city}</span></div>
        <div className={AIstyle.containerCell}><span>{props.deliveryTime}</span></div>
        <div className={AIstyle.containerCell}><span>{props.itemPrice + " " +'₽'}</span></div>
        <div className={AIstyle.containerCell}><span>{<ShoppingCartOutlinedIcon fontSize={'small'} style={{paddingLeft: '5px',marginLeft:'5px'}}/>}</span></div>
      </div>
    </>
  )
}
