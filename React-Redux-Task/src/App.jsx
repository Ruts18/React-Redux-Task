import React from "react";
import { Provider } from "react-redux";
import Reducer from "./redux/Reducer";
import { configureStore } from "@reduxjs/toolkit";
import Dashboard from "./components/Dashboard";

const store = configureStore({
  reducer: {
    posts: Reducer,
  },
});
export default function App() {
  return (
    <Provider store={store}>
      <div>
        <Dashboard/>
      </div>
    </Provider>
  );
}
