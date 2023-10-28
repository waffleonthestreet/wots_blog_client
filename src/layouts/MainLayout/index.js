import React from "react";
import PropTypes from "prop-types";
import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import {
	outletPadding,
	drawerWidth,
	headerHeight,
	outletPaddingLg,
	outletPaddingMd,
	outletPaddingXl,
} from "../../config";
import Header from "./Header";
import Sidebar from "./Sidebar";

MainLayout.propTypes = {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window: PropTypes.func,
};

export default function MainLayout(props) {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const container =
		window !== undefined ? () => window().document.body : undefined;

	return (
		<Box>
			{/* <Header handleDrawerToggle={handleDrawerToggle} /> */}
			<Sidebar
				container={container}
				mobileOpen={mobileOpen}
				handleDrawerToggle={handleDrawerToggle}
			/>
			{/* <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar sx={{ height: headerHeight }} />
        <Outlet />
      </Box> */}
			<Box
				component="div"
				sx={{
					width: "100%",
					height: headerHeight,
					backgroundImage: `url("https://picsum.photos/1920/300")`,
				}}
			/>
			<Box
				sx={{
					pt: `${outletPadding + 35}px`,
					pl: {
						xs: `${outletPadding}px`,
						sm: `${outletPadding}px`,
						md: `${drawerWidth + outletPaddingMd}px`,
						lg: `${drawerWidth + outletPaddingLg}px`,
						xl: `${drawerWidth + outletPaddingXl}px`,
					},
					pr: {
						xs: `${outletPadding}px`,
						sm: `${outletPadding}px`,
						md: `${outletPaddingMd}px`,
						lg: `${outletPaddingLg}px`,
						xl: `${outletPaddingXl}px`,
					},
					pb: `${outletPadding+ 35}px`,
					wordWrap: "break-word",
				}}>
				<Outlet />
			</Box>
		</Box>
	);
}
