import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Alert from '@material-ui/lab/Alert';

const InfoAlert = ({props}) => {
  const state = useSelector(state => state);

  if (state.alert.open) {
    return (
      <Alert className="info-alert" severity="info" style={{marginBottom:10}}>
        {state.alert.info}
      </Alert>
    );
  }

  return null;
}

export default InfoAlert;
