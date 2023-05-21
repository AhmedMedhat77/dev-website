import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ROUTES from "../Routes/Routes";
import Navbar from "../Layout/Navbar";
import PageNotFound from "../Pages/PageNotFound/PageNotFound";
import Footer from "../Layout/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          {ROUTES?.map((route) => {
            return (
              <Route
                key={route.id}
                element={route.Element}
                index={route?.index && route.index}
              />
            );
          })}
          <Route path="*" exact={true} element={<PageNotFound />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
