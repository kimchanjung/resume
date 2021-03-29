import { faEnvelope, faPhone, faInfo } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile-photo.jpg';
import { IProfile } from '../component/profile/IProfile';
import { author } from '../package.json';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: author.nameKor,
    small: '',
  },
  contact: [
    {
      title: author.email,
      link: `mailto:${author.email}`,
      icon: faEnvelope,
    },
    {
      title: '010-6751-1979',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://kimchanjung.github.io/',
      link: 'https://kimchanjung.github.io/',
      icon: faBlogger,
    },
    {
      title: 'https://github.com/kimchanjung',
      link: 'https://github.com/kimchanjung',
      icon: faGithub,
    },

    /** 
    {
      link: 'https://www.facebook.com/gomezwai.mo.3',
      icon: faFacebook,
    },
    
    {
      // title: 'YouTube',
      // link: 'https://www.youtube.com/channel/UC3SyT4_WLHzN7JmHQwKQZww',
      // icon: faRss,
      icon: faYoutube,
    },
    */
  ],
  notice: {
    title:
      'JAVA 백엔드 개발자 / 배달의민족 / 우아한형제들 / 배민라이더스 실시간 관제 배차 운영 개발 / Java / Spring / React / Mobx / MSA',
    icon: faInfo,
  },
};

export default profile;
