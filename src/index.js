import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import "./scss/main.scss";
import App from "./App";
import store from "./Redux/Store/store";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
const fallback = () => {
  return (
    <div>
      <h1>Loading ....</h1>
    </div>
  );
};
root.render(
  <React.StrictMode>
    <Suspense fallback={fallback}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </React.StrictMode>
);
