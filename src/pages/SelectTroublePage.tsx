import { Box, Grid, Button, Typography } from "@mui/material";
import { MainPageLayout } from "../style/MainPageLayout";
import { useNavigate } from "react-router-dom";

export const SelectTroublePage = () => {
  const navigate = useNavigate();
  return (
    <>
      <MainPageLayout>
        <Box sx={{ width: "100%", height: "100%", backgroundColor: "#343240" }}>
          <Box sx={{ height: "30%", paddingTop: "5%" }}>
            <Typography
              sx={{
                fontSize: "2.8rem",
                color: "#fff",
                textAlign: "center",
                height: "100%",
              }}
            >
              どんなトラブルを
              <br />
              抱えていますか？
            </Typography>
          </Box>
          <Box sx={{ height: "70%" }}>
            <Grid
              container
              direction="row"
              justifyContent="center"
              alignItems="center"
              alignContent="center"
              wrap="wrap"
              sx={{ height: "90%" }}
            >
              <Grid item xs={6} sx={{ height: "100%", padding: "10px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#332E56",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "90%",
                    width: "90%",
                    padding: "10px",
                    paddingLeft: "5%",
                    position: "relative",
                  }}
                  onClick={() => {
                    navigate("/SelectWorkTrouble");
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: "100%",
                      fontSize: "1.4rem",
                      textAlign: "left",
                      position: "absolute",
                      top: "5%",
                    }}
                  >
                    労働条件・労働時間等
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A5A5A5",
                      width: "70%",
                      fontSize: "1.2rem",
                      textAlign: "left",
                      position: "absolute",
                      top: "15%",
                    }}
                  >
                    労働条件が労働条件通知書に記載されていた事実と異なる
                    <br />
                    月１００時間を超える残業又は月４５時間を超える恒常的な残業がある
                    <br />
                    雇用契約書や就業規則に所定の休日が存在しない
                    <br />
                    労働時間が６時間を超える場合に４５分・８時間を超える場合に１時間の休憩がない
                  </Typography>
                </Button>
              </Grid>
              <Grid item xs={6} sx={{ height: "100%", padding: "10px" }}>
                <Button
                  variant="contained"
                  sx={{
                    backgroundColor: "#332E56",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "flex-start",
                    height: "90%",
                    width: "90%",
                    padding: "10px",
                    paddingLeft: "5%",
                    position: "relative",
                  }}
                  onClick={() => {
                    navigate("/SelectWageAndWorkerComp");
                  }}
                >
                  <Typography
                    sx={{
                      color: "#fff",
                      width: "100%",
                      fontSize: "1.4rem",
                      textAlign: "left",
                      position: "absolute",
                      top: "5%",
                    }}
                  >
                    賃金・労災等
                  </Typography>
                  <Typography
                    sx={{
                      color: "#A5A5A5",
                      width: "70%",
                      fontSize: "1.2rem",
                      textAlign: "left",
                      position: "absolute",
                      top: "15%",
                    }}
                  >
                    賃金や残業代を支払ってもらえない
                    <br />
                    解雇予告手当の支払いがされていない
                    <br />
                    最低賃金を下回っている
                    <br />
                    労災隠し
                  </Typography>
                </Button>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </MainPageLayout>
    </>
  );
};
