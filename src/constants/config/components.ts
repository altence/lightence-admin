import { CategoryType } from '../categoriesList';

export interface Component {
  name: string;
  title: string;
  url: string;
  categories: CategoryType[];
  keywords: string[];
}

export const components: Component[] = [];
