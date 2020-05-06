import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Text from '../../Base/Text';
import colors from '../../../theme/colors';

const imageHost = process.env.REACT_APP_IMAGES_HOST;

/* Component presenting a main-info card
   Can be used either in a container or independently */

const Container = styled.div`
  width: ${props => props.width || '100%'};
  background-color: ${colors.background};
  border: 1px dashed ${colors.fade};
  border-radius: 16px;
  pointer-events: ${props => (props.disableEvents ? 'none' : 'auto')};
`;
const ImageContainer = styled.div`
  display: flex;
  padding-top: 20px;
`;
const Image = styled.img`
  height: 180px;
  max-width: 48%;
  margin: auto;
  border-radius: 20px;
  @media (max-width: 460px) {
    height: auto;
  }
`;
const Details = styled.div`
  box-sizing: border-box;
  padding: 6px 16px;
`;

function Phone({ disableEvents, imageFileName, name, price }) {
  return (
    <Container disableEvents={disableEvents}>
      <ImageContainer>
        <Image src={`${imageHost}/${imageFileName}`} />
      </ImageContainer>
      <Details>
        <Text align="center">{name}</Text>
        <Text align="center" color="special">{price} €</Text>
      </Details>
    </Container>
  );
}

Phone.propTypes = {
  disableEvents: PropTypes.bool,
  imageFileName: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number
};

export default Phone;
