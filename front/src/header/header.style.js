import React from "react";
import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 65px;
  top: 0px;
  background: #ffffff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.07);
  z-index: 1;
`;

export const Logo = styled.img`
  width: 38.62px;
  height: 36.33px;
  margin-left: 40px;
`;
export const ButtonDeconection = styled.button`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-around;
  position: absolute;
  width: 140px;
  height: 36px;
  left: 1110px;
  top: 15px;
  background: #ffffff;
  border: 1px solid #eb514e;
  box-sizing: border-box;
  box-shadow: 0px 1px 10px rgba(235, 81, 78, 0.1);
  border-radius: 4px;
`;
