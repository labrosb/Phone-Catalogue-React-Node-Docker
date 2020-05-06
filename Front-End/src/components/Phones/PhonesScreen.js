import React, { useState, useEffect, useCallback } from 'react';
import PropTypes from 'prop-types';
import ReduxConnector from '../../redux/connector';
import { SpinnerContent, RedoContent } from '../AltContent';
import Header from '../Base/Header';
import Content from '../Base/Content';
import PhonesList from './List/PhonesList';
import Details from './Details/DetailsDrawer';

function PhonesScreen({ error, getPhoneList, phones }) {
  const [phoneDetails, showPhoneDetails] = useState(null);

  useEffect(() => {
    getPhoneList();
  }, [getPhoneList]);

  const showDetails = useCallback(details => {
    showPhoneDetails(details);
  }, [showPhoneDetails]);

  const hideDetails = useCallback(() => {
    showDetails(null);
  }, [showDetails]);

  if (error.phones) {
    return (
      <>
        <Header title="Mobile Phones" />
        <RedoContent
          onClick={getPhoneList}
          error={error.phones}
        />
      </>
    );
  }

  if (!phones) {
    return (
      <>
        <Header title="Mobile Phones" />
        <SpinnerContent />
      </>
    );
  }

  return (
    <>
      <Header title="Mobile Phones" />
      <Content>
        <PhonesList
          onPhoneClick={showDetails}
          {...{ phones }}
        />
        <Details
          onClose={hideDetails}
          {...phoneDetails}
        />
      </Content>
    </>
  );
}

PhonesScreen.propTypes = {
  error: PropTypes.object,
  phones: PropTypes.array,
  getPhoneList: PropTypes.func
};

export default ReduxConnector(PhonesScreen);
