import React from 'react';
import {NavLink} from "react-router-dom";
import {createStyles, fade, makeStyles, Theme} from "@material-ui/core";
import {useDispatch as useDispatchRedux} from "react-redux";
import {authTC} from "store/thunk/authThunk";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        AppBarSticky: {
            boxShadow: 'none'
        },
        topBar: {
            backgroundColor: '#fff',
        },
        topBarList: {
            display: 'flex',
            padding: "16px 0 0 162px!important",
        },
        topBarItem: {
            marginRight: '16px',
            '&:last-child': {
                marginRight: 'unset',
            },
        },
        topBarLink: {color: 'black!important', display: "block", textDecoration: 'none', fontSize: '0.80rem'},
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.25),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            flex: '1 0 30%',
            maxWidth: '60%',
            [theme.breakpoints.up('sm')]: {
                marginLeft: theme.spacing(3),
                width: 'auto',
            },
        },
        searchIcon: {
            padding: theme.spacing(0, 2),
            height: '100%',
            position: 'absolute',
            pointerEvents: 'none',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        },
        inputRoot: {
            color: 'inherit',
        },
        inputInput: {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('md')]: {
                width: '20ch',
            },
        },
        menuButton: {
            marginRight: theme.spacing(2),
            backgroundColor: '#fff',
        },
    }),
);

export const TopBar = () => {
    const classes = useStyles();

    const dispatchRedux = useDispatchRedux();
    const authTest = () => {
        dispatchRedux(authTC.fetchAuth());
    };

    return (
        <div className={classes.topBar}>
            <div className="wrapper">
                <ul className={classes.topBarList}>
                    <li className={classes.topBarItem}>
                        <NavLink
                            className={classes.topBarLink}
                            to="#">
                            Логистика
                        </NavLink>
                    </li>
                    <li className={classes.topBarItem}>
                        <NavLink
                            className={classes.topBarLink}
                            to="/manager">
                            ManagerHome
                        </NavLink>
                    </li>
                    <li className={classes.topBarItem}>
                        <NavLink
                            className={classes.topBarLink}
                            to="/manager/profile">
                            managerProfile
                        </NavLink>
                    </li>
                    <li className={classes.topBarItem}>
                        <NavLink
                            className={classes.topBarLink}
                            to="/catalog">
                            Catalog
                        </NavLink>
                    </li>
                  <li className={classes.topBarItem}>
                    <NavLink
                      className={classes.topBarLink}
                      to="/itemCard">
                      itemCard
                    </NavLink>
                  </li>
                    <li className={classes.topBarItem}>
                        <button onClick={authTest}>login</button>
                        {/*<NavLink*/}
                        {/*    className={classes.topBarLink}*/}
                        {/*    to="/login">*/}
                        {/*    Login*/}
                        {/*</NavLink>*/}
                    </li>

                </ul>
            </div>
        </div>
    );
};
