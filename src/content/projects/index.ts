
import type { Project } from '@/types/project';
import { project as project1 } from './1-panel-admin';
import { project as project2 } from './2-app-movil';
import { project as project3 } from './3-landing-page';
import { project as project4 } from './4-ai-studio';

// It's important to sort projects by id in descending order
// to ensure the latest projects appear first.
export const projects: Project[] = [project4, project3, project2, project1];
