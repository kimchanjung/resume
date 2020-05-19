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
