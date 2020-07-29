import { IProject } from '../component/project/IProject';
import brmsDashboard from '../asset/brms-dashboard.jpg';
import brosChatting from '../asset/bros-chatting.jpg';
import riderManamgement from '../asset/rider-management-list.jpg';
import socketServer from '../asset/socket-server-monitor.jpg';

const project: IProject.Payload = {
  disable: false,
  list: [
    {
      title: 'BROS 2.0 (배민라이더스 오퍼레이팅 시스템)',
      startedAt: '2016-02',
      endedAt: '2019-01',
      where: '우아한형제들(배달의민족), 팀내 메인 개발운영 프로젝트',
      projectImg: brmsDashboard,
      descriptions: [
        {
          content: '프로젝트 상세정보 바로가기',
          weight: 'MEDIUM',
          href: 'https://kimchanjung.github.io/projects/2020/01/01/bros-v2/',
        },
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트 인원 6명 중 프로젝트 원으로 참여' }],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '라이더의 실시간 주문현황의 관제 및 운영' },
            { content: '배달권역 및 운영에 필요한 설정 기능' },
            { content: '라이더 배달료 정산에 필요한 각종 데이터 제공' },
            { content: 'BROS 1.0에 더 추가된 각종 기능 셋 제공' },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Back-End - <strong>Java, Spring-Boot, JPA</strong>' },
            { content: 'Front-End - WoowahanJS(사내 SPA Framework)' },
            { content: 'Etc - <strong>AWS, Redis, Websocket</strong>' },
          ],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'AWS 인프라 위에서 개발된 팀내 최초 프로젝트로써 수직 상승하는 사업 니즈에 맞춰 flexible한 인프라 자원 운영이 가능해짐',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         '본격적으로 팀내 코드 리뷰, 테스트코드, Pair Programming 문화가 정착 되기 시작한 프로젝트',
        //     },
        //     { content: '팀내 개발 문화가 시스템 안정성을 높이는 결과를 가져왔음(무장애 300일)' },
        //     {
        //       content:
        //         '장애 발생시 대외 신뢰성 추락, 금전적 피해를 감안해 보았을 때 안정성은 매우 중요한 가치라는 것을 증명해 보임(결과물을 빨리 내는 것에 대비하여)',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: '라이더운영시스템',
      startedAt: '2019-02',
      endedAt: '2019-05',
      where: '우아한형제들(배달의민족)',
      projectImg: riderManamgement,
      descriptions: [
        {
          content: '프로젝트 상세정보 바로가기',
          weight: 'MEDIUM',
          href: 'https://kimchanjung.github.io/projects/2020/01/02/brms/',
        },
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 인원 2 명' },
            { content: '백엔드 전반적인 설계 및 프로젝트 기본 코드 생성 및 비즈니스 코드 작성' },
            { content: 'React 프론트는 대부분 90% 전담 개발' },
          ],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '라이더정보 관리 및 연동' },
            {
              content:
                '배달운영시스템과 MSA로 분리 구성 되어 상호 비동기 데이터 연동 (AWS - SQS, SNS)',
            },
            { content: 'SAP(ERP) 시스팀과 연동' },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Back-End - <strong>Java, Spring-Boot, JPA</strong>' },
            { content: 'Front-End - <strong>React, Mobx, Material-UI</strong>' },
            { content: 'Etc - <strong>Amazon SNS, SQS</strong>' },
          ],
        },
        {
          content: '관련 기술블로그',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: 'React에서 Mobx 경험기 (Redux와 비교기)',
              href: 'https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html',
            },
            {
              content: '[마이크로서비스] 스프링 마이크로서비스 정리 (spring microservice, msa)',
              href: 'https://kimchanjung.github.io/tech/2020/05/06/spring-microservice-summary/',
            },
          ],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '<span class="text-highlighter">React + Mobx의 주말 개인 프로젝트로 Front-End의 60% 정도의 베이스코드를 완성</span>하여 실제 개발 기간단축 및 팀내 차기 Front-End SPA 프레임워크 채택의 결정적 역할을 함(vs Vue.js)',
            },
            {
              content:
                '기존 배달운영시스템에 포함 되어 있던 라이더 관련 기능을 MSA로 별도의 시스템으로 분리 신규 개발',
            },
            { content: '시스템간 강한 의존성을 제거' },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         'MSA로 구성시 시스템간 단순 ACTION을 처리하는 것과는 다르게 DB 데이터를 완전히 분리하여 이벤트소싱으로 서로 동기화 하고 부가적인 연동 처리 (Email 발송, 회계시스템 연동 등등)등 다소 복잡한 구성을 MSA 로 처리한다는 것은 기술 문서나 기술동향에 정답이 있다기 보다 상황에 맞게 절절히 (비동기, 동기) 처리 해야함을 느낌',
        //     },
        //     { content: '실무적인 경험이 더 중요한 분야 같음' },
        //   ],
        // },
      ],
    },

    {
      title: 'BROS 1.0 (배민라이더스 오퍼레이팅 시스템)',
      startedAt: '2015-02',
      endedAt: '2016-08',
      where: '우아한형제들(배달의민족)',
      projectImg: brosChatting,
      descriptions: [
        {
          content: '프로젝트 상세정보 바로가기',
          weight: 'MEDIUM',
          href: 'https://kimchanjung.github.io/projects/2020/01/03/bros-v1/',
        },
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [
            { content: '프로젝트 인원 5명' },
            { content: '배민라이더스운영시스템 API와 Angularjs 전담하여 개발' },
            { content: 'Websocket 서버를 전담하여 개발' },
            { content: '나머지 인원은 라이더앱 및 라이더앱 API 개발과 결제시스템 개발함' },
          ],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '주문접수 및 취소 기능, 채팅기능 제공.' },
            {
              content:
                '실시간 배달현황 및 라이더 위치 정보 제공, 라이더에게 실시간 배달건 배차 및 관제 기능.',
            },
            { content: '라이더 배달료 정산에 필요한 각종 데이터 제공' },
            { content: '주문, 배달, 라이더 배달료정산 데이터 조회 및 제공.' },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Back-End - PHP, Node.js, Socket.io' },
            { content: 'Front-End - <strong>AngularJs 1.xx</strong>' },
            { content: 'Etc - <strong>Redis, Websocket</strong>' },
          ],
        },
        {
          content: '관련 기술블로그',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '실시간 서비스 경험기(배달운영시스템)',
              href: 'https://woowabros.github.io/woowabros/2017/09/12/realtime-service.html',
            },
          ],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'AngularJs 특징인 양방향 데이터 바인딩 기능을 실시간 데이터 제공에 적극 활용',
            },
            {
              content:
                '실시간 이벤트 서버 Socket.io(Node.js) 를 이용하여 데이터 생성, 변경, 삭제 시 실시간 이벤트로 데이터를 송수신 하여 AngularJS 모델에 반영하도록 하고 뷰의 갱신을 신경쓸 필요없는 구조.',
            },
            {
              content:
                '실시간 이벤트 서버 도입으로 Polling 방식에 비하여 DB호출 횟수를 현저하게 낮춤에도 불구 실시간 서비스가 가능하게 됨.',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         'AngularJS + Socket.io 신기술의 장점을 활용하여 개발 해볼 수 있었던 기회 통해 출근이 기다려지는 기분을 경험.',
        //     },
        //     {
        //       content:
        //         '실시간 서비스라는 다소 생소하고 복잡한 서비스 경험에 엄청난 개발욕구를 경험',
        //     },
        //     {
        //       content:
        //         '실무를 통해서만 습득 할 수 있는 실시간 서비스만의 개발, 운영 이슈에 대한 깊이 있는 경험.',
        //     },
        //   ],
        // },
      ],
    },

    {
      title: 'Real-Time Messaging Server',
      startedAt: '2015-08',
      endedAt: '2016-08',
      where: '우아한형제들(배달의민족)',
      projectImg: socketServer,
      descriptions: [
        {
          content: '프로젝트 상세정보 바로가기',
          weight: 'MEDIUM',
          href: 'https://kimchanjung.github.io/projects/2020/01/04/socket-io-server/',
        },
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트 인원 1명 전담하여 개발' }],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '실시간 이벤트 데이터 송수신, 멀티 플랫폼 지원, 채팅 구축 가능.' },
            {
              content:
                '실시간 서버현황(접속유저, NameSpace, Room) 및 CPU/Memory 사용량 모니터링 페이지 제공',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Back-End - <strong>Node.js, Socket.io</strong>' },
            { content: 'Front-End - <strong>AngularJs 1.xx</strong>' },
            { content: 'Etc - <strong>Redis pub/sub, Websocket</strong>' },
          ],
        },
        {
          content: '관련 기술블로그',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '실시간 서비스 경험기(배달운영시스템)',
              href: 'https://woowabros.github.io/woowabros/2017/09/12/realtime-service.html',
            },
          ],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                'SaaS서비스인 pubnub을 사용하여 실시간 처리를 구현 하였지만 <span class="text-highlighter">주말 개인 프로젝트로 시작하여 내재화에 성공함</span>',
            },
            {
              content:
                '실시간 이벤트가 필요한 서비스에 기능을 제공, 이를 활용하여 실시간성을 실현 및 DB 호출 수를 현저하게 낮춤.',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         '초기 개발 문서에 간략히 기술 된 이벤트 수신후 송신 부분만 구현 하면 되는 비교적 간단한 로직으로 생각(빙산의 일각)',
        //     },
        //     {
        //       content:
        //         'Node.js는 싱글 프로세스, 서버의 CPU Core 수만큼 Multi-Processing을 코드로 구현 해야 함',
        //     },
        //     {
        //       content:
        //         'Multi-Processing로 인하여 process간 상태(이벤트 메시지 데이터 및 관리 데이터)공유 이슈는 Redis pub/sub사용하여 해결.',
        //     },
        //     {
        //       content:
        //         'Client의 접속이 처음 접속한 Process에만 통신 하도록 sticky-session을 적용하여 해결함.',
        //     },
        //     {
        //       content:
        //         '서버현황데이터 제공을 위하여 Client, NameSpace, Room 현황 데이터를 Redis로 관리하던 중 간혹 동기식 처리로직으로 인하여 급격한 성능저하를 경험.',
        //     },
        //     {
        //       content:
        //         'Redis에는 데이터구조를 되도록 단순하게 설계, 관리 필요성과, Node.js는 동기적으로 처리하는 로직은 지양 해야함을 크게 느낌',
        //     },
        //     { content: 'NameSpace, Room, EventType 별로 적절한 구조화 필요' },
        //   ],
        // },
      ],
    },
    {
      title: '크라우드 소싱 라이더 등록 및 심사 처리 백오피스',
      startedAt: '2017-03',
      endedAt: '2017-05',
      where: '우아한형제들(배달의민족)',
      descriptions: [
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트 인원 2명 중 개발 및 프로젝트 리딩' }],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '크라우드소싱 형태로 라이더를 모집하는 사이트' },
            {
              content:
                '크라우드소싱 라이더 지원 요건 안내, 라이더 지원 정보 등록, 지원자 심사 및 승인 처리',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [
            { content: 'Back-End - <strong>Java Spring, JPA</strong>' },
            { content: 'Front-End - WoowahanJS(사내 SPA Framework)' },
            { content: 'Etc - AWS, Redis' },
          ],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '크라우드소싱방식의 라이더모집 여건 마련',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         '라이더 지원정보를 어떤 방식으로 라이더정보 엔티티로 구성할지에 대한 ORM(JPA)적 관점에서 깊이 있는 고민을 할 수 있었던 프로젝트.',
        //     },
        //   ],
        // },
      ],
    },
    {
      title: '부동산써브 안드로이드앱',
      startedAt: '2012-03',
      endedAt: '2012-07',
      where: '주)부동산써브',
      descriptions: [
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트 인원 1명 전담개발' }],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '모바일 웹페이지와 일부 네티브페이지가 조합된 부동산정보제공 하이브리드앱' },
            {
              content: '위치기반 지역별 매물 정보 및 부동산 투자 관련 정보 제공',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [{ content: 'Android' }],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content:
                '스마트폰이 본격적으로 보급되기 시작하고 모바일 페이지의 필요성이 생김, 그러나 기존 모바일 페이지로 유입되는 비율을 매우 낮았음, <span class="text-highlighter">하이브리드앱 출시 이후 접근성이 상승, 페이지 유입이 급격하게 상승 했던 효과.</span>',
            },
            {
              content:
                '<span class="text-highlighter">당시 개인 프로젝트로 안드로이드로 시작함</span>, 기존 웹페이지의 웹뷰+네이티브를 합친 하이브리드앱을 만들고 있었고 앱스토어에 올려도 괜찮겠다는 회사의 결정으로 출시.',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content:
        //         '개인적으로 시작한 일이 회사에 도움이 되는 일로 이어짐에 보람을 느낌.',
        //     },
        //     {
        //       content:
        //         '기본지식이 부족한 상태에서 진행, 코드 및 아키텍쳐구조가 미흡했던 것이 아쉬움.',
        //     },
        //   ],
        // },
      ],
    },

    {
      title: '부동산써브 모바일 사이트',
      startedAt: '2011-12',
      endedAt: '2012-03',
      where: '주)부동산써브',
      descriptions: [
        {
          content: '프로젝트 참여도',
          weight: 'MEDIUM',
          descriptions: [{ content: '프로젝트 인원 1명 전담개발' }],
        },
        {
          content: '주요기능',
          weight: 'MEDIUM',
          descriptions: [
            { content: '부동산 매물 및 투자정보 사이트의 모바일 버전' },
            {
              content: '위치기반 지역별 매물 정보 및 부동산 투자 관련 정보 제공',
            },
          ],
        },
        {
          content: '사용기술',
          weight: 'MEDIUM',
          descriptions: [{ content: 'asp, ajax, jquery' }],
        },
        {
          content: '효과',
          weight: 'MEDIUM',
          descriptions: [
            {
              content: '당시 모바일환경으로 넘어가는 과도기 시점에 모바일버전의 사이트 제공',
            },
          ],
        },
        // {
        //   content: '느낀점',
        //   weight: 'MEDIUM',
        //   descriptions: [
        //     {
        //       content: '모바일 버전의 UX 경험 제공을 위한 Javascript의 깊이 있는 사용 경험',
        //     },
        //   ],
        // },
      ],
    },
  ],
};

export default project;
