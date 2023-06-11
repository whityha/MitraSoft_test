import axios from 'axios';

import { Post } from '@/types';

export const fetchPosts = async (): Promise<Array<Post>> => {
    return axios
        .get<Post[]>('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.data);
};
