import React from 'react';
import { useHistory } from 'react-router-dom';
import { Container } from '../../components';
import './PrivacyPolicyDetails.scss';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';
import Header from '../../components/Header/Header';
import Routes from '../../routes';
import { BottomNavigation } from '../../components/BottomNavigation';

const PrivacyPolicyDetails = () => {
  const history = useHistory();

  return (
    <div className="view view__privacy-policy-details">
      <Header onBackClick={() => history.push(Routes.PrivacyPolicy)} />
      <Container>
        <h4 className="text-center medium">Polityka prywatności</h4>
        <div className="content">
          <p className="p1 small">
            <PrivacyPolicyContent />
          </p>
        </div>
      </Container>
      <BottomNavigation />
    </div>
  );
};

export default PrivacyPolicyDetails;
