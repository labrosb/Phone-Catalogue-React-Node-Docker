import React from 'react';
import styled from 'styled-components';
import Text from '../../Base/Text';

// Component presenting the Details to be presented in the Drawer

const FlexField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`
const Rows = styled.div`
  display: table-row;
  margin: auto;
`
const Cell = styled.div`
  display: table-cell;
  padding-right: ${props => props.spacing ? '40px' : 0};
`
const Content = styled.div`
  padding: 60px 22px;
`
const MainField = styled.div`
  display: flex;
`
const Image = styled.img`
  width: 90px;
  margin-right: 20px;
`
const Specs = styled.div`
  padding: 6px 0;
`

function DetailsContent(props) {
  return (
    <Content>
      <MainField>
        <FlexField>
          <Image src={require(`../../../assets/Galaxy_S7.jpg`)}/>
        </FlexField>
        <FlexField>
          <Text size="small" color="background">Model : &nbsp; {props.name}</Text>
          <Text size="small" color="background">Color : &nbsp; {props.color}</Text>
          <Text size="small" color="background">Price : &nbsp; {props.price} €</Text>
        </FlexField>
      </MainField>
      <br/>
      <Text color="background" align="center">Description</Text>
      <Text size="small" color="background">{props.description}</Text>
      <Specs>
        <Text color="background" align="center">Specifications</Text>
        <Rows>
          <Cell spacing="true">
            <Text size="small" color="background">Manufacturer : </Text>
            <Text size="small" color="background">Screen :</Text>
            <Text size="small" color="background">Processor :</Text>
            <Text size="small" color="background">Ram :</Text>
          </Cell>
          <Cell>
            <Text size="small" color="background">{props.manufacturer}</Text>
            <Text size="small" color="background">{props.screen}</Text>
            <Text size="small" color="background">{props.processor}</Text>
            <Text size="small" color="background">{props.ram}</Text>
          </Cell>
        </Rows>
      </Specs>
    </Content>
  );
}

export default DetailsContent;
