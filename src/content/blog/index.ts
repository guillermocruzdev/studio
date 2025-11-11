
import type { BlogPost } from '@/types/blog';
import { post as post1 } from './1-primeros-pasos-nextjs';
import { post as post2 } from './2-diseno-minimalista';
import { post as post3 } from './3-desplegando-en-vercel';
import { post as post4 } from './4-secretos-computadora';

// It's important to sort posts by id in descending order
// to ensure the latest posts appear first.
export const blogPosts: BlogPost[] = [post4, post3, post2, post1];
