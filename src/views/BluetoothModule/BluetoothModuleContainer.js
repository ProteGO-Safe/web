import React from 'react';
import BluetoothModule from './BluetoothModule';

const BluetoothModuleContainer = () => {
  const items = [
    {
      border: true,
      text: 'Udostępnij funkcję Bluetooth',
      onClick: null
    },
    {
      border: false,
      text: 'Dalej',
      onClick: null
    }
  ];

  return <BluetoothModule buttons={items} />;
};

export default BluetoothModuleContainer;
