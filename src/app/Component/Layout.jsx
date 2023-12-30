import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Layout() {
    return (
        <>
            <Navbar expand="lg" className="header-nav">
                <Container fluid>
                    <Navbar.Brand href="#" className='haeder-title'>View Audience</Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default Layout


