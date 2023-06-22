import React from "react";

import "./SubNavBar.css";

export default function SubNavBar() {
  return (
    <div className="sub-navbar">

        <div className="content"> 

            <div className="row">
                <div className="search-bar">
                    <input type="text" name="search" placeholder="Search" value=""/>
                    <i class="material-icons">search</i>
                </div>
            
                <div className="links">
                    <span class="help-button">
                        <i class="material-icons">help</i>Help
                    </span>

                    <button className="cart-button">
                        <a href="/">My Cart<i class="material-icons">shopping_cart</i>
                        </a>
                    <span className="cart-badge">0</span>
                    </button>
                </div>

            </div>
            
        </div>
      
    </div>
  );
}
