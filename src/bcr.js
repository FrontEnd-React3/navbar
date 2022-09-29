import React from 'react'
import "./first.css"
import cornericon from "./assets/cornericon.svg"



function bcr() {
  return (
    <div className="Bcr__container">
      <div className="Bcr__wrapper Bcr__wrapperStart">
        <img className="BC__locicon" src={cornericon} alt="cornericon" />
        <div>Adres
          <span className="darker"> (is wettelijk verplicht)</span>
        </div>
      </div>
      <div className="Bcr__wrapper Bcr__wrapperMiddle">
        <img className="BC__locicon" src={cornericon} alt="cornericon" />
        <div>Telefoon of mobiel
          <div className="darker">(1 nr. is wettelijk verplicht)</div>
        </div>
      </div>
      <div className="Bcr__wrapper Bcr__wrapperEnd">
        <img className="BC__locicon" src={cornericon} alt="cornericon" />

        Fax (niet verplicht)
      </div>

    </div >
  )
}

export default bcr