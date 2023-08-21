import "./App.css";
import Section1 from "./LandingPageComponent/Section1";
import Section2 from "./LandingPageComponent/Section2";
import Section3 from "./LandingPageComponent/Section3";
import Section4 from "./LandingPageComponent/Section4";
import Section5 from "./LandingPageComponent/Section5";
import Section6 from "./LandingPageComponent/Section6";
import Footer from "./LandingPageComponent/Footer";

function App() {
  return (
    <div className="appContainer">
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Footer />
    </div>
  );
}

export default App;
