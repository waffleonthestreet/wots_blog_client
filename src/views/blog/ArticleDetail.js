import React from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import ArticleContents from "../../sections/blog/article-detail/ArticleContents";
import ArticleToolbar from "../../sections/blog/article-detail/ArticleToolbar";

const ArticleDetail = () => {
	return (
		<>
			<Box sx={{ width: "100%", height: "5px", backgroundColor: "black" }} />
			<h1>블로그 제목 뭘로 할까나</h1>
			<Stack spacing={2}>
				<ArticleToolbar />
				<ArticleContents />
			</Stack>
		</>
	);
};

export default ArticleDetail;
