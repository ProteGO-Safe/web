import React, { useEffect, useMemo } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { useFormikContext } from 'formik';

import Routes from '../../routes';
import { BottomNavigation } from '../../components/BottomNavigation';
import { Button, Header, Imprint } from '../../components';
import { Data, Form } from './components';
import { Actions } from '../../components/ImprintFiller/ImprintFiller.styled';
import { Content, Container, View } from '../../theme/grid';
import { DAILY_DATA_MODE as MODE } from './dailyData.constants';
import { isCreateMode, isEditMode, isViewMode } from './dailyData.helpers';
import { Title, TitleBox } from './DailyData.styled';
import './DailyData.scss';

const DailyData = ({ mode, setMode }) => {
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
    <View>
      <Header />
      <Content>
        <Container className="full-height">
          <Title>Dziennik zdrowia</Title>
          {viewMode ? <Data /> : <Form isEditMode={isEditMode} />}
          <TitleBox className="medium title-4 text-left">Metryka</TitleBox>
          <Imprint />
          <Actions>
            {(createMode || editMode) && (
              <Button
                onClick={submitForm}
                text="Zapisz"
                type="primary"
                disabled={!dirty}
              />
            )}
            {editMode && (
              <Button onClick={handleCancel} text="Anuluj" type="secondary" />
            )}
            {viewMode && (
              <Button onClick={handleEdit} text="Edytuj" type="secondary" />
            )}
            {(createMode || viewMode) && (
              <Button
                onClick={() => history.push(Routes.Daily)}
                text="Powrót"
                type="primary"
              />
            )}
          </Actions>
        </Container>
        <BottomNavigation />
      </Content>
    </View>
  );
};

DailyData.propTypes = {
  mode: PropTypes.oneOf([MODE.CREATE, MODE.EDIT, MODE.VIEW]).isRequired,
  setMode: PropTypes.func.isRequired
};

export default DailyData;
