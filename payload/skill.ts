import { ISkill } from '../component/skill/ISkill';

const backend: ISkill.Skill = {
  category: 'Back-end',
  items: [
    {
      title: 'Java',
      level: 3,
    },
    {
      title: 'Spring',
      level: 3,
    },
    {
      title: 'JPA',
      level: 2,
    },
    {
      title: 'PHP',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'Kotlin',
      level: 1,
    },
  ],
};

const database: ISkill.Skill = {
  category: 'Database',
  items: [
    {
      title: 'MySQL',
      level: 2,
    },
    {
      title: 'SqlSever',
      level: 2,
    },
    {
      title: 'Redis',
      level: 1,
    },
    {
      title: 'InfluxDB',
      level: 1,
    },
  ],
};

const frontend: ISkill.Skill = {
  category: 'Front-end',
  items: [
    {
      title: 'React.js',
      level: 3,
    },
    {
      title: 'Mobx',
      level: 3,
    },
    {
      title: 'Javascript',
      level: 2,
    },
    {
      title: 'AngularJS 1.xx',
      level: 3,
    },
    {
      title: 'Webpack',
      level: 2,
    },
    {
      title: 'NPM 생태계',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 1,
    },
  ],
};

const etc: ISkill.Skill = {
  category: 'Etc',
  items: [
    {
      title: 'Websocket',
      level: 3,
    },
    {
      title: 'Socket.io',
      level: 3,
    },
  ],
};
const devCulture: ISkill.Skill = {
  category: 'Dev Culture & Architecture',
  items: [
    {
      title: 'TDD',
    },
    {
      title: 'Code Review',
    },
    {
      title: 'Pair Programming',
    },
    {
      title: 'MSA',
    },
  ],
};

const infra: ISkill.Skill = {
  category: 'Infra',
  items: [
    {
      title: 'AWS',
      level: 2,
    },
    {
      title: 'Jira',
    },
    {
      title: 'Confluence',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [backend, database, frontend, etc, infra, devCulture],
  tooltip: '3: 상\n2: 중\n1: 하',
};

export default skill;
