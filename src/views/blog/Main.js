import React from "react";
import PropTypes from "prop-types";
import {Box, Stack} from "@mui/material";
import {drawerWidth, headerHeight, outletPadding} from "../../config";
import NewestArticles from "../../sections/blog/main/NewestArticles";
import PopularArticles from "../../sections/blog/main/PopularArticles";

const Main = () => {
  return (
    <>
      <Box sx={{width: "100%", height: "5px", backgroundColor: "black"}}/>
      <NewestArticles/>
      <Box sx={{width: '100%', height: '30px'}}/>
      <PopularArticles/>
    </>
  );
};

export default Main;
