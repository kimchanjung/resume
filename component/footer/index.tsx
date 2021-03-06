import { Row, Col } from 'reactstrap';
import { PropsWithChildren } from 'react';
import { Style } from '../common/Style';
import { HrefTargetBlank, EmptyRowCol } from '../common';
import { IFooter } from './IFooter';

export const Footer = {
  Component,
};

function Component({ payload }: PropsWithChildren<{ payload: IFooter.Payload }>) {
  return (
    <Row>
      <Col style={Style.footerCover}>
        <div style={Style.footer} className="text-center mt-2">
          <EmptyRowCol>
            <small>
              <HrefTargetBlank url="https://nextjs.org/" text="Next.js" /> v{payload.nextVersion}
              {' / '}
              CSS by <HrefTargetBlank url="https://getbootstrap.com" text="Bootstrap" /> v
              {payload.bootstrapVersion}
            </small>
          </EmptyRowCol>
          <EmptyRowCol>
            <small>
              v.{`${payload.version} / `}
              <HrefTargetBlank url={payload.github} text="Github" />
              {' / '}
              Thanks for <HrefTargetBlank url="https://blog.outsider.ne.kr/1234" text="Outsider" />
            </small>
          </EmptyRowCol>
          <br />
        </div>
      </Col>
    </Row>
  );
}
