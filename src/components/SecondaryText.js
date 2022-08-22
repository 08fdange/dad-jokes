import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  color: ${({ error }) => error ? 'red' : '#535353'};
  font-size: 20px;
  font-weight: bold;
  height: 150px;
  margin-top: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
`;

const SecondaryText = ({ error, children }) => {
  return (
    <Wrapper error={error}>
      {children}
    </Wrapper>
  );
};

SecondaryText.propTypes = {
  children: PropTypes.string,
  error: PropTypes.bool
};

export default SecondaryText;