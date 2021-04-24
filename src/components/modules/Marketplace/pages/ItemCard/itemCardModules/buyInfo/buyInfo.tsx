import React, {useState} from 'react';
import BIstyle from './buyInfo.module.scss'
import ControlledAccordions from "../../../../../../../utils/accordion";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import {Button} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";

type deliveryDateType = {
  date: number,
  mounth: string
}


type BuyInfoPropsType = {
  itemPrice: number,
  storagePresence: Array<string>,
  deliveryPrice: string,
  deliveryDate: deliveryDateType
}

export const BuyInfo: React.FC<BuyInfoPropsType> = (props) => {

  let [showAll, setShowAll] = useState<boolean>(false)
  const items = props.storagePresence.slice(0, 5)
  const onClickHandler = () => {
    setShowAll(!showAll)
  };

  const itemPriceMaker = (price:number) => {
   let priceStringArray = price.toString().split("")
    if (priceStringArray.length === 4){
      priceStringArray.splice(1, 0, " ");
    }else  if (priceStringArray.length === 5){
      priceStringArray.splice(2, 0, " ");
    }else  if (priceStringArray.length === 6) {
      priceStringArray.splice(3, 0, " ");
    }
    return  priceStringArray.join("")
  }                     //перенести в отдельный файл

  return (
    <>
      <div className={BIstyle.wrapper}>
        <div className={BIstyle.container}>

          <div className={BIstyle.itemPrice}>
            <div style={{marginRight:'7px', fontSize: '14px'}}>{'От'}</div>

            <div className={BIstyle.priceDigit}>
              {itemPriceMaker(props.itemPrice) }
            </div>

            <span className={BIstyle.moneyType}>₽</span>
          </div>

          <div className={BIstyle.storagePresence}>

            <div className={BIstyle.headerName}>Наличие на складе в городе:</div>

            <div className={BIstyle.storages}>
              {showAll ? props.storagePresence : items.map(el =>
                <div className={showAll ? BIstyle.allStoragePresence : BIstyle.firstFiveStorage}>
                  <div className={BIstyle.exactStorage}>{el + ': '}</div>
                  <div className={BIstyle.storagePrice}>{props.itemPrice + " " + '₽'}</div>

                </div>)}

              <a className={BIstyle.showAllButton} onClick={onClickHandler}>{showAll ? 'Скрыть' : 'Показать все'}</a>

            </div>
          </div>
          <div className={BIstyle.delivery_calculator}>

            <div className={BIstyle.accordionInput}>
              {/*<div className={BIstyle.accordionInputFrom}><input/></div>*/}
              <input  className={BIstyle.accordionInputTo}/>
              <input  className={BIstyle.accordionInputTo}/>

            </div>


            <div className={BIstyle.deliveryPriceWrapper}>


              <div className={BIstyle.deliveryPrice}>
                <div className={BIstyle.deliveryDateText}><span>Стоимость доставки:</span></div>
                <div className={BIstyle.deliveryDate}>{props.deliveryPrice}</div>
              </div>


              <div className={BIstyle.deliveryTime}>
                <div className={BIstyle.deliveryDateText}><span>Время доставки:</span></div>
                <div className={BIstyle.deliveryDate}>{props.deliveryDate.date + " " + props.deliveryDate.mounth}</div>
              </div>
            </div>

            <div className={BIstyle.finalPrice}>


              <div style={{marginBottom:'5px'}}  className={BIstyle.deliveryDateText}>Итоговая cумма:</div>
              <div className={BIstyle.finalPriceDigit}>
                {itemPriceMaker(props.itemPrice)}
                <span className={BIstyle.moneyType}>₽</span>
              </div>



              <div className={BIstyle.likeIcon}>
                <FavoriteBorderOutlinedIcon style={{color:'#ED7117'}}/>
              </div>
            </div>


            <div className={BIstyle.buttonGroup}>
              <Button color="primary" style={{background: "#FF6E01"}} variant={"contained"}>
                <div className={BIstyle.buttonAddTo}>Добавить в корзину</div>
                <div className={BIstyle.iconBucket}><ShoppingCartOutlinedIcon width={5} fontSize={'small'} style={{marginLeft: '5px'}}/></div>
              </Button>

              <Button style={{color: "#FF6E01",border:"1px solid #FF6E01"}} variant={"outlined"}>
                <div className={BIstyle.buttonAddTo}>Купить в 1 клик</div>
              </Button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
