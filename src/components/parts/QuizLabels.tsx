import React from 'react';

import styled from 'styled-components';

const QuizLabels = ({ children }: { children: React.ReactNode }) => {
  return (
    <SDiv>{children}</SDiv>
  );
};

/* styledElements */

const SDiv = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

export default QuizLabels;