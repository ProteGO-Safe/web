import React, { useEffect, useMemo } from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';
import Routes from '../../routes';
import { Button, Imprint, Layout } from '../../components';
import { Data, Form } from './components';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { DAILY_DATA_MODE as MODE } from './dailyData.constants';
import { isCreateMode, isEditMode, isViewMode } from './dailyData.helpers';
import { Title, TitleBox } from './DailyData.styled';
import './DailyData.scss';

const DailyData = ({ t, mode, setMode }) => {
  const { dirty, submitForm } = useFormikContext();
  const history = useHistory();

  // Edit mode
  const handleCancel = () => setMode(MODE.VIEW);
  const handleEdit = () => setMode(MODE.EDIT);

  const createMode = useMemo(() => isCreateMode(mode), [mode]);
  const editMode = useMemo(() => isEditMode(mode), [mode]);
  const viewMode = useMemo(() => isViewMode(mode), [mode]);

  useEffect(() => {
    window.scroll(0, 0);
  }, [mode]);

  return (
    <Layout isNavigation>
      <Title>{t('daily_data_text1')}</Title>
      {viewMode ? <Data /> : <Form isEditMode={isEditMode} />}
      <TitleBox>{t('daily_data_text2')}</TitleBox>
      <Imprint />
      <Actions>
        {(createMode || editMode) && (
          <Button
            onClick={submitForm}
            label={t('button_save')}
            disabled={!dirty}
          />
        )}
        {editMode && (
          <Button onClick={handleCancel} label={t('button_cancel')} />
        )}
        {viewMode && <Button onClick={handleEdit} label={t('button_edit')} />}
        {(createMode || viewMode) && (
          <Button
            onClick={() => history.push(Routes.Daily)}
            label={t('button_back')}
          />
        )}
      </Actions>
    </Layout>
  );
};

DailyData.propTypes = {
  mode: PropTypes.oneOf([MODE.CREATE, MODE.EDIT, MODE.VIEW]).isRequired,
  setMode: PropTypes.func.isRequired
};

export default withTranslation()(DailyData);
