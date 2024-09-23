import React, { useState } from 'react';
import './infoButton/infomation.css'
import {AboutCompany} from'./aboutCompany/AboutCompany'
import {Exchangeer} from './exchangers/Exchangers'
import {Faq} from './questions/Faq'

function Information() {

//     const [activeButton, setActiveButton] = useState(null);

//   const handleButtonClick = (button) => {
//     setActiveButton(button);
//   }

//   return (
//     <div>
//       <button className={activeButton === 1 ? "active-button" : ""} onClick={() => handleButtonClick(1)}>Button 1</button>
//       <button className={activeButton === 2 ? "active-button" : ""} onClick={() => handleButtonClick(2)}>Button 2</button>
//       <button className={activeButton === 3 ? "active-button" : ""} onClick={() => handleButtonClick(3)}>Button 3</button>

//       {activeButton === 1 ? <AboutCompany /> : null}
//       {activeButton === 2 ? <Exchangeer /> : null}
//       {activeButton === 3 ? <Faq /> : null}
//     </div>
//   );

const [activeSection, setActiveSection] = useState(1);

const changeSection = (newSection) => {
  setActiveSection(newSection);
};

return (
  <div className="information" id='information'>
    <div className="container">
        <ul className="info__wrapper">
            <li className="info__inner">
                <button onClick={() => changeSection(1)} className={activeSection === 1 ? "info__btn-active" : "info__btn"}> О компании</button>
            </li>
            <span className="info__line"></span>
            <li className="info__inner">
                <button onClick={() => changeSection(2)} className={activeSection === 2 ? "info__btn-active" : "info__btn"}>Возможности</button>
            </li>
            <span className="info__line"></span>
            <li className="info__inner">
                <button onClick={() => changeSection(3)} className={activeSection === 3 ? "info__faq-active" : "info__btn-faq"}>FAQ</button>
            </li>
        </ul>
    </div>

    {activeSection === 1 && <AboutCompany />}
    {activeSection === 2 && <Exchangeer />}
    {activeSection === 3 && <Faq />}
  </div>
);

}


export {Information};
