import React from "react";
import PropTypes from "prop-types";
import parse from 'html-react-parser';

const ArticleContents = ({article}) => {
	return (
		<div className="ck-content">
			{parse(article?.articleContents ?? '')}
		</div>
	);
};

export default ArticleContents;
