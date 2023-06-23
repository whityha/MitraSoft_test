import { useState } from 'react';
import { Button, Image, Nav, Offcanvas } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';

const Header = () => {
    const [isShow, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <header className="p-3 d-flex bg-light justify-content-between">
            <h2>Pavel Khapaliuk</h2>
            <Button variant="light" onClick={handleShow}>
                <Image src="/assets/burger.svg" />
            </Button>
            <Offcanvas show={isShow} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Павел Хапалюк</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <Image width={150} src="/assets/PHOTO.webp" alt="me" rounded />
                    <Nav className="me-auto">
                        <Link onClick={handleClose} className="p-2" to={PATHS.MAIN}>
                            Home
                        </Link>
                        <Link onClick={handleClose} className="p-2" to={PATHS.ABOUT_ME}>
                            About
                        </Link>
                    </Nav>
                    <a href="mailto: p.a.khapaliuk@gmail.com">p.a.khapaliuk@gmail.com</a>
                </Offcanvas.Body>
            </Offcanvas>
        </header>
    );
};

export default Header;
