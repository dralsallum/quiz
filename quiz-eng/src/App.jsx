import Home from "./pages/Home";
import Landing from "./pages/Landing";
import SignUp from "./pages/SignUp";
import Items from "./pages/Items";
import Checkout from "./pages/Checkout";
import Payment from "./pages/Payment";
import Train from "./pages/Train";
import { Products } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import { BasketProvider } from "./BasketContext";
import { UserProvider } from "./UserContext";
import { LessonProvider } from "./LessonContext";
import Test from "./pages/Test";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

const App = () => {
  return (
    <UserProvider>
      <PayPalScriptProvider
        options={{
          "client-id": "YOUR_SANDBOX_PAYPAL_CLIENT_ID",
          currency: "USD",
          intent: "capture",
          commit: true,
          env: "sandbox",
        }}
      >
        <LessonProvider>
          <BasketProvider>
            <Router>
              <GlobalStyle />
              <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/home" element={<Home />} />
                <Route path="/train" element={<Train />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/test/:chapterName" element={<Test />} />
                <Route path="/items" element={<Items />} />
                <Route path="/payment" element={<Payment />} />
                <Route path="/product/:name" element={<Products />} />
              </Routes>
            </Router>
          </BasketProvider>
        </LessonProvider>
      </PayPalScriptProvider>
    </UserProvider>
  );
};

export default App;
