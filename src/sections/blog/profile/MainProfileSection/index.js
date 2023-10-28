import React from 'react';
import PropTypes from 'prop-types'
import {Grid, Stack, Table, Typography} from "@mui/joy";
import Box from "@mui/joy/Box";
import ProfileImage from '../../../../assets/profile-image.jpg'
import {TableBody, TableCell, TableRow} from "@mui/material";


const MainProfileSection = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item md={6} lg={6}>
          <img src={ProfileImage} width={"100%"}/>
        </Grid>
        <Grid item md={6} lg={6}>
          <Stack spacing={1}>
            <Typography level="title-lg">길거리와플</Typography>
            <Typography>margotscool@gmail.com</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default MainProfileSection