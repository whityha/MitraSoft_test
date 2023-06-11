import { useAppDispatch, useAppSelector } from '@/hooks/redux';
import { FETCH_COMMENTS, FETCH_POSTS } from '@/redux/actions';

const MainPage = () => {
    const dispatch = useAppDispatch();
    const { posts, comments } = useAppSelector((root) => {
        return {
            posts: root.posts,
            comments: root.comments,
        };
    });
    return (
        <div>
            <ul>
                {posts.map(({ id, title }) => (
                    <li key={id}>{title}</li>
                ))}
            </ul>
            <ul>
                {comments.map(({ id, name }) => (
                    <li key={id}>{name}</li>
                ))}
            </ul>
            <button onClick={() => dispatch(FETCH_POSTS())}>getPosts</button>
            <button onClick={() => dispatch(FETCH_COMMENTS(30))}>getComments</button>
        </div>
    );
};

export default MainPage;
