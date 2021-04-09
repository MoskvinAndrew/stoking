import * as React from "react";
import Button from "@material-ui/core/Button/Button";
import {FullScreenMenu} from "./FullScreenMenu/FullScreenMenu";
import SearchIcon from "icons/search-icon";
import {createStyles, fade, makeStyles, Theme} from "@material-ui/core";
import {StokingLogo} from "icons/stoking_logo";
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';
import IconButton from "@material-ui/core/IconButton/IconButton";
import Badge from "@material-ui/core/Badge/Badge";
import TextField from "@material-ui/core/TextField/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import PersonOutlineOutlinedIcon from '@material-ui/icons/PersonOutlineOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import {useState} from "react";
import CompareIcon from "icons/compare";
import {MenuButton} from "./MenuButton/MenuButton";


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        focused: {
            top: `0!important`,
        },
        AppBarSticky: {
            boxShadow: 'none'
        },
        headerList: {
            display: 'flex',
            alignItems: "center",
        },
        headerItem: {
            marginRight: '10px',
            '&:last-child': {
                marginRight: 'unset',
            },
        },
        header: {
            backgroundColor: '#fff',
        },
        headerInner: {
            display: "flex",
            alignItems: 'center',
            padding: "10px 0 14px 0"
        },
        search: {
            position: 'relative',
            borderRadius: theme.shape.borderRadius,
            backgroundColor: fade(theme.palette.common.white, 0.15),
            '&:hover': {
                backgroundColor: fade(theme.palette.common.white, 0.35),
            },
            marginRight: theme.spacing(2),
            marginLeft: 0,
            width: '100%',
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
        searchInput: {
            color: '#fff',
            paddingLeft: "",
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
            marginLeft: theme.spacing(4),
            marginRight: theme.spacing(4),
            backgroundColor: '#fff',
        },
    }),
);

export const Header: React.FC = () => {
    const classes = useStyles();


    const [menuCatalog, setMenuCatalog] = useState<boolean>(false);
    const menuCatalogHandler = () => setMenuCatalog(!menuCatalog);

    const height = 36;
    const labelOffset = -10;
    return (
        <>
            <FullScreenMenu
                menuCatalog={menuCatalog}
                menuCatalogHandler={menuCatalogHandler}
            />
            <header className={classes.header}>
                <div className="wrapper">
                    <div className={classes.headerInner}>

                        <StokingLogo/>

                        <Button
                            variant="contained"
                            color="primary"
                            style={{background: "#FF6E01"}}
                            startIcon={ <MenuButton open={menuCatalog} clickHandler={menuCatalogHandler} />}
                            className={classes.menuButton}
                            onClick={menuCatalogHandler}
                        >
                            Каталог
                        </Button>

                        <TextField
                            style={{
                                height: height, marginRight: "32px", width: "100%", flex: 1,
                            }}
                            label="Поиск товаров"
                            color="primary"
                            type="search"
                            variant="outlined"
                            InputLabelProps={{
                                classes: {
                                    focused: classes.focused,
                                    shrink: classes.focused
                                },
                                style: {
                                    height,
                                    top: `${labelOffset}px`,

                                },
                            }}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment
                                        position="start">

                                        <IconButton>
                                            <SearchIcon />
                                        </IconButton>
                                    </InputAdornment>
                                ),
                                style: {
                                    height,
                                },
                            }}
                        />

                        <ul className={classes.headerList}>
                            <li style={{color: "#000"}} className={classes.headerItem}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={0} color="primary">
                                        <CompareIcon />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li style={{color: "#000"}} className={classes.headerItem}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={0} color="primary">
                                        <FavoriteBorderOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li style={{color: "#000"}} className={classes.headerItem}>
                                <IconButton aria-label="show 17 new notifications" color="inherit">
                                    <Badge badgeContent={0} color="primary">
                                        <ShoppingCartOutlinedIcon />
                                    </Badge>
                                </IconButton>
                            </li>
                            <li style={{color: "#000"}} className={classes.headerItem}>
                                <a style={{color: "#000"}} href="/lk" target={'_blank'}>
                                    <IconButton aria-label="show 17 new notifications" color="inherit">
                                        <Badge badgeContent={0} color="primary">
                                            <PersonOutlineOutlinedIcon />
                                        </Badge>
                                    </IconButton>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    );
};
