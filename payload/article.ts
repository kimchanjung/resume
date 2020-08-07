import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,

  list: [
    {
      content: '우아한형제들 기술 블로그 - React 에서 Mobx 사용기',
      href: 'https://woowabros.github.io/experience/2019/01/02/kimcj-react-mobx.html',
    },
    {
      content: '우아한형제들 기술 블로그 - 실시간 서비스 경험기(배달운영시스템 BROS1.0)',
      href: 'https://woowabros.github.io/woowabros/2017/09/12/realtime-service.html',
    },
    {
      content: '[마이크로서비스] 스프링 마이크로서비스 정리 (spring microservice, msa)',
      href: 'https://kimchanjung.github.io/tech/2020/05/06/spring-microservice-summary/',
    },
    {
      content:
        '[Spring Security] 커스텀 필터를 이용한 인증 구현 - 스프링시큐리티 동작구조의 이해(1)',
      href: 'https://kimchanjung.github.io/programming/2020/07/01/spring-security-01/',
    },
    {
      content:
        '[Spring] JPA EntityListeners에서 @Autowired를 통한 의존성 주입이 미동작하는 문제 해결',
      href:
        'https://kimchanjung.github.io/programming/2020/06/28/spring-jpa-antity-listner-autowired-not-working/',
    },

    {
      content: '[Spring] yarn 빌드 react 프로젝트를 gradle에 통합 포함하여 빌드하는 방법',
      href:
        'https://kimchanjung.github.io/programming/2020/06/25/spring-gradle-build-with-front-end/',
    },
    {
      content: '[React] Mobx의 async action(비동기 액션) 처리를 가장 깔끔하게 구현하는 방법',
      href: 'https://kimchanjung.github.io/programming/2020/06/24/react-mobx-async-action/',
    },
    {
      content: '[React] 로딩처리용 spinner를 효과적이고 깔끔하게 적용하는 방법',
      href: 'https://kimchanjung.github.io/programming/2020/06/26/react-spinner/',
    },
    {
      content: '코틀린 기본 문법 요약 정리 - [kotlin/cheat sheet]',
      href: 'https://kimchanjung.github.io/programming/2020/05/06/kotlin-basic-syntax-summary/',
    },
    {
      content: 'Sherlock and anagrams - hackerank [코테/알고리즘]',
      href: 'https://kimchanjung.github.io/algorithm/2020/05/08/sherlock-and-anagrams/',
    },
    {
      content: '추상팩토리 패턴 - Abstract Factory Pattern',
      href: 'https://kimchanjung.github.io/design-pattern/2020/05/14/abstract-factory-pattern/',
    },
  ],
};

export default article;
