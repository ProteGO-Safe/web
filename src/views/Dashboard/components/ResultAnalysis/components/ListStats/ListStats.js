import React from 'react';
import { T } from '../../../../../../components';
import * as Styled from './ListStats.styled';

import { ReactComponent as IconVirus } from '../../../../../../assets/img/icons/virus-small.svg';
import { ReactComponent as IconRiskTest } from '../../../../../../assets/img/icons/risk-test-small.svg';
import { ReactComponent as IconCheck } from '../../../../../../assets/img/icons/icon-check-small.svg';

const ListStats = ({ dateLastRiskTest, dateRiskMonitoring, isInfected }) => (
  <Styled.ListStats>
    <Styled.ListStatsItem>
      <IconVirus />
      <Styled.Label>
        <T i18nKey={isInfected ? 'result_analysis_text_5' : 'result_analysis_text_6'} />
      </Styled.Label>
    </Styled.ListStatsItem>

    <Styled.ListStatsItem>
      <IconCheck />
      <Styled.Label>
        <T i18nKey="result_analysis_text_7" variables={{ date: dateRiskMonitoring }} />
      </Styled.Label>
    </Styled.ListStatsItem>

    <Styled.ListStatsItem>
      <IconRiskTest />
      <Styled.Label>
        <T i18nKey="result_analysis_text_8" variables={{ date: dateLastRiskTest }} />
      </Styled.Label>
    </Styled.ListStatsItem>
  </Styled.ListStats>
);

export default ListStats;
