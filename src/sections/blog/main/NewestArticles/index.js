import React from "react";
import PropTypes from "prop-types";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import AspectRatio from '@mui/joy/AspectRatio';
import Avatar from '@mui/joy/Avatar';
import Button from '@mui/joy/Button';
import CardOverflow from '@mui/joy/CardOverflow';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import LocationOnRoundedIcon from "@mui/icons-material/LocationOnRounded";
import {Stack} from "@mui/joy";
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import SmsIcon from '@mui/icons-material/Sms';

const NewestArticles = () => {
  return (
    <>
      <h1>최신 아티클</h1>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {[1, 2, 3, 4].map((item, idx) => (
          <Card sx={{maxWidth: '100%', boxShadow: 'lg'}}>
            <CardOverflow>
              <AspectRatio sx={{minWidth: 200}}>
                <img
                  src="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4"
                  srcSet="https://www.healthyeating.org/images/default-source/home-0.0/nutrition-topics-2.0/general-nutrition-wellness/2-2-2-3foodgroups_fruits_detailfeature.jpg?sfvrsn=64942d53_4 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Stack spacing={1}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar size="sm"/>
                  <Typography level="body-xs">길거리와플</Typography>
                </Stack>
                <Link
                  href="#product-card"
                  fontWeight="md"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                >
                  유용한 GitHub 전용 크롬 익스텐션 모음
                </Link>


                <Chip component="span" size="sm" variant="soft" color="neutral" startDecorator={<FormatQuoteIcon/>}>
                  15&nbsp;&nbsp;
                </Chip>
              </Stack>
            </CardContent>
            {/*<CardOverflow>
            <Button variant="solid" color="danger" size="lg">
              Add to cart
            </Button>
          </CardOverflow>*/}
          </Card>
        ))}
      </Box></>
  );
};

export default NewestArticles;
