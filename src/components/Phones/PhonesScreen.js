import React from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../redux/connector';
import Header from '../Base/Header';
import Content from '../Base/Content';
import PhonesList from './List/PhonesList';

function PhonesScreen(props) {
  const { error, ...otherProps } = props;
  return (
    <>
      <Header title="Mobile Phones"/>
      <Content>
        <PhonesList error={error.phones} {...otherProps}/>
      </Content>
    </>
  );
}

PhonesScreen.propTypes = {
  error: PropTypes.object,
}

export default ReduxConnector(PhonesScreen);
