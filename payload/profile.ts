import { faEnvelope, faPhone, faInfo } from '@fortawesome/free-solid-svg-icons';
// import { faBell } from '@fortawesome/free-regular-svg-icons';
import { faGithub, faBlogger } from '@fortawesome/free-brands-svg-icons';
import image from '../asset/profile-image.png';
import { IProfile } from '../component/profile/IProfile';

const profile: IProfile.Payload = {
  disable: false,

  // image: 'https://resume.yowu.dev/static/image/profile_2019.png',
  image,
  name: {
    title: '김찬정',
    small: '',
  },
  contact: [
    {
      title: 'mogomezwai@gmail.com',
      link: 'mailto:mogomezwai@gmail.com',
      icon: faEnvelope,
    },
    {
      title: 'Please contact me by email',
      icon: faPhone,
      badge: true,
    },
    {
      title: 'https://github.com/kimchanjung',
      link: 'https://github.com/kimchanjung',
      icon: faGithub,
    },
    {
      title: 'https://kimchanjung.github.io/',
      link: 'https://kimchanjung.github.io/',
      icon: faBlogger,
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
      'Java / Spring / React / Mobx / 배민라이더 실시간 관제, 배달, 배차 운영 개발 / TDD / MSA / Code Review ',
    icon: faInfo,
  },
};

export default profile;
