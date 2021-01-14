import React, { useState } from "react";

import Login from "./Login";

const HeaderLogin = () => {
  const [showMe, setShowMe] = useState(false);

  const handleClick = () => {
    window.scrollTo(0, 0);
    setShowMe(!showMe);
  };

  return (
    <div>
      {showMe ? <Login /> : null}
      <p style={{ cursor: "pointer" }} onClick={() => handleClick()}>
        Login
      </p>
    </div>
  );
};

export default HeaderLogin;
