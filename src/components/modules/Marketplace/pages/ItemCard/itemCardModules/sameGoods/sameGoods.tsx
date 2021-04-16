import React, {useEffect, useState} from "react";
import SG from "./sameGoods.module.scss"
import {SameGoodsElement} from "modules/Marketplace/pages/ItemCard/itemCardModules/sameGoods/sameGoodsElement/sameGoodsElement";
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';

export type sameElement = {
  id:number,
  brand:string,
  city:string
  itemHeader:string
  itemPrice:string
}

type SameGoodsPropsType = {
  sameInfoProps:Array<sameElement>
}




export const SameGoods:React.FC<SameGoodsPropsType> = (props) => {

  let sameGoodsArray = [...props.sameInfoProps.map((e, i) => {
    return {id: e.id, brand: e.brand, city: e.city, itemHeader: e.itemHeader, itemPrice: e.itemPrice}
  })]

  let [sameGoodsArrayState, setsameGoodsArrayState] = useState(sameGoodsArray);

  const onClickHandler = (mode: 'left' | 'right') => {

    if (mode === 'right') {
      sameGoodsArrayState.push(sameGoodsArrayState.shift());
      let moveAhead = [...sameGoodsArrayState]
      setsameGoodsArrayState(moveAhead);
    } else {
      sameGoodsArrayState.unshift(sameGoodsArrayState.pop());
      let moveBack = [...sameGoodsArrayState]
      setsameGoodsArrayState(moveBack)
    }
  }


  let items = sameGoodsArrayState.slice(0, 3)


  const elementComponent = items.map((seg: any) => seg === items[1] ? <SameGoodsElement key={seg.id} id={seg.id}
                                                                                        brand={seg.brand}
                                                                                        style={1}
                                                                                        itemPrice={seg.itemPrice}
                                                                                        itemHeader={seg.itemHeader}
                                                                                        city={seg.city}/> :
    <SameGoodsElement key={seg.id} id={seg.id}
                      brand={seg.brand}
                      itemPrice={seg.itemPrice}
                      itemHeader={seg.itemHeader}
                      city={seg.city}/>)

  return (
    <>

      <div className={SG.wrapper}>
        <div className={SG.arrowIcon}><ArrowBackIosTwoToneIcon onClick={() => onClickHandler('left')}
                                                               style={{color: "#FF6E01"}}/></div>

        <div className={SG.componentsBlock}>{elementComponent}</div>

        <div className={SG.arrowIcon}><ArrowForwardIosTwoToneIcon onClick={() => onClickHandler('right')}
                                                                  style={{color: "#FF6E01"}}/></div>

      </div>
    </>

  )
}
