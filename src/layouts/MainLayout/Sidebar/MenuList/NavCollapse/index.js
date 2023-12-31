import PropTypes from 'prop-types';
import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

// material-ui
import {useTheme} from '@mui/material/styles';
import {Collapse, List, ListItemButton, ListItemIcon, ListItemText, Typography} from '@mui/material';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

// project imports
import NavItem from '../NavItem';
// import useConfig from 'hooks/useConfig';

// assets
// import {IconChevronDown, IconChevronUp} from '@tabler/icons';
import IconChevronDown from '@mui/icons-material/KeyboardArrowDown';
import IconChevronUp from '@mui/icons-material/KeyboardArrowDown';
import Divider from "@mui/material/Divider";
// ==============================|| SIDEBAR MENU LIST COLLAPSE ITEMS ||============================== //

const NavCollapse = ({menu, level}) => {
    const theme = useTheme();
    // const {borderRadius} = useConfig();
    const borderRadius = '0'

    const [open, setOpen] = useState(false);
    const [selected, setSelected] = useState(null);

    const handleClick = () => {
        setOpen(!open);
        setSelected(!open ? menu.id : null);
    };

    const {pathname} = useLocation();
    const checkOpenForParent = (child, id) => {
        child.forEach((item) => {
            if (item.url === pathname) {
                setOpen(true);
                setSelected(id);
            }
        });
    };

    // menu collapse for sub-levels
    useEffect(() => {
        const childrens = menu.children ? menu.children : [];
        childrens.forEach((item) => {
            if (item.children?.length) {
                checkOpenForParent(item.children, menu.id);
            }
            if (pathname && pathname.includes('product-details')) {
                if (item.url && item.url.includes('product-details')) {
                    setSelected(menu.id);
                    setOpen(true);
                }
            }
            if (item.url === pathname) {
                setSelected(menu.id);
                setOpen(true);
            }
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname, menu.children]);

    // menu collapse & item
    const menus = menu.children?.map((item) => {
        switch (item.type) {
            case 'collapse':
                return <NavCollapse key={item.id} menu={item} level={level + 1}/>;
            case 'item':
                return <NavItem key={item.id} item={item} level={level + 1}/>;
            default:
                return (
                    <Typography key={item.id} variant="h6" color="error" align="center">
                        Menu Items Error
                    </Typography>
                );
        }
    });

    const Icon = menu.icon;
    const menuIcon = menu.icon ? (
        <Icon strokeWidth={1.5} size="20px" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
    ) : (
        <FiberManualRecordIcon
            sx={{
                width: selected === menu.id ? 8 : 6,
                height: selected === menu.id ? 8 : 6
            }}
            fontSize={level > 0 ? 'inherit' : 'medium'}
        />
    );

    return (
        <>
            <ListItemButton
                sx={{
                    borderRadius: `${borderRadius}px`,
                    //mb: 0.5,
                    alignItems: 'flex-start',
                    backgroundColor: level > 1 ? 'transparent !important' : 'inherit',
                    // py: level > 1 ? 1 : 1.25,
                    pl: `${level * 24}px`,
                    py: 1.5
                }}
                selected={selected === menu.id}
                onClick={handleClick}
            >

                <ListItemText
                    primary={
                        <Typography variant='body1' color="inherit" sx={{my: 'auto'}}>
                            {menu.title}
                        </Typography>
                    }
                />
                {open ? (
                    <IconChevronUp stroke={1.5} size="16px" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                ) : (
                    <IconChevronDown stroke={1.5} size="16px" style={{marginTop: 'auto', marginBottom: 'auto'}}/>
                )}
            </ListItemButton>
            <Collapse in={open} timeout="auto" unmountOnExit>
                {open && (
                    <List
                        component="div"
                        disablePadding
                        /*sx={{
                            position: 'relative',
                            '&:after': {
                                content: "''",
                                position: 'absolute',
                                left: '32px',
                                top: 0,
                                height: '100%',
                                width: '1px',
                                opacity: theme.palette.mode === 'dark' ? 0.2 : 1,
                                background: theme.palette.mode === 'dark' ? theme.palette.dark.light : theme.palette.primary.light
                            }
                        }}*/
                    >
                        {menus}
                    </List>
                )}
            </Collapse>
            <Divider/>
        </>
    );
};

NavCollapse.propTypes = {
    menu: PropTypes.object,
    level: PropTypes.number
};

export default NavCollapse;
