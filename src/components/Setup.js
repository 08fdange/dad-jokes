import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 24px;
  position: relative;
`;

const Quote = styled.div`
  position: absolute;
  font-size: 400px;
  line-height: 1;
  opacity: 0.1;
  top: -30px;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const SetupText = styled.div`
  font-size: 32px;
  padding: 50px 62px;
`;

const Setup = ({ children }) => {
  return (
    <Wrapper>
      <Quote>
        {'\u201C'}
      </Quote>
      <SetupText>
        {children}
      </SetupText>
    </Wrapper>
  );
};

Setup.propTypes = {
  children: PropTypes.string
};

export default Setup;