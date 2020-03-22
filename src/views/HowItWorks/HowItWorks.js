import React from 'react';
import Background from '../../assets/img/banners/banner-1.png';
import { Container } from '../../components';
import { Header } from '../components';
import './HowItWorks.scss';

const HowItWorks = () => (
  <div className="view view__regulations">
    <Header background={Background} prevUrl="/" />
    <Container>
      <h4 className="text-center medium">Jak to działa</h4>
      <div className="content">
        <p className="p1 small">
          Jak to działa Lorem ipusm dolor sid amet coescululum cośtam Jak to
          działa Lorem ipusm dolor sid amet coescululum cośtam Jak to działa
          Lorem ipusm dolor sid amet coescululum cośtam Jak to działa Lorem
          ipusm dolor sid amet coescululum cośtam Jak to działa Lorem ipusm
          dolor sid amet coescululum cośtam Jak to działa Lorem ipusm dolor sid
          amet coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
          coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
          coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
          coescululum cośtam
        </p>
      </div>
    </Container>
  </div>
);

export default HowItWorks;
