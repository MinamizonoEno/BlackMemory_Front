import { Box, Button, Grid, Typography } from "@mui/material";
import { MainPageLayout } from "../style/MainPageLayout";
import { useNavigate } from "react-router-dom";

export const WriteDiaryPage = () => {
  const navigate = useNavigate();
  return (
    <MainPageLayout>
      <Box sx={{ width: "100%", height: "100%" }}>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          alignContent="center"
          wrap="wrap"
          sx={{ width: "100%", height: "100%" }}
        >
          <Grid item xs={12} sx={{ width: "100%", height: "10%" }}>
            <Typography
              sx={{
                width: "100%",
                textAlign: "center",
                color: "#fff",
                fontSize: "2rem",
                padding: "1%",
              }}
            >
              今までに記録したメモリー
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              height: "70%",
              overflowY: "auto",
              backgroundColor: "#343240",
            }}
          >
            <Box sx={{ width: "100%", height: "100%" }}></Box>
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              width: "100%",
              height: "20%",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                alignContent: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                sx={{
                  backgroundColor: "#292739",
                  color: "#ffffff",
                  "&:hover": {
                    backgroundColor: "#1a1b23",
                  },
                }}
                onClick={() => {
                  navigate("/PostMemory");
                }}
              >
                <Typography sx={{ fontSize: "1.5rem" }}>
                  今日の日記を投稿する
                </Typography>
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </MainPageLayout>
  );
};
