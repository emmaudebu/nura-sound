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
      <Header />
      <Features />
      <CalltoAction />
      <Devices />
      <Subscription />
      <Youtube />
      <Partners />
      <Footer />
    </>
  );
}

export default App;
