import React, {useState} from 'react';
import { ReactMegaMenu, MenuItem } from "react-mega-menu"

import Dialog from '@material-ui/core/Dialog';
import Grid from '@material-ui/core/Grid';
import Fade from '@material-ui/core/Fade';
import {TransitionProps} from '@material-ui/core/transitions';
import {makeStyles} from '@material-ui/core/styles';

import {MenuContentItem} from "./MenuContentItem/MenuContentItem";
import {mockMenuItems} from "./mockMenuItems";

import css from  "./FullScreenMenu.module.scss";

import ArrowRight from 'icons/chevron-right';


const Transition = React.forwardRef((props: TransitionProps & { children?: React.ReactElement }, ref: React.Ref<unknown>) => {
    return <Fade ref={ref} {...props} />;
});
const useStyles = makeStyles((theme) => ({
    root: {
        paddingRight: 17,
        position: "relative",
        top: "106px!important",
    },
    container: {
    },
    paper: {
        boxShadow: "none",
    },
}));

type FullScreenDialogPropsType = {
    menuCatalog: boolean
    menuCatalogHandler: (menu: boolean) => void
}

export const FullScreenMenu: React.FC<FullScreenDialogPropsType> = (props) => {

    const {
        menuCatalog,
        menuCatalogHandler
    } = props;


    const classes = useStyles();

    const handleClick = () => menuCatalogHandler(!menuCatalog);


    const data: any[] = mockMenuItems.map((item: any, index: number) => ({
        selected: item.selected,
        label: (
            <div className={css.menuHeadings}>
                <div className={css.menuHeadingsInner}>
                    <img className={css.menuHeadingsPic} src={item.attach} alt=""/>
                    <span className={css.menuHeadingsTitle}>{item.name}</span>
                </div>
                <ArrowRight height={'12px'} color={"#ccc"} />
            </div>
        ),
        key: String(item.id),
        items: (
            <Grid container spacing={3}>
                {
                    [...item.items].map((itemChild: any, indexChild: number) =>
                        <Grid item xs={4} key={indexChild} >
                            <MenuContentItem
                                childrenTitle={itemChild.name}
                                childrenItems={itemChild.children}
                            />
                        </Grid>)
                }
            </Grid>
        )
    }));

    return (
        <Dialog
            disableEnforceFocus
            classes={{root: classes.root, paper: classes.paper}}
            fullScreen
            open={menuCatalog}
            hideBackdrop
            onClose={handleClick}
            TransitionComponent={Transition}
        >
            <div className={'wrapper'}>
                <div style={{ width: "100%", position: "relative"}}>
                    <ReactMegaMenu
                        styleConfig={{
                            menuProps: {
                                style: {
                                    borderRight: "2px solid #f5f5f6",
                                    height: "100%",
                                    width: "100%",
                                    flex: "1 0 20%",
                                    maxWidth: "20%",
                                    minHeight:"calc(100vh - 106px)",
                                }
                            },
                            contentProps: {
                                style: {
                                    width: "100%",
                                    flex: "1 0 80%",
                                    maxWidth: "80%",
                                    paddingLeft: 20
                                }
                            },
                            menuItemProps: {
                                style: {
                                    padding: "6px 10px",
                                    height: "100%",
                                    cursor: "pointer",
                                },
                            },
                            menuItemSelectedProps: {
                                style: {
                                    padding: "6px 10px",
                                    height: "100%",
                                    cursor: "pointer",
                                    backgroundColor: "#f5f5f6"
                                }
                            },
                            containerProps: {
                                style: {
                                    width: "inherit",
                                    display: "flex",
                                }
                            }
                        }}
                        onExit={() => console.log("mouseEnterRow")}
                        data={data}
                    />
                    <MenuItem/>

                </div>
            </div>
        </Dialog>
    );
};
