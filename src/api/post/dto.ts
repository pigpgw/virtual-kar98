import { isArray, isEmpty } from "@/functions/validator";

export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
    date: string;
}

export class PostDTO {
    posts: Post[];

    constructor(posts: Post[] = []) {
        if (this.hasPost(posts)) {
            throw new Error("");
        }
        this.posts = posts;
    }

    get length() {
        return this.posts.length;
    }

    public hasPost(posts: Post[]): boolean {
        return isArray(posts) && isEmpty(posts);
    }
}

// const post = new PostDTO();

// post.posts[0].author;
// post.length;

// dto
// setter 사용 x 원본 데이터 변경x getter는 사용해도 되지만  setter는 안됨
// getter로 원본은 바꾸지 않지만 무언가를 가져오는 행위는 비추천
// 위처험 벨리데이터는 사용 가능 getter도 아닌니
