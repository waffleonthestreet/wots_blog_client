/*
import React from "react";
import PropTypes from "prop-types";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import {Box, Stack} from "@mui/joy";
import {lineColor, primaryColor} from "../../../../config";



const ArticleCardItem = styled('div')({
    backgroundColor: 'white',
    border: `2px solid ${primaryColor}`,
    width: '100%',
    padding: '10px',
    borderRadius: '10px'
})

const ArticleTitleSection = styled('div')({
    color: primaryColor,
    fontSize: '25px'
})

const ArticleContentsSection = styled('div')({
    fontSize: '10px',
})


const ArticleCard = ({article}) => {
  return (
    <ArticleCardItem>
        <ArticleTitleSection>{article.articleTitle}</ArticleTitleSection>
        <ArticleContentsSection>{article.articleContents}</ArticleContentsSection>
    </ArticleCardItem>
  );
};

export default ArticleCard;
*/

import React from 'react';
import PropTypes from 'prop-types'
// import ArticleThumbnailImage from '../../../../assets/article-item.jpg'
import ArticleThumbnailImage from '../../../../../public/OktoberfestPattern7.jpg'
import { styled } from '@mui/system';
import {lineColor} from "../../../../config";
import {Typography} from "@mui/joy";
import {Link} from "react-router-dom";

const ArticleCardItem = styled('div')({
  display: 'flex',
  width: '100%',
  height: '260px',
  border: `1px solid ${lineColor}`
})

const ArticleThumbnail = styled('div')({
  width: '40%',
  height: '100%',
  overflow: 'hidden',
  margin: '0 auto'
})

const ArticleContents = styled('div')({
  width: '60%',
  padding: '30px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between'
})

const ArticleTItleContents = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  rowGap: '13px'
})


const ArticleCard = ({article}) => {

  return (
    <ArticleCardItem>
      <ArticleThumbnail>
        <img src={ArticleThumbnailImage} style={{width: '100%', height:'100%', objectFit: 'cover'}} />
      </ArticleThumbnail>
      <ArticleContents>
       <ArticleTItleContents>
           <Typography fontSize={23} fontWeight={900}><Link to={`/article/${article.articleNo}`}>{article.articleTitle}</Link></Typography>
         <Typography fontSize={13}>{article.articleContents.replace(/<img .*?>/g,"").replace(/<[^>]*>?/gm, '')}</Typography>
       </ArticleTItleContents>
        <Typography fontSize={15}>길거리와플 ∙ {article.createDt}</Typography>
      </ArticleContents>
    </ArticleCardItem>
  )
}

ArticleCard.propTypes = {
  article: PropTypes.object
}

export default ArticleCard

