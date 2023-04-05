import React from "react";

import "./Navigation.css";

const pages = ["store", "about", "join", "help"];

export interface NavigationProps {
  active: string;
}

const Navigation: React.FunctionComponent<NavigationProps> = (props) => {
  const { active } = props;
  return (
    <div className="navigation">
      <div className="title">
        <p id="company-name">unBounded</p>
      </div>
      <div className="navbar">
        {pages.map((page) => {
          return (
            <li id={page} className={active === page ? "active" : ""}>
              {page.toUpperCase()}
            </li>
          );
        })}
        <li id="cart">
          <i className="fa-sharp fa-solid fa-cart-shopping"></i>
        </li>
      </div>
    </div>
  );
};

export default Navigation;
