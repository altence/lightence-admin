import { CategoryType } from './categoriesList';

export interface Component {
  name: string;
  url: string;
  categories: CategoryType[];
  keywords: string[];
}

// TODO review and come up with a better approach for urls
export const componentsData: Component[] = [
  {
    name: 'Protein',
    url: `/#protein`,
    categories: ['charts'],
    keywords: ['protein', 'charts', 'statistics'],
  },
  {
    name: 'Fat',
    url: `/#fat`,
    categories: ['charts'],
    keywords: ['fat', 'charts', 'statistics'],
  },
  {
    name: 'Bones',
    url: `/#bones`,
    categories: ['charts'],
    keywords: ['bones', 'charts', 'statistics'],
  },
  {
    name: 'Water',
    url: `/#water`,
    categories: ['charts'],
    keywords: ['water', 'statistics', 'charts'],
  },
  {
    name: 'Map',
    url: `/#map`,
    categories: ['maps'],
    keywords: ['maps', 'doctor', 'polyclinic'],
  },
  {
    name: 'Blood screening',
    url: `/#blood-screening`,
    categories: ['data tables', 'charts'],
    keywords: ['blood screening', 'statistics', 'data tables', 'charts'],
  },
  {
    name: 'Latest screenings',
    url: `/#latest-screenings`,
    categories: ['charts'],
    keywords: ['latest screenings', 'charts', 'statistics'],
  },
  {
    name: 'Treatment plan',
    url: `/#treatment-plan`,
    categories: ['data tables'],
    keywords: ['treatment plan', 'data tables', 'doctor'],
  },
  {
    name: 'Activity',
    url: `/#activity`,
    categories: ['charts'],
    keywords: ['activity', 'charts', 'statistics'],
  },
  {
    name: 'Covid',
    url: `/#covid`,
    categories: ['charts'],
    keywords: ['covid', 'charts', 'statistics'],
  },
  {
    name: 'Patient timeline',
    url: `/#patient-timeline`,
    categories: ['data tables'],
    keywords: ['patient timeline', 'data tables'],
  },
  {
    name: 'Health',
    url: `/#health`,
    categories: ['charts'],
    keywords: ['health', 'charts'],
  },
  {
    name: 'Favorite doctors',
    url: `/#favorite-doctors`,
    categories: ['data tables'],
    keywords: ['favorite doctors', 'data tables'],
  },

  {
    name: 'News',
    url: `/#news`,
    categories: ['data tables'],
    keywords: ['news', 'data tables'],
  },
];
