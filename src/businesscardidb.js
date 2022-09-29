import React from 'react'
import robotidb from "./assets/robotidb.svg"
import logoidb from "./assets/logoidb.svg"
import locicon from "./assets/locicon.svg"
import telicon from "./assets/phoneicon.svg"
import faxicon from "./assets/faxicon.svg"
import worldicon from "./assets/worldicon.svg"
import cornericon from "./assets/cornericon.svg"
import "./first.css"


function businesscardidb() {
  return (
    <div>
      <div className="BC__framewrapper">
        <div className="BC__frame"></div>
        <img src={logoidb} alt="logo" className="BC__logo" />
        <img src={robotidb} alt="robot" className="BC__robot" />
        <div className="BC__textcontainer">
          <div className="BC__brandwrapper"> identityBuilding BV</div>
          <div className="BC__linewrapper"></div>

          <div className="BC__textwrapper">
            <img className="BC__locicon" src={locicon} alt="locicon" />
            <div id="BC__adres"> Kuilstraat 1 <br /> 9420 Erondegem (Erpe-Mere)</div>
          </div>
          <div className="BC__textwrapper">
            <img className="BC__locicon" src={telicon} alt="telicon" />
            <div id="BC__adres"> 053 81 07 77</div>
          </div>
          <div className="BC__textwrapper">
            <img className="BC__locicon" src={faxicon} alt="faxicon" />
            <div id="BC__adres"> 053 81 07 77</div>
          </div>
          <div className="BC__linewrapper"></div>
          <div className="BC__textwrapper">
            <img id="world" className="BC__locicon" src={worldicon} alt="worldicon" />
            <div> Bezoek website
              <span className="darker"> Ontdek meer
                <img id="world" className="BC__locicon" src={cornericon} alt="worldicon" />
              </span>
            </div>
          </div>
        </div>

      </div>


    </div>
  )
}

export default businesscardidb