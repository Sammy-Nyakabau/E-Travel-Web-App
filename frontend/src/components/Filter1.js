import React from "react";
import "../styles/Filter1.css"

function Filter1() {
  return (
    
    <div className="filter1">
      <div className="option">
        <img src="https://lp-cms-production.imgix.net/2020-05/adventure-compass.png?max-w=200&auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&h=50&w=50" />
        <div className="option_name">Adventure</div>
      </div>

      <div className="option">
        <img src="https://lp-cms-production.imgix.net/2020-02/family.png?max-w=200&auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&h=50&w=50" />
        <div className="option_name">Family</div>
      </div>

      <div className="option">
        <img src="https://lp-cms-production.imgix.net/2020-02/budget.png?max-w=200&auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&h=50&w=50" />
        <div className="option_name">Budget</div>
      </div>

      <div className="option">
        <img src="https://lp-cms-production.imgix.net/2020-02/art-culture.png?max-w=200&auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&h=50&w=50" />
        <div className="option_name">Art and Culture</div>
      </div>

      <div className="option">
        <img src="https://lp-cms-production.imgix.net/2020-02/beaches.png?max-w=200&auto=format&fit=crop&sharp=10&vib=20&ixlib=react-8.6.4&h=50&w=50" />
        <div className="option_name">Beaches</div>
      </div>
    </div>
  );
}

export default Filter1;
