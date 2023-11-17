import { Box, Grid, Button, Typography } from "@mui/material";
import { MainPageLayout } from "../style/MainPageLayout";
import { useNavigate } from "react-router-dom";

export const SelectWorkTroublePage = () => {
  const navigate = useNavigate();
  return (
    <MainPageLayout>
      <Box sx={{ height: "30%", paddingTop: "5%", backgroundColor: "#343240" }}>
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
        <Box sx={{ height: "50%", width: "100%", backgroundColor: "#343240" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{ height: "100%", width: "100%" }}
          >
            <Grid
              item
              xs={6}
              sx={{ height: "100%", width: "100%", padding: "10px" }}
            >
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
                  navigate("/WorkCondMismatch");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  労働条件が労働条件通知書に記載されていた事実と異なる
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ height: "100%", width: "100%", padding: "10px" }}
            >
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
                  navigate("/ExcessiveOvertime");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  月１００時間を超える残業又は月４５時間を超える恒常的な残業がある
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
        <Box sx={{ height: "50%", width: "100%", backgroundColor: "#343240" }}>
          <Grid
            container
            direction="row"
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            wrap="wrap"
            sx={{ height: "100%", width: "100%" }}
          >
            <Grid
              item
              xs={6}
              sx={{ height: "100%", width: "100%", padding: "10px" }}
            >
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
                  navigate("/NoDesignatedHolidays");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  雇用契約書や就業規則に所定の休日が存在しない
                </Typography>
              </Button>
            </Grid>
            <Grid
              item
              xs={6}
              sx={{ height: "100%", width: "100%", padding: "10px" }}
            >
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
                  navigate("/NoBreaksExceeding");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.5rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  労働時間が６時間を超える場合に４５分・８時間を超える場合に１時間の休憩がない
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainPageLayout>
  );
};
