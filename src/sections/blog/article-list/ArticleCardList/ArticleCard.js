import React from "react";
import PropTypes from "prop-types";
import AspectRatio from "@mui/joy/AspectRatio";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Typography from "@mui/joy/Typography";
import {Box, Stack} from "@mui/joy";
import {lineColor} from "../../../../config";

const ArticleCard = () => {
  return (
    <Stack direction="row" sx={{paddingBottom: '10px'}}>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "40%",
            lg: "40%",
            xl: "40%",
          },
          height: "260px",
          border: `1px solid ${lineColor}`,
          backgroundImage: "url('https://picsum.photos/600')",
          // backgroundRepeat: "no-repeat",
        }}></Box>
      <Box
        sx={{
          width: {
            xs: "100%",
            sm: "100%",
            md: "60%",
            lg: "60%",
            xl: "60%",
          },
          height: "260px",
          border: `1px solid ${lineColor}`,
        }}>
        <Stack spacing={1} sx={{p: 3}}
               direction="column"
               justifyContent="space-between">
          <Box sx={{height: '180px'}}>
            <Typography
              level="h4">
              블로그 제목을 뭘로 할까나
            </Typography>
            <Typography level="body-md">
              블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그
              내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용
              블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그
              내용 이라네. 블로그 내용 이라네. 블로그 내용 이라네. 블로그 내용
            </Typography>
          </Box>
          <Box>
            <Typography level="body-sm">
              길거리와플 ∙ 2023.08.20
            </Typography>
          </Box>

        </Stack>
      </Box>
    </Stack>
  );
};

export default ArticleCard;
