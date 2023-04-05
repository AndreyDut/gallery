import React from "react";
import "./App.css";
import AppHeader from "./components/AppHeader/AppHeader";
import MainBox from "./pages/MainBox";
import AppFooter from './components/AppFooter/AppFooter';
import AppLoader from "./components/AppLoader/AppLoader";
import AppToast from "./components/AppToast/AppToast";

function App() {

  return (
    <>
    <AppToast/>
    <AppLoader/>
    <AppHeader/>
    <MainBox/>
    <AppFooter/>
    </>
  );
}

export default App;



