import { Accordion, Button, Spinner, useAccordionButton } from 'react-bootstrap';

import { useAppDispatch } from '@/hooks/useRedux';
import { FETCH_COMMENTS } from '@/redux/actions';
import { Post, PostComment } from '@/types';

import CommentText from './commentText';

interface CustomHandle extends Pick<Post, 'id'> {
    isComments: boolean;
    eventKey: string;
    className?: string;
}

const CustomHandle = ({ isComments, id, className, eventKey }: CustomHandle) => {
    const dispatch = useAppDispatch();

    const handleClick = useAccordionButton(eventKey, () => {
        isComments || dispatch(FETCH_COMMENTS(id));
    });

    return (
        <Button onClick={handleClick} className={className} variant="light">
            Комментарии
        </Button>
    );
};

const Comments = ({ id, comments }: { id: number; comments?: PostComment[] }) => {
    return (
        <>
            <Accordion>
                <CustomHandle isComments={!!comments} id={id} eventKey="0" className="mt-2 mb-2" />
                <Accordion.Collapse eventKey="0">
                    {comments ? (
                        <CommentText comments={comments} />
                    ) : (
                        <Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>
                    )}
                </Accordion.Collapse>
            </Accordion>
        </>
    );
};

export default Comments;
