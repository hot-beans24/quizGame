import React from 'react';

import styled from 'styled-components';

import Logo from './Logo';

const Header = () => {
  return (
    <SHeader>
      <Logo />
    </SHeader>
  );
};

export default Header;

/* styledElements */

const SHeader = styled.header`
  padding: 30px 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 2000;
  
  @media (max-width: 600px) {
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;