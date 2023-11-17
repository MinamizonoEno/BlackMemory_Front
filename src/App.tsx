import { CssBaseline } from "@mui/material";
import { Providers } from "./provider/Provider";
import { Routers } from "./routes/Routers";
import { GetRecord } from "./conponents/Api/GetRecord";
import { PostWorks } from "./conponents/Api/PostWorks";

export const App = () => {
  return (
    <Providers>
      <CssBaseline />
      <Routers />
      <button
        onClick={() => {
          GetRecord();
        }}
      >
        get
      </button>
      <button
        onClick={() => {
          PostWorks();
        }}
      >
        post
      </button>
    </Providers>
  );
};
