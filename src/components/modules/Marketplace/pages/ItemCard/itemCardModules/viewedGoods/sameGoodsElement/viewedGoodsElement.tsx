import React from "react";
import VGE from "./viewedGoodsElement.module.scss"
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


export const ViewedGoodsElement = (props: SameGoodsElementPropsType) => {


  return (
    <>
      <div className={VGE.wrapper}>
        <div className={VGE.container}>


          <div className={VGE.itemPhoto}>
            <img src={image}/>
          </div>
          <div className={VGE.infoContainer}>
            <div className={VGE.itemHeader}>
              {props.itemHeader}
            </div>

            <div className={VGE.itemDescription}>
              <div className={VGE.descriptionItem}>Производитель:</div>
              <div className={VGE.descriptionValue}>{props.brand}</div>
            </div>


            <div className={VGE.itemDescription}>
              <div className={VGE.descriptionItem}>Стоимость :</div>
              <div className={VGE.descriptionValue}>{props.itemPrice}</div>
            </div>


            <div className={VGE.itemDescription}>
              <Button color="primary" style={{background: "#FF6E01"}} variant={"contained"} size={"medium"}>Добавить в корзину
                <ShoppingCartOutlinedIcon fontSize={"small"} style={{marginLeft: '10px'}}/>
              </Button>
              <EmojiEventsOutlinedIcon style={{color: 'grey'}}/>
              <FavoriteBorderOutlinedIcon style={{color: 'grey'}}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
