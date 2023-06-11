export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export interface PostComment {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}
