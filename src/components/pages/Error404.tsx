import React from 'react';

import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Button from '../parts/Button';

import { stylesVariables } from '../data/stylesVariables';

const Error404 = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate("/");
  }

  return (
    <SDiv>
      <SH1>404 Not Found.</SH1>
      <Button title="Home" kind="sub" onClick={handleButtonClick} />
    </SDiv>
  );
};

/* styledElements */

const SDiv = styled.div`
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 30px;
`;

const SH1 = styled.h1`
  color: ${stylesVariables.colors.accent};
`;

export default Error404;