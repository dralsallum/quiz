import Home from "./pages/Home";
import Landing from "./pages/Landing";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { BasketProvider } from "./BasketContext";
import Checkout from "./pages/Checkout";

const App = () => {
  return (
    <BasketProvider>
      <Router>
        <GlobalStyle />
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Landing />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Router>
    </BasketProvider>
  );
};

export default App;
