import { IArticle } from '../component/article/IArticle';

const article: IArticle.Payload = {
  disable: false,
  title: '코딩스타일 참고 소스',
  list: [
    {
      content: '커머스(업소, 상품, 주문)도메인 기본 API',
      href:
        'https://github.com/kimchanjung/coding-style-reference-sample/tree/master/commerce-practice',
    },
    {
      content: '웹사이트 크롤링 & 파싱',
      href:
        'https://github.com/kimchanjung/coding-style-reference-sample/tree/master/crawling-practice',
    },
  ],
};

export default article;
