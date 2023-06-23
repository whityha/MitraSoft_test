import axios from 'axios';

import { PostComment } from '@/types';

export const fetchCommentsById = async (id: number): Promise<Array<PostComment>> => {
    return axios
        .get<PostComment[]>(`https://jsonplaceholder.typicode.com/comments`, {
            params: {
                postId: id,
            },
        })
        .then((response) => response.data);
};
