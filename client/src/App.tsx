import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import CommonRoutes from "./router/commonRouters";

function App() {
  return (
    <>
      <Router>
        <CommonRoutes />
      </Router>
    </>
  );
}

export default App;
