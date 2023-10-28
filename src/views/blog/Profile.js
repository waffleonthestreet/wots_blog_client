import React from 'react';
import PropTypes from 'prop-types'
import {Box, Stack} from "@mui/material";
import SearchToolbar from "../../sections/blog/article-list/SearchToolbar";
import ArticleCardList from "../../sections/blog/article-list/ArticleCardList";
import MainProfileSection from "../../sections/blog/profile/MainProfileSection";

const Profile = () => {
  return (
    <>
      <Box sx={{width: "100%", height: "5px", backgroundColor: "black"}}/>
      <h1>PROFILE</h1>
      <Stack spacing={1}>
        <MainProfileSection/>
      </Stack>
    </>
  )
}

export default Profile