import React from 'react';
import Header from '../Base/Header';
import PhonesList from './List/PhonesList';

function PhonesScreen(props) {
  return (
    <>
      <Header title="Mobile Phones"/>
      <PhonesList />
    </>
  );
};

export default PhonesScreen;
