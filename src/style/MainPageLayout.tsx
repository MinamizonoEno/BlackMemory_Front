import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Grid,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { FC } from "react";
import { useContext } from "react";
import { UserNameContext } from "../provider/ContextProviders";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

type Props = {
  children: React.ReactNode;
};

export const MainPageLayout: FC<Props> = ({ children }) => {
  const [userName] = useContext(UserNameContext);

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
      <Box sx={{ height: "90vh", backgroundColor: "#292739" }}>
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
          <Grid item xs={2} sx={{ height: "100%" }}>
            <Box sx={{ height: "95%", overflowY: "auto" }}>
              <Button
                sx={{
                  width: "100%",
                  marginTop: "3%",
                  marginBottom: "3%",
                  borderBottom: "1px solid #424057",
                }}
              >
                <Typography sx={{ color: "#fff", fontSize: "1.4rem" }}>
                  今日の日記を書く
                </Typography>
              </Button>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  borderBottom: "1px solid #424057",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography sx={{ color: "#fff", fontSize: "1.3rem" }}>
                    労働条件・労働時間等のトラブル
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      労働条件が労働条件通知書などと異なる
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      恒常的な残業がある
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      所定の休日が存在しない
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      労働時間中の休憩がない
                    </Typography>
                  </Button>
                </AccordionDetails>
              </Accordion>
              <Accordion
                sx={{
                  backgroundColor: "transparent",
                  boxShadow: "none",
                  borderBottom: "1px solid #424057",
                }}
              >
                <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography
                    sx={{
                      width: "100%",
                      marginTop: "3%",
                      marginBottom: "3%",
                      color: "#fff",
                      fontSize: "1.3rem",
                      textAlign: "center",
                    }}
                  >
                    賃金・労災等のトラブル
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      賃金や残業代を支払ってもらえない
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      解雇予告手当の支払いがされていない
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      最低賃金を下回っている
                    </Typography>
                  </Button>
                  <Button
                    sx={{
                      width: "100%",
                      paddingTop: "3%",
                      paddingBottom: "3%",
                      backgroundColor: "#424057",
                    }}
                  >
                    <Typography sx={{ color: "#fff", fontSize: "1.2rem" }}>
                      労災隠し
                    </Typography>
                  </Button>
                </AccordionDetails>
              </Accordion>
            </Box>
            <Box sx={{ height: "5%", borderTop: "1px solid #424057" }}>
              <Typography
                sx={{ color: "#fff", fontSize: "1.3rem", textAlign: "center" }}
              >
                {userName}さん
              </Typography>
            </Box>
          </Grid>
          <Grid
            item
            xs={10}
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
