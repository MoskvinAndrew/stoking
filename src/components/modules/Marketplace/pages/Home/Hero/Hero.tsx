import React from 'react';
import img from 'img/photos/stoking_hero.jpg';
import css from  "./Hero.module.scss";
import Button from "@material-ui/core/Button/Button";

type CarouselProps = {

};

export const Hero: React.FC<CarouselProps> = props => {

    return (
        <section className={css.hero}>
            <div className={css.heroBg}>
                <div className={css.heroBgRelation}>
                    <div className={css.heroBgRatio}/>
                    <img src={img} className={css.heroBgImg}/>
                </div>
            </div>

            <div className="wrapper">
                <div className={css.heroContent}>
                    <h1 style={{fontWeight: "normal"}}>
                        Продавайте товары на <br/>
                        <span style={{color: "#FF6E01"}}>Stoking</span>
                    </h1>
                    <Button
                        variant="contained"
                        size="large"
                        style={{background: "#FF6E01"}}
                        color="primary">
                        Подробнее
                    </Button>
                </div>
            </div>
        </section>
    )
};



