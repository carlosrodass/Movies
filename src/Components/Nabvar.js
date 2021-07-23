import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'

const Nabvar = () => {
    return (

        <>
            <Navbar className="navbar" collapseOnSelect expand='sm' bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        <span>MOVIES FINDER&#11088;</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav' />
                    <Navbar.Collapse id='responsive-navbar-nav' className="justify-content-end">
                        <Nav>
                            <Nav.Link href="/">Trending&#128293;</Nav.Link>
                            <Nav.Link href="/PopularMovies">Movies&#128249;</Nav.Link>
                            <Nav.Link href="/PopularSeries">TV series&#128252;</Nav.Link>
                            <Nav.Link href="/Search">Search&#128270;</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>

    )
}

export default Nabvar
