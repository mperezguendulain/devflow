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
