import React from "react";
import './test.css'

function TestHeader() {
  return (
    <div>
      <div id="mobileNav">
        <input type="checkbox" id="top-nav" />
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
        <span className="hamburgerspan"></span>
        <div id="menu-cont-1">
          <ul className="menu-ul">
            <li className="nav-item"> item 1</li>
            <li className="nav-item sub-menu">
              item 2
              <input type="checkbox" id="menu-1" />
              <div id="menu-cont-2">
                <ul className="menu-ul">
                  <label className="menu-label" for="menu-1">
                    Item 2
                  </label>
                  <li className="nav-item">item 2-1</li>
                  <li className="nav-item">item 2-2</li>
                  <li className="nav-item">item 2-3</li>
                  <li className="nav-item">item 2-4</li>
                </ul>
              </div>
            </li>
            <li className="nav-item"> item 3</li>
            <li className="nav-item"> item 4</li>
            <li className="nav-item"> item 5</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TestHeader;
