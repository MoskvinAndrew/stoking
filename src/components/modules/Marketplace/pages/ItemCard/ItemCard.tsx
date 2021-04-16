import React from 'react';
import {Marketplace} from "modules/Marketplace/Marketplace";
import {ProductInfo} from "modules/Marketplace/pages/ItemCard/itemCardModules/productInfo/ProductInfo";
import {BuyInfo} from "modules/Marketplace/pages/ItemCard/itemCardModules/buyInfo/buyInfo";
import ICstyle from './ItemCard.module.scss'
import {ProductDescription} from "modules/Marketplace/pages/ItemCard/itemCardModules/productDescription/productDescription";
import {AnalogsBlock} from "modules/Marketplace/pages/ItemCard/itemCardModules/analogsBlock/analogsBlock";
import {SameGoods} from "modules/Marketplace/pages/ItemCard/itemCardModules/sameGoods/sameGoods";
import {ViewedGoods} from './itemCardModules/viewedGoods/viewedGoods';
// @ts-ignore
import {itemData} from "modules/Marketplace/pages/ItemCard/ItemCardDataProps";


export const ItemCard: React.FC = Marketplace(() => {

  return (
    <>
      <div className={ICstyle.container}>

        <div className={ICstyle.BreadCrumps}>Bread crumps</div>

        <div className={ICstyle.wrapper}>

          <div className={ICstyle.itemInfoBlock}>
            <div className={ICstyle.ProductInfo}><ProductInfo complectQuontity={itemData.itemInfo.complectQuontity}
                                                              controlType={itemData.itemInfo.complectQuontity}
                                                              displayType={itemData.itemInfo.displayType}
                                                              dryingClass={itemData.itemInfo.dryingClass}
                                                              itemBrand={itemData.itemInfo.itemBrand}
                                                              itemSize={itemData.itemInfo.itemSize}
                                                              programsQuontity={itemData.itemInfo.programsQuontity}
                                                              washingClass={itemData.itemInfo.washingClass}
                                                              waterCycleQuontity={itemData.itemInfo.waterCycleQuontity}
                                                              itemName={itemData.itemInfo.itemName}

            /></div>
            <div className={ICstyle.BuyInfo}><BuyInfo itemPrice={itemData.buyInfoProps.itemPrice}
                                                      deliveryDate={itemData.buyInfoProps.deliveryDate}
                                                      deliveryPrice={itemData.buyInfoProps.itemPrice}
                                                      storagePresence={itemData.buyInfoProps.storagePresence}
            /></div>
          </div>
          <div className={ICstyle.itemInfoBlock}>
            <div className={ICstyle.ProductDescription}><ProductDescription
              itemDescription={itemData.itemInfo.itemDescription}/>
            </div>
            <div className={ICstyle.AnalogsBlock}><AnalogsBlock analogsInfoProps={itemData.analogsInfoProps}/></div>
          </div>


          <div className={ICstyle.sameGoods}>

            <div className={ICstyle.sameGoodsHeader}>
              <h6>Сопутствующие товары</h6>
            </div>

            <div className={ICstyle.componentCarousel}>
              <SameGoods sameInfoProps={itemData.sameInfoProps}/>
            </div>

          </div>

          <div className={ICstyle.sameGoods}>

            <div className={ICstyle.sameGoodsHeader}>
              <h6>Просмотренные товары</h6>
            </div>

            <div className={ICstyle.componentCarousel}>
              <ViewedGoods/>
            </div>

          </div>


        </div>

      </div>
    </>
  )
});
