import React from 'react';
import { useSelector } from 'react-redux';
import User from './User';

const UserContainer = () => {
  const { age, name, sex } = useSelector(state => state.user);

  const tSex = {
    male: 'Mężczyzna',
    female: 'Kobieta',
    other: 'Inne'
  };

  return (
    <User
      data={{
        age: `${age}`,
        name,
        sex: tSex[sex]
      }}
    />
  );
};

export default UserContainer;
