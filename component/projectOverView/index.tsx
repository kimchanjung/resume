import { PropsWithChildren } from 'react';
import { PreProcessingComponent } from '../common/PreProcessingComponent';
import { IProjectOverView } from './IProjectOverView';
import { EmptyRowCol } from '../common';
import { CommonSection } from '../common/CommonSection';
import { CommonDescription } from '../common/CommonDescription';
import Util from '../common/Util';

type Payload = IProjectOverView.Payload;

export const ProjectOverView = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="PROJECT OVERVIEW">
      <ProjectOverViewRow payload={payload} />
    </CommonSection>
  );
}

function ProjectOverViewRow({ payload }: PropsWithChildren<{ payload: Payload }>) {
  const log = Util.debug('ProjectOverView');

  log(payload);

  return (
    <EmptyRowCol>
      <CommonDescription descriptions={payload.list} />
    </EmptyRowCol>
  );
}
