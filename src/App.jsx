import "./App.css";
import { BrowserRouter } from "react-router-dom";
import RoutesController from "./pageRouter/RoutesController";

function App() {
  return (
    <BrowserRouter>
      <RoutesController />
    </BrowserRouter>
  );
}

export default App;
