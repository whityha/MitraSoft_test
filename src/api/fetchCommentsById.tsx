import axios from 'axios';

export const fetchCommentsById = async (id: number): Promise<Array<Comment>> => {
    return axios
        .get<Comment[]>(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
        .then((response) => response.data);
};
