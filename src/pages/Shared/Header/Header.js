import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';
const Header = () => {
    const [user, user1] = useAuthState(auth);
    const signOut = () => {
        signOut(auth)
    }
    return (
        <nav>
            <Navbar className='fs-5 ' bg="dark" variant="dark">
                <Container>
                    <Link to='/home'>
                        <img className='me-5' src={logo} alt="" />
                    </Link>
                    <Nav className="me-auto">
                        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="/manageinventory">Manage Inventory</Nav.Link>
                        <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>

                    </Nav>
                    {
                        !user && <Nav.Link className='text-light' as={Link} to="/login">Log In </Nav.Link> &&
                        <Nav.Link className='text-light' as={Link} to="/register">Register </Nav.Link>
                    }
                    {
                        user && <Button className='text-light' onClick={signOut}  >SignOut</Button>
                    }

                </Container>
            </Navbar>
        </nav>
    );
};

export default Header;