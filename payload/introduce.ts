import { IIntroduce } from '../component/introduce/IIntroduce';
import { lastestUpdatedAt, author } from '../package.json';

const introduce: IIntroduce.Payload = {
  disable: false,

  contents: [
    '<strong>배달의민족 배민라이더스</strong>에서 실시간 라이더 <strong>배달 관제 운영 시스템 Back-End, Front-End 및 라이더앱 API 개발(AWS, <strong>Java Spring </strong>).</strong><br/>',
    '<strong>팀내 Front-End 기술리딩 React, Mobx로 Front-End를 개발.</strong><br/>',
    '<strong>실시간</strong> 라이더 관제 및 배달 처리를 위한 <strong>WebSocket</strong> 서버 개발.',
    '사내 팀 중 <strong>가장 높은 TEST 커버리지기록 TDD, Code Review 및 Pair Programming 활발한 팀 문화</strong> 속에서 개발 업무.',
    '<span class="text-highlighter">좀 더 넓은 TEST 커버리지!  좀 더 나은 Architecture!  좀 더 나은 Code Pattern! 보다 더 간결하고 깔끔한 코드!를 항상 갈망 합니다.</span>',
  ],
  sign: author.name,
  latestUpdated: lastestUpdatedAt,
};

export default introduce;
