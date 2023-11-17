import { CssBaseline } from "@mui/material";
import { Providers } from "./provider/Provider";
import { Routers } from "./routes/Routers";
import { GetRecord } from "./conponents/Api/GetRecord";

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
    </Providers>
  );
};
