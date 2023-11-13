import { Providers } from "./provider/Provider";
import { Routers } from "./routes/Routers";

export const App = () => {
  return (
    <Providers>
      <Routers />
    </Providers>
  );
};
