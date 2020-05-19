import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '최근 까지 우아한형제들(배달의민족) Delivery Platform 팀(배민라이더스)에서 Amazon Webservice 인프라 기반 Java Spring 과 JPA 로 라이더의 배달 업무 수행을 위한 실시간 배달 관제 운영 시스템 Back-End, Front-End 및 라이더앱 API 개발해 왔습니다.',
    'Java 백엔드 개발자이지만 팀내 Front-End 기술리딩을 맡아 React와 Mobx로 Front-End를 개발, 실시간으로 라이더 및 배달 정보를 관리 하기 위하여 Node.js Socket.io 기반 Websocket Server 개발경험을 가지고 있습니다.. 또한 사내 타 시스템과 연동을 위해 MSA 환경을 고려한 개발경험이 있습니다.',
    '팀내 TDD 중요도 높고 사내 팀 중 가장 높은 TEST 커버리지기록, Code Review 및 Pair Programming 활발한 팀 문화 속에서 개발 업무를 하였습니다.',
  ],
  sign: 'kim chan jung',
  // sign: packageJson.author.name,
  // latestUpdated: '2019-07-24',
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
