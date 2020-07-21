import { DateTime } from 'luxon';
import { PropsWithChildren } from 'react';
import { Row, Col, Badge } from 'reactstrap';
import { IExperience } from './IExperience';
import { Style } from '../common/Style';
import Util from '../common/Util';

export default function ExperienceRow({
  item,
  index,
}: PropsWithChildren<{ item: IExperience.Item; index: number }>) {
  return (
    <div>
      {index > 0 ? <hr /> : ''}
      <Row>
        <Col sm={12} md={3} className="text-md-right">
          {createWorkingPeriod(item)}
          {item.companyDesc}
        </Col>
        <Col sm={12} md={9}>
          <h4>{item.title}</h4>
          <i style={Style.gray}>{item.position}</i>
          <ul className="pt-3">
            {item.descriptions.map((description, descIndex) => (
              <li dangerouslySetInnerHTML={{ __html: description }} key={descIndex.toString()} />
            ))}
            {createSkillKeywords(item.skillKeywords)}
          </ul>
        </Col>
      </Row>
    </div>
  );
}

function createSkillKeywords(skillKeywords?: string[]) {
  if (!skillKeywords) {
    return '';
  }
  return (
    <li>
      <strong>Skill Keywords</strong>
      <div>
        {skillKeywords.map((keyword, index) => (
          <Badge
            style={Style.skillKeywordBadge}
            key={index.toString()}
            color="secondary"
            className="mr-1"
          >
            {keyword}
          </Badge>
        ))}
      </div>
    </li>
  );
}

function createWorkingPeriod(item: IExperience.Item) {
  const DATE_FORMAT = Util.LUXON_DATE_FORMAT;
  const startedAt = DateTime.fromFormat(item.startedAt, DATE_FORMAT.YYYY_LL);

  const { periodTitle, endedAt, isWorking } = (() => {
    if (!item.endedAt) {
      return {
        periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~`,
        isWorking: true,
      };
    }

    const _endedAt = DateTime.fromFormat(item.endedAt, DATE_FORMAT.YYYY_LL);
    return {
      periodTitle: `${startedAt.toFormat(DATE_FORMAT.YYYY_DOT_LL)} ~ ${_endedAt.toFormat(
        DATE_FORMAT.YYYY_DOT_LL,
      )}`,
      endedAt: _endedAt,
      isWorking: false,
    };
  })();

  return (
    <Row>
      <Col md={12} xs={isWorking ? 7 : 9}>
        <h4 style={Style.gray}>{periodTitle}</h4>
      </Col>
      <Col md={12} xs={isWorking ? 5 : 3} className="text-md-right text-center">
        {isWorking ? (
          <Badge color="primary" className="mr-1">
            재직 중
          </Badge>
        ) : (
          ''
        )}
        <Badge color="info">{Util.getFormattingDuration(startedAt, endedAt)}</Badge>
      </Col>
      {item.companyLogo ? (
        <Col md={12}>
          <img
            style={{
              maxHeight: '100px',
              margin: '10px 0px 10px 0px',
              boxShadow: '5px 5px 5px #000',
              borderRadius: '0.6rem !important',
            }}
            className="img-fluid rounded"
            src={item.companyLogo}
            alt="CompanyLogo"
          />
        </Col>
      ) : (
        ''
      )}
    </Row>
  );
}
