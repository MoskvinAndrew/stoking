import React, {useEffect, useState} from "react";
import SG from "./viewedGoods.module.scss"
import {SameGoodsElement} from "modules/Marketplace/pages/ItemCard/itemCardModules/sameGoods/sameGoodsElement/sameGoodsElement";
import ArrowBackIosTwoToneIcon from '@material-ui/icons/ArrowBackIosTwoTone';
import ArrowForwardIosTwoToneIcon from '@material-ui/icons/ArrowForwardIosTwoTone';
import {ViewedGoodsElement} from "modules/Marketplace/pages/ItemCard/itemCardModules/viewedGoods/sameGoodsElement/viewedGoodsElement";

let propes = {
  sameElementsOfGoods: [{
    id: 1,
    brand: "Phiolent",
    city: "Moskow",
    itemHeader: "Клапан обратный межфланговый 065В7535 149В2425",
    itemPrice: "20166"
  },
    {
      id: 2,
      brand: "Makita",
      city: "Simferopol",
      itemHeader: "Клапан обратный межфланговый 065В5635 149В7825",
      itemPrice: "12145"
    },
    {id: 3, brand: "Bosch", city: "Perm", itemHeader: "Клапан обратный межфланговый 0656535 14725", itemPrice: "20145"},
    {id: 4, brand: "Hilti", city: "Kerch", itemHeader: "Клапан обратный межфланговый  xgdgddd ", itemPrice: "2085"}
  ]
}

export const ViewedGoods = () => {

  let sameGoodsArray = [...propes.sameElementsOfGoods.map((e, i) => {
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


  const elementComponent = items.map((seg: any) => <ViewedGoodsElement key={seg.id} id={seg.id}
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
