import React from 'react';
import css from './Carousel.module.scss';

type CarouselDotsPropsType = {
    objects?: Array<any>
    activeIndex: number
    onDotClick?: (e: number) => void
}

export const CarouselDots: React.FC<CarouselDotsPropsType> = (props) => {

    const {objects, activeIndex, onDotClick} = props;

    const dotsItems = Array.isArray(objects) && objects.map((slide: any, index: number) => {

        const clickHandler = (e: any) => onDotClick(e.target.value = index);
        const finalClassName = activeIndex === index ? `${css.dot} ${css.dotActive}`:  css.dot;

        return (
            <li
                key={index}
                className={finalClassName}
                onClick={clickHandler}
            />
        )
    });

    return (
        <ul className={css.dotsList}>
            {dotsItems}
        </ul>
    );
};

