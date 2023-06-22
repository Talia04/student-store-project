import React from "react";

import "./SubNavBar.css";

export default function SubNavBar() {
  return (
    <div className="sub-navbar">

        <div className="content"> 

            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search" defaultValue=""/>
                    <i className="material-icons">search</i>
                </div>
            
                <div className="links">
                    <span className="help-button">
                        <i className="material-icons">help</i>Help
                    </span>

                    <button className="cart-button">
                        <a href="/">My Cart<i className="material-icons">shopping_cart</i>
                        </a>
                    <span className="cart-badge">0</span>
                    </button>
                </div>

            </div>
            
        </div>
      
    </div>
  );
}
