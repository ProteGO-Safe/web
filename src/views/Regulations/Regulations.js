import React from 'react';
import { useHistory } from 'react-router-dom';

import { Container } from '../../components';
import { RegulationsContent } from './component/RegulationsContent';
import './Regulations.scss';
import Routes from '../../routes';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const Regulations = () => {
  const history = useHistory();

  return (
    <div className="view view__regulations">
      <Header onBackClick={() => history.push(Routes.PrivacyPolicy)} />
      <Container>
        <h4 className="text-center medium">Regulamin</h4>
        <div className="content">
          <p className="p1 small">
            <RegulationsContent />
          </p>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default Regulations;
