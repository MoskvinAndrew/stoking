import React from 'react';
import ABstyle from "./analogsBlock.module.scss";
import {AnalogItem} from "modules/Marketplace/pages/ItemCard/itemCardModules/analogsBlock/analogItem/analogItem";
import countryFlag from "../../../../../../../assets/icons/phone"
import {Button} from "@material-ui/core";
import LanguageIcon from '@material-ui/icons/Language';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import Flag from 'icons/germany'



export const AnalogsBlock: React.FC = () => {

let analogsArray = [{id:1,brand:"Phiolent",city:"Moskow",deliveryTime:"12",itemPrice:"20166"},
  {id:2,brand:"Makita",city:"Simferopol",deliveryTime:"56",itemPrice:"20145"},
  {id:3,brand:"Bosch",city:"Perm",deliveryTime:"12",itemPrice:"20145"},
  {id:4,brand:"Sparky",city:"Kerch",deliveryTime:"19",itemPrice:"20185"}]
  const analogs = analogsArray.map((el:any)=> <AnalogItem key={el.id}
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
          {analogs}

        </div>
      </div>
       <div className={ABstyle.bottomWrapper}>
         <div className={ABstyle.bottomContainer}>
           <div><span>Способы оплаты</span></div>
           <div className={ABstyle.buttonsContainer}>
             <Button variant={"contained"} style={{color: "#3A3A3A",fontSize: '12px'}}>
             Оплата онлайн <LanguageIcon fontSize={"small"} style={{marginLeft:'10px'}} />
           </Button>
             <Button variant={"contained"} style={{color: "#3A3A3A",fontSize: '12px'}}>
               Выставление счета
               <AssignmentIndIcon fontSize={"small"} style={{marginLeft:'10px'}}/>
             </Button>
           </div>
         </div>


       </div>
     </div>
    </>
  )
}

