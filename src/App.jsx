import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import ErrorBoundary from "./components/ErrorBoundary";
import Contact from "./components/Contact";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import SubscribersList from "./components/SubscribersList";
import ConfirmSubscription from "./components/ConfirmSubscription";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <BrowserRouter>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/contact"
            element={
              <>
                <Header />
                <Contact />
           
              </>
            }
          />
           <Route
            path="/products"
            element={
              <>
                <Header />
                <ProductPage />
                <Footer />
              </>
            }
          />
           {/* <Route
            path="/confirm"
            element={
              <>
                <Header />
                <ConfirmSubscription />
                <Footer />
              </>
            }
          /> */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </ErrorBoundary>
    </BrowserRouter>
  );
}

export default App;
