import React, { useState, useEffect, useMemo, useCallback } from 'react';
import PropTypes from 'prop-types';
import Text from '../../Base/Text';
import Details from './../Details/DetailsDrawer';
import Phone from './PhoneCard';
import {
  List, Item, ItemContent, AltContent, Redo, Spinner,
} from './PhonesListUI';

PhonesList.propTypes = {
  getMobileList: PropTypes.func,
  phones: PropTypes.array,
};

export default function PhonesList(props) {
  const { phones, getPhoneList, error } = props;
  const [phoneDetails, showDetails] = useState(null);

  useEffect(() => {
    getPhoneList();
  }, [getPhoneList]);

  const onProductClick = useCallback((ev) => {
    // Approach to avoid declaring a lambda function inside the onClick event
    const index = ev.target.dataset.index;
    showDetails(phones[index]);
  }, [phones]);

  const hideDetails = useCallback(() => {
    showDetails(null);
  }, []);

  const renderAltContent = useCallback(() => {
    if (error) {
      return (
        <AltContent>
          <Redo onClick={getPhoneList} />
          <Text>{error}</Text>
        </AltContent>
      );
    }
    return (
      <AltContent>
        <Spinner />
      </AltContent>
    );
  }, [error, getPhoneList]);

  // Memoizing phones list to prevent repeating the loop on future renders
  const list = useMemo(() => {
    if (phones) {
      return phones.map((item, index) => (
        <Item key={`phone-${item.id}`}>
          <ItemContent data-index={index} onClick={onProductClick}>
            <Phone
              name={item.name}
              price={item.price}
              disableEvents={true}
            />
          </ItemContent>
        </Item>
      ));
    }
    return null;
  }, [phones, onProductClick]);

  return (
    <>
      <Details onClose={hideDetails} {...phoneDetails} />
      <List>
        {list || renderAltContent()}
      </List>
    </>
  );
}
