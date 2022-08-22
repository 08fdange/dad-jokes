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
  right: 0;
  bottom: 0;
  z-index: -1;
`;

const PunchlineText = styled.div`
  font-size: 32px;
  padding: 50px 62px;
  text-align: end;
`;

const Punchline = ({ children }) => {
  return (
    <Wrapper>
      <Quote>
        {'\u201D'}
      </Quote>
      <PunchlineText>
        {children}
      </PunchlineText>
    </Wrapper>
  );
};

Punchline.propTypes = {
  children: PropTypes.string
};

export default Punchline;