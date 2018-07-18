import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

const CustomButton = ({ buttonText, iconName, onClickAction, loading }) => (
  <Button loading={loading} onClick={onClickAction} primary size="tiny" style={{ marginTop: '3rem' }}>
    <Icon name={iconName} /> {buttonText}
  </Button>
);

export default CustomButton;
