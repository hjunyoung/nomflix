import React from 'react';
import styled from 'styled-components';

const Containter = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  font-size: 28px;
  margin-top: 20px;
`;

const Loader = () => {
  return (
    <Containter>
      <span role="img" aria-label="Loading">
        ⏰
      </span>
    </Containter>
  );
};

export default Loader;
