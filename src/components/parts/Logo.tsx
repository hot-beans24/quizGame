import React from 'react';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFire } from "@fortawesome/free-solid-svg-icons";

import { stylesVariables } from '../data/stylesVariables';

const Logo = () => {
  const navigate = useNavigate();

  const handleLogoClick = () => {
    navigate("/");
  }

  return (
    <SLogo onClick={handleLogoClick}>
      <FontAwesomeIcon style={{"color": stylesVariables.colors.accent}} icon={faFire} />
      Trivia Quiz
    </SLogo>
  );
};

/* styledElements */

const SLogo = styled.span`
  font-size: 26px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 6px;
  cursor: pointer;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 600px) {
    font-size: 18px;
  }
`;

export default Logo;
