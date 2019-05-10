import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'react-bootstrap/Image';

export default ({ children }) => <React.Fragment>
    <Navbar bg="dark" variant="dark" fixed="top" expand="md"  >
        <Container>
            <Navbar.Brand href="/#top"><Image src='/static/img/logo_white.png' fluid /></Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse>
                <Nav>
                    <Nav.Link href="/#top">Home</Nav.Link>
                    <Nav.Link href="/#concerts">Concerts</Nav.Link>
                    <Nav.Link href="/#who">About</Nav.Link>
                    <Nav.Link href="/#sing">Sing with us</Nav.Link>
                    <Nav.Link href="/#feedback">Feedback</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
    <main>
        {children}
    </main>
    <footer>
        <Container>
            <Row>
                <Col><h2>Supported by</h2>
                    <p><img src='/static/img/making_music_new.png' height="100" /></p></Col>
                <Col>© 2018 The Edinburgh Singers<br />
                    Registered Scottish Charity No xxxxxxx.
                    </Col>
            </Row>
        </Container>
    </footer>
</React.Fragment>;

