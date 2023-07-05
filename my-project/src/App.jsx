import "./App.css";
import CalltoAction from "./Components/CalltoAction";
import Devices from "./Components/Devices";
import Features from "./Components/Features";
import Header from "./Components/Header";
import Partners from "./Components/Partners";
import Subscription from "./Components/Subscription";
import Youtube from "./Components/Youtube";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header classname="px-3  md:px-[64px]" />
      <Features classname="px-3  md:px-[64px]" />
      <CalltoAction classname="px-3  md:px-[64px]" />
      <Devices classname="px-3  md:px-[64px]" />
      <Subscription classname="px-3  md:px-[64px]" />
      <Youtube classname="px-3  md:px-[64px]" />
      <Partners classname="px-3  md:px-[64px]" />
      <Footer classname="px-3  md:px-[64px]" />
    </>
  );
}

export default App;
