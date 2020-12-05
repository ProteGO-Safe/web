import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useFormikContext } from 'formik';
import { Button, Imprint, Layout, T } from '../../components';
import { Data, Form } from './components';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { DAILY_DATA_MODE as MODE } from './dailyData.constants';
import { isCreateMode, isEditMode, isViewMode } from './dailyData.helpers';
import { Title, TitleBox } from './DailyData.styled';
import './DailyData.scss';
import useNavigation from '../../hooks/useNavigation';

const DailyData = ({ mode, setMode }) => {
  const { dirty, submitForm, initialValues } = useFormikContext();
  const { goBack } = useNavigation();

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
    <Layout isNavigation hideBell>
      <Title>
        <T i18nKey="daily_data_text1" />
      </Title>
      {viewMode ? <Data data={initialValues} /> : <Form isEditMode={isEditMode} />}
      <TitleBox>
        <T i18nKey="daily_data_text2" />
      </TitleBox>
      <Imprint />
      <Actions>
        {(createMode || editMode) && (
          <Button onClick={submitForm} label={<T i18nKey="button_save" />} disabled={!dirty} />
        )}
        {editMode && <Button onClick={handleCancel} label={<T i18nKey="button_cancel" />} />}
        {viewMode && <Button onClick={handleEdit} label={<T i18nKey="button_edit" />} />}
        {(createMode || viewMode) && <Button onClick={() => goBack()} label={<T i18nKey="button_back" />} />}
      </Actions>
    </Layout>
  );
};

DailyData.propTypes = {
  mode: PropTypes.oneOf([MODE.CREATE, MODE.EDIT, MODE.VIEW]).isRequired,
  setMode: PropTypes.func.isRequired
};

export default DailyData;
