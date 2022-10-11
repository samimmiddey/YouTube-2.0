import { AiOutlineHome } from 'react-icons/ai';
import { MdOutlineExplore, MdOutlinePodcasts, MdOutlineSportsSoccer, MdOutlineCheckroom, MdOutlineLiveTv, MdOutlineSportsRugby, MdOutlineSportsCricket, MdOutlineSportsGolf } from 'react-icons/md';
import { FiCode, FiMusic } from 'react-icons/fi';
import { RiMovie2Line, RiLiveLine, RiReactjsFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { BsController } from 'react-icons/bs';
import { BiBitcoin, BiDumbbell, BiBasketball } from 'react-icons/bi';
import { SiTailwindcss, SiMaterialui } from 'react-icons/si';

const Categories = [
   {
      title: 'Explore',
      items: [
         { text: 'Home', icon: <AiOutlineHome style={{ fontSize: '1.25rem' }} /> },
         { text: 'Explore', icon: <MdOutlineExplore style={{ fontSize: '1.25rem' }} /> },
         { text: 'Live', icon: <RiLiveLine style={{ fontSize: '1.25rem' }} /> },
         { text: 'Podcast', icon: <MdOutlinePodcasts style={{ fontSize: '1.25rem' }} /> },
         { text: 'Fashion', icon: <MdOutlineCheckroom style={{ fontSize: '1.25rem' }} /> },
         { text: 'Crypto', icon: <BiBitcoin style={{ fontSize: '1.25rem' }} /> }
      ]
   },
   {
      title: 'Education',
      items: [
         { text: 'Coding', icon: <FiCode style={{ fontSize: '1.25rem' }} /> },
         { text: 'ReactJS', icon: <RiReactjsFill style={{ fontSize: '1.25rem' }} /> },
         { text: 'NextJS', icon: <TbBrandNextjs style={{ fontSize: '1.25rem' }} /> },
         { text: 'MaterialUI', icon: <SiMaterialui style={{ fontSize: '1.25rem' }} /> },
         { text: 'TailwindCSS', icon: <SiTailwindcss style={{ fontSize: '1.25rem' }} /> }
      ]
   },
   {
      title: 'Entertainment',
      items: [
         { text: 'Music', icon: <FiMusic style={{ fontSize: '1.25rem' }} /> },
         { text: 'Movies', icon: <RiMovie2Line style={{ fontSize: '1.25rem' }} /> },
         { text: 'Gaming', icon: <BsController style={{ fontSize: '1.25rem' }} /> },
         { text: 'Comedy', icon: <MdOutlineLiveTv style={{ fontSize: '1.25rem' }} /> }
      ]
   },
   {
      title: 'Sports',
      items: [
         { text: 'Football', icon: <MdOutlineSportsSoccer style={{ fontSize: '1.25rem' }} /> },
         { text: 'Cricket', icon: <MdOutlineSportsCricket style={{ fontSize: '1.25rem' }} /> },
         { text: 'Basketball', icon: <BiBasketball style={{ fontSize: '1.25rem' }} /> },
         { text: 'Golf', icon: <MdOutlineSportsGolf style={{ fontSize: '1.25rem' }} /> },
         { text: 'Rugby', icon: <MdOutlineSportsRugby style={{ fontSize: '1.25rem' }} /> },
         { text: 'Workout', icon: <BiDumbbell style={{ fontSize: '1.25rem' }} /> }
      ]
   }
];

export const TagItems = ['All', 'Coding', 'Sports', 'Movies', 'Series', 'HTML', 'CSS', 'JS', 'React', 'MUI', 'Tailwind', 'Redux', 'Figma', 'Firebase', 'Football', 'Street Food', 'Martial Arts', 'UFC', 'EDM', 'House Music', 'Podcast', 'News'];

export const colors = [
   '#ff3300', '#009999', '#6666ff', '#0066cc', '#00B3E6',
   '#33cc33', '#3366E6', '#009999', '#3399ff', '#B34D4D',
   '#80B300', '#809900', '#ff6666', '#6680B3', '#66991A',
   '#cc66ff', '#ff9900', '#FF1A66', '#E6331A', '#00cc66',
   '#66994D', '#B366CC', '#4D8000', '#B33300', '#ff33cc',
   '#66664D', '#991AFF', '#9933ff', '#0099cc', '#1AB399',
   '#E666B3', '#33991A', '#00cc99', '#B3B31A', '#00E680',
   '#4D8066', '#809980', '#cccc00', '#1AFF33', '#999933',
   '#FF3380', '#CCCC00', '#66E64D', '#4D80CC', '#9900B3',
   '#E64D66', '#4DB380', '#FF4D4D', '#99E6E6', '#6666FF'
];

export default Categories;