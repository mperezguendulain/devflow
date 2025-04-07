import { ROUTES } from './routes';
import type { SidebarLink } from '../types';
import {
  HelpCenter,
  Home,
  LocalOffer,
  People,
  Person,
  Star,
  Work
} from '@mui/icons-material';

export const sidebarLinks: SidebarLink[] = [
  {
    IconComponent: Home,
    route: ROUTES.HOME,
    label: 'Home'
  },
  {
    IconComponent: People,
    route: ROUTES.COMUNITY,
    label: 'Community'
  },
  {
    IconComponent: Star,
    route: ROUTES.COLLECTION,
    label: 'Collections'
  },
  {
    IconComponent: Work,
    route: ROUTES.JOBS,
    label: 'Find Jobs'
  },
  {
    IconComponent: LocalOffer,
    route: ROUTES.TAGS,
    label: 'Tags'
  },
  {
    IconComponent: Person,
    route: ROUTES.PROFILE,
    label: 'Profile'
  },
  {
    IconComponent: HelpCenter,
    route: ROUTES.ASK_QUESTION,
    label: 'Ask a question'
  }
];

export const hotQuestions = [
  { id: '1', title: 'How to create a custom hook in React?' },
  { id: '2', title: 'How to use React Query?' },
  { id: '3', title: 'How to use Redux?' },
  { id: '4', title: 'How to use React Router?' },
  { id: '5', title: 'How to use React Context?' }
];

export const popularTags = [
  { id: '1', name: 'react', questions: 100 },
  { id: '2', name: 'javascript', questions: 200 },
  { id: '3', name: 'typescript', questions: 150 },
  { id: '4', name: 'nextjs', questions: 50 },
  { id: '5', name: 'react-query', questions: 75 }
];
