import React from 'react';
import css from './Carousel.module.scss';
import iconPrev from 'icons/arrow-left';
import iconNext from 'icons/arrow-right';

export const CarouselArrows = () => {
    return (
        <div className={css.arrows}>
            <span className={css.prev}>
                {iconPrev}
            </span>

            <span className={css.next}>
                {iconNext}
            </span>
        </div>
    );
};
