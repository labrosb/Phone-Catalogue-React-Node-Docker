import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import loadingIcon from '../../../assets/loading.svg';
import redo from '../../../assets/redo-solid.svg';

/* UI Components for PhoneList.js
  Added seperately for better readability */

export const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    padding: 0;
  }
`
export const Item = styled.div`
  width: 234px;
  margin: 17px 4%;
  @media (max-width: 930px) {
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: 508px) {
    width: 46%;
    margin: 2%;
  }
`
export const ItemContent = styled.div`
  border-radius: 16px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(4px, -12px);
    box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.06);
  }
`
export const AltContent = styled.div`
  height: 58vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
const SpinnerIcon = styled.img`
  width: 80px;
`
const RedoIcon = styled.img`
  width: 18px;
  margin-bottom: -6px;
  cursor: pointer;
`

export const Spinner = () =>
  <SpinnerIcon src={loadingIcon} alt="Loading..."/> ;


export const Redo = (props) =>
  <RedoIcon src={redo} alt="Redo" onClick={props.onClick}/>

Redo.propTypes = {
  onClick: PropTypes.func,
};
