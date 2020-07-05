import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '[Mobx] React 에서 Mobx 사용기',
      href: 'https://kimchanjung.github.io/tech/2020/05/08/react-mobx.html',
    },
    {
      content: '[Socket.io][websocket] 실시간 서비스 경험기(배달운영시스템 BROS1.0)',
      href: 'https://kimchanjung.github.io/tech/2020/05/08/real-time-service.html',
    },
    {
      content: '[마이크로서비스] 스프링 마이크로서비스 정리 (spring microservice, msa)',
      href: 'https://kimchanjung.github.io/tech/2020/05/06/spring-microservice-summary.html',
    },
    {
      content:
        '[Spring Security] 커스텀 필터를 이용한 인증 구현 - 스프링시큐리티 동작구조의 이해(1)',
      href: 'https://kimchanjung.github.io/spring/2020/07/01/spring-security-01.html',
    },
    {
      content:
        '[Spring] JPA EntityListeners에서 @Autowired를 통한 의존성 주입이 미동작하는 문제 해결',
      href:
        'https://kimchanjung.github.io/spring/2020/06/28/spring-jpa-antity-listner-autowired-not-working.html',
    },

    {
      content: '[Spring] yarn 빌드 react 프로젝트를 gradle에 통합 포함하여 빌드하는 방법',
      href:
        'https://kimchanjung.github.io/spring/2020/06/24/spring-gradle-build-with-front-end.html',
    },
    {
      content: '[React] Mobx의 async action(비동기 액션) 처리를 가장 깔끔하게 구현하는 방법',
      href: 'https://kimchanjung.github.io/react/2020/06/24/react-mobx-async-action.html',
    },
    {
      content: '[React] 로딩처리용 spinner를 효과적이고 깔끔하게 적용하는 방법',
      href: 'https://kimchanjung.github.io/react/2020/06/26/react-spinner.html',
    },
    {
      content: '코틀린 기본 문법 요약 정리 - [kotlin/cheat sheet]',
      href: 'https://kimchanjung.github.io/kotlin/2020/05/06/kotlin-basic-syntax-summary.html',
    },
    {
      content: 'Sherlock and anagrams - hackerank [코테/알고리즘]',
      href:
        'https://kimchanjung.github.io/algorithm/hackerrank/interviewkit/dictionaries-and-hashmaps/2020/05/08/sherlock-and-anagrams.html',
    },
    {
      content: '추상팩토리 패턴 - Abstract Factory Pattern',
      href: 'https://kimchanjung.github.io/design/pattern/2020/05/14/abstract-factory-pattern.html',
    },
  ],
};

export default article;
