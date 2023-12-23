import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
//import Drawer from "./Drawer";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemButton, {listItemButtonClasses} from "@mui/joy/ListItemButton";
import IconButton from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import ReceiptLong from "@mui/icons-material/ReceiptLong";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import Toolbar from "@mui/material/Toolbar";
import {drawerWidth, headerHeight} from "../../../config";
import menuItems from "./menu-items";
import PerfectScrollbar from 'react-perfect-scrollbar';
import MenuList from "./MenuList";
import WaffleImage from '../../../../public/waffle.png'
import BlogLogo from '../../../../public/blog-logo.png'

const Sidebar = ({container, mobileOpen, handleDrawerToggle}) => {
    const [open, setOpen] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);

    const handleClickProfileImage = () => {
        alert("Hellooooooooo")
    }

    const drawer = (
        <div>
            <Toolbar sx={{height: headerHeight, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection:'column'}}>
                {/*<img src={BlogLogo} width={'20%'}/>*/}
                <img onClick={handleClickProfileImage} src={WaffleImage} width={"80%"}/>
                <Typography level="title-lg">길거리와플</Typography>
                <Typography level="body-md">margotscool@gmail.com</Typography>
            </Toolbar>
            <Divider/>
            <PerfectScrollbar
                component="div"
                style={{
                    // height: 'calc(100vh - 88px)',
                    // paddingLeft: '16px',
                    // paddingRight: '16px'
                }}
            >
                <MenuList/>
            </PerfectScrollbar>
        </div>
    );
    return (
        <Box
            component="nav"
            sx={{
                width: {sm: drawerWidth},
                flexShrink: {sm: 0},
            }}
            aria-label="mailbox folders">
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true, // Better open performance on mobile.
                }}
                sx={{
                    display: {xs: "block", sm: "none"},
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}>
                {drawer}
            </Drawer>
            <Drawer
                variant="permanent"
                sx={{
                    display: {xs: "none", sm: "block"},
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: drawerWidth,
                    },
                }}
                open>
                {drawer}
            </Drawer>
        </Box>
    );
};

Sidebar.propTypes = {
    container: PropTypes.any,
    mobileOpen: PropTypes.bool,
    handleDrawerToggle: PropTypes.func,
};

export default Sidebar;
