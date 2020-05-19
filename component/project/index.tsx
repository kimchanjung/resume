import { PropsWithChildren } from 'react';
import ProjectRow from './row';
import { CommonSection } from '../common/CommonSection';
import { IProject } from './IProject';
import { PreProcessingComponent } from '../common/PreProcessingComponent';

type Payload = IProject.Payload;

export const Project = {
  Component: ({ payload }: PropsWithChildren<{ payload: Payload }>) => {
    return PreProcessingComponent<Payload>({
      payload,
      component: Component,
    });
  },
};

function Component({ payload }: PropsWithChildren<{ payload: Payload }>) {
  return (
    <CommonSection title="주요 PROJECT (중요도 순)">
      <ProjectRow payload={payload} />
    </CommonSection>
  );
}
