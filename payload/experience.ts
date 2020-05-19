import { IExperience } from '../component/experience/IExperience';

const experience: IExperience.Payload = {
  disable: false,
  list: [
    {
      title: '우아한형제들(배달의민족) - 딜리버리플랫폼팀(배민라이더스)',
      position: 'Java 백엔드, 라이더앱 API, React 프론트엔드 개발',
      startedAt: '2013-03',
      endedAt: '2019-06',
      descriptions: [
        'Websocket Server 바탕으로 라이더들의 배달업무 현황을 실시간으로 관제, 운영 시스템 개발',
        'Java Spring Boot 기반으로 Back-End API, 라이더 앱 API 개발',
        'React, Mobx , Material-UI 활용 Front-End 개발(팀내 JavaScript Front-End 기술 리딩)',
        'Socket.IO(NodeJS) 기반 Websocket Server 개발',
        'AWS Beanstalk, SQS, SNS 등 인프라 환경에서 개발',
        '딜리버리플랫폼 특성상 사내 타팀과 MSA 기반 SQS-SNS 비동기 서비스 개발',
        '팀내에서 코드리뷰 활발, 여건이 되는 경우에 한하여 풀타임 Pair programming 진행',
        '사내 팀 중 가장 높은 테스트 커버리지 기록 (Snarqube 커버리지 기준, 무장애 300일 달성)',
      ],
      skillKeywords: [
        'Java',
        'Spring',
        'React.js',
        'Mobx',
        'AWS',
        'TDD',
        'Pair Programing',
        'Socket.io',
      ],
    },
    {
      title: '주)부동산써브',
      position: '웹개발',
      startedAt: '2008-09',
      endedAt: '2012-08',
      descriptions: [
        '부동산써브 포털 사이트 개발',
        '부동산써브 모바일 웹 사이트 개발',
        '부동산써브 안드로이드 앱 개발(Native + WebView)',
      ],
      skillKeywords: ['ASP', 'Sqlserver', 'Android'],
    },
  ],
};

export default experience;
