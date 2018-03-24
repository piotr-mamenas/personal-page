import { Tag } from './tag';

export interface Post {
    title: string;
    content: string;
    id: number;
    dateCreated: string;
    tags: {
        name: string;
        icon: string;
        iconColor: string;
    }
}