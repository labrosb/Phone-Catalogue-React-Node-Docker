import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import Phone from './PhoneCard';
import { List, Item, ItemContent } from './PhonesListUI';

function PhonesList({ phones, onPhoneClick }) {
  const onItemClick = useCallback(({ target }) => {
    // Approach to avoid declaring a lambda function inside the onClick event
    const { index } = target.dataset;
    onPhoneClick(phones[index]);
  }, [phones, onPhoneClick]);

  const list = () => {
    if (phones) {
      return phones.map((item, index) => (
        <Item key={`phone-${item.id}`}>
          <ItemContent data-index={index} onClick={onItemClick}>
            <Phone
              imageFileName={item.imageFileName}
              name={item.name}
              price={item.price}
              disableEvents
            />
          </ItemContent>
        </Item>
      ));
    }
    return null;
  };

  return (
    <List>{list()}</List>
  );
}

PhonesList.propTypes = {
  phones: PropTypes.array,
  onPhoneClick: PropTypes.func
};

export default React.memo(PhonesList);
