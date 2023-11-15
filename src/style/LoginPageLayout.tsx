import { Box, Grid } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const LoginPageLayout: FC<Props> = ({ children }) => {
  return (
    <>
      <AppBar
        sx={{
          position: "static",
          backgroundColor: "#322A4B",
          color: "primary",
          height: "10vh",
        }}
      >
        <Toolbar>
          <Typography sx={{ fontSize: "2rem", padding: "2%" }}>
            ブラックメモリー
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ height: "90vh", backgroundColor: "#343240" }}>
        <Grid
          container
          sx={{
            direction: "row",
            justifyContent: "center",
            alignItems: "center",
            alignContent: "center",
            wrap: "wrap",
            height: "100%",
            width: "100%",
          }}
        >
          <Grid item xs={6}>
            <Box sx={{ paddingLeft: "10%", paddingRight: "15%" }}>
              <Typography variant="h2" color="#fff">
                会社での出来事を
              </Typography>
              <Typography variant="h2" color="#27F2FF">
                記録し保管する
              </Typography>
              <Typography variant="h5" color="#CBCBCB">
                このサイトでは労働基準監督署に相談するときに必要となる情報を保存することができる機能を提供しています
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              height: "100%",
              width: "100%",
              backgroundColor: "#332E56",
            }}
          >
            {children}
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
