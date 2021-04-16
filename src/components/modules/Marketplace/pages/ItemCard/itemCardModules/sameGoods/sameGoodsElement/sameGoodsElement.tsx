import React from "react";
import SGE from "./sameGoodsElement.module.scss"
import image from './../../../../../../../../assets/image/itemCardPhotos/image-4.jpg'
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import {Button} from "@material-ui/core";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import EmojiEventsOutlinedIcon from '@material-ui/icons/EmojiEventsOutlined';

type SameGoodsElementPropsType = {
  id: number,
  brand: string,
  itemPrice: string,
  itemHeader: string,
  city: string,
  style?: number
}


export const SameGoodsElement = (props: SameGoodsElementPropsType) => {


  return (
    <>
    <div className={props.style ? SGE.wrapper + " " + SGE.lift : SGE.wrapper}>

      <div className={SGE.container}>

        <div className={SGE.itemPhoto}>
          <img src={image}/>
       </div>

        <div className={SGE.itemHeader}>
          {props.itemHeader}
       </div>

        <div className={SGE.itemDescription}>
          <div className={SGE.descriptionItem}>Производитель:</div>
          <div className={SGE.descriptionValue}>{props.brand}</div>
       </div>

        <div className={SGE.itemDescription}>
          <div className={SGE.descriptionItem}>Количество вмещаемых комплектов:</div>
          <div className={SGE.descriptionValue}>{props.itemPrice}</div>
        </div>

        <div className={SGE.itemDescription}>
          <div className={SGE.descriptionItem}>Расход воды за цикл,в л.:</div>
          <div className={SGE.descriptionValue}>{props.id}</div>
        </div>
        <a className={SGE.allProperties}>Все характеристики</a>

        <div className={SGE.itemDescription}>

          <div className={SGE.descriptionItem}>Стоимость:</div>
          <div className={SGE.itemPrice}>
            <div className={SGE.priceDigit}>{props.itemPrice}</div>
            <div className={SGE.moneyType}>₽</div>
          </div>

        </div>

        <div className={SGE.itemDescription}>
          <Button color="primary" style={{background: "#FF6E01"}} variant={"contained"}>Добавить в корзину
            <ShoppingCartOutlinedIcon fontSize={"small"} style={{marginLeft: '10px'}}/>
          </Button>
          <EmojiEventsOutlinedIcon style={{color: 'grey'}}/>
          <FavoriteBorderOutlinedIcon style={{color: 'grey'}}/>
        </div>





      </div>
    </div>
</>
  )
}
