import React, {useEffect, useState} from "react";
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
import axios from "../../../../utils/axios";

const PopularArticles = () => {
    const [popularArticles, setPopularArticles] = useState([]);

    const init = async() => {
        const {data} = await axios.get('/blog/articles/popular?top=5');
        setPopularArticles(data)
    }

    useEffect(() => {
        init();
    }, [])

  return (
    <>
      <h1>인기 있는 아티클</h1>
      <Box
        sx={{
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 300px), 1fr))",
          gap: 2,
        }}
      >
        {popularArticles.map((article, idx) => (
          <Card sx={{maxWidth: '100%', boxShadow: 'lg'}}>
            <CardOverflow>
              <AspectRatio sx={{minWidth: 200}}>
                <img
                  src="https://images.nationalgeographic.org/image/upload/v1638892070/EducationHub/photos/grand-canyon-colorado-river.jpg"
                  srcSet="https://images.nationalgeographic.org/image/upload/v1638892070/EducationHub/photos/grand-canyon-colorado-river.jpg 2x"
                  loading="lazy"
                  alt=""
                />
              </AspectRatio>
            </CardOverflow>
            <CardContent>
              <Stack spacing={1}>
                <Stack direction="row" alignItems="center" spacing={1}>
                  <Avatar size="sm"/>
                  <Typography level="body-md">길거리와플</Typography>
                </Stack>
                <Link
                  href="#product-card"
                  fontWeight="md"
                  color="neutral"
                  textColor="text.primary"
                  overlay
                >
                    {article.articleTitle}
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
      </Box>
    </>
  );
};

export default PopularArticles;
