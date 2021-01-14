import React, { useState } from "react";
import useOnclickOutside from "react-cool-onclickoutside"

import Login from "./Login";

const HeaderLogin = () => {
  const [showMe, setShowMe] = useState(false);

  const ref = useOnclickOutside(() => {
    setShowMe(false);
  });

  const handleClick = () => {
    window.scrollTo(0, 0);
    setShowMe(!showMe);
  };

  return (
    <div ref={ref}>
      {showMe ? <Login /> : null}
      <p style={{ cursor: "pointer" }} onClick={() => handleClick()}>
        Login
      </p>
    </div>
  );
};

export default HeaderLogin;
