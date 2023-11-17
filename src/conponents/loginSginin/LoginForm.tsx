import { useState, ChangeEvent } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Modal,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";
import { PostLogin } from "../Api/PostLogin";

export const LoginForm = () => {
  const [formUserEMailData, setUserEMailData] = useState("");
  const [formUserPasswordData, setUserPasswordData] = useState("");
  const [eMailError, setEMailError] = useState(false);
  const [eMailhelperText, setEMailHelperText] = useState("");
  const [passWordError, setPassWordError] = useState(false);
  const [passWordhelperText, setPassWordHelperText] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isFormValid, setIsFormValid] = useState(false);
  const [ValidateModalopen, setValidateModalOpen] = useState(false);
  const handleModalOpen = () => setValidateModalOpen(true);
  const handleModalClose = () => setValidateModalOpen(false);
  const navigate = useNavigate();

  //formに入力される情報のチェック
  const validateEmail = (email: string) => {
    const re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email.toLowerCase());
  };
  const validatePassWord = (PassWord: string) => {
    return PassWord.length >= 8;
  };
  const handleFormValueChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    switch (name) {
      case "email":
        setUserEMailData(value);
        if (validateEmail(value)) {
          setEMailError(false);
          setEMailHelperText("");
        } else {
          setEMailError(true);
          setEMailHelperText("有効なメールアドレスを入力してください。");
        }
        break;
      case "userPassword":
        setUserPasswordData(value);
        if (validatePassWord(value)) {
          setPassWordError(false);
          setPassWordHelperText("");
        } else {
          setPassWordError(true);
          setPassWordHelperText("パスワードは8文字以上で入力してください");
        }
        break;
      default:
        break;
    }
    setIsFormValid(!eMailError && !passWordError);
  };

  //ボタンが押されたときに入力された情報を処理する関数
  const handleCreateSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isFormValid) {
      //ここに書いてね
      console.log("Form User ID Data:", formUserEMailData);
      console.log("Form User Password Data:", formUserPasswordData);
      PostLogin(formUserEMailData, formUserPasswordData, "login");
    } else {
      handleModalOpen();
    }
  };

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
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
      <Modal
        open={ValidateModalopen}
        onClose={handleModalClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            bgcolor: "background.paper",
            border: "2px solid #000",
            boxShadow: 24,
            p: 4,
          }}
        >
          <Typography id="modal-modal-title" variant="h6" component="h2">
            エラー
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            フォームの入力が正しく行われていないようです。もう一度ご確認ください。
          </Typography>
        </Box>
      </Modal>
      <Typography
        sx={{
          color: "#fff",
          fontSize: "2rem",
          textAlign: "center",
          paddingTop: "6%",
        }}
      >
        ログイン
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
          e-Mail
        </Typography>
        <TextField
          variant="standard"
          color="info"
          fullWidth
          error={eMailError}
          helperText={eMailhelperText}
          style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
          name="email"
          value={formUserEMailData}
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
          password
        </Typography>
        <TextField
          variant="standard"
          color="info"
          fullWidth
          error={passWordError}
          helperText={passWordhelperText}
          style={{ backgroundColor: "#D9D9D9", fontSize: "24px" }}
          name="userPassword"
          value={formUserPasswordData}
          type={showPassword ? "text" : "password"}
          onChange={handleFormValueChange}
          InputProps={{
            endAdornment: (
              <IconButton
                aria-label={showPassword ? "Hide Password" : "Show Password"}
                onClick={handleShowPassword}
                edge="end"
                sx={{ marginRight: "1%" }}
              >
                {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            ),
          }}
        />
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", marginTop: "3%" }}>
        <Button variant="contained" size="large" onClick={handleCreateSubmit}>
          作成
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          padding: "0% 3% 0% 3%",
        }}
      >
        <Typography
          sx={{
            color: "#fff",
            fontSize: "1rem",
            textAlign: "left",
            paddingTop: "5%",
          }}
        >
          アカウントをお持ちでない場合
        </Typography>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Button
          variant="text"
          sx={{ fontSize: "1rem" }}
          onClick={() => {
            navigate("/");
          }}
        >
          こちらからサインイン
        </Button>
      </Box>
    </Box>
  );
};
