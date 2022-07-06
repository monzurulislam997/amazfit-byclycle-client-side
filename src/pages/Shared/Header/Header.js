import React from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom'
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import logo from '../../../images/logo.png'
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { Button } from 'react-bootstrap';
import { signOut } from 'firebase/auth';
const Header = () => {
    const [user, user1] = useAuthState(auth);
    const logOut = () => {
        signOut(auth)
    }
    return (
        <nav className='sticky-top '>


            <Navbar collapseOnSelect expand="lg" bg="dark" className="px-2" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        <Link to='/home'>
                            <img className='w-75' src={logo} alt="" />
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />



                    <Navbar.Collapse id="basic-navbar-nav"  >

                        <Nav>
                            <Nav className="me-auto">
                                <Nav.Link className='text-light' as={Link} to="/home">Home</Nav.Link>
                                <Nav.Link className='text-light' as={Link} to="/bicycles">Bicycles</Nav.Link>
                                <Nav.Link className='text-light' as={Link} to="/blogs">Blogs</Nav.Link>

                                {
                                    user && <Nav.Link className='text-light' as={Link} to="/addproduct">Add Product</Nav.Link>

                                }


                                {user && <Nav.Link className='text-light' as={Link} to="/manageitems">Manage Items</Nav.Link>}
                                {user && <Nav.Link className='text-light' as={Link} to="/myitems">My Items</Nav.Link>}


                                {
                                    !user && <Nav.Link className='text-light' as={Link} to="/login">Log In </Nav.Link>

                                }

                                {!user && <Nav.Link className='text-light' as={Link} to="/register">Register </Nav.Link>}
                                {
                                    user && <Button className='text-light' onClick={logOut}  >SignOut</Button>
                                }


                            </Nav>
                        </Nav>


                    </Navbar.Collapse>


                </Container>
            </Navbar>


        </nav>
    );
};

export default Header;