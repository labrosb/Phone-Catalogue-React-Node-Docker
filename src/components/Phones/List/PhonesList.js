import React, { useMemo } from 'react';
import styled from 'styled-components';
import Content from '../../Base/Content';
import Phone from './PhoneCard';

import data from '../../../assets/mobileData';

const List = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 0 20px;
  flex-wrap: wrap;
`

export default function PhonesList(props) {

  // Memoizing output to prevent repeating the maps loop on future renders
  const renderList = useMemo(() => {
    return data.map((item, index) => (
      <Phone name={item.name} price={item.price} />
    ));
  }, []);

  return (
    <Content>
      <List>{renderList}</List>
    </Content>
  );
}
