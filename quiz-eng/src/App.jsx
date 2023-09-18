import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Train from "./pages/Train";
import { FooterMe, Products } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { BasketProvider } from "./BasketContext";
import { UserProvider } from "./UserContext";
import { LessonProvider } from "./LessonContext";
import Test from "./pages/Test";
import Something from "./pages/Something";

const App = () => {
  return (
    <LessonProvider>
      <UserProvider>
        <BasketProvider>
          <Router>
            <GlobalStyle />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/train" element={<Train />} />
              <Route path="/" element={<Landing />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/test" element={<Test />} />
              <Route path="/something" element={<Something />} />
              <Route path="/items" element={<Items />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/product/:name" element={<Products />} />
            </Routes>
          </Router>
        </BasketProvider>
      </UserProvider>
    </LessonProvider>
  );
};

export default App;
