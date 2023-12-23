import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import { Box, Stack } from "@mui/material";
import ArticleContents from "../../sections/blog/article-detail/ArticleContents";
import ArticleToolbar from "../../sections/blog/article-detail/ArticleToolbar";
import {useParams} from "react-router-dom";
import axios from "../../utils/axios";

const ArticleDetail = () => {
	const params = useParams();
	const [article, setArticle] = useState(null);

	const init = async (articleNo) => {
		const {data} = await axios.get(`/blog/article/${articleNo}`);
		setArticle(data);
	}

	useEffect(() => {
		init(params.id);
	}, [params.id]);

	return (
		<>
			<Box sx={{ width: "100%", height: "5px", backgroundColor: "black" }} />
			<h1>{article?.articleTitle}</h1>
			<Stack spacing={2}>
				<ArticleToolbar />
				<ArticleContents article={article} />
			</Stack>
		</>
	);
};

export default ArticleDetail;
