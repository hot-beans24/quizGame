import React from 'react';

import styled from 'styled-components';

const Footer = () => {
  return (
    <SFooter >
      <span>クイズ問題</span>
      <span>from</span>
      <SA href="https://opentdb.com" target="_blank" rel="noopener noreferrer">
        Open Trivia DB(https://opentdb.com)
      </SA>
    </SFooter>
  );
};

/* styledElements */

const SFooter = styled.footer`
  padding: 30px 10px;
  color: #9caec1;
  font-size: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 5px 10px;

  @media (max-width: 600px) {
    padding: 10px;
  }
`;

const SA = styled.a`
  padding: 4px 12px;
  border-radius: 6px;
  background-color: #eef2f6;
  color: #8498af;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0;
  
  &:hover {
    opacity: 0.7;
  }
`;

export default Footer;