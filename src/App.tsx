import Router from "./routes";
import { BrowserRouter } from "react-router-dom";
import "./styles/_global.scss";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
