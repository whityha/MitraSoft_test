import { useState } from 'react';
import { Accordion, Button, Spinner, useAccordionButton } from 'react-bootstrap';

import { fetchCommentsById } from '@/api/fetchCommentsById';
import { Post, PostComment } from '@/types';

import CommentText from './commentText';

interface CustomHandle extends Pick<Post, 'id'> {
    eventKey: string;
    setComments: (arg: PostComment[]) => void;
    className?: string;
}

const CustomHandle = ({ id, className, eventKey, setComments }: CustomHandle) => {
    const handleClick = useAccordionButton(eventKey, () => {
        setTimeout(() => {
            fetchCommentsById(id).then((data: PostComment[]) => setComments(data));
        }, 1000);
    });

    return (
        <Button onClick={handleClick} className={className} variant="light">
            Комментарии
        </Button>
    );
};

const Comments = ({ id }: { id: number; comments?: PostComment[] }) => {
    const [comments, setComments] = useState<PostComment[] | undefined>();
    return (
        <>
            <Accordion>
                <CustomHandle
                    setComments={setComments}
                    id={id}
                    eventKey="0"
                    className="mt-2 mb-2"
                />
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
