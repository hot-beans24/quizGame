import React from 'react';

import styled from 'styled-components';

const QuizItems = ({ children }: { children: React.ReactNode }) => {
  return (
    <SDiv>{children}</SDiv>
  );
};

/* styledElements */

const SDiv = styled.div`
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`;

export default QuizItems;