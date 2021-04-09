import React from "react";
import {TopBar} from "./layouts/TopBar/TopBar";
import {Header} from "./layouts/Header/Header";
import {Footer} from "./layouts/Footer/Footer";

/**
 * Marketplace HOC for include layouts
 */
//@ts-ignore
export const Marketplace = (Component) => (props) => {
    return  (
        <>
            <TopBar />
            <Header />

            <main className="page-content">
                <Component/>
            </main>

            <Footer />
        </>
    )
};