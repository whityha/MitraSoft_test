import { useAppSelector } from './useRedux';

export const usePosts = (arg?: 'global') => {
    if (arg === 'global') return useAppSelector((root) => root.posts);
    const posts = useAppSelector((root) => root.modifiedPosts || root.posts);
    console.log('usePosts', posts);
    return posts;
};
