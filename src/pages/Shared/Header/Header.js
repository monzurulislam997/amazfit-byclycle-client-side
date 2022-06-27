import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../../images/logo.png'
const Header = () => {
    return (
        <nav>
            <Navbar className='fs-5 ' bg="dark" variant="dark">
                <Container>
                    <Link to='/home'>
                        <img className='me-5' src={logo} alt="" />
                    </Link>
                    <Nav className="me-auto">
                        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>

                    </Nav>
                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;