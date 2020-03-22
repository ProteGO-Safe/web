import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { RegulationsContent } from './component/RegulationsContent';
import { Header } from '../components';
import './Regulations.scss';

const Regulations = () => (
  <div className="view view__regulations">
    <Header background={Background} prevUrl="/privacy-policy" />
    <Container>
      <h4 className="text-center medium">Regulamin</h4>
      <div className="content">
        <p className="p1 small">
          <RegulationsContent />
        </p>
      </div>
    </Container>
  </div>
);

export default Regulations;
