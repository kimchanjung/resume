import { IExperience } from '../component/experience/IExperience';
import rserveLogo from '../asset/r-serve-logo.png';
import woowaBrosLogo from '../asset/woowa-bros-logo.jpg';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '우아한형제들(배달의민족) - 딜리버리플랫폼팀(배민라이더스)',
      companyDesc: '배민라이더스는 배달되지 않는 음식점의 음식을 대신 배달 해주는 서비스 입니다.',
      position:
        'Java 백엔드, 라이더앱 API, React 프론트엔드 개발, 실시간 라이더 관제/배달/배차 운영 시스템 개발',
      startedAt: '2013-03',
      endedAt: '2019-06',
      companyLogo: woowaBrosLogo,
      descriptions: [
        '<strong>Java Spring Boot</strong> 기반으로 <strong>Back-End API</strong>, 라이더 앱 API 개발',
        '<strong>React, Mobx , Material-UI</strong> 활용 <strong>Front-End</strong> 개발(팀내 JavaScript Front-End 기술 리딩)',
        'Socket.IO(node.js) 기반 <strong>Websocket Server 개발</strong>',
        'Websocket Server 바탕으로 <strong>라이더들의 배달/배차업무 현황을 실시간</strong>으로 관제, 운영 시스템 개발',
        '<strong>AWS Beanstalk, SQS, SNS</strong> 등 인프라 환경에서 개발',
        '타팀과 <strong>MSA 기반 SQS-SNS 비동기 서비스</strong> 개발',
        '팀내에서 코드리뷰 활발, 여건이 되는 경우에 한하여 풀타임 Pair Programming 진행',
        '사내 팀 중 <strong>가장 높은 TEST 커버리지 기록</strong> (Sonarqube 커버리지 기준, 무장애 300일 달성)',
      ],
      skillKeywords: [
        'Java',
        'Spring-Boot',
        'JPA',
        'React.js',
        'Mobx',
        'AWS',
        'Socket.io',
        'Redis',
        'InfluxDB',
        'TDD',
        'Code Review',
        'Pair Programing',
      ],
    },
    {
      title: '주)부동산써브',
      companyDesc:
        '부동산 매물 정보 및 투자 교육 컨설팅 종합 포털 사이트를 운영하고 부동산중개업소 프랜차이즈 회원을 보유하고 있습니다.',
      position: '웹개발',
      startedAt: '2008-09',
      endedAt: '2012-08',
      companyLogo: rserveLogo,
      descriptions: [
        '부동산써브 포털 사이트 개발',
        '부동산써브 모바일 웹 사이트 개발',
        '부동산써브 안드로이드 앱 개발(Native + WebView)',
      ],
      skillKeywords: ['Android', 'ASP', 'Sqlserver'],
    },
  ],
};

export default experience;
