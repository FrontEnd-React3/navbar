import './App.css';
import { gsap } from "gsap";
import { useRef, useEffect } from "react";
// 2 hooks you need with GSAP
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);
gsap.to("#liten", { color: "black", scrollTrigger: {trigger: "#sd", start: "top 90%",  start: "end 60%",markers: "true"} })
function App() {
  return (
    <div className="App">
      <header className="App-header">

        <ul className="navbar">
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
        </ul>
        <div id="sa" className="section1">a</div>
        <div id="sb" className="section1">b</div>
        <div id="sc" className="section1">c</div>
        <div id="sd" className="section1">d</div>
        <div id="se" className="section1">e</div>
      </header>
    </div>
  );
}

export default App;
