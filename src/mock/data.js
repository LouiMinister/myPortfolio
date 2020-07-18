import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '이동재의 dev 포트폴리오.', // e.g: 'Name | Developer'
  lang: 'kr', // e.g: en, es, fr, jp
  description: '개발자 이동재의 포트폴리오 입니다.', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '안녕하세요 저는',
  name: '이동재',
  titleTail: '입니다.',
  subtitle: '저는 ',
  subtitleHigh: '성장할 때',
  subtitleTail: ' 행복한 개발자 입니다.',
  cta: '더 알아보기',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpeg',
  paragraphOne: '저는 개발자가 된 이후로 일상이 RPG 게임과 같다는 생각을 합니다. 게임에서의 나의 캐릭터가 성장할 때 만족감을 느끼고 더 강해지고 싶다는 열망이 생기듯이, 개발자로서 제가 성장 할 때 만족감을 느끼고 더 뛰어난 개발자가 되고 싶다는 열망을 느낍니다.',
  paragraphTwo: '저는 새로운 기술들을 거리낌 없이 받아드릴 수 있습니다. 현업에서 새로운 어플리케이션을 개발할 때 최전선에서 어떤 기술을 도입하는것이 좋을 지 샘플 프로젝트를 만들고 정리, 발표할 수 있습니다. 또한 개인 시간에 인프런, 유튜브, 개발서적등을 통해 지식을 얻고, 사이드 프로젝트도 진행하고 있습니다.',
  paragraphThree: '즐거운 개발을 위해서는 팀원들과의 커뮤니케이션이 뒷받침 되어야 생각합니다. 나의 의견을 뚜렷히 주장하되 상대방의 입장을 헤아리고 수용하는 중용의 입장이 되기 위해 노력합니다.',
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: '',
    },
    {
      id: nanoid(),
      name: 'codepen',
      url: '',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: '',
    },
    {
      id: nanoid(),
      name: 'github',
      url: '',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
