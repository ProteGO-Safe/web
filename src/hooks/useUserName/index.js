import { useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { getUserName } from '../../store/selectors/user';

const useUserName = () => {
  const { t } = useTranslation();
  const userName = useSelector(getUserName);
  return userName === null ? t('name_form_text2') : userName;
};

export default useUserName;
