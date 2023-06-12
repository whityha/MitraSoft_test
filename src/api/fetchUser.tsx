import axios from 'axios';

import { User } from '@/types';

export const fetchUser = async (id: number): Promise<User> => {
    return axios
        .get<User>(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.data);
};
