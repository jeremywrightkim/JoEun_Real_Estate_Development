import {
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import heroImage from '../images/MS_hotel.jpg';
import pp1 from '../images/portfolio/portfolio-1.jpg';
import pp2 from '../images/portfolio/portfolio-2.jpg';
import pp3 from '../images/portfolio/portfolio-3.jpg';
import pp4 from '../images/portfolio/portfolio-4.jpg';
import pp5 from '../images/portfolio/portfolio-5.jpg';
import pp6 from '../images/portfolio/portfolio-6.jpg';
import pp7 from '../images/portfolio/portfolio-7.jpg';
import pp8 from '../images/portfolio/portfolio-8.jpg';
import y_sample1 from '../images/portfolio/y_sample1.jpg';
import y_sample2 from '../images/portfolio/y_sample2.jpg';
import y_sample3 from '../images/portfolio/y_sample3.jpg';
import y_sample4 from '../images/portfolio/y_sample4.jpg';
import y_sample5 from '../images/portfolio/y_sample5.jpg';
import profilepic from '../images/profilepic.jpg';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: '조은개발㈜',
  description: "조은개발㈜ 웹페이지",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: '대표이사 인사말',
  Contact: '연락처',
  Portfolio: '사진첩',
  Resume: '업력 및 이력',
  Stats: 'stats',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  name: `조은개발㈜`,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        조은개발㈜은 2003년 설립 이래 부산을 중심으로 
        <strong className="text-stone-100"> 주거 · 상업 · 복합개발 </strong> 
        사업을 추진해온 부동산 개발 및 컨설팅 전문기업입니다.        
        창업초기부터 
        <strong className="text-stone-100"> 토지 매입, 도시계획 및 용도변경 컨설팅, 재개발 및 재건축 프로젝트, 프로젝트 파이낸싱(PF) 자문 </strong>
        등 다양한 영역에서 전문성을 축적해왔습니다.
      </p>
    </>
  ),
  actions: [
    {
      href: '/assets/resume.pdf',
      text: 'PDF download',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: `김광섭, 조은개발㈜ 대표이사, 1956년생.
  1981년부터 부동산 중개 · 개발 업계에 몸담아 오며, 40년이 넘는 경험을 바탕으로 다양한 주거 및 상업시설 프로젝트를 성공적으로 이끌어왔습니다. 이를 통해 조은개발㈜은 안정적인 사업 수행 능력과 신뢰성을 인정받고 있으며, 앞으로도 지역 발전과 도시가치 재고를 위한 혁신적인 개발사업을 지속적으로 추진할 계획입니다.`,
  aboutItems: [
    {label: 'Nationality', text: '대한민국', Icon: FlagIcon},
    {label: 'Company', text: '조은개발㈜', Icon: BuildingOffice2Icon},
    {label: 'Location', text: '부산시, 해운대구', Icon: MapIcon},
    {label: 'Foundation day', text: '2003.01.13.', Icon: CalendarIcon},
    {label: 'Category', text: '토지매입, 재개발, 재건축 컨설팅, 프로젝트 파이낸싱', Icon: SparklesIcon},
    //{label: 'Study', text: 'University of Victoria', Icon: AcademicCapIcon},
  ],
};


/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: '여의도 Y빌딩 재건축 프로젝트',
    description: '자료샘플1',
    url: '',
    image: y_sample1,
  },
  {
    title: '여의도 Y빌딩 재건축 프로젝트',
    description: '자료샘플2',
    url: '',
    image: y_sample2,
  },
  {
    title: '여의도 Y빌딩 재건축 프로젝트',
    description: '자료샘플3',
    url: '',
    image: y_sample3,
  },
  {
    title: '여의도 Y빌딩 재건축 프로젝트',
    description: '자료샘플4',
    url: '',
    image: y_sample4,
  },
  {
    title: '여의도 Y빌딩 재건축 프로젝트',
    description: '자료샘플5',
    url: '',
    image: y_sample5,
  },
  {
    title: 'sample1',
    description: '샘플1',
    url: '',
    image: pp1,
  },
  {
    title: 'sample2',
    description: '샘플2',
    url: '',
    image: pp2,
  },
  {
    title: 'sample3',
    description: '샘플3',
    url: '',
    image: pp3,
  },
  {
    title: 'sample4',
    description: '샘플4',
    url: '',
    image: pp4,
  },
  {
    title: 'sample5',
    description: '샘플5',
    url: '',
    image: pp5,
  },
  {
    title: 'sample6',
    description: '샘플6',
    url: '',
    image: pp6,
  },
  {
    title: 'sample7',
    description: '샘플7',
    url: '',
    image: pp7,
  },
  {
    title: 'sample8',
    description: '샘플8',
    url: '',
    image: pp8,
  },

];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
    {
    date: '2026.03',
    location: '부산 해운대구',
    title: `'조은개발주식회사'로 상호변경`,
    content: '',
  },
  {
    date: '2025-',
    location: '부산 해운대구',
    title: '해운대 하버타운 재건축 및 재개발 추진 중',
    content: '',
  },
    {
    date: '2025-',
    location: '부산 중구 광복동',
    title: '광복동 1가 7일원 토지 1,741.22평 주상복합건설물 개발사업 컨설팅 진행중',
    content: '',
  },
    {
    date: '-',
    location: '부산, 반도, 동일, 김해 삼계동',
    title: '부산, 반도 동일 김해 삼계동 APT부지매입 부동산 컨설팅 및 부지매입',
    content: '',
  },
    {
    date: '2008-2011',
    location: '부산 해운대구 우동',
    title: '우동 651-2번지 해운대 그랜드호텔 매각 및 주상복합건물 개발사업 컨설팅 완료',
    content: '지하 6층~지상 22층, 30,951평',
  },
    {
    date: '',
    location: '-',
    title: 'PF사업 KB신탁, PF 340억 신탁해제, 하나캐피탈, 하나은행',
    content: '',
  },
    {
    date: '2008',
    location: '부산 해운대구 중동',
    title: '중동 1417-2번지 상업용지 309평 해수욕장입구 근린생활시설 (씨스타빌딩) 사업시행 완료',
    content: '건축연면적 1,959.67평, 용적율 880.81%, 규모 지하3층~지상15층',
  },  
   {
    date: '2006.01',
    location: '부산',
    title: '`지앤에이치산업개발주식회사` 에서 `조은개발주식회사` 상호변경',
    content: '',
  },
  {
    date: '2005',
    location: '부산 송도 암남동',
    title: '암남동 589-1번지 외 2,615평 송도 해수욕장 주변, 준주거지역 및 일반주거지역에 대한 지구단위 및 종 변경 공동주택 개발사업 컨설팅 완료',
    content: '',
  },
    {
    date: '2005.01',
    location: '부산 수영구 남천동',
    title: '남천동 25-1번지 반도건설 계열회사, 반도 모터스㈜ 인피니티 자동차 전시장 컨설팅 완료',
    content: '',
  },
    {
    date: '2003.07',
    location: '부산 해운대구 우동',
    title: '우동 862번지 일원 상업용지 3,000여평 아파트 개발사업 컨설팅 완료 (한신공영)',
    content: '',
  },
    {
    date: '2003.01',
    location: '부산',
    title: '지앤에이치산업개발주식회사 부동산개발 및 주택건설업 창업',
    content: '',
  },
    {
    date: '',
    location: '',
    title: '패션, 논노, 까뜨리네트, 조이너스, 한섬, 파크랜드 패션브랜드 유치 및 매장개설 및 화장품, 이동통신 매장 개설 및 대리점 유치 등',
    content: '',
  },
  {
    date: '1981-2006',
    location: '부산 중구 광복동',
    title: '부동산 개발 및 중개업 종사',
    content: '',
  },
];



/**
 * Contact section
 */
export const contact: ContactSection = {
  headerText: '연락처',
  description: '부동산 개발 관련 상담은 아래 번호로 연락하시면 친절히 안내해 드리겠습니다.',
  items: [
    {
      type: ContactType.Phone,
      text: '051-245-8989, 051-638-4989, 김광섭(010-3838-4989)',
      
    },
    {
      type: ContactType.Location,
      text: '부산시, 해운대구', 
      href: 'https://www.google.com/maps/place/data=!3m1!4b1!4m5!3m4!1s0x35688d5ea057a849:0x380aabbc96140ef0!8m2!3d35.1596932!4d129.1595939',
    },
    {
      type: ContactType.Location,
      text: '계열사: 보산부동산㈜, MS호텔', 
      href: 'https://maps.app.goo.gl/LFD5fE9L7kyW841n9',
    },
  ],
};

/**
 * Social items
 */
//export const socialLinks1: Social[] = [
//  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/tbakerx'},
//  {label: 'Stack Overflow', Icon: StackOverflowIcon, href: 'https://stackoverflow.com/users/8553186/tim-baker'},
//  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com/in/timbakerx/'},
//  {label: 'Instagram', Icon: InstagramIcon, href: 'https://www.instagram.com/reactresume/'},
//  {label: 'Twitter', Icon: TwitterIcon, href: 'https://twitter.com/TimBakerx'},
//];
