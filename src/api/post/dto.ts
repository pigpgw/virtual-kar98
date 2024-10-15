import { isArray, isEmpty } from "@/functions/validator";

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

export class PostDTO {
    id: number;
    title: string;
    content: string;
    author: string;
    date: Date;
    constructor({ id, title, content, author, date }: Post) {
        this.id = id;
        this.title = title;
        this.content = content;
        this.author = author;
        this.date = new Date(date);
    }

    public hasPost(posts: Post[]): boolean {
        return isArray(posts) && isEmpty(posts);
    }
}
