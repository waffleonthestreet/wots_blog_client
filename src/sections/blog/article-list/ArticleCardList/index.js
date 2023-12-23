import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import {Box, Stack} from "@mui/joy";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import ArticleCard from "./ArticleCard";
import Pagination from '@mui/material/Pagination';
import {useParams} from "react-router-dom";
import {pageSize} from "../../../../config";

const ArticleCardList = ({articles, page, setPage, totalCount}) => {
  const {categoryNo} = useParams();
  const handleChange = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    setPage(1)
  }, [categoryNo]);

  return (
    <>
      <Stack spacing={2} sx={{pt: 2}} alignItems="center">
        {articles.map((article, idx) => (
          <ArticleCard article={article}/>
        ))}
        <Pagination count={Math.ceil(totalCount / pageSize)} page={page} onChange={handleChange}/>
      </Stack>
    </>
  );
};

export default ArticleCardList;
