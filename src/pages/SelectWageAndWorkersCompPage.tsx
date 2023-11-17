import { Box, Grid, Button, Typography } from "@mui/material";
import { MainPageLayout } from "../style/MainPageLayout";
import { useNavigate } from "react-router-dom";

export const SelectWageAndWorkersCompPage = () => {
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
                  navigate("/NoPaymentReceived");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.8rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  賃金や残業代を支払ってもらえない
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
                  navigate("/UnpaidDismissalAllowance");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.8rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  解雇予告手当の支払いがされていない
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
                  navigate("/BelowMinimumWage");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.8rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  最低賃金を下回っている
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
                  navigate("/WorkplaceInjuryCoverUp");
                }}
              >
                <Typography
                  sx={{
                    color: "#fff",
                    width: "90%",
                    fontSize: "1.8rem",
                    textAlign: "left",
                    position: "absolute",
                    top: "10%",
                  }}
                >
                  労災隠し
                </Typography>
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </MainPageLayout>
  );
};
