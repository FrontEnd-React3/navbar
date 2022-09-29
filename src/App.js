import './App.css';
import First from "./first"

// import gsap from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// gsap.registerPlugin(ScrollTrigger);
// gsap.to("#sd", { scrollTrigger: { trigger: "#sd", toggleActions: "restart pause reverse pause" }, x: 400, duration: 5 })
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <ul className="navbar">
          <li>01</li>
          <li>02</li>
          <li>03</li>
          <li>04</li>
          <li>05</li>
          <li>06</li>
          <li>07</li>
          <li>08</li>
          <li>09</li>
          <li id="liten">10</li>
          <li>11</li>
          <li>12</li>
        </ul> */}
        <First />




      </header>
    </div>
  );
}

export default App;
