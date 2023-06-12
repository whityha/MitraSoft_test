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

export interface User {
    [x: string]: any;
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
            lat: string;
            lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}
