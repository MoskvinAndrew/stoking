import React from 'react';

import {PopCats} from "./PopCats/PopCats";
import {Hero} from "./Hero/Hero";
import {Marketplace} from "modules/Marketplace/Marketplace";

/**
 * Home Presentational
 */
export const Home: React.FC = Marketplace(() => {
    return (
        <>
            <Hero />
            <PopCats />
        </>
    )
});
