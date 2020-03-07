import React, { useState, useMemo, useCallback } from 'react';
import styled from 'styled-components';
import Content from '../../Base/Content';
import Details from './../Details/DetailsDrawer';
import Phone from './PhoneCard';

import data from '../../../assets/mobileData';

const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  flex-wrap: wrap;
  @media (max-width: 980px) {
    padding: 0;
  }
`
const Item = styled.div`
  width: 234px;
  margin: 17px 4%;
  @media (max-width: 930px) {
    margin-left: 1%;
    margin-right: 1%;
  }
  @media (max-width: 500px) {
    width: 46%;
    margin: 2%;
  }
`
const ItemContent = styled.div`
  border-radius: 16px;
  cursor: pointer;
  transition: transform 200ms ease-in-out;
  &:hover {
    transform: translate(4px, -12px);
    box-shadow: 0px 0px 60px 0px rgba(0,0,0,0.06);
  }
`

export default function PhonesList(props) {

  const [details, showDetails] = useState(null);

  const onProductClick = useCallback((ev) => {
    /* Approach to avoid declaring lambda function inside the onClick event */
    const index = ev.target.dataset.index;
    showDetails(data[index]);
  }, []);

  const hideDetails = useCallback(() => {
    showDetails(null);
  }, []);

  // Memoizing output to prevent repeating the maps loop on future renders
  const renderList = useMemo(() => {
    return data.map((item, index) => (
      <Item key={`phone-${item.id}`}>
        <ItemContent
          data-index={index}
          onClick={onProductClick}
        >
          <Phone
            name={item.name}
            price={item.price}
            disableEvents={true}
          />
        </ItemContent>
      </Item>
    ));
  }, [onProductClick]);

  return (
    <Content>
      <Details
        onClose={hideDetails}
        {...details}
      />
      <List>{renderList}</List>
    </Content>
  );
}
