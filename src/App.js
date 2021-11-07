import React from "react";
import "./App.css";
import { Provider } from "./components/Provider";
import Container from "./components/Container";

const App = () => {
  return (
    <Provider>
      <Container />
    </Provider>
  );
};
export default App;
