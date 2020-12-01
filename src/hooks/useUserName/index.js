import { useSelector } from 'react-redux';
import React from 'react';
import { getUserName } from '../../store/selectors/user';
import { T } from '../../components';

const useUserName = () => {
  const userName = useSelector(getUserName);
  return userName === null ? <T i18nKey="name_form_text2" /> : userName;
};

export default useUserName;
