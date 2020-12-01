import React from 'react';
import { Email, Url, UrlCovid, T } from '../../../../components';
import {
  Annotation,
  Paragraph,
  Title,
  ListAlpha,
  ListRoman,
  ListNumber,
  ListItem,
  Wrapper
} from './PrivacyPolicyContent.styled';

const PrivacyPolicyContent = ({ small }) => (
  <Wrapper small={small}>
    <Paragraph>
      <strong>
        <T i18nKey="privacy_policy_content_text1" />
      </strong>
    </Paragraph>
    <Paragraph>
      <strong>
        <T i18nKey="privacy_policy_content_text2" />
      </strong>
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text3" />
      <br />
      <T i18nKey="privacy_policy_content_text4" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text5" />
    </Paragraph>
    <Paragraph>
      <u>
        <T i18nKey="privacy_policy_content_text6" />
      </u>
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text7" />
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text8" />
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text9" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text138" />
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text10" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text11" />{' '}
      <UrlCovid /> <T i18nKey="privacy_policy_content_text12" /> <UrlCovid />
      <T i18nKey="privacy_policy_content_text13" />{' '}
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text14" />
    </Paragraph>
    <Annotation>§1.</Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text15" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text16" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text141" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text17" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text18" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text142" />{' '}
        <Email>
          <T i18nKey="privacy_policy_content_text143" />
        </Email>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text19" />{' '}
        <Email>
          <T i18nKey="privacy_policy_content_text20" />
        </Email>{' '}
        <T i18nKey="privacy_policy_content_text21" />{' '}
        <Email>
          <T i18nKey="privacy_policy_content_text22" />
        </Email>
        .
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text23" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text24" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text190" /> <UrlCovid />.
      </ListItem>
    </ListNumber>
    <Annotation>§2.</Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text25" />
    </Title>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text26" />
    </Paragraph>
    <ListNumber>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text171" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text172" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text173" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text194" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text195" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text49" />
        </strong>
        <T i18nKey="privacy_policy_content_text50" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text51" /> <UrlCovid />.
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text31" />
        </strong>
        <T i18nKey="privacy_policy_content_text32" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text29" />
        </strong>
        <T i18nKey="privacy_policy_content_text30" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text196" />
        </strong>
        <T i18nKey="privacy_policy_content_text197" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text44" />
        </strong>
        <T i18nKey="privacy_policy_content_text45" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text46" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text174" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text175" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text176" />{' '}
        <UrlCovid /> <T i18nKey="privacy_policy_content_text177" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text27" />
        </strong>
        <T i18nKey="privacy_policy_content_text28" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text37" />
        </strong>
        <T i18nKey="privacy_policy_content_text38" />{' '}
        <Url value="https://www.google.com/covid19/exposurenotifications/">
          <T i18nKey="privacy_policy_content_text39" />
        </Url>{' '}
        oraz{' '}
        <Url value="https://developer.apple.com/documentation/exposurenotification">
          <T i18nKey="privacy_policy_content_text40" />
        </Url>{' '}
        <T i18nKey="privacy_policy_content_text140" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text52" />
        </strong>
        <T i18nKey="privacy_policy_content_text53" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text41" />
        </strong>
        <T i18nKey="privacy_policy_content_text42" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text43" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text144" />
        </strong>
        <T i18nKey="privacy_policy_content_text145" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text146" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text178" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text179" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text147" />
        </strong>
        <T i18nKey="privacy_policy_content_text148" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text35" />
        </strong>
        <T i18nKey="privacy_policy_content_text36" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text54" />
        </strong>
        <T i18nKey="privacy_policy_content_text55" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text47" />
        </strong>
        <T i18nKey="privacy_policy_content_text48" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text33" />
        </strong>
        <T i18nKey="privacy_policy_content_text34" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text139" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text56" />
        </strong>
        <T i18nKey="privacy_policy_content_text57" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text58" />
        </strong>
        <T i18nKey="privacy_policy_content_text59" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text149" />{' '}
        </strong>
        <T i18nKey="privacy_policy_content_text60" />
      </ListItem>
      <ListItem>
        <strong>
          <T i18nKey="privacy_policy_content_text191" />{' '}
        </strong>
        <T i18nKey="privacy_policy_content_text192" />{' '}
        <Url value={<T i18nKey="privacy_policy_content_text193" />}>https://ec.europa.eu/</Url>
      </ListItem>
    </ListNumber>
    <Annotation>§3.</Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text61" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text62" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text150_1" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text150_2" /> <UrlCovid />
        <T i18nKey="privacy_policy_content_text150_3" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text67_1" />{' '}
        <strong>
          <T i18nKey="privacy_policy_content_text67_2" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text67_3" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text151_1" />{' '}
        <strong>
          <T i18nKey="privacy_policy_content_text151_2" />
        </strong>{' '}
        <T i18nKey="privacy_policy_content_text151_3" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text151_4" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text68" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text69" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text70" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text71" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text152" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text72" />
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text73" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text74" />
            <ListAlpha>
              <ListItem>
                <strong>
                  <T i18nKey="privacy_policy_content_text75" />
                </strong>
                <T i18nKey="privacy_policy_content_text76" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text77" />
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text78" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text79" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text80" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text81" />
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text82" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text83" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text84" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text85" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text86" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text87" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text88" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text89" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text90" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text91" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text92" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text93" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text94" />
                <ListRoman>
                  <ListItem>
                    <T i18nKey="privacy_policy_content_text95" />
                  </ListItem>
                  <ListItem>
                    <T i18nKey="privacy_policy_content_text96" />
                  </ListItem>
                  <ListItem>
                    <T i18nKey="privacy_policy_content_text97" />
                  </ListItem>
                </ListRoman>
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text98" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text99" />{' '}
                <Url value="https://developer.apple.com/documentation/exposurenotification/entemporaryexposurekey">
                  <T i18nKey="privacy_policy_content_text100" />
                </Url>
                )
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text101" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text102" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text103" />
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text104" />{' '}
            <Url value="https://support.cloudflare.com/hc/en-us/articles/200170156-Understanding-the-Cloudflare-Cookies#12345682">
              https://support.cloudflare.com/
            </Url>
            .
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text180" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text181" /> <UrlCovid />{' '}
                <T i18nKey="privacy_policy_content_text182" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text183" /> <UrlCovid />{' '}
                <T i18nKey="privacy_policy_content_text184" />
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text198" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text199" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text200" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text201" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text202" />
              </ListItem>
            </ListAlpha>
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text153" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text203" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text105" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text106" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text107" />{' '}
                <Email>
                  <T i18nKey="privacy_policy_content_text108" />
                </Email>
                ;
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text109" />
              </ListItem>
            </ListAlpha>
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text110" />{' '}
            <Url value="https://firebase.google.com/support/privacy">https://firebase.google.com</Url>;
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text204" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text111" />
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text112" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text113" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text114" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text154" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text185" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text115" />
      </ListItem>
    </ListNumber>
    <Annotation>§4.</Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text116" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text155" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text156" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text157" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text158" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text159" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text160" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text161" />
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text162" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text117" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text118" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text119" />
            <ListAlpha>
              <ListItem>
                <T i18nKey="privacy_policy_content_text120" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text163" />
              </ListItem>
              <ListItem>
                <T i18nKey="privacy_policy_content_text126" />
                {'\n'}
                <T i18nKey="privacy_policy_content_text131" />
              </ListItem>
            </ListAlpha>
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text132" />{' '}
        <Email>
          <T i18nKey="privacy_policy_content_text133" />
        </Email>
        .
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text134" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text164" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text165" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text166" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text167" />
            {'\n'}
            <T i18nKey="privacy_policy_content_text168" />
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text186" /> <UrlCovid /> <T i18nKey="privacy_policy_content_text187" />
        <ListNumber>
          <ListItem>
            <T i18nKey="privacy_policy_content_text188" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text189" />
          </ListItem>
        </ListNumber>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text169" />
      </ListItem>
    </ListNumber>
    <Annotation>§5.</Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text135" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text136" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text137" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text170" />
      </ListItem>
    </ListNumber>

    <Paragraph>
      <T i18nKey="privacy_policy_content_text205" />
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text206" />
    </Paragraph>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text207" />
    </Paragraph>
    <Annotation>
      <T i18nKey="privacy_policy_content_text208" />
    </Annotation>
    <Annotation>
      <T i18nKey="privacy_policy_content_text209" />
    </Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text210" />
    </Title>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text132" />
    </Paragraph>

    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text211" />{' '}
        <Url value={<T i18nKey="privacy_policy_content_text212" />}>(1)</Url>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text213" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text214" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text215" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text216" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text217" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text218" />
      </ListItem>
    </ListNumber>

    <Annotation>
      <T i18nKey="privacy_policy_content_text219" />
    </Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text220" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text221" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text222" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text223" />
      </ListItem>
    </ListNumber>

    <Annotation>
      <T i18nKey="privacy_policy_content_text224" />
    </Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text225" />
    </Title>
    <ListNumber>
      <ListItem>
        <T i18nKey="privacy_policy_content_text226" />
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text227" />
        <ListAlpha>
          <ListItem>
            <T i18nKey="privacy_policy_content_text228" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text229" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text230" />
          </ListItem>
          <ListItem>
            <T i18nKey="privacy_policy_content_text231" />
          </ListItem>
        </ListAlpha>
      </ListItem>
      <ListItem>
        <T i18nKey="privacy_policy_content_text232" />
      </ListItem>
    </ListNumber>

    <Annotation>
      <T i18nKey="privacy_policy_content_text233" />
    </Annotation>
    <Title>
      <T i18nKey="privacy_policy_content_text234" />
    </Title>
    <Paragraph>
      <T i18nKey="privacy_policy_content_text235" />
    </Paragraph>
  </Wrapper>
);

export default PrivacyPolicyContent;
