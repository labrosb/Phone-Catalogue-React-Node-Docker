import React from 'react';
import styled from 'styled-components';
import Text from '../../Base/Text';
import colors from '../../../theme/colors';

const Container = styled.div`
  width: 234px;
  margin: 17px 4%;
  background-color: ${colors.background};
  border: 1px dashed ${colors.fade};
  border-radius: 16px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(4px, -12px);
    box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.06);
  }
`
const ImageContainer = styled.div`
  display: flex;
  padding-top: 20px;
`
const Image = styled.img`
  width: 48%;
  margin: auto;
  border-radius: 20px;
`
const Details = styled.div`
  box-sizing: border-box;
  padding: 6px 16px;
`

function Phone(props) {
  return (
    <Container onClick={props.onClick}>
      <ImageContainer>
        <Image src={require('../../../assets/Galaxy_S7.jpg')}/>
      </ImageContainer>
      <Details>
        <Text align="center">{props.name}</Text>
        <Text align="center" color="special">
          {props.price} €
        </Text>
      </Details>
    </Container>
  );
};
// wrap with React.memo if reused outside of the useMemo() scope
export default Phone;
