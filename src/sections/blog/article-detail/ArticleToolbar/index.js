import React from "react";
import PropTypes from "prop-types";
import {Stack} from "@mui/material";
import {Typography} from "@mui/joy";
import Avatar from "@mui/joy/Avatar";
import Box from "@mui/joy/Box";
import WaffleImage from '../../../../../public/waffle.png'

const ArticleToolbar = () => {
    return (
        <Stack direction="row" spacing={1}>
            <Avatar alt="Remy Sharp" src={WaffleImage} width={50} size="lg"/>
            <Box>
                <Typography level="body-md">
                    길거리와플
                </Typography>
                <Typography level="body-xs">
                    2023.08.20 15:28:33
                </Typography>
            </Box>
        </Stack>
    );
};

export default ArticleToolbar;
