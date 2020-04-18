import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { Header } from '../components';
import './PrivacyPolicyDetails.scss';
import { PrivacyPolicyContent } from './component/PrivacyPolicyContent';

const PrivacyPolicyDetails = () => (
  <div className="view view__privacy-policy-details">
    <Header background={Background} prevUrl="/privacy-policy" />
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

export default PrivacyPolicyDetails;
