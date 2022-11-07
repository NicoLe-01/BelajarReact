import { Navbar, Container, Nav } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container className="mt-2">
          <Navbar.Brand>MOVIE</Navbar.Brand>
          <Nav>
            <Nav.Link>Trending</Nav.Link>
            <Nav.Link>Superhero</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationBar;
