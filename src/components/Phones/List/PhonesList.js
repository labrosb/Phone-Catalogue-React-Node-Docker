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
`

export default function PhonesList(props) {

  const [details, showDetails] = useState(null);

  const onProductClick = useCallback((data) => {
    showDetails(data);
  }, []);

  const hideDetails = useCallback(() => {
    showDetails(null);
  }, []);

  // Memoizing output to prevent repeating the maps loop on future renders
  const renderList = useMemo(() => {
    return data.map((item) => (
      <Phone
        key={item.id}
        name={item.name}
        price={item.price}
        onClick={() => onProductClick(item)}
      />
    ));
  }, []);

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
