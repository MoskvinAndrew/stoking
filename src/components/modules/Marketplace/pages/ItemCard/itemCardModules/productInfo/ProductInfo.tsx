import React from 'react';
import PIstyle from './productInfo.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import {Carousel} from 'react-responsive-carousel';
import image2 from './../../../../../../../assets/image/itemCardPhotos/image-2.jpg'
import image3 from './../../../../../../../assets/image/itemCardPhotos/image-3.jpg'
import image4 from './../../../../../../../assets/image/itemCardPhotos/image-4.jpg'

type ProductInfoPropsType = {
  itemBrand:string,
  complectQuontity:number,
  waterCycleQuontity:number,
  controlType:string,
  displayType:string,
  washingClass:string,
  dryingClass:string,
  programsQuontity:number,
  itemSize:string,
  itemName:string
}

export const ProductInfo: React.FC<ProductInfoPropsType> = (props) => {

  return (
    <>
      <div className={PIstyle.wrapper}>
        <div className={PIstyle.container}>


        <div className={PIstyle.slider}>
          <Carousel  verticalSwipe={"standard"} width={'90%'}>

            <div>
              <img src={image2} />
              {/*<p className="legend">Legend 1</p>*/}
            </div>
            <div>
              <img src={image3} />
              {/*<p className="legend">Legend 2</p>*/}
            </div>
            <div>
              <img src={image4} />
              {/*<p className="legend">Legend 3</p>*/}
            </div>
          </Carousel>

        </div>



        <div className={PIstyle.description}>
          <h6>{props.itemName}</h6>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Производитель:</div>
            <div className={PIstyle.descriptionValue}>{props.itemBrand}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Количество вмещаемых комплектов:</div>
            <div className={PIstyle.descriptionValue}>{props.complectQuontity}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Расход воды за цикл, в л.:</div>
            <div className={PIstyle.descriptionValue}>{props.waterCycleQuontity}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Тип управления:</div>
            <div className={PIstyle.descriptionValue}>{props.controlType}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Дисплей:</div>
            <div className={PIstyle.descriptionValue}>{props.displayType}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Класс мойки:</div>
            <div className={PIstyle.descriptionValue}>{props.washingClass}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Класс сушки:</div>
            <div className={PIstyle.descriptionValue}>{props.dryingClass}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Колличество програм:</div>
            <div className={PIstyle.descriptionValue}>{props.programsQuontity}</div>
          </div>
          <div className={PIstyle.descriptionItemBlock}>
            <div className={PIstyle.descriptionItem}>Размеры(ВхШхД):</div>
            <div className={PIstyle.descriptionValue}>{props.itemSize}</div>
          </div>

          <a className={PIstyle.allProperties}>Все характеристики</a>
        </div>

      </div>
      </div>
    </>
  )
}
