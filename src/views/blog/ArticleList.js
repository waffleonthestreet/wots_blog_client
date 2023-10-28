import React from "react";
import PropTypes from "prop-types";
import {Box, Stack} from "@mui/material";
import SearchToolbar from "../../sections/blog/article-list/SearchToolbar";
import ArticleCardList from "../../sections/blog/article-list/ArticleCardList";
import {useSelector} from "../../store";

const ArticleList = () => {
  const {selectedItem} = useSelector((state) => state.menu);
  return (
    <>
      <Box sx={{width: "100%", height: "5px", backgroundColor: "black"}}/>
      <h1>ARTICLE LIST - {selectedItem[0].title}</h1>
      <Stack spacing={1}>
        <SearchToolbar/>
        <ArticleCardList/>
      </Stack>
    </>
  );
};

export default ArticleList;
