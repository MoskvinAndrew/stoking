import React from 'react';
import ABstyle from "./analogsBlock.module.scss";
import {AnalogItem} from "modules/Marketplace/pages/ItemCard/itemCardModules/analogsBlock/analogItem/analogItem";
import countryFlag from "../../../../../../../assets/icons/phone"
import {Button} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Flag from 'icons/germany'

export type AnalogBlockType = {
  id:number,
  brand:string,
  city:string,
  deliveryTime:string,
  itemPrice:string
}

type AnalogsBlockPropsType = {analogsInfoProps:Array<AnalogBlockType>}


export const AnalogsBlock: React.FC<AnalogsBlockPropsType> = (props) => {


  const analogs = props.analogsInfoProps.map((el:any)=> <AnalogItem key={el.id}
                                                          brand={el.brand}
                                                          itemPrice={el.itemPrice}
                                                          deliveryTime={el.deliveryTime}
                                                          city={el.city}
                                                          countryFlag={Flag}
  />)
  return (
    <>
     <div className={ABstyle.wrapperMain}>
      <div className={ABstyle.wrapper}>
        <div className={ABstyle.container}>
          <div className={ABstyle.blockName}>
            <span>Аналоги</span>
            <span className={ABstyle.blockNameLink} >Посмотреть все</span>
          </div>
          <div className={ABstyle.tableName}>

            <div className={ABstyle.tableCell}><span>Страна</span></div>
            <div className={ABstyle.tableCell}><span>Бренд</span></div>
              <div className={ABstyle.tableCell}><span>Город</span></div>
                <div className={ABstyle.tableCell}><span>Доставка</span></div>
                  <div className={ABstyle.tableCell}><span>Стоимость</span></div>
            <div className={ABstyle.tableCell}><span></span></div>
          </div>
          <div className={ABstyle.tableItem}>{analogs}</div>

        </div>
      </div>
       <div className={ABstyle.bottomWrapper}>
         <div className={ABstyle.bottomContainer}>
           <div><span>Способы оплаты</span></div>
           <div className={ABstyle.buttonsContainer}>
             <Button variant={"outlined"} style={{color: "#3A3A3A",fontSize: '8px'}}>
               <div className={ABstyle.buttonName}>Оплата онлайн</div>
               <LanguageIcon fontSize={"small"} style={{marginLeft:'15px',paddingLeft:'5px'}} />
           </Button>
             <Button variant={"outlined"} style={{color: "#3A3A3A",fontSize: '8px'}}>
               Выставление счета
               <AssignmentIndIcon fontSize={"small"} style={{marginLeft:'15px',paddingLeft:'5px'}}/>
             </Button>
           </div>
         </div>


       </div>
     </div>
    </>
  )
}

