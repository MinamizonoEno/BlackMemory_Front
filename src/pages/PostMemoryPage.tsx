import { Box, Typography, TextField, Button } from "@mui/material";
import { ChangeEvent, useState } from "react";
// import { useNavigate } from "react-router-dom";
import { PostSignup } from "../conponents/Api/PostSignup";
import { MainPageLayout } from "../style/MainPageLayout";

export const PostMemoryPage = () => {
  const [date, setdateData] = useState("20231118");
  const [start_At, setStart_AtData] = useState("0900");
  const [end_AtData, setEnd_AtData] = useState("2100");
  const [hours, setHours] = useState("1200");
  const [content, setContent] = useState("");

  //   const navigate = useNavigate();

  //formに入力される情報のチェック

  const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "date":
        setdateData(value);

        break;
      case "Start_At":
        setStart_AtData(value);

        break;
      case "End_At":
        setEnd_AtData(value);

        break;
      case "hours":
        setHours(value);
        break;
      case "content":
        setContent(value);
        break;
      default:
        break;
    }
  };

  //ボタンが押されたときに入力された情報を処理する関数
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    //ここに書いてね

    PostSignup(date, start_At, hours, "signup");
  };

  return (
    <MainPageLayout>
      <Box
        sx={{
          height: "95%",
          width: "95%",
          backgroundColor: "#272544",
          margin: "0 auto",
          marginTop: "3%",
          borderRadius: "50px",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "2rem",
            textAlign: "center",
            paddingTop: "3%",
          }}
        >
          アカウント作成
        </Typography>
        <Box sx={{ padding: "0% 3% 0% 3%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2rem",
              textAlign: "left",
              paddingTop: "3%",
            }}
          >
            年日
          </Typography>
          <TextField
            variant="standard"
            color="info"
            fullWidth
            style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
            name="date"
            value={date}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box sx={{ padding: "0% 3% 0% 3%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2rem",
              textAlign: "left",
              paddingTop: "3%",
            }}
          >
            出社時間
          </Typography>
          <TextField
            variant="standard"
            color="info"
            fullWidth
            style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
            name="Start_At"
            value={start_At}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box sx={{ padding: "0% 3% 0% 3%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2rem",
              textAlign: "left",
              paddingTop: "3%",
            }}
          >
            帰社時間
          </Typography>
          <TextField
            variant="standard"
            color="info"
            fullWidth
            style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
            name="End_At"
            value={end_AtData}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box sx={{ padding: "0% 3% 0% 3%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2rem",
              textAlign: "left",
              paddingTop: "5%",
            }}
          >
            勤務時間
          </Typography>
          <TextField
            variant="standard"
            color="info"
            fullWidth
            style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
            name="hours"
            value={hours}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box sx={{ padding: "0% 3% 0% 3%" }}>
          <Typography
            sx={{
              color: "#fff",
              fontSize: "2rem",
              textAlign: "left",
              paddingTop: "5%",
            }}
          >
            日記内容
          </Typography>
          <TextField
            variant="standard"
            color="info"
            fullWidth
            style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
            name="content"
            value={content}
            onChange={handleFormValueChange}
          />
        </Box>
        <Box
          sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}
        >
          <Button variant="contained" size="large" onClick={handleCreateSubmit}>
            作成
          </Button>
        </Box>
      </Box>
      ;
    </MainPageLayout>
  );
};
