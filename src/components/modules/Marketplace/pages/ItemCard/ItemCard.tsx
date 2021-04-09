import React from 'react';
import {Marketplace} from "modules/Marketplace/Marketplace";
import {ProductInfo} from "modules/Marketplace/pages/ItemCard/itemCardModules/productInfo/ProductInfo";
import {BuyInfo} from "modules/Marketplace/pages/ItemCard/itemCardModules/buyInfo/buyInfo";
import ICstyle from './ItemCard.module.scss'
import {ProductDescription} from "modules/Marketplace/pages/ItemCard/itemCardModules/productDescription/productDescription";
import {AnalogsBlock} from "modules/Marketplace/pages/ItemCard/itemCardModules/analogsBlock/analogsBlock";



let props = {
  // analogsArray:[{id:1,brand:"Phiolent",city:"Moskow",deliveryTime:"12",itemPrice:"20166"}],
  itemDescription: ` Клапан обратный чугунный межфланцевый двухстворчатый подпружиненный Ру16.
  Предназначен для защиты трубопровода от обратного потока, который может создать аварийную ситуацию.
  Клапаны срабатывают автоматически под действием рабочей среды.
  Устанавливаются на горизонтальных и вертикальных трубопроводах. Имеет компактные размеры и сравнительно небольшую массу,
  что делает их дешевле фланцевых обратных клапанов. При монтаже следует учитывать,
  что клапан обратный зажимается шпильками между двух фланцев, поэтому стоит подобрать комплектующие для монтажа
  нужного размера. Обратные клапана и комплектующие к ним Вы можете купить у компании АРМЛАЙНС.`
}

export const ItemCard: React.FC = Marketplace(() => {
  return (
    <>
      <div className={ICstyle.container}>

        <div className={ICstyle.BreadCrumps}>Bread crumps</div>
        <div className={ICstyle.wrapper}>

          <div className={ICstyle.ProductInfo}><ProductInfo/></div>
          <div className={ICstyle.BuyInfo}> <BuyInfo/></div>
          <div className={ICstyle.ProductDescription}><ProductDescription itemDescription={props.itemDescription}/></div>
          <div className={ICstyle.AnalogsBlock}><AnalogsBlock /></div>



          <div className={ICstyle.sampleGoods}>
            <div className={ICstyle.sampleGoodsHeader}>
              <h6>Сопутствующие товары</h6>
            </div>


          </div>
        </div>

      </div>
    </>
  )
});
