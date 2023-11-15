import { CssBaseline } from "@mui/material";
import { Providers } from "./provider/Provider";
import { Routers } from "./routes/Routers";

export const App = () => {
  return (
    <Providers>
      <CssBaseline />
      <Routers />
    </Providers>
  );
};
