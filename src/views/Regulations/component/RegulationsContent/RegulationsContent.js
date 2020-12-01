import React from 'react';
import { Email, Url, UrlCovid, PhoneNumber, T } from '../../../../components';
import { Annotation, Paragraph, Title, ListNumber, ListItem, Wrapper } from './RegulationsContent.styled';

const RegulationsContent = ({ small }) => (
  <Wrapper small={small}>
    <Paragraph>
      <strong>
        <T i18nKey="regulations_content_text1" />
      </strong>
    </Paragraph>
    <Annotation>§1.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text2" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text3" />
        <strong>
          <T i18nKey="regulations_content_text4" />
        </strong>{' '}
        <T i18nKey="regulations_content_text5" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text6" />
      </ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text7" />
    </Title>
    <Paragraph>
      <T i18nKey="regulations_content_text8" />
    </Paragraph>
    <ListNumber>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text93" />
        </strong>{' '}
        <T i18nKey="regulations_content_text94" /> <UrlCovid /> <T i18nKey="regulations_content_text95" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text117" />
        </strong>{' '}
        <T i18nKey="regulations_content_text118" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text38" />
        </strong>{' '}
        <T i18nKey="regulations_content_text39" /> <UrlCovid /> <T i18nKey="regulations_content_text40" /> <UrlCovid />;
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text109" />
        </strong>{' '}
        <T i18nKey="regulations_content_text110" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text9" />
        </strong>{' '}
        <T i18nKey="regulations_content_text10" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text119" />
        </strong>{' '}
        <T i18nKey="regulations_content_text120" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text32" />
        </strong>{' '}
        <T i18nKey="regulations_content_text33" /> <UrlCovid /> <T i18nKey="regulations_content_text34" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text30" />
        </strong>{' '}
        <T i18nKey="regulations_content_text31" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text98" />
        </strong>{' '}
        <T i18nKey="regulations_content_text99" /> <UrlCovid /> <T i18nKey="regulations_content_text100" /> <UrlCovid />{' '}
        <T i18nKey="regulations_content_text101" />
      </ListItem>

      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text11" />
        </strong>{' '}
        <T i18nKey="regulations_content_text12" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text13" />
        </strong>{' '}
        <T i18nKey="regulations_content_text14" />{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          <T i18nKey="regulations_content_text15" />
        </Url>{' '}
        <T i18nKey="regulations_content_text89" />{' '}
        <Url value="https://developer.apple.com/documentation/exposurenotification">
          <T i18nKey="regulations_content_text16" />
        </Url>{' '}
        <T i18nKey="regulations_content_text90" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text20" />
        </strong>{' '}
        <T i18nKey="regulations_content_text21" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text17" />
        </strong>
        <T i18nKey="regulations_content_text18" /> <UrlCovid /> <T i18nKey="regulations_content_text19" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text35" />
        </strong>{' '}
        <T i18nKey="regulations_content_text36" /> <UrlCovid /> <T i18nKey="regulations_content_text37" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text22" />
        </strong>{' '}
        <T i18nKey="regulations_content_text23" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text96" />
        </strong>{' '}
        <T i18nKey="regulations_content_text97" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text111" />
        </strong>{' '}
        <T i18nKey="regulations_content_text112" />{' '}
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text41" />
        </strong>{' '}
        <T i18nKey="regulations_content_text42" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text43" />
        </strong>{' '}
        <T i18nKey="regulations_content_text44" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text24" />
        </strong>{' '}
        <T i18nKey="regulations_content_text25" /> <UrlCovid /> <T i18nKey="regulations_content_text91" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text26" />
        </strong>{' '}
        <T i18nKey="regulations_content_text27" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="regulations_content_text28" />
        </strong>{' '}
        <T i18nKey="regulations_content_text29" />
      </ListItem>
      <ListItem>
        <strong>WHO </strong>
        <T i18nKey="regulations_content_text45" />
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text46" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text47" /> <UrlCovid /> <T i18nKey="regulations_content_text48" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text49" /> <UrlCovid /> <T i18nKey="regulations_content_text50" /> <UrlCovid />
        <T i18nKey="regulations_content_text51" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text52" /> <UrlCovid />
        <T i18nKey="regulations_content_text92" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text53" /> <UrlCovid /> <T i18nKey="regulations_content_text54" /> <UrlCovid />{' '}
        <T i18nKey="regulations_content_text55" /> <UrlCovid /> <T i18nKey="regulations_content_text56" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text57" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text102" /> <UrlCovid /> <T i18nKey="regulations_content_text103" />{' '}
        <UrlCovid /> <T i18nKey="regulations_content_text104" /> <UrlCovid />{' '}
        <T i18nKey="regulations_content_text105" /> <UrlCovid /> <T i18nKey="regulations_content_text106" />{' '}
        <UrlCovid /> <T i18nKey="regulations_content_text107" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text121" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text108" />
      </ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text58" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text59" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text60" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text61" />
      </ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text62" />
    </Title>
    <Paragraph>
      <T i18nKey="regulations_content_text63" /> <Url value="https://www.gnu.org/licenses/gpl-3.0.html">GPL-3.0</Url>.
    </Paragraph>
    <Annotation>§6.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text64" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text65" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text66" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text67" />{' '}
        <PhoneNumber>
          <T i18nKey="regulations_content_text68" />
        </PhoneNumber>{' '}
        <T i18nKey="regulations_content_text69" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text70" />{' '}
        <PhoneNumber>
          <T i18nKey="regulations_content_text71" />
        </PhoneNumber>{' '}
        <T i18nKey="regulations_content_text72" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text73" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text74" />
      </ListItem>
    </ListNumber>
    <Annotation>§7.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text75" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text76" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text77" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text113" />
      </ListItem>
    </ListNumber>
    <Annotation>§8.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text78" />
    </Title>
    <Paragraph>
      <T i18nKey="regulations_content_text79" />
    </Paragraph>
    <Annotation>§9.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text80" />
    </Title>
    <Paragraph>
      <T i18nKey="regulations_content_text81" />
    </Paragraph>
    <Annotation>§10.</Annotation>
    <Title>
      <T i18nKey="regulations_content_text82" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="regulations_content_text83" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text84" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text85" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text86" />
      </ListItem>
      <ListItem>
        <T i18nKey="regulations_content_text87" />{' '}
        <Email>
          <T i18nKey="regulations_content_text88" />
        </Email>
        .
      </ListItem>
    </ListNumber>
  </Wrapper>
);

export default RegulationsContent;
