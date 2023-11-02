import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';


export function search(name){
  console.log(name)
  return name

}


export function Navbar_dark() {

  let [name, setName] = useState("")
 
 
  const handleSubmit = (e) => {
    search(name)
    localStorage.setItem('search', name);
    this.props.history.push("search")
    
    e.preventDefault();
   
    
};

    return (
      <>
      <Navbar bg="dark" expand="lg" variant='dark'>
      <Container fluid>
        <Navbar.Brand href="/">Rick and Morty APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="/">Characters</Nav.Link>
            <Nav.Link href="/episodes">Episodes</Nav.Link>
            <Nav.Link href="/locations">Locations</Nav.Link>
            <NavDropdown title="Search character by" id="navbarScrollingDropdown">
            
              <NavDropdown.Item href="status">
                Status
              </NavDropdown.Item>
             
              <NavDropdown.Item href="species">
                Species
              </NavDropdown.Item>
              <NavDropdown.Item href="gender">
                Gender
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSubmit} action="search" >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={name}
              onChange = {(e)=> setName(e.target.value)}
            />
            <Button variant="outline-success"  type='submit' 
            >Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    
    </Navbar>
    
    </>
    ) 
 }
