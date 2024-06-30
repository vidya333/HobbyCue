import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css'
import { Button, Form, InputGroup, NavbarToggle } from 'react-bootstrap';

function Header() {
  function topFunction(){
    document.documentElement.scrollTop=0;
  }
  return (
    <>
    <Navbar expand="lg" className="bg-white shadow-sm sticky-top">
      <Container fluid className='mx-lg-4'>
        <Navbar.Brand href="#home">
            <img src="/images/HobbyCueLogo.png" alt="logo" className='logo' />
            <img src="/images/hLogo.jpg" alt="logo" className='hlogo' style={{height:"43px",width:"43px"}} />
        </Navbar.Brand>
        <span className='d-flex'>
        <span className='searchicon me-2'>
            <img src="/images/searchIcon.svg" alt="searchicon" />
        </span>
        <span className='searchicon me-2'>
            <img src="/images/bellicon.svg" alt="searchicon" />
          </span>
        <span className='searchicon me-2'>
          <NavbarToggle className='navbar-toggler' aria-controls="basic-navbar-nav">
          <img src="/images/navbarToggler.svg" alt="searchicon"/>
          </NavbarToggle>
        </span>
        </span >
        <Navbar.Collapse id="basic-navbar-nav" className='navbar-collapse'>
          <Form  className='searchbar'>
            <InputGroup>
              <Form.Control
                  className='px-lg-5'
                  placeholder="Search here..."
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  style={{background:"#f8f9fa",border:"#f0f0f0 1px solid"}}
                />
              <InputGroup.Text id="basic-addon1" className='bg-purple' style={{border:"#8064a2 1px solid"}}>
                 <i className="fa-solid fa-magnifying-glass text-white"></i>
              </InputGroup.Text>
            </InputGroup>
          </Form>
          <Nav className="ms-auto">
            <div className='d-flex mainLink'>
              <Nav.Link href="#link">
              <img src="/images/compass.svg" alt="compass" className='pt-1'/>
              </Nav.Link>
              <NavDropdown  title="Explore" id="basic-nav-dropdown" className='text-bold pt-1 dropdownBox'>
                <NavDropdown.Item href="#action/3.1">People-Community</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Places - Venues </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Programs - Events</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Products - Store</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Blogs</NavDropdown.Item>
              </NavDropdown>
            </div>
            <div className='d-flex mainLink'>
              <Nav.Link href="#link">
              <img src="/images/hobby.svg" alt="hobby" className='pt-1'/>
              </Nav.Link>
              <NavDropdown title="Hobbies" id="basic-nav-dropdown" className='text-bold pt-1 dropdownBox'>
                <NavDropdown.Item href="#action/3.1">People-Community</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.2">Places - Venues </NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.3">Programs - Events</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Products - Store</NavDropdown.Item><NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.5">Blogs</NavDropdown.Item>
              </NavDropdown>
            </div>
            <Nav.Link href="#" >
                <i className="fa-solid fa-bookmark px-2 pt-2 fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#">
                <i className="fa-solid fa-bell px-2 pt-2 fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#" >
                <i className="fa-solid fa-cart-shopping px-2 pt-2 fs-5"></i>
            </Nav.Link>
            <Nav.Link href="#">
                <Button variant="outline-primary text-purple px-4 py-1 rounded">Sign In</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   <button className='btn btn-outline-primary rounded-circle text-secondary up' 
      onClick={topFunction}
      style={{
        position:"fixed",
        right:"10px",
        bottom:"10px",
        zIndex:"999",
        fontSize:"19px",
        padding:"6px 10px"
      }}>
        <i className="fa-solid fa-chevron-up"></i>
   </button>
    </>
  );
}

export default Header;