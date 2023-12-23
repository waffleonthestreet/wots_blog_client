import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Box, Stack} from "@mui/material";
import SearchToolbar from "../../sections/blog/article-list/SearchToolbar";
import ArticleCardList from "../../sections/blog/article-list/ArticleCardList";
import {useSelector} from "../../store";
import axios from "../../utils/axios";
import {useParams} from "react-router-dom";
import {pageSize} from "../../config";

const ArticleList = () => {
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const {selectedItem} = useSelector((state) => state.menu);
  const [articles, setArticles] = useState([]);


  const init = async() => {
    const {data} = await axios.get(`/blog/articles?categoryNo=${selectedItem[0] ? selectedItem[0].id : 0}&page=${page}&pageSize=${pageSize}&keyword=`);
    setTotalCount(data.maxCnt);
    setArticles(data.data)
  }

  useEffect(() => {
    init();
  }, [selectedItem, page]);

  return (
    <>
      <Box sx={{width: "100%", height: "5px", backgroundColor: "black"}}/>
      <h1>ARTICLE LIST - {selectedItem[0].title}</h1>
      <Stack spacing={1}>
        <SearchToolbar/>
        <ArticleCardList articles={articles} page={page} setPage={setPage} totalCount={totalCount}/>
      </Stack>
    </>
  );
};

export default ArticleList;
