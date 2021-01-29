import { HashRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import CssBaseline from "@material-ui/core/CssBaseline";

import "./App.css";

function App() {
  return (
    <Router basename="/">
      <CssBaseline />
      <Home />
    </Router>
  );
}

export default App;
