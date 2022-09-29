import React from 'react'
import "./first.css"
import eyes from "./assets/eyes.svg"
import BcIDB from "./businesscardidb"
import Bc_right from "./bcr"
import Bc_bottom from "./bcb"


function first() {
  return (
    <div id="main">
      <div className="sectionwrapper">
        <div className='sectionleft'>
          <strong> Samen werken we aan een “STERK” verhaal</strong>
          <br /><br />
          identityBuilding ontwikkelt www.100procentlokaal.be om de <span className="orangetext"> lokale economie</span>  te <span className="orangetext"> ondersteunen</span> en extra zuurstof te geven. Samen met jullie bouwen wij <span className="orangetext"><br />“HET STERKSTE NETWERK”</span>
          <br /><br />
          Dit is het grootste en belangrijkste Belgische initiatief waarbij alle ondernemers en haar klanten als doelgroep centraal staan. Verdeeld over <span className="orangetext">581 steden en gemeenten </span>kan de gebruiker uit  <span className="orangetext darker">1.511.753 </span>actieve vestigingen zoeken naar elke activiteit.
          <br /><br />
          Een aantal steden en gemeenten ondersteunen dit initiatief en hebben intussen <span className="orangetext">hun samenwerking </span> reeds <span className="orangetext">bevestigd.</span>  Het lokaal bestuur van <span className="orangetext  darker">Erpe-Mere</span> bevestigde ook de samenwerking.
          <br /><br />
          Ontdek de <span className="orangetext">meerwaarde </span>voor jouw onderneming op:
          <br /><br />
          <span className="orangetext darker">erpe-mere.100procentlokaal.be</span> <span className="orangetext">of</span>
          <br />
          <span className="orangetext darker">erpe-mere.ondernemersnetwerk.be</span>
        </div>
        <div className='sectionmid'></div>
        <div className='sectionleft' id="tweedecolom">
          <BcIDB />
          <Bc_right/>
        </div>


      </div>
      <Bc_bottom/>

      <div className='sectionright'>
        <div className="sectionrighttop">
          Meld je aan en vul eventuele extra nuttige info aan zodat jouw doelgroep
          je nog beter kan vinden! Je verdient hiermee € 100!
          <br /><br />
          Registreer hier met jouw persoonlijk OTP (One Time Password)
        </div>
        <div className="otpwrapper">
          <div className="orangelabel">Jouw ondernemingsnummer
            <input className="orangeinputs" type="text" />
          </div>
          <div className="orangelabel">Jouw vestigingsnummer
            <input className="orangeinputs" type="text" />
          </div>
          <div className="orangelabel"> <div className="suborangelabel">
            <span>  OTP (One Time Password)</span> <div className="eyeswrapper">
              <img src={eyes} className="eyes" />
            </div>
          </div>
            <input className="orangeinputs" type="password" />
          </div>
          <div className="subklaar" id="goright">
            Ik heb nog geen OTP
          </div>
        </div>
        <div className="klaar">OK, IK BEN KLAAR</div>
        <div className="subklaar"> Ik heb al een account</div>


      </div>

    </div>
  )
}

export default first