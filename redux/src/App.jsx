import React from 'react';
import { Provider } from "react-redux";
import LikeCounter from "./LikeCounter";
import store from "./store";
import "./App.css";

const App = () => {
  return (
    <Provider store={store}>
      <LikeCounter />
    </Provider>
  );
};

export default App;