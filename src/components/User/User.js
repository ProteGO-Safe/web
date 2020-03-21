import React from 'react';
import PropTypes from 'prop-types';
import UserImg from '../../assets/img/icons/user.svg';
import './User.scss';

const User = ({ data }) => {
  const { age, name, sex } = data;

  return (
    <div className="user">
      <img className="user__avatar" src={UserImg} alt={name} />
      <div className="user__data">
        <h3>{name}</h3>
        <p>
          {sex}, {age}
        </p>
      </div>
    </div>
  );
};

User.propTypes = {
  data: PropTypes.shape({
    age: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sex: PropTypes.string.isRequired
  }).isRequired
};

export default User;
