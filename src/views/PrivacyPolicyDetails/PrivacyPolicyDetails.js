import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './PrivacyPolicyDetails.scss';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';

const PrivacyPolicyDetails = () => {
  const history = useHistory();

  return (
    <div className="view view__privacy-policy-details">
      <Banner background={Background}>
        <Back onClick={() => history.push('/privacy-policy')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="text-center medium">Polityka prywatności</h4>
        <div className="content">
          <p className="p1 small">
            <PrivacyPolicyContent />
          </p>
        </div>
      </Container>
    </div>
  );
};

export default PrivacyPolicyDetails;
