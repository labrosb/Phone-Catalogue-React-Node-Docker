import React from 'react';
import styled from 'styled-components';
import Text from '../../Base/Text';
import colors from '../../../theme/colors';

/* Component presenting a main-info card
   Can be used either in a container or independently */

const Container = styled.div`
  width: ${props => props.width || '100%'};
  background-color: ${colors.background};
  border: 1px dashed ${colors.fade};
  border-radius: 16px;
  pointer-events: ${props => props.disableEvents ? 'none' : 'auto'};
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
    <Container disableEvents={props.disableEvents}>
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
