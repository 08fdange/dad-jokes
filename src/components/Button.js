import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledButton = styled.button`
  cursor: pointer;
  background-color: ${({color}) => color};
  border-radius: 32px;
  border-style: none;
  color: white;
  font-size: large;
  padding: 24px;
`;

const Button = ({color, ...rest}) => <StyledButton color={color} {...rest} />;

Button.propTypes = {
  color: PropTypes.string,
  onClick: PropTypes.func,
};

export default Button;