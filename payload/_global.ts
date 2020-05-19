import favicon from '../asset/favicon.ico';
import previewImage from '../asset/preview.jpg';
import { IGlobal } from '../component/common/IGlobal';

const title = '김찬정 이력서';
const description = '김찬정 Java 백엔드/React 프론트엔드 개발자 이력서 ';

export const _global: IGlobal.Payload = {
  favicon,
  headTitle: title,
  seo: {
    title,
    description,
    openGraph: {
      title,
      description,
      images: [
        {
          url: previewImage,
          width: 800,
          height: 600,
          alt: 'OpenGraph Image Sample.png',
        },
      ],
      type: 'profile',
      profile: {
        firstName: '김',
        lastName: '찬정',
        username: '김찬정',
        gender: '남',
      },
    },
  },
};
