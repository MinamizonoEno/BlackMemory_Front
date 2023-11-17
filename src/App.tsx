import { Providers } from "./provider/Provider";
import { Routers } from "./routes/Routers";
import { PostRecord } from "./conponents/Api/PostRecord";
import { GetRecord } from "./conponents/Api/GetRecord";

export const App = () => {
  return (
    <Providers>
      <Routers />
      <button
        onClick={() => {
          PostRecord();
        }}
      >
        post
      </button>
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
