import { Tag } from './tag';

export interface Post {
    title: string;
    content: string;
    id: number;
    dateCreated: string;
    tags: Array<Tag>;
}