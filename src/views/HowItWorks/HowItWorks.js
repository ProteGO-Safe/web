import React from 'react';
import { useHistory } from 'react-router-dom';
import Background from '../../assets/img/banners/banner-1.png';
import { Back, Banner, Brand, Container } from '../../components';
import './HowItWorks.scss';

const HowItWorks = () => {
  const history = useHistory();

  return (
    <div className="view view__regulations">
      <Banner background={Background}>
        <Back onClick={() => history.push('/')} />
        <Brand content={false} small white />
      </Banner>
      <Container>
        <h4 className="text-center medium">Jak to działa</h4>
        <div className="content">
          <p className="p1 small">
            Jak to działa Lorem ipusm dolor sid amet coescululum cośtam Jak to
            działa Lorem ipusm dolor sid amet coescululum cośtam Jak to działa
            Lorem ipusm dolor sid amet coescululum cośtam Jak to działa Lorem
            ipusm dolor sid amet coescululum cośtam Jak to działa Lorem ipusm
            dolor sid amet coescululum cośtam Jak to działa Lorem ipusm dolor
            sid amet coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
            coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
            coescululum cośtam Jak to działa Lorem ipusm dolor sid amet
            coescululum cośtam
          </p>
        </div>
      </Container>
    </div>
  );
};

export default HowItWorks;
