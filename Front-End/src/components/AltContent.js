import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from './Base/Text';
import loadingIcon from '../assets/loading.svg';
import redo from '../assets/redo-solid.svg';

const AltContent = styled.div`
  height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const SpinnerIcon = styled.img`
  width: 80px;
`;

const RedoIcon = styled.img`
  width: 18px;
  margin-bottom: -6px;
  cursor: pointer;
`;

export const SpinnerContent = () => (
  <AltContent>
    <SpinnerIcon src={loadingIcon} alt="Loading..." />
  </AltContent>
);

export const RedoContent = ({ error, onClick }) => (
  <AltContent>
    <RedoIcon src={redo} alt="Redo" onClick={onClick} />
    <Text>{error}</Text>
  </AltContent>
);

RedoContent.propTypes = {
  error: PropTypes.string,
  onClick: PropTypes.func
};
