import { useEffect } from 'react';
import { ListGroup, Spinner } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

import Post from '@/components/postsList/post';
import UserInfo from '@/components/userInfo';
import { useAppDispatch, useAppSelector } from '@/hooks/useRedux';
import { CLEAR_USER, FETCH_USER, FETCH_USER_POSTS } from '@/redux/actions/userActions';
import { PATHS } from '@/routes';
import { Post as PostType } from '@/types';
import { User } from '@/types';

const Details = () => {
    const { id } = useParams();
    const dispatch = useAppDispatch();
    const user: User = useAppSelector(({ userReducer }) => userReducer.currentUser);
    const userPosts: PostType[] = useAppSelector(({ userReducer }) => userReducer.userPosts);

    useEffect(() => {
        dispatch(CLEAR_USER());
        dispatch(FETCH_USER(id!));
        dispatch(FETCH_USER_POSTS(id!));
    }, [id]);

    return (
        <div className="m-3">
            {user && userPosts ? (
                <>
                    <Button variant="dark" className="mb-3">
                        <Link to={PATHS.MAIN}>Назад</Link>
                    </Button>
                    <UserInfo user={user} />
                    <ListGroup as="ul" className="mt-3">
                        {userPosts.map(({ id, title, body, userId }) => (
                            <Post key={id} body={body} userId={userId} title={title} id={id} />
                        ))}
                    </ListGroup>
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Details;
