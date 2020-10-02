import { StatusBar } from "expo-status-bar";
import React from "react";

import Routes from "./src/App/routes";

export default function App() {
  return (
    <>
      <StatusBar />
      <Routes />
    </>
  );
}
