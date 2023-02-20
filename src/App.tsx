import { BrowserRouter } from "react-router-dom";
import { AppRoutes, AuthRoutes } from "./routes";
import "./App.css";

const App = () => {
  return (
    <BrowserRouter>
      {/* <AuthRoutes /> */}
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
