import React from "react";
import { ButtonDeconection, HeaderWrapper, Logo } from "./header.style";
import Icon from "../img/skull-logo.png";

import Deconnection from "../svg/Deconnection/DeconnectionIcon";

const Header = () => {
  return (
    <HeaderWrapper>
      <Logo src={Icon} alt="dq" />
      <ButtonDeconection className="button_container">
        <Deconnection />
        <span className="text_deconnection">Déconnection</span>
      </ButtonDeconection>
    </HeaderWrapper>
  );
};

export default Header;
