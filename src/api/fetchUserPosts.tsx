import axios from 'axios';

import { User } from '@/types';

export const fetchUserPosts = async (id: number): Promise<User> => {
    return axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
        .then((response) => response.data);
};
