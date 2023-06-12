import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import { PATHS } from '@/routes';

const Header = () => {
    return (
        <header>
            <Navbar bg="light" expand="md" className="p-3">
                <Navbar.Brand href="#home">Pavel Khapaliuk</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Link className="p-2" to={PATHS.MAIN}>
                            Home
                        </Link>
                        <Link className="p-2" to={PATHS.ABOUT_ME}>
                            About
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </header>
    );
};

export default Header;
