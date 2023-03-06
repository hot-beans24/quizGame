import React from 'react';

import styled from 'styled-components';

const Main = ({ children }: { children: React.ReactNode } ) => {
  return (
    <SMain>
      {children}
    </SMain>
  );
};

/* styledElements */

const SMain = styled.main`
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export default Main;