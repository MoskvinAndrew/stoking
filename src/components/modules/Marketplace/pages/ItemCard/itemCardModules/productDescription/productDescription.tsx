import React, {useState} from 'react';
import PDstyle from './productDescription.module.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader



type DescriptionType = 'describe'|'tec_properties'|'documentation'
type ProductDescriptionPropsType = {
  itemDescription:string
}


export const ProductDescription:React.FC<ProductDescriptionPropsType>= (props) => {

const [typeOfDescription,setTypeOfDescription]=useState<DescriptionType>('describe');

 const onClickHandler = (type:DescriptionType) =>{
   setTypeOfDescription(type)
 }

 return (
    <>
      <div className={PDstyle.wrapper}>
        <div className={PDstyle.container}>
        <div className={PDstyle.info_header} >
        <div className={typeOfDescription === 'describe'? PDstyle.description_text +" "+ PDstyle.active:PDstyle.description_text}
             onClick={()=>onClickHandler('describe')}>Описание</div>

        <div className={typeOfDescription === 'tec_properties'? PDstyle.description_text +" "+ PDstyle.active:PDstyle.description_text}
             onClick={()=>onClickHandler('tec_properties')}>Доп.технические характеристики</div>

        <div className={typeOfDescription === 'documentation'? PDstyle.description_text +" "+ PDstyle.active:PDstyle.description_text}
             onClick={()=>onClickHandler('documentation')}>Файлы и документация</div>
        </div>

        <div  className={PDstyle.info_block}>
          <p>
            {props.itemDescription}
          </p>
        </div>
        </div>
      </div>
    </>
  )
}
