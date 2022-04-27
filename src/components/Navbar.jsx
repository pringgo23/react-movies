import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import movie from '../img/movie.png';
import home from '../img/home.png';
import {Navbar,Container,Nav} from 'react-bootstrap';
import '../css/Navbar.css';

 function NavbarComponents(){
  const [currentPage,setCurrentPage] = useState();




        return (
      <Navbar className='navbar' expand="lg">
        <Container className='wraps'>
          <Navbar.Brand className='film' href="#home">Film</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
                <img className='logoo' src={movie} alt= "movie" ></img>

                  <Nav.Link id='Home' className={`${
                  
                  currentPage === "Home" ? "active-nav" : "home"

              } my-style`}
                  onClick={() => {
                    setCurrentPage("Home");
              }}> 
              <Link to="/">Home</Link> 
              </Nav.Link>

                <img className='logoo' src={home} alt= "favorite" ></img>

                  <Nav.Link id='Favorite' className={
                currentPage === "Favorite" ? "active-nav" : "favorite"
              }
              onClick={() => {
                setCurrentPage("Favorite");}}> 
                <Link to="/Favorites">Favorites</Link>
                </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    )
}


export default NavbarComponents;