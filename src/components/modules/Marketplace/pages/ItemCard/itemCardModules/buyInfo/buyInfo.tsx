import React, {useState} from 'react';
import BIstyle from './buyInfo.module.scss'
import ControlledAccordions from "../../../../../../../utils/accordion";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import {Button} from "@material-ui/core";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";


export const BuyInfo: React.FC = () => {
  const props = {
    itemPrice: 19260,
    storagePresence: [
      'Москва', 'Санкт-Петербург', 'Екатеринбург', 'Пермь', 'Вологда', 'Симферополь'
      , 'Пермь', 'Вологда', 'Симферополь'
    ],
    deliveryPrice: 'бесплатно',
    deliveryDate: {date: 29, mounth: 'марта'}
  }
  let [showAll, setShowAll] = useState<boolean>(false)
  const items = props.storagePresence.slice(0, 5)
  const onClickHandler = () => {
    setShowAll(!showAll)
  }
  return (
    <>
      <div className={BIstyle.wrapper}>
        <div className={BIstyle.container}>
          <div className={BIstyle.itemPrice}>
            <span>От</span>
            <span className={BIstyle.priceDigit}>{props.itemPrice}</span>
            <span className={BIstyle.moneyType}>₽</span>
          </div>

          <div className={BIstyle.storagePresence}>

            <span>Наличие на складе в городе:</span>

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
              <div className={BIstyle.accordionInputFrom}><ControlledAccordions/></div>
              <div className={BIstyle.accordionInputTo}><ControlledAccordions/></div>
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

            <div className={BIstyle.itemPrice}>
              <span>Итоговая Сумма:</span>
              <div className={BIstyle.priceDigit}>{props.itemPrice}</div>
              <FavoriteBorderOutlinedIcon/>
            </div>


            <div className={BIstyle.buttonGroup}>
              <Button color="primary" style={{background: "#FF6E01"}} variant={"contained"}>Добавить в корзину
                <ShoppingCartOutlinedIcon fontSize={"small"} style={{marginLeft: '10px'}}/>
              </Button>
              <Button style={{color: "#FF6E01"}} variant={"outlined"}>Купить в 1 клик</Button>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
