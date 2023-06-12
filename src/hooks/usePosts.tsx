import { Post } from '@/types';

import { useAppSelector } from './useRedux';

export const usePosts = (arg?: 'global'): Post[] => {
    if (arg === 'global') return useAppSelector(({ PostsListReducer }) => PostsListReducer.posts);
    const posts = useAppSelector(
        ({ PostsListReducer }) => PostsListReducer.modifiedPosts || PostsListReducer.posts
    );
    return posts;
};
