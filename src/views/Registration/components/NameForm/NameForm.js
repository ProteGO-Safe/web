import React from 'react';
import { useFormikContext } from 'formik';
import { Container, View } from '../../../../theme/grid';
import { Header } from '../../../../components/Header';
import { GovFooter } from '../../../../components/GovFooter';
import Name from '../../../../components/ImprintFiller/components/Name/Name';

const NameForm = () => {
  const { handleSubmit } = useFormikContext();

  return (
    <View>
      <Header hideBackButton />
      <Container>
        <Name handleClick={handleSubmit} />
        <GovFooter type="black" />
      </Container>
    </View>
  );
};

export default NameForm;
