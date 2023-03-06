import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { 
  faShuffle,
  faGlobe,
  faBook,
  faFilm,
  faMusic,
  faMasksTheater,
  faBookOpen,
  faUsersRectangle,
  faShapes,
  faTv,
  faGamepad,
  faChessQueen,
  faLeaf,
  faComputer,
  faMobileScreen,
  faSquareRootVariable,
  faBookBible,
  faVolleyball,
  faEarthAsia,
  faLandmark,
  faBuildingFlag,
  faPalette,
  faPersonRays,
  faPaw,
  faBus
} from '@fortawesome/free-solid-svg-icons';

type CategoryType = {
    title: string;
    egTitle?: string;
    id: number;
    triviaId: number;
    icon: IconDefinition
}

const categories: CategoryType[] = [
  {
    title: "ランダム",
    id: 0,
    triviaId: 0,
    icon: faShuffle
  },
  {
    title: "一般知識",
    id: 1,
    triviaId: 9,
    icon: faGlobe
  },
  {
    title: "本・書籍",
    id: 2,
    triviaId: 10,
    icon: faBook
  },
  {
    title: "映画",
    id: 3,
    triviaId: 11,
    icon: faFilm
  },
  {
    title: "音楽",
    id: 4,
    triviaId: 12,
    icon: faMusic
  },
  {
    title: "ミュージカル・劇場",
    id: 5,
    triviaId: 13,
    icon: faMasksTheater
  },
  {
    title: "コミック",
    id: 6,
    triviaId: 29,
    icon: faBookOpen
  },
  {
    title: "日本のアニメ・マンガ",
    id: 7,
    triviaId: 31,
    icon: faUsersRectangle
  },
  {
    title: "カートゥーン・アニメーション",
    id: 8,
    triviaId: 32,
    icon: faShapes
  },
  {
    title: "テレビ",
    id: 9,
    triviaId: 14,
    icon: faTv
  },
  {
    title: "ビデオゲーム",
    id: 10,
    triviaId: 15,
    icon: faGamepad
  },
  {
    title: "ボードゲーム",
    id: 11,
    triviaId: 16,
    icon: faChessQueen
  },
  {
    title: "科学と自然",
    id: 12,
    triviaId: 17,
    icon: faLeaf
  },
  {
    title: "コンピューター",
    id: 13,
    triviaId: 18,
    icon: faComputer
  },
  {
    title: "ガジェット",
    id: 14,
    triviaId: 30,
    icon: faMobileScreen
  },
  {
    title: "数学",
    id: 15,
    triviaId: 19,
    icon: faSquareRootVariable
  },
  {
    title: "神話",
    id: 16,
    triviaId: 20,
    icon: faBookBible
  },
  {
    title: "スポーツ",
    id: 17,
    triviaId: 21,
    icon: faVolleyball
  },
  {
    title: "地理",
    id: 18,
    triviaId: 22,
    icon: faEarthAsia
  },
  {
    title: "歴史",
    id: 19,
    triviaId: 23,
    icon: faLandmark
  },
  {
    title: "政治",
    id: 20,
    triviaId: 24,
    icon: faBuildingFlag
  },
  {
    title: "美術",
    id: 21,
    triviaId: 25,
    icon: faPalette
  },
  {
    title: "有名人",
    id: 22,
    triviaId: 26,
    icon: faPersonRays
  },
  {
    title: "動物",
    id: 23,
    triviaId: 27,
    icon: faPaw
  },
  {
    title: "乗り物",
    id: 24,
    triviaId: 28,
    icon: faBus
  }
];

export { categories };