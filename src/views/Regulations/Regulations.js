import React from 'react';

import { Container } from '../../components';
import { RegulationsContent } from './component/RegulationsContent';
import './Regulations.scss';
import Header from '../../components/Header/Header';
import { BottomNavigation } from '../../components/BottomNavigation';

const Regulations = () => {
  return (
    <div className="view view__regulations">
      <Header />
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
