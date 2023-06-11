export interface Post {
    userId: number;
    id: number;
    title: string;
    body: string;
    comments?: PostComment[];
}

export interface PostComment {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
}
